/* ============================================
   Exercise Screen - Core Exercise Engine
   ============================================ */

window.renderExerciseScreen = function(container, params) {
  var topicId = params.topicId;
  var lessonId = params.lessonId;
  var topic = window.getTopicById(topicId);
  var topicData = window.getTopicData(topicId);

  if (!topic || !topicData) {
    container.innerHTML = '<p>Topic not found!</p>';
    return;
  }

  var lesson = topicData.lessons.find(function(l) { return l.id === lessonId; });
  if (!lesson) {
    container.innerHTML = '<p>Lesson not found!</p>';
    return;
  }

  // Determine lesson number (1, 2 or 3) for auto-difficulty
  var lessonNum = parseInt(lessonId.split('-').pop()) || 1;
  var autoDifficulty = lessonNum === 1 ? 'easy' : lessonNum === 2 ? 'medium' : 'hard';

  // Build exercise list
  var exercises = [];
  lesson.exercises.forEach(function(ex) {
    if (ex.type === 'maths' && ex.generatorConfig) {
      // Generate maths questions
      for (var i = 0; i < ex.generatorConfig.count; i++) {
        exercises.push(generateMathsQuestion(ex.generatorConfig));
      }
    } else {
      // Auto-assign difficulty to fill-blank exercises if not explicitly set
      var exercise = Object.assign({}, ex);
      if (exercise.type === 'fill-blank' && !exercise.difficulty) {
        exercise.difficulty = autoDifficulty;
      }
      exercises.push(exercise);
    }
  });

  // Shuffle exercises for variety
  exercises = ExerciseTypes.shuffleArray(exercises);

  var currentIndex = 0;
  var score = 0;
  var maxScore = exercises.length * 10;
  var attempts = 0;
  var results = [];

  container.className = 'screen-exercise theme-' + topic.theme;

  function renderExercise() {
    var exercise = exercises[currentIndex];
    var characterImg = window.app.state.getCharacterImage(topic.theme);

    var html = '';

    // Header with progress
    html += '<div class="exercise-header">';

    // Theme bar with character image
    html += '<div class="exercise-theme-bar">';
    if (characterImg) {
      html += '<div class="character-image-slot" style="width: 32px; height: 32px; border-width: 2px;"><img src="' + characterImg + '"></div>';
    }
    html += '<span>' + topic.titleIT + ' - ' + lesson.title + '</span>';
    html += '</div>';

    // Progress bar
    html += '<div id="exercise-progress" style="margin-top: var(--gap-sm);"></div>';
    html += '</div>';

    // Daisy
    html += '<div id="daisy-exercise"></div>';

    // Question
    html += '<p class="exercise-question">' + exercise.prompt + '</p>';

    // Exercise area
    html += '<div id="exercise-area" class="exercise-area"></div>';

    container.innerHTML = html;

    // Render progress
    var progressEl = document.getElementById('exercise-progress');
    if (progressEl) {
      ProgressBar.render(progressEl, currentIndex + 1, exercises.length);
    }

    // Render Daisy
    var daisyEl = document.getElementById('daisy-exercise');
    if (daisyEl) {
      var daisyMsg = exercise.daisySays || '';
      if (daisyMsg) {
        DaisyAvatar.createWithBubble(daisyEl, 'thinking', daisyMsg, 'small');
      } else {
        DaisyAvatar.render(daisyEl, 'thinking', 'small');
      }
    }

    // Render the exercise type
    var area = document.getElementById('exercise-area');
    attempts = 0;

    switch (exercise.type) {
      case 'multiple-choice':
        ExerciseTypes.renderMultipleChoice(exercise, area, handleAnswer);
        break;
      case 'listen-pick':
        ExerciseTypes.renderListenPick(exercise, area, handleAnswer);
        break;
      case 'matching':
        ExerciseTypes.renderMatching(exercise, area, function(correct, wrongCount) {
          // Matching is all-or-nothing
          if (wrongCount > 2) {
            handleAnswer(true); // Still pass, but fewer points
            score -= 5; // Reduce score for wrong attempts
          } else {
            handleAnswer(true);
          }
        });
        break;
      case 'fill-blank':
        ExerciseTypes.renderFillBlank(exercise, area, handleAnswer);
        break;
      case 'maths':
        ExerciseTypes.renderMaths(exercise, area, handleAnswer);
        break;
      case 'conversation-order':
        ExerciseTypes.renderConversationOrder(exercise, area, function(correct, wrongCount) {
          if (wrongCount > 3) {
            score -= 5;
          }
          handleAnswer(true);
        });
        break;
      case 'picture-match':
        ExerciseTypes.renderPictureMatch(exercise, area, handleAnswer);
        break;
      default:
        // Fallback to multiple choice style
        ExerciseTypes.renderMultipleChoice(exercise, area, handleAnswer);
    }
  }

  function handleAnswer(isCorrect) {
    attempts++;
    var daisyEl = document.getElementById('daisy-exercise');

    if (isCorrect) {
      var points = attempts === 1 ? 10 : attempts === 2 ? 5 : 2;
      score += points;
      results.push({ index: currentIndex, points: points, attempts: attempts });

      window.app.audio.play('correct');

      if (daisyEl) {
        var messages = ['Bravissima!', 'Fantastico!', 'Perfetto!', 'Molto bene!', 'Eccellente!'];
        var msg = messages[Math.floor(Math.random() * messages.length)];
        DaisyAvatar.createWithBubble(daisyEl, 'celebrating', msg, 'small');
        window.app.speech.speak(msg);
      }

      setTimeout(function() {
        currentIndex++;
        if (currentIndex < exercises.length) {
          renderExercise();
        } else {
          finish();
        }
      }, 1200);

    } else {
      window.app.audio.play('incorrect');

      if (daisyEl) {
        var encouragements = ['Almost! Try again!', 'So close!', 'You can do it!', 'Nearly there!'];
        var msg = encouragements[Math.floor(Math.random() * encouragements.length)];
        DaisyAvatar.createWithBubble(daisyEl, 'encouraging', msg, 'small');
      }

      if (attempts >= 3) {
        // Show answer and move on
        results.push({ index: currentIndex, points: 0, attempts: attempts });

        setTimeout(function() {
          if (daisyEl) {
            DaisyAvatar.createWithBubble(daisyEl, 'encouraging', 'The answer was: ' + exercises[currentIndex].correctAnswer, 'small');
          }
        }, 500);

        setTimeout(function() {
          currentIndex++;
          if (currentIndex < exercises.length) {
            renderExercise();
          } else {
            finish();
          }
        }, 2000);
      } else {
        // Re-enable buttons so the child can try again
        var exerciseArea = document.getElementById('exercise-area');
        if (exerciseArea) {
          setTimeout(function() {
            var disabledBtns = exerciseArea.querySelectorAll('.option-btn.disabled');
            disabledBtns.forEach(function(b) {
              // Re-enable all except the one that was wrong
              if (!b.classList.contains('incorrect')) {
                b.classList.remove('disabled');
              }
              // Remove the "revealed" highlight from the correct answer
              b.classList.remove('revealed');
            });
          }, 900);
        }
      }
    }
  }

  function finish() {
    var percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    var stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0;

    // Save progress
    window.app.state.completeLesson(topicId, lessonId, score, stars);
    window.app.updateStarCounter();

    // Navigate to results
    window.app.router.navigate('/results/' + topicId + '/' + lessonId +
      '?score=' + score + '&max=' + maxScore + '&stars=' + stars +
      '&correct=' + results.filter(function(r) { return r.points > 0; }).length +
      '&total=' + results.length);
  }

  // Start
  renderExercise();
};

// Maths question generator
function generateMathsQuestion(config) {
  var ops = config.operations || ['+', '-'];
  var op = ops[Math.floor(Math.random() * ops.length)];
  var a, b, result;

  if (op === '+') {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * (config.maxResult - a)) + 1;
    result = a + b;
  } else {
    a = Math.floor(Math.random() * config.maxResult) + 2;
    b = Math.floor(Math.random() * (a - 1)) + 1;
    result = a - b;
  }

  var opWord = op === '+' ? 'più' : 'meno';
  var numWords = window.NUMERI_DATA ? window.NUMERI_DATA.vocabulary : [];

  function numToItalian(n) {
    var item = numWords.find(function(v) { return v.number === n; });
    return item ? item.italian : String(n);
  }

  return {
    type: 'maths',
    prompt: 'What is ' + a + ' ' + op + ' ' + b + '?',
    daisySays: 'Time for Italian maths! You can do it!',
    a: a,
    b: b,
    op: op,
    result: result,
    correctAnswer: String(result)
  };
}
