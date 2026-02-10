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

  // Generate revision exercises from previously completed topics
  var revisionExercises = generateRevisionExercises(topicId, lessonId, 5);

  if (revisionExercises.length > 0) {
    // Split: first ~60% as warm-up at the start, rest sprinkled into main exercises
    var warmUpCount = Math.min(3, Math.ceil(revisionExercises.length * 0.6));
    var warmUp = revisionExercises.slice(0, warmUpCount);
    var sprinkled = revisionExercises.slice(warmUpCount);

    // Shuffle only the main lesson exercises
    exercises = ExerciseTypes.shuffleArray(exercises);

    // Insert sprinkled revision exercises at random positions within the main exercises
    sprinkled.forEach(function(revEx) {
      var insertAt = Math.floor(Math.random() * (exercises.length + 1));
      exercises.splice(insertAt, 0, revEx);
    });

    // Prepend warm-up exercises at the very start
    exercises = warmUp.concat(exercises);
  } else {
    // No revision available (first topic/lesson) -- just shuffle as before
    exercises = ExerciseTypes.shuffleArray(exercises);
  }

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

    // Revision badge
    if (exercise._isRevision) {
      html += '<div style="text-align:center; margin-bottom: var(--gap-xs);">' +
        '<span style="background: linear-gradient(135deg, #fef3c7, #fde68a); color: #92400e; font-size: var(--font-size-small); font-weight: 700; padding: 3px 12px; border-radius: 99px; display: inline-block;">&#x1F504; Revision!</span>' +
        '</div>';
    }

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

// Revision exercise generator - creates review exercises from previously completed topics
function generateRevisionExercises(currentTopicId, currentLessonId, count) {
  var topicOrder = window.TOPICS ? window.TOPICS.map(function(t) { return t.id; }) : [];
  var currentTopicIndex = topicOrder.indexOf(currentTopicId);
  var currentLessonNum = parseInt(currentLessonId.split('-').pop()) || 1;

  if (currentTopicIndex < 0) return [];

  // 1. Collect all learned vocab from completed lessons
  var pool = [];

  for (var t = 0; t <= currentTopicIndex; t++) {
    var tid = topicOrder[t];
    var tData = window.getTopicData(tid);
    if (!tData) continue;

    // Skip numeri - its vocab has a 'number' field and is used for maths exercises
    if (tid === 'numeri') continue;

    for (var l = 1; l <= 3; l++) {
      var lid = tid + '-' + l;

      // If this is the current topic, only include earlier lessons
      if (tid === currentTopicId && l >= currentLessonNum) continue;

      var progress = window.app.state.getLessonProgress(tid, lid);
      if (!progress || !progress.completed) continue;

      // Find the lesson definition to get its vocabIndices
      var lessonDef = tData.lessons.find(function(ls) { return ls.id === lid; });
      if (!lessonDef) continue;

      // Collect vocab items
      if (lessonDef.vocabIndices && tData.vocabulary) {
        lessonDef.vocabIndices.forEach(function(idx) {
          var v = tData.vocabulary[idx];
          if (v && v.emoji) {
            pool.push({ italian: v.italian, english: v.english, emoji: v.emoji, topicId: tid });
          }
        });
      }

      // Collect phrase items too
      if (lessonDef.phraseIndices && tData.phrases) {
        lessonDef.phraseIndices.forEach(function(idx) {
          var p = tData.phrases[idx];
          if (p && p.emoji) {
            pool.push({ italian: p.italian, english: p.english, emoji: p.emoji, topicId: tid });
          }
        });
      }
    }
  }

  // 2. Need at least 4 items for meaningful multiple-choice distractors
  if (pool.length < 4) return [];

  // 3. Deduplicate by italian word (in case same word appears in multiple lessons)
  var seen = {};
  pool = pool.filter(function(item) {
    if (seen[item.italian]) return false;
    seen[item.italian] = true;
    return true;
  });

  if (pool.length < 4) return [];

  // 4. Shuffle the pool
  pool = ExerciseTypes.shuffleArray(pool);

  // 5. Generate exercises
  var exerciseCount = Math.min(count, pool.length);
  var exercises = [];
  var usedWords = {};

  function getDistractors(target) {
    var candidates = pool.filter(function(item) {
      return item.italian !== target.italian && item.english !== target.english;
    });
    candidates = ExerciseTypes.shuffleArray(candidates);
    return candidates.slice(0, 3);
  }

  var templates = ['multiple-choice', 'listen-pick', 'picture-match'];

  var mcPrompts = [
    'Quick revision! What does "WORD" mean?',
    'Do you remember? What is "WORD" in English?',
    'Think back! What does "WORD" mean?'
  ];
  var lpPrompts = [
    'Revision time! Listen - which word do you hear?',
    'Do you remember this sound? Which word is it?',
    'Listen carefully! What word do you hear?'
  ];
  var pmPrompts = [
    'Do you remember? Which picture matches "WORD"?',
    'Revision! Tap the right picture for "WORD"!',
    'Which one is "WORD"?'
  ];

  for (var i = 0; i < exerciseCount; i++) {
    var word = pool[i];

    if (usedWords[word.italian]) continue;
    usedWords[word.italian] = true;

    var distractors = getDistractors(word);
    if (distractors.length < 3) continue;

    var template = templates[Math.floor(Math.random() * templates.length)];
    var exercise;

    if (template === 'multiple-choice') {
      var prompt = mcPrompts[Math.floor(Math.random() * mcPrompts.length)].replace('WORD', word.italian);
      exercise = {
        type: 'multiple-choice',
        prompt: prompt,
        correctAnswer: word.english,
        options: ExerciseTypes.shuffleArray([word.english, distractors[0].english, distractors[1].english, distractors[2].english]),
        speakWord: word.italian,
        daisySays: 'Do you remember this one? ' + word.emoji,
        _isRevision: true
      };
    } else if (template === 'listen-pick') {
      var prompt = lpPrompts[Math.floor(Math.random() * lpPrompts.length)];
      exercise = {
        type: 'listen-pick',
        prompt: prompt,
        speakWord: word.italian,
        correctAnswer: word.italian,
        options: ExerciseTypes.shuffleArray([word.italian, distractors[0].italian, distractors[1].italian, distractors[2].italian]),
        _isRevision: true
      };
    } else {
      var prompt = pmPrompts[Math.floor(Math.random() * pmPrompts.length)].replace('WORD', word.italian);
      exercise = {
        type: 'picture-match',
        prompt: prompt,
        speakWord: word.italian,
        correctAnswer: word.italian,
        options: ExerciseTypes.shuffleArray([
          { value: word.italian, emoji: word.emoji, label: word.italian },
          { value: distractors[0].italian, emoji: distractors[0].emoji, label: distractors[0].italian },
          { value: distractors[1].italian, emoji: distractors[1].emoji, label: distractors[1].italian },
          { value: distractors[2].italian, emoji: distractors[2].emoji, label: distractors[2].italian }
        ]),
        _isRevision: true
      };
    }

    exercises.push(exercise);
  }

  return exercises;
}
