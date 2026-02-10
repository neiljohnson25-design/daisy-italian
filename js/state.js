/* ============================================
   State Manager - Progress & localStorage
   ============================================ */

window.StateManager = class StateManager {
  constructor() {
    this.state = this.load();
    this.parentState = this.loadParent();
  }

  // ---- Main Progress State ----

  load() {
    try {
      var saved = localStorage.getItem('daisy-italian-progress');
      if (saved) {
        var parsed = JSON.parse(saved);
        if (parsed.version === 1) return parsed;
      }
    } catch (e) {
      console.warn('Could not load progress:', e);
    }
    return this.getDefaultState();
  }

  save() {
    try {
      localStorage.setItem('daisy-italian-progress', JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  getDefaultState() {
    var topics = {};
    var topicOrder = ['colori', 'saluti', 'animali', 'cibo', 'famiglia', 'numeri', 'giorni-mesi', 'corpo', 'conversazioni'];

    topicOrder.forEach(function(id, index) {
      topics[id] = {
        unlocked: index < 2, // Colori and Saluti unlocked by default
        lessons: {},
        speedBest: 0
      };
      // Each topic has 3 lessons
      for (var l = 1; l <= 3; l++) {
        topics[id].lessons[id + '-' + l] = {
          completed: false,
          stars: 0,
          bestScore: 0
        };
      }
    });

    return {
      version: 1,
      totalStars: 0,
      currentStreak: 0,
      lastPlayedDate: null,
      dailyCompleted: null,
      dailyStreak: 0,
      wordStats: {},
      topics: topics,
      achievements: []
    };
  }

  getTotalStars() {
    return this.state.totalStars;
  }

  getTopicProgress(topicId) {
    return this.state.topics[topicId] || null;
  }

  getLessonProgress(topicId, lessonId) {
    var topic = this.state.topics[topicId];
    if (!topic) return null;
    return topic.lessons[lessonId] || null;
  }

  isTopicUnlocked(topicId) {
    var topic = this.state.topics[topicId];
    return topic ? topic.unlocked : false;
  }

  isTopicComplete(topicId) {
    var topic = this.state.topics[topicId];
    if (!topic) return false;
    var lessons = topic.lessons;
    for (var key in lessons) {
      if (!lessons[key].completed) return false;
    }
    return true;
  }

  getTopicStars(topicId) {
    var topic = this.state.topics[topicId];
    if (!topic) return 0;
    var total = 0;
    for (var key in topic.lessons) {
      total += topic.lessons[key].stars;
    }
    return total;
  }

  completeLesson(topicId, lessonId, score, starsEarned) {
    var topic = this.state.topics[topicId];
    if (!topic) return;

    var lesson = topic.lessons[lessonId];
    if (!lesson) return;

    // Only update if better than previous
    if (starsEarned > lesson.stars) {
      var starDiff = starsEarned - lesson.stars;
      this.state.totalStars += starDiff;
      lesson.stars = starsEarned;
    }

    if (score > lesson.bestScore) {
      lesson.bestScore = score;
    }

    lesson.completed = true;

    // Update streak
    this.updateStreak();

    // Unlock next topics
    this.checkUnlocks();

    // Check for milestone achievements
    var milestones = this.checkMilestones(topicId);

    this.save();
    return milestones;
  }

  updateStreak() {
    var today = new Date().toISOString().split('T')[0];

    if (this.state.lastPlayedDate === today) {
      return; // Already played today
    }

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var yesterdayStr = yesterday.toISOString().split('T')[0];

    if (this.state.lastPlayedDate === yesterdayStr) {
      this.state.currentStreak++;
    } else if (this.state.lastPlayedDate !== today) {
      this.state.currentStreak = 1;
    }

    this.state.lastPlayedDate = today;
  }

  checkUnlocks() {
    var topicOrder = ['colori', 'saluti', 'animali', 'cibo', 'famiglia', 'numeri', 'giorni-mesi', 'corpo', 'conversazioni'];
    var hasAnyStar = false;

    for (var i = 0; i < topicOrder.length; i++) {
      var id = topicOrder[i];
      var topic = this.state.topics[id];

      if (hasAnyStar && !topic.unlocked) {
        topic.unlocked = true;
      }

      // Check if this topic has any stars
      if (this.getTopicStars(id) > 0) {
        hasAnyStar = true;
      }
    }
  }

  addAchievement(id, name) {
    if (this.state.achievements.some(function(a) { return a.id === id; })) {
      return false; // Already have it
    }
    this.state.achievements.push({
      id: id,
      name: name,
      earnedDate: new Date().toISOString().split('T')[0]
    });
    this.save();
    return true;
  }

  // ---- Word Stats (Adaptive Difficulty) ----

  recordWordAttempt(italian, isCorrect) {
    if (!italian) return;
    if (!this.state.wordStats) this.state.wordStats = {};
    if (!this.state.wordStats[italian]) {
      this.state.wordStats[italian] = { correct: 0, wrong: 0, lastSeen: null };
    }
    if (isCorrect) {
      this.state.wordStats[italian].correct++;
    } else {
      this.state.wordStats[italian].wrong++;
    }
    this.state.wordStats[italian].lastSeen = new Date().toISOString().split('T')[0];
    this.save();
  }

  getWordStats(italian) {
    if (!this.state.wordStats) return null;
    return this.state.wordStats[italian] || null;
  }

  // ---- Daily Challenge ----

  completeDailyChallenge() {
    var today = new Date().toISOString().split('T')[0];
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var yesterdayStr = yesterday.toISOString().split('T')[0];

    if (this.state.dailyCompleted === yesterdayStr) {
      this.state.dailyStreak = (this.state.dailyStreak || 0) + 1;
    } else if (this.state.dailyCompleted !== today) {
      this.state.dailyStreak = 1;
    }
    this.state.dailyCompleted = today;
    this.save();
  }

  isDailyAvailable() {
    var today = new Date().toISOString().split('T')[0];
    return this.state.dailyCompleted !== today;
  }

  getDailyStreak() {
    return this.state.dailyStreak || 0;
  }

  hasAnyCompletedLessons() {
    for (var tid in this.state.topics) {
      for (var lid in this.state.topics[tid].lessons) {
        if (this.state.topics[tid].lessons[lid].completed) return true;
      }
    }
    return false;
  }

  // ---- Speed Round ----

  getSpeedBest(topicId) {
    var topic = this.state.topics[topicId];
    return topic && topic.speedBest ? topic.speedBest : 0;
  }

  updateSpeedBest(topicId, score) {
    var topic = this.state.topics[topicId];
    if (!topic) return false;
    if (!topic.speedBest) topic.speedBest = 0;
    if (score > topic.speedBest) {
      topic.speedBest = score;
      this.save();
      return true;
    }
    return false;
  }

  // ---- Milestones ----

  hasAchievement(id) {
    return this.state.achievements.some(function(a) { return a.id === id; });
  }

  checkMilestones(topicId) {
    var newMilestones = [];
    var total = this.state.totalStars;

    // Star milestones
    var starMilestones = [
      { threshold: 1, id: 'first-star', name: 'Your First Star!', message: 'You earned your very first star!' },
      { threshold: 10, id: '10-stars', name: '10 Stars!', message: 'You have 10 beautiful stars!' },
      { threshold: 25, id: '25-stars', name: 'Italian Superstar!', message: '25 stars! Incredibile!' },
      { threshold: 50, id: '50-stars', name: 'Stella d\'Oro!', message: '50 golden stars! Fantastico!' }
    ];

    var self = this;
    starMilestones.forEach(function(m) {
      if (total >= m.threshold && !self.hasAchievement(m.id)) {
        self.addAchievement(m.id, m.name);
        newMilestones.push(m);
      }
    });

    // Topic completion
    if (topicId && this.isTopicComplete(topicId)) {
      var topicAchId = 'topic-' + topicId;
      if (!this.hasAchievement(topicAchId)) {
        var topic = window.getTopicById ? window.getTopicById(topicId) : null;
        var topicName = topic ? topic.titleEN : topicId;
        var milestone = { id: topicAchId, name: topicName + ' Complete!', message: 'You finished all of ' + topicName + '!' };
        this.addAchievement(topicAchId, milestone.name);
        newMilestones.push(milestone);
      }

      // First topic ever completed
      if (!this.hasAchievement('first-topic')) {
        this.addAchievement('first-topic', 'First Topic Finished!');
        newMilestones.push({ id: 'first-topic', name: 'First Topic Finished!', message: 'You completed your first whole topic!' });
      }
    }

    // All topics complete
    var allComplete = true;
    for (var tid in this.state.topics) {
      if (!this.isTopicComplete(tid)) { allComplete = false; break; }
    }
    if (allComplete && !this.hasAchievement('all-topics')) {
      this.addAchievement('all-topics', 'All Topics Complete!');
      newMilestones.push({ id: 'all-topics', name: 'Bravissima!', message: 'You completed ALL the topics!' });
    }

    // Streak milestone
    if (this.state.currentStreak >= 7 && !this.hasAchievement('streak-7')) {
      this.addAchievement('streak-7', '7 Day Streak!');
      newMilestones.push({ id: 'streak-7', name: '7 Day Streak!', message: 'You played for 7 days in a row!' });
    }

    return newMilestones;
  }

  // ---- Parent Zone State ----

  loadParent() {
    try {
      var saved = localStorage.getItem('daisy-italian-parent');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load parent settings:', e);
    }
    return this.getDefaultParentState();
  }

  saveParent() {
    try {
      localStorage.setItem('daisy-italian-parent', JSON.stringify(this.parentState));
    } catch (e) {
      console.warn('Could not save parent settings:', e);
    }
  }

  getDefaultParentState() {
    return {
      pin: '1234',
      rewards: {
        'colori': { text: '', claimed: false },
        'saluti': { text: '', claimed: false },
        'animali': { text: '', claimed: false },
        'cibo': { text: '', claimed: false },
        'famiglia': { text: '', claimed: false },
        'numeri': { text: '', claimed: false },
        'giorni-mesi': { text: '', claimed: false },
        'corpo': { text: '', claimed: false },
        'conversazioni': { text: '', claimed: false }
      },
      characterImages: {
        'kpop-demon-hunters': null,
        'disney-princesses': null,
        'loud-house': null,
        'sam-and-cat': null
      },
      speechRate: 0.85,
      volume: 1.0
    };
  }

  verifyPin(pin) {
    return pin === this.parentState.pin;
  }

  setPin(newPin) {
    this.parentState.pin = newPin;
    this.saveParent();
  }

  getReward(topicId) {
    return this.parentState.rewards[topicId] || null;
  }

  setReward(topicId, text) {
    if (this.parentState.rewards[topicId]) {
      this.parentState.rewards[topicId].text = text;
      this.parentState.rewards[topicId].claimed = false;
      this.saveParent();
    }
  }

  claimReward(topicId) {
    if (this.parentState.rewards[topicId]) {
      this.parentState.rewards[topicId].claimed = true;
      this.saveParent();
    }
  }

  getCharacterImage(themeId) {
    return this.parentState.characterImages[themeId] || null;
  }

  setCharacterImage(themeId, dataUrl) {
    this.parentState.characterImages[themeId] = dataUrl;
    this.saveParent();
  }

  setSpeechRate(rate) {
    this.parentState.speechRate = rate;
    this.saveParent();
  }

  getSpeechRate() {
    return this.parentState.speechRate || 0.85;
  }

  // ---- Say to Mummy Phrase Tracking ----

  getMummyPhrasesDone(topicId, count) {
    var topic = this.state.topics[topicId];
    if (!topic || !topic.mummyPhrasesDone) {
      // Return array of false values
      var arr = [];
      for (var i = 0; i < count; i++) arr.push(false);
      return arr;
    }
    // Ensure correct length
    var result = topic.mummyPhrasesDone.slice();
    while (result.length < count) result.push(false);
    return result;
  }

  setMummyPhraseDone(topicId, index, isDone, count) {
    var topic = this.state.topics[topicId];
    if (!topic) return;
    if (!topic.mummyPhrasesDone) {
      topic.mummyPhrasesDone = [];
      for (var i = 0; i < count; i++) topic.mummyPhrasesDone.push(false);
    }
    topic.mummyPhrasesDone[index] = isDone;
    this.save();
  }

  resetTopicProgress(topicId) {
    var topic = this.state.topics[topicId];
    if (!topic) return;

    for (var key in topic.lessons) {
      this.state.totalStars -= topic.lessons[key].stars;
      topic.lessons[key].completed = false;
      topic.lessons[key].stars = 0;
      topic.lessons[key].bestScore = 0;
    }

    if (this.parentState.rewards[topicId]) {
      this.parentState.rewards[topicId].claimed = false;
    }

    // Reset mummy phrases
    if (topic.mummyPhrasesDone) {
      topic.mummyPhrasesDone = null;
    }

    this.save();
    this.saveParent();
  }

  resetAllProgress() {
    this.state = this.getDefaultState();
    this.save();
    // Keep parent settings but reset claimed status
    for (var key in this.parentState.rewards) {
      this.parentState.rewards[key].claimed = false;
    }
    this.saveParent();
  }
};
