/* ============================================
   Lesson Intro Screen - Vocabulary Presentation
   ============================================ */

window.renderLessonScreen = function(container, params) {
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

  // Get vocabulary for this lesson
  var vocab = [];
  if (lesson.vocabIndices) {
    vocab = lesson.vocabIndices.map(function(idx) { return topicData.vocabulary[idx]; }).filter(Boolean);
  }

  // Get phrases for this lesson (L2/L3 progression)
  if (lesson.phraseIndices && topicData.phrases) {
    var phrases = lesson.phraseIndices.map(function(idx) { return topicData.phrases[idx]; }).filter(Boolean);
    // Mark phrases so the card can show them differently
    phrases.forEach(function(p) { p._isPhrase = true; });
    vocab = vocab.concat(phrases);
  }

  container.className = 'screen-lesson theme-' + topic.theme;
  var currentIndex = 0;

  function renderContent() {
    var html = '';

    // Header
    html += '<div class="lesson-header">';
    html += '<h2 class="lesson-title">' + lesson.title + '</h2>';
    html += '<p class="lesson-subtitle">' + topic.titleEN + '</p>';
    html += '</div>';

    // Reward teaser - show what Daisy is working towards
    var reward = window.app.state.getReward(topicId);
    var topicComplete = window.app.state.isTopicComplete(topicId);
    if (reward && reward.text && !topicComplete && currentIndex === 0) {
      // Work out how many lessons are left
      var lessonsLeft = 0;
      for (var li = 1; li <= 3; li++) {
        var lp = window.app.state.getLessonProgress(topicId, topicId + '-' + li);
        if (!lp || !lp.completed) lessonsLeft++;
      }
      html += '<div style="background: linear-gradient(135deg, var(--yellow-light), var(--orange-light)); border-radius: var(--radius-md); padding: var(--gap-sm) var(--gap-md); text-align: center; animation: fadeInUp 0.4s ease; max-width: 400px; width: 100%;">';
      html += '<span style="font-size: 1.2rem;">&#127873;</span> ';
      html += '<span style="font-weight: 700; font-size: var(--font-size-small); color: var(--dark);">';
      if (lessonsLeft === 1) {
        html += 'Last lesson! Complete it to earn: <strong>' + reward.text + '</strong>';
      } else {
        html += lessonsLeft + ' lessons to go for: <strong>' + reward.text + '</strong>';
      }
      html += '</span>';
      html += '</div>';
    }

    // Daisy with speech bubble
    html += '<div id="daisy-lesson"></div>';

    if (vocab.length > 0) {
      // Vocabulary card
      var word = vocab[currentIndex];
      html += '<div class="vocab-card">';
      if (word._isPhrase) {
        html += '<div style="font-size: var(--font-size-small); font-weight: 700; color: var(--pink); text-transform: uppercase; letter-spacing: 1px; margin-bottom: var(--gap-xs);">\uD83D\uDDE3\uFE0F Phrase</div>';
      }
      if (word.emoji) {
        html += '<div class="vocab-image">' + word.emoji + '</div>';
      }
      html += '<div class="vocab-italian"' + (word._isPhrase ? ' style="font-size: var(--font-size-large);"' : '') + '>' + word.italian + '</div>';
      html += '<div class="vocab-english">' + word.english + '</div>';

      // Speaker button
      html += '<button class="btn btn-speaker" style="margin: var(--gap-md) auto 0;" onclick="window.app.speech.speakWithRepeat(\'' + word.italian.replace(/'/g, "\\'") + '\')">&#128264;</button>';

      if (word.hint) {
        html += '<p style="margin-top: var(--gap-sm); color: var(--grey); font-size: var(--font-size-small); font-style: italic;">' + word.hint + '</p>';
      }
      html += '</div>';

      // Navigation dots
      html += '<div class="vocab-dots">';
      for (var i = 0; i < vocab.length; i++) {
        var dotClass = 'vocab-dot';
        if (i === currentIndex) dotClass += ' active';
        else if (i < currentIndex) dotClass += ' seen';
        html += '<div class="' + dotClass + '"></div>';
      }
      html += '</div>';

      // Navigation buttons
      html += '<div class="vocab-nav">';
      if (currentIndex > 0) {
        html += '<button class="btn btn-icon" id="vocab-prev" style="font-size: 1.5rem;">&#8592;</button>';
      } else {
        html += '<div style="width: 48px;"></div>';
      }
      if (currentIndex < vocab.length - 1) {
        html += '<button class="btn btn-primary" id="vocab-next">Next &#8594;</button>';
      } else {
        html += '<button class="btn btn-success" id="vocab-start">Let\'s Practice!</button>';
      }
      if (currentIndex < vocab.length - 1) {
        html += '<div style="width: 48px;"></div>';
      }
      html += '</div>';

    } else {
      // No vocab (e.g., maths lesson) - go straight to exercises
      html += '<div style="text-align: center; padding: var(--gap-xl);">';
      html += '<p style="font-size: var(--font-size-large); font-weight: 700; margin-bottom: var(--gap-lg);">' + (lesson.description || 'Time to practice!') + '</p>';
      html += '<button class="btn btn-success" id="vocab-start">Let\'s Go!</button>';
      html += '</div>';
    }

    container.innerHTML = html;

    // Render Daisy
    var daisyEl = document.getElementById('daisy-lesson');
    if (daisyEl) {
      var msg = currentIndex === 0 ? (topic.daisySays || 'Let\'s learn!') : '';
      if (msg) {
        DaisyAvatar.createWithBubble(daisyEl, 'pointing', msg, 'small');
      } else {
        DaisyAvatar.render(daisyEl, 'happy', 'small');
      }
    }

    // Auto-speak the word
    if (vocab.length > 0) {
      setTimeout(function() {
        window.app.speech.speak(vocab[currentIndex].italian);
      }, 500);
    }

    // Attach nav handlers
    var nextBtn = document.getElementById('vocab-next');
    var prevBtn = document.getElementById('vocab-prev');
    var startBtn = document.getElementById('vocab-start');

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        currentIndex++;
        window.app.audio.play('click');
        renderContent();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        currentIndex--;
        window.app.audio.play('click');
        renderContent();
      });
    }

    if (startBtn) {
      startBtn.addEventListener('click', function() {
        window.app.audio.play('click');
        window.app.router.navigate('/exercise/' + topicId + '/' + lessonId);
      });
    }
  }

  renderContent();
};

// Helper: get topic data from window globals
window.getTopicData = function(topicId) {
  var map = {
    'colori': window.COLORI_DATA,
    'saluti': window.SALUTI_DATA,
    'animali': window.ANIMALI_DATA,
    'cibo': window.CIBO_DATA,
    'famiglia': window.FAMIGLIA_DATA,
    'numeri': window.NUMERI_DATA,
    'giorni-mesi': window.GIORNI_MESI_DATA,
    'corpo': window.CORPO_DATA,
    'conversazioni': window.CONVERSAZIONI_DATA
  };
  return map[topicId] || null;
};
