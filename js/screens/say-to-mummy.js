/* ============================================
   "Say to Mummy!" Screen
   Practical phrases Daisy can say to her
   Italian mum using vocabulary from each topic
   ============================================ */

window.renderSayToMummyScreen = function(container, params) {
  var topicId = params.topicId;
  var topic = window.getTopicById(topicId);
  var phrases = window.SAY_TO_MUMMY[topicId];

  if (!topic || !phrases) {
    container.innerHTML = '<p>Topic not found!</p>';
    return;
  }

  container.className = 'screen-say-to-mummy theme-' + topic.theme;

  // Get ticked-off state
  var done = window.app.state.getMummyPhrasesDone(topicId, phrases.length);
  var allDone = done.every(function(d) { return d; });

  function renderContent() {
    var html = '';

    // Header
    html += '<div class="mummy-header">';
    html += '<h2 class="mummy-title">Say to Mummy! 🗣️</h2>';
    html += '<p class="mummy-subtitle">' + topic.titleIT + ' — ' + topic.titleEN + '</p>';
    html += '</div>';

    // Daisy with speech bubble
    html += '<div id="daisy-mummy"></div>';

    // Progress indicator
    var doneCount = done.filter(function(d) { return d; }).length;
    html += '<div class="mummy-progress">';
    html += '<span>' + doneCount + ' / ' + phrases.length + ' said to Mummy!</span>';
    html += '</div>';

    // Phrase cards
    html += '<div class="mummy-phrases">';
    phrases.forEach(function(phrase, index) {
      var isDone = done[index];
      var cardClass = 'mummy-phrase-card' + (isDone ? ' done' : '');

      html += '<div class="' + cardClass + '" data-index="' + index + '">';

      // Main content area
      html += '<div class="phrase-content">';
      html += '<div class="phrase-italian">' + phrase.italian + '</div>';
      html += '<div class="phrase-english">' + phrase.english + '</div>';
      if (phrase.context) {
        html += '<div class="phrase-context">💡 ' + phrase.context + '</div>';
      }
      html += '</div>';

      // Actions row
      html += '<div class="phrase-actions">';

      // Speaker button
      html += '<button class="btn btn-speaker phrase-speaker" data-text="' + phrase.italian.replace(/"/g, '&quot;') + '" aria-label="Listen">&#128264;</button>';

      // "I said it!" button
      if (isDone) {
        html += '<button class="btn btn-done phrase-tick" data-index="' + index + '">&#10003; Said it!</button>';
      } else {
        html += '<button class="btn btn-primary phrase-tick" data-index="' + index + '">I said it! 🎉</button>';
      }

      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    // All done celebration
    allDone = done.every(function(d) { return d; });
    if (allDone) {
      html += '<div class="mummy-celebration">';
      html += '<div style="font-size: 2.5rem;">🎉🇮🇹🎉</div>';
      html += '<p class="celebration-text">Bravissima! You said them all!</p>';
      html += '<p style="font-size: var(--font-size-body); color: var(--grey-dark);">Mummy must be so proud!</p>';
      html += '</div>';
    }

    // Back to topics button
    html += '<div class="mummy-actions">';
    html += '<button class="btn btn-secondary" id="mummy-back">Back to Topics</button>';
    html += '</div>';

    container.innerHTML = html;

    // Render Daisy
    var daisyEl = document.getElementById('daisy-mummy');
    if (daisyEl) {
      if (allDone) {
        DaisyAvatar.createWithBubble(daisyEl, 'celebrating', 'Mamma sarà felicissima!', 'small');
      } else {
        DaisyAvatar.createWithBubble(daisyEl, 'pointing', 'Now go say these to Mummy!', 'small');
      }
    }

    // Attach event listeners
    attachListeners();
  }

  function attachListeners() {
    // Speaker buttons
    var speakerBtns = container.querySelectorAll('.phrase-speaker');
    speakerBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var text = this.getAttribute('data-text');
        window.app.speech.speakWithRepeat(text);
      });
    });

    // Tick buttons
    var tickBtns = container.querySelectorAll('.phrase-tick');
    tickBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var index = parseInt(this.getAttribute('data-index'));

        // Toggle the done state
        done[index] = !done[index];
        window.app.state.setMummyPhraseDone(topicId, index, done[index], phrases.length);

        // Play sound
        if (done[index]) {
          window.app.audio.play('correct');
        } else {
          window.app.audio.play('click');
        }

        // Check if all just completed
        var nowAllDone = done.every(function(d) { return d; });
        if (nowAllDone && !allDone) {
          // First time all done!
          setTimeout(function() {
            window.app.audio.play('celebration');
          }, 300);
        }

        renderContent();
      });
    });

    // Back button
    var backBtn = document.getElementById('mummy-back');
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        window.app.audio.play('click');
        window.app.router.navigate('/topics');
      });
    }
  }

  renderContent();

  // Auto-speak intro
  setTimeout(function() {
    window.app.speech.speak('Parla con la Mamma!');
  }, 500);
};
