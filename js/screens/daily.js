/* ============================================
   Daily Challenge - "Daisy's Daily"
   ============================================ */

window.renderDailyScreen = function(container) {
  var state = window.app.state;
  var today = new Date().toISOString().split('T')[0];

  container.className = 'screen-daily';

  // Already completed today
  if (!state.isDailyAvailable()) {
    var streak = state.getDailyStreak();
    var html = '';
    html += '<div id="daisy-daily"></div>';
    html += '<h1 class="daily-title">Come back tomorrow!</h1>';
    html += '<p style="text-align: center; color: var(--grey-dark); font-weight: 600;">You already did today\'s challenge!</p>';
    if (streak > 1) {
      html += '<div class="daily-streak-badge">&#128293; ' + streak + ' day daily streak!</div>';
    }
    html += '<button class="btn btn-primary" style="margin-top: var(--gap-lg);" onclick="window.app.router.navigate(\'/topics\')">Back to Topics</button>';
    container.innerHTML = html;

    var daisyEl = document.getElementById('daisy-daily');
    if (daisyEl) DaisyAvatar.render(daisyEl, 'waving', 'medium');
    return;
  }

  // Generate exercises from all completed vocab
  var pool = buildDailyPool();
  if (pool.length < 4) {
    container.innerHTML = '<div style="text-align:center; padding: var(--gap-xl);">' +
      '<p>Complete more lessons to unlock the daily challenge!</p>' +
      '<button class="btn btn-primary" style="margin-top: var(--gap-lg);" onclick="window.app.router.navigate(\'/topics\')">Back to Topics</button></div>';
    return;
  }

  var exercises = generateDailyExercises(pool, 5);
  var currentIndex = 0;
  var score = 0;
  var maxScore = exercises.length * 10;
  var attempts = 0;
  var correctCount = 0;

  renderDailyExercise();

  function renderDailyExercise() {
    if (currentIndex >= exercises.length) {
      finishDaily();
      return;
    }

    var exercise = exercises[currentIndex];
    var html = '';

    // Header
    html += '<div class="exercise-header">';
    html += '<div class="exercise-theme-bar"><span>Daisy\'s Daily Challenge &#11088;</span></div>';
    html += '<div id="daily-progress" style="margin-top: var(--gap-sm);"></div>';
    html += '</div>';

    // Daisy
    html += '<div id="daisy-daily-ex"></div>';

    // Question
    html += '<p class="exercise-question">' + exercise.prompt + '</p>';

    // Exercise area
    html += '<div id="daily-exercise-area" class="exercise-area"></div>';

    container.innerHTML = html;

    // Progress
    var progressEl = document.getElementById('daily-progress');
    if (progressEl) ProgressBar.render(progressEl, currentIndex + 1, exercises.length);

    // Daisy
    var daisyEl = document.getElementById('daisy-daily-ex');
    if (daisyEl) {
      var msg = exercise.daisySays || '';
      if (msg) {
        DaisyAvatar.createWithBubble(daisyEl, 'thinking', msg, 'small');
      } else {
        DaisyAvatar.render(daisyEl, 'thinking', 'small');
      }
    }

    // Render exercise type
    var area = document.getElementById('daily-exercise-area');
    attempts = 0;

    switch (exercise.type) {
      case 'multiple-choice':
        ExerciseTypes.renderMultipleChoice(exercise, area, handleDailyAnswer);
        break;
      case 'listen-pick':
        ExerciseTypes.renderListenPick(exercise, area, handleDailyAnswer);
        break;
      case 'picture-match':
        ExerciseTypes.renderPictureMatch(exercise, area, handleDailyAnswer);
        break;
      case 'translate-to-italian':
        ExerciseTypes.renderTranslateToItalian(exercise, area, handleDailyAnswer);
        break;
      default:
        ExerciseTypes.renderMultipleChoice(exercise, area, handleDailyAnswer);
    }
  }

  function handleDailyAnswer(isCorrect) {
    attempts++;
    var daisyEl = document.getElementById('daisy-daily-ex');

    // Track word stats
    var exercise = exercises[currentIndex];
    var trackedWord = exercise._trackedWord || exercise.speakWord || null;
    if (trackedWord && attempts === 1) {
      window.app.state.recordWordAttempt(trackedWord, isCorrect);
    }

    if (isCorrect) {
      var points = attempts === 1 ? 10 : attempts === 2 ? 5 : 2;
      score += points;
      correctCount++;
      window.app.audio.play('correct');

      if (daisyEl) {
        var messages = ['Bravissima!', 'Fantastico!', 'Perfetto!'];
        var msg = messages[Math.floor(Math.random() * messages.length)];
        DaisyAvatar.createWithBubble(daisyEl, 'celebrating', msg, 'small');
      }

      setTimeout(function() {
        currentIndex++;
        renderDailyExercise();
      }, 1200);
    } else {
      window.app.audio.play('incorrect');

      if (daisyEl) {
        DaisyAvatar.createWithBubble(daisyEl, 'encouraging', 'Try again!', 'small');
      }

      if (attempts >= 3) {
        setTimeout(function() {
          currentIndex++;
          renderDailyExercise();
        }, 1500);
      } else {
        var area = document.getElementById('daily-exercise-area');
        if (area) {
          setTimeout(function() {
            var disabledBtns = area.querySelectorAll('.option-btn.disabled');
            disabledBtns.forEach(function(b) {
              if (!b.classList.contains('incorrect')) b.classList.remove('disabled');
              b.classList.remove('revealed');
            });
          }, 900);
        }
      }
    }
  }

  function finishDaily() {
    state.completeDailyChallenge();
    var streak = state.getDailyStreak();

    var html = '';
    html += '<div id="daisy-daily-finish"></div>';
    html += '<h1 class="daily-title">Daily Done!</h1>';
    html += '<p class="results-score">You got ' + correctCount + ' out of ' + exercises.length + ' correct!</p>';

    if (streak > 1) {
      html += '<div class="daily-streak-badge">&#128293; ' + streak + ' day daily streak!</div>';
    }

    html += '<button class="btn btn-primary" style="margin-top: var(--gap-lg);" onclick="window.app.router.navigate(\'/topics\')">Keep Learning!</button>';
    html += '<button class="btn btn-secondary" style="margin-top: var(--gap-sm);" onclick="window.app.router.navigate(\'/\')">Home</button>';

    container.innerHTML = html;

    var daisyEl = document.getElementById('daisy-daily-finish');
    if (daisyEl) DaisyAvatar.render(daisyEl, 'celebrating', 'medium');

    window.app.audio.play('celebration');
    window.app.speech.speak('Bravissima!');
  }
};

// Build pool from ALL completed vocab across all topics
function buildDailyPool() {
  var topicOrder = window.TOPICS ? window.TOPICS.map(function(t) { return t.id; }) : [];
  var pool = [];

  topicOrder.forEach(function(tid) {
    if (tid === 'numeri') return;
    var tData = window.getTopicData(tid);
    if (!tData) return;

    for (var l = 1; l <= 3; l++) {
      var lid = tid + '-' + l;
      var progress = window.app.state.getLessonProgress(tid, lid);
      if (!progress || !progress.completed) continue;

      var lessonDef = tData.lessons.find(function(ls) { return ls.id === lid; });
      if (!lessonDef) continue;

      if (lessonDef.vocabIndices && tData.vocabulary) {
        lessonDef.vocabIndices.forEach(function(idx) {
          var v = tData.vocabulary[idx];
          if (v && v.emoji) {
            pool.push({ italian: v.italian, english: v.english, emoji: v.emoji });
          }
        });
      }

      if (lessonDef.phraseIndices && tData.phrases) {
        lessonDef.phraseIndices.forEach(function(idx) {
          var p = tData.phrases[idx];
          if (p && p.emoji) {
            pool.push({ italian: p.italian, english: p.english, emoji: p.emoji });
          }
        });
      }
    }
  });

  // Deduplicate
  var seen = {};
  return pool.filter(function(item) {
    if (seen[item.italian]) return false;
    seen[item.italian] = true;
    return true;
  });
}

// Generate daily exercises from pool
function generateDailyExercises(pool, count) {
  // Prioritise weak words
  pool.forEach(function(item) {
    var stats = window.app.state.getWordStats(item.italian);
    if (stats && (stats.correct + stats.wrong) > 0) {
      item._errorRate = stats.wrong / (stats.correct + stats.wrong);
    } else {
      item._errorRate = -1;
    }
  });
  pool.sort(function(a, b) { return b._errorRate - a._errorRate; });

  var weakWords = pool.filter(function(p) { return p._errorRate > 0; });
  var otherWords = ExerciseTypes.shuffleArray(pool.filter(function(p) { return p._errorRate <= 0; }));
  pool = weakWords.concat(otherWords);

  var exercises = [];
  var templates = ['multiple-choice', 'listen-pick', 'picture-match', 'translate-to-italian'];

  for (var i = 0; i < Math.min(count, pool.length) && exercises.length < count; i++) {
    var word = pool[i];
    var distractors = pool.filter(function(p) {
      return p.italian !== word.italian && p.english !== word.english;
    });
    distractors = ExerciseTypes.shuffleArray(distractors).slice(0, 3);
    if (distractors.length < 3) continue;

    var template = templates[i % templates.length];
    var exercise;

    if (template === 'multiple-choice') {
      exercise = {
        type: 'multiple-choice',
        prompt: 'What does "' + word.italian + '" mean?',
        correctAnswer: word.english,
        options: ExerciseTypes.shuffleArray([word.english, distractors[0].english, distractors[1].english, distractors[2].english]),
        speakWord: word.italian,
        _trackedWord: word.italian,
        daisySays: word.emoji
      };
    } else if (template === 'listen-pick') {
      exercise = {
        type: 'listen-pick',
        prompt: 'Which word do you hear?',
        speakWord: word.italian,
        _trackedWord: word.italian,
        correctAnswer: word.italian,
        options: ExerciseTypes.shuffleArray([word.italian, distractors[0].italian, distractors[1].italian, distractors[2].italian])
      };
    } else if (template === 'translate-to-italian') {
      exercise = {
        type: 'translate-to-italian',
        prompt: 'How do you say this in Italian?',
        english: word.english,
        correctAnswer: word.italian,
        _trackedWord: word.italian,
        options: ExerciseTypes.shuffleArray([word.italian, distractors[0].italian, distractors[1].italian, distractors[2].italian]),
        daisySays: 'Think in Italian! ' + word.emoji
      };
    } else {
      exercise = {
        type: 'picture-match',
        prompt: 'Which picture matches "' + word.italian + '"?',
        speakWord: word.italian,
        _trackedWord: word.italian,
        correctAnswer: word.italian,
        options: ExerciseTypes.shuffleArray([
          { value: word.italian, emoji: word.emoji, label: word.italian },
          { value: distractors[0].italian, emoji: distractors[0].emoji, label: distractors[0].italian },
          { value: distractors[1].italian, emoji: distractors[1].emoji, label: distractors[1].italian },
          { value: distractors[2].italian, emoji: distractors[2].emoji, label: distractors[2].italian }
        ])
      };
    }

    exercises.push(exercise);
  }

  return ExerciseTypes.shuffleArray(exercises);
}
