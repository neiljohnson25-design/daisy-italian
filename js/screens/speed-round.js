/* ============================================
   Speed Round - Timed Quiz
   ============================================ */

window.renderSpeedRoundScreen = function(container, params) {
  var topicId = params.topicId;
  var topic = window.getTopicById(topicId);
  var topicData = window.getTopicData(topicId);

  if (!topic || !topicData) {
    container.innerHTML = '<p>Topic not found!</p>';
    return;
  }

  container.className = 'screen-speed-round theme-' + topic.theme;

  // Build vocab pool from completed lessons in this topic
  var pool = [];
  for (var l = 1; l <= 3; l++) {
    var lid = topicId + '-' + l;
    var progress = window.app.state.getLessonProgress(topicId, lid);
    if (!progress || !progress.completed) continue;

    var lessonDef = topicData.lessons.find(function(ls) { return ls.id === lid; });
    if (!lessonDef) continue;

    if (lessonDef.vocabIndices && topicData.vocabulary) {
      lessonDef.vocabIndices.forEach(function(idx) {
        var v = topicData.vocabulary[idx];
        if (v && v.emoji) {
          pool.push({ italian: v.italian, english: v.english, emoji: v.emoji });
        }
      });
    }
  }

  // Deduplicate
  var seen = {};
  pool = pool.filter(function(item) {
    if (seen[item.italian]) return false;
    seen[item.italian] = true;
    return true;
  });

  if (pool.length < 4) {
    container.innerHTML = '<div style="text-align:center; padding: var(--gap-xl);">' +
      '<p>Complete a lesson first to unlock speed round!</p>' +
      '<button class="btn btn-primary" onclick="window.app.router.navigate(\'/topics\')">Back to Topics</button></div>';
    return;
  }

  var timeLeft = 60;
  var score = 0;
  var questionsAnswered = 0;
  var timerInterval = null;
  var currentExercise = null;
  var isFinished = false;

  // Show countdown intro
  showIntro();

  function showIntro() {
    var html = '';
    html += '<div id="daisy-speed"></div>';
    html += '<h1 class="speed-title">Speed Round! &#9889;</h1>';
    html += '<p style="text-align: center; font-weight: 700; color: var(--grey-dark);">' + topic.titleEN + '</p>';
    html += '<p style="text-align: center; color: var(--grey);">Answer as many as you can in 60 seconds!</p>';

    var best = window.app.state.getSpeedBest(topicId);
    if (best > 0) {
      html += '<p style="text-align: center; font-weight: 700; color: var(--gold-dark);">&#127942; Best: ' + best + '</p>';
    }

    html += '<button class="btn btn-play" id="start-speed" style="margin-top: var(--gap-lg);">GO!</button>';
    container.innerHTML = html;

    var daisyEl = document.getElementById('daisy-speed');
    if (daisyEl) DaisyAvatar.render(daisyEl, 'pointing', 'medium');

    document.getElementById('start-speed').addEventListener('click', startRound);
  }

  function startRound() {
    timerInterval = setInterval(function() {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        finishRound();
      }
    }, 1000);

    showQuestion();
  }

  function updateTimer() {
    var timerEl = document.getElementById('speed-timer');
    if (timerEl) {
      timerEl.textContent = timeLeft + 's';
      if (timeLeft <= 10) timerEl.style.color = 'var(--red)';
    }

    var timerBar = document.getElementById('speed-timer-bar');
    if (timerBar) {
      timerBar.style.width = ((timeLeft / 60) * 100) + '%';
    }
  }

  function showQuestion() {
    if (isFinished) return;

    currentExercise = generateSpeedQuestion(pool);
    if (!currentExercise) { finishRound(); return; }

    var html = '';

    // Header with timer and score
    html += '<div class="speed-header">';
    html += '<div class="speed-timer-container">';
    html += '<div class="speed-timer-bg"><div class="speed-timer-fill" id="speed-timer-bar" style="width:' + ((timeLeft / 60) * 100) + '%"></div></div>';
    html += '<span class="speed-timer-text" id="speed-timer">' + timeLeft + 's</span>';
    html += '</div>';
    html += '<div class="speed-score">&#11088; ' + score + '</div>';
    html += '</div>';

    // Question
    html += '<p class="exercise-question" style="font-size: var(--font-size-medium);">' + currentExercise.prompt + '</p>';

    // Options
    html += '<div id="speed-area" class="exercise-area"></div>';

    container.innerHTML = html;

    var area = document.getElementById('speed-area');

    if (currentExercise.type === 'translate-to-italian') {
      ExerciseTypes.renderTranslateToItalian(currentExercise, area, handleSpeedAnswer);
    } else {
      ExerciseTypes.renderMultipleChoice(currentExercise, area, handleSpeedAnswer);
    }
  }

  function handleSpeedAnswer(isCorrect) {
    if (isFinished) return;
    questionsAnswered++;

    // Track word stats
    var trackedWord = currentExercise._trackedWord || currentExercise.speakWord;
    if (trackedWord) {
      window.app.state.recordWordAttempt(trackedWord, isCorrect);
    }

    if (isCorrect) {
      score++;
      window.app.audio.play('correct');
      setTimeout(showQuestion, 800);
    } else {
      window.app.audio.play('incorrect');
      setTimeout(showQuestion, 1200);
    }
  }

  function finishRound() {
    if (isFinished) return;
    isFinished = true;
    clearInterval(timerInterval);

    var isNewRecord = window.app.state.updateSpeedBest(topicId, score);

    var html = '';
    html += '<div id="daisy-speed-finish"></div>';
    html += '<h1 class="speed-title">Time\'s Up!</h1>';
    html += '<p class="results-score" style="font-size: var(--font-size-large);">&#11088; ' + score + ' correct!</p>';

    if (isNewRecord) {
      html += '<p style="text-align: center; font-weight: 800; color: var(--gold-dark); font-size: var(--font-size-medium);">&#127942; New Record!</p>';
    } else {
      var best = window.app.state.getSpeedBest(topicId);
      html += '<p style="text-align: center; color: var(--grey-dark);">Best: ' + best + '</p>';
    }

    html += '<div style="display: flex; flex-direction: column; gap: var(--gap-sm); align-items: center; margin-top: var(--gap-lg);">';
    html += '<button class="btn btn-primary" onclick="window.app.router.navigate(\'/speed-round/' + topicId + '\')">Play Again &#9889;</button>';
    html += '<button class="btn btn-secondary" onclick="window.app.router.navigate(\'/topics\')">Back to Topics</button>';
    html += '</div>';

    container.innerHTML = html;

    var daisyEl = document.getElementById('daisy-speed-finish');
    if (daisyEl) DaisyAvatar.render(daisyEl, score > 0 ? 'celebrating' : 'encouraging', 'medium');

    if (isNewRecord) {
      window.app.audio.play('celebration');
    }
  }
};

function generateSpeedQuestion(pool) {
  var word = pool[Math.floor(Math.random() * pool.length)];
  var distractors = pool.filter(function(p) {
    return p.italian !== word.italian && p.english !== word.english;
  });
  distractors = ExerciseTypes.shuffleArray(distractors).slice(0, 3);
  if (distractors.length < 3) return null;

  if (Math.random() < 0.4) {
    // Translate to Italian
    return {
      type: 'translate-to-italian',
      prompt: 'How do you say "' + word.english + '" in Italian?',
      english: word.english,
      correctAnswer: word.italian,
      _trackedWord: word.italian,
      options: ExerciseTypes.shuffleArray([word.italian, distractors[0].italian, distractors[1].italian, distractors[2].italian])
    };
  } else {
    // Multiple choice
    return {
      type: 'multiple-choice',
      prompt: 'What does "' + word.italian + '" mean?',
      correctAnswer: word.english,
      speakWord: word.italian,
      _trackedWord: word.italian,
      options: ExerciseTypes.shuffleArray([word.english, distractors[0].english, distractors[1].english, distractors[2].english])
    };
  }
}
