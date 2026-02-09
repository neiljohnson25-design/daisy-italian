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
        lessons: {}
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

    this.save();
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
