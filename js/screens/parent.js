/* ============================================
   Parent Zone Screen
   PIN-protected area for rewards, settings, images
   ============================================ */

window.renderParentScreen = function(container) {
  var state = window.app.state;
  var authenticated = false;

  container.className = 'screen-parent';

  // Show PIN entry first
  renderPinEntry();

  function renderPinEntry() {
    var enteredPin = '';

    var html = '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; gap: var(--gap-lg);">';
    html += '<h2 style="font-size: var(--font-size-title); font-weight: 800; color: var(--dark);">Parent Zone</h2>';
    html += '<p style="color: var(--grey-dark); font-size: var(--font-size-body);">Enter PIN to continue</p>';

    // PIN dots
    html += '<div class="pin-display" id="pin-dots">';
    for (var i = 0; i < 4; i++) {
      html += '<div class="pin-dot"></div>';
    }
    html += '</div>';

    // Error message area
    html += '<p id="pin-error" style="color: var(--red); font-weight: 600; min-height: 24px;"></p>';

    // Number pad
    html += '<div class="pin-pad">';
    for (var n = 1; n <= 9; n++) {
      html += '<button class="pin-btn" data-digit="' + n + '">' + n + '</button>';
    }
    html += '<button class="pin-btn" data-digit="clear" style="font-size: 1rem;">&#10006;</button>';
    html += '<button class="pin-btn" data-digit="0">0</button>';
    html += '<button class="pin-btn" data-digit="back" style="font-size: 1rem;">&#9003;</button>';
    html += '</div>';

    // Back link
    html += '<button class="btn btn-icon" onclick="window.app.router.navigate(\'/\')" style="margin-top: var(--gap-md);">&#8592;</button>';

    html += '</div>';

    container.innerHTML = html;

    // Attach handlers
    var dots = container.querySelectorAll('.pin-dot');
    var errorEl = document.getElementById('pin-error');

    container.querySelectorAll('.pin-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var digit = btn.getAttribute('data-digit');

        if (digit === 'clear') {
          enteredPin = '';
        } else if (digit === 'back') {
          enteredPin = enteredPin.slice(0, -1);
        } else {
          if (enteredPin.length < 4) {
            enteredPin += digit;
          }
        }

        // Update dots
        dots.forEach(function(dot, idx) {
          dot.classList.toggle('filled', idx < enteredPin.length);
        });

        window.app.audio.play('click');

        // Check PIN when 4 digits entered
        if (enteredPin.length === 4) {
          if (state.verifyPin(enteredPin)) {
            authenticated = true;
            window.app.audio.play('correct');
            renderParentDashboard();
          } else {
            window.app.audio.play('incorrect');
            errorEl.textContent = 'Wrong PIN. Try again!';
            enteredPin = '';
            setTimeout(function() {
              dots.forEach(function(dot) { dot.classList.remove('filled'); });
            }, 300);
          }
        }
      });
    });
  }

  function renderParentDashboard() {
    var html = '<h2 class="parent-title">Parent Zone</h2>';

    // Back button
    html += '<div style="margin-bottom: var(--gap-lg);">';
    html += '<button class="btn btn-icon" onclick="window.app.router.navigate(\'/\')">&#8592;</button>';
    html += '</div>';

    // ---- Progress Overview ----
    html += '<div class="parent-section">';
    html += '<h3>Daisy\'s Progress</h3>';

    var totalStars = state.getTotalStars();
    var streak = state.state.currentStreak;

    html += '<div style="display: flex; gap: var(--gap-lg); margin-bottom: var(--gap-md); flex-wrap: wrap;">';
    html += '<div style="text-align: center;"><div style="font-size: 2rem; color: var(--gold);">&#9733;</div><div style="font-weight: 700;">' + totalStars + ' Stars</div></div>';
    html += '<div style="text-align: center;"><div style="font-size: 2rem;">&#128293;</div><div style="font-weight: 700;">' + streak + ' Day Streak</div></div>';

    var completedTopics = window.TOPICS.filter(function(t) { return state.isTopicComplete(t.id); }).length;
    html += '<div style="text-align: center;"><div style="font-size: 2rem;">&#127942;</div><div style="font-weight: 700;">' + completedTopics + '/9 Topics</div></div>';
    html += '</div>';

    // Per-topic progress
    window.TOPICS.forEach(function(topic) {
      var topicStars = state.getTopicStars(topic.id);
      var isComplete = state.isTopicComplete(topic.id);
      html += '<div style="display: flex; align-items: center; gap: var(--gap-sm); padding: var(--gap-xs) 0;">';
      html += '<span>' + topic.icon + '</span>';
      html += '<span style="flex: 1; font-weight: 600; font-size: var(--font-size-small);">' + topic.titleEN + '</span>';
      html += '<span style="color: var(--gold);">';
      for (var s = 0; s < 3; s++) {
        var lessonId = topic.id + '-' + (s + 1);
        var lp = state.getLessonProgress(topic.id, lessonId);
        html += '<span style="color: ' + (lp && lp.stars > 0 ? 'var(--gold)' : 'var(--grey-light)') + ';">&#9733;</span>';
      }
      html += '</span>';
      if (isComplete) html += '<span style="color: var(--green);">&#10003;</span>';
      html += '</div>';
    });
    html += '</div>';

    // ---- Rewards ----
    html += '<div class="parent-section">';
    html += '<h3>Rewards for Completing Topics</h3>';
    html += '<p style="color: var(--grey-dark); font-size: var(--font-size-small); margin-bottom: var(--gap-md);">Set a reward for when Daisy completes all 3 lessons in a topic. She\'ll see it on the results screen!</p>';

    window.TOPICS.forEach(function(topic) {
      var reward = state.getReward(topic.id);
      var currentText = reward ? reward.text : '';
      var claimed = reward ? reward.claimed : false;

      html += '<div class="reward-input-row">';
      html += '<span class="topic-label">' + topic.icon + ' ' + topic.titleEN + '</span>';
      html += '<input type="text" id="reward-' + topic.id + '" value="' + (currentText || '').replace(/"/g, '&quot;') + '" placeholder="e.g. Trip to the park!">';
      if (claimed) {
        html += '<span style="color: var(--green); font-size: 0.9rem;" title="Claimed">&#10003;</span>';
      }
      html += '</div>';
    });

    html += '<button class="btn btn-primary" id="save-rewards" style="margin-top: var(--gap-md);">Save Rewards</button>';
    html += '</div>';

    // ---- Character Images ----
    html += '<div class="parent-section">';
    html += '<h3>Character Images</h3>';
    html += '<p style="color: var(--grey-dark); font-size: var(--font-size-small); margin-bottom: var(--gap-md);">Upload images for each show theme. They\'ll appear on topic cards and during exercises.</p>';

    var themes = [
      { id: 'kpop-demon-hunters', name: 'K-Pop Demon Hunters' },
      { id: 'disney-princesses', name: 'Disney Princesses' },
      { id: 'loud-house', name: 'Loud House' },
      { id: 'sam-and-cat', name: 'Sam and Cat' }
    ];

    themes.forEach(function(theme) {
      var img = state.getCharacterImage(theme.id);
      html += '<div class="image-upload-row">';
      html += '<span class="theme-label">' + theme.name + '</span>';
      html += '<div class="image-preview" id="preview-' + theme.id + '">';
      if (img) {
        html += '<img src="' + img + '" alt="' + theme.name + '">';
      } else {
        html += '📷';
      }
      html += '</div>';
      html += '<input type="file" accept="image/*" data-theme="' + theme.id + '" class="image-upload-input">';
      if (img) {
        html += '<button class="btn-icon" data-theme-remove="' + theme.id + '" style="font-size: 0.8rem; width: 32px; height: 32px; color: var(--red);">&#10006;</button>';
      }
      html += '</div>';
    });
    html += '</div>';

    // ---- Speech Settings ----
    html += '<div class="parent-section">';
    html += '<h3>Speech Settings</h3>';
    var currentRate = state.getSpeechRate();
    html += '<div class="speed-control">';
    html += '<span class="speed-label">Slow</span>';
    html += '<input type="range" id="speech-rate" min="0.5" max="1.2" step="0.05" value="' + currentRate + '">';
    html += '<span class="speed-label">Fast</span>';
    html += '</div>';
    html += '<div style="text-align: center; margin-top: var(--gap-sm);">';
    html += '<button class="btn btn-secondary" id="test-speech" style="font-size: var(--font-size-small);">Test: "Ciao Daisy!"</button>';
    html += '</div>';
    html += '</div>';

    // ---- Change PIN ----
    html += '<div class="parent-section">';
    html += '<h3>Change PIN</h3>';
    html += '<div style="display: flex; gap: var(--gap-sm); align-items: center;">';
    html += '<input type="text" id="new-pin" maxlength="4" pattern="[0-9]{4}" placeholder="New 4-digit PIN" style="padding: var(--gap-sm); border: 2px solid var(--grey-light); border-radius: var(--radius-sm); font-family: var(--font-main); font-size: var(--font-size-body); width: 150px;">';
    html += '<button class="btn btn-primary" id="change-pin" style="font-size: var(--font-size-small);">Update</button>';
    html += '</div>';
    html += '<p id="pin-msg" style="color: var(--green); font-size: var(--font-size-small); min-height: 20px; margin-top: var(--gap-xs);"></p>';
    html += '</div>';

    // ---- Reset ----
    html += '<div class="parent-section" style="border: 2px solid var(--red-light);">';
    html += '<h3 style="color: var(--red);">Reset Progress</h3>';
    html += '<p style="color: var(--grey-dark); font-size: var(--font-size-small); margin-bottom: var(--gap-md);">This will erase Daisy\'s progress. Be careful!</p>';
    html += '<button class="btn" id="reset-all" style="background: var(--red-light); color: var(--red); font-size: var(--font-size-small);">Reset All Progress</button>';
    html += '</div>';

    container.innerHTML = html;

    // ---- Event Handlers ----

    // Save rewards
    document.getElementById('save-rewards').addEventListener('click', function() {
      window.TOPICS.forEach(function(topic) {
        var input = document.getElementById('reward-' + topic.id);
        if (input) {
          state.setReward(topic.id, input.value.trim());
        }
      });
      window.app.audio.play('correct');
      this.textContent = 'Saved!';
      var btn = this;
      setTimeout(function() { btn.textContent = 'Save Rewards'; }, 1500);
    });

    // Image uploads
    container.querySelectorAll('.image-upload-input').forEach(function(input) {
      input.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (!file) return;

        var themeId = input.getAttribute('data-theme');
        var reader = new FileReader();
        reader.onload = function(ev) {
          // Resize image to save localStorage space
          var img = new Image();
          img.onload = function() {
            var canvas = document.createElement('canvas');
            var maxSize = 200;
            var w = img.width;
            var h = img.height;
            if (w > h) {
              if (w > maxSize) { h = h * maxSize / w; w = maxSize; }
            } else {
              if (h > maxSize) { w = w * maxSize / h; h = maxSize; }
            }
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            var dataUrl = canvas.toDataURL('image/jpeg', 0.7);
            state.setCharacterImage(themeId, dataUrl);

            // Update preview
            var preview = document.getElementById('preview-' + themeId);
            if (preview) {
              preview.innerHTML = '<img src="' + dataUrl + '" alt="' + themeId + '">';
            }
            window.app.audio.play('correct');
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });
    });

    // Remove image buttons
    container.querySelectorAll('[data-theme-remove]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var themeId = btn.getAttribute('data-theme-remove');
        state.setCharacterImage(themeId, null);
        var preview = document.getElementById('preview-' + themeId);
        if (preview) {
          preview.innerHTML = '📷';
        }
        btn.style.display = 'none';
      });
    });

    // Speech rate
    var rateSlider = document.getElementById('speech-rate');
    rateSlider.addEventListener('input', function() {
      state.setSpeechRate(parseFloat(rateSlider.value));
    });

    document.getElementById('test-speech').addEventListener('click', function() {
      window.app.speech.speak('Ciao Daisy!');
    });

    // Change PIN
    document.getElementById('change-pin').addEventListener('click', function() {
      var newPin = document.getElementById('new-pin').value;
      var msg = document.getElementById('pin-msg');
      if (/^\d{4}$/.test(newPin)) {
        state.setPin(newPin);
        msg.textContent = 'PIN updated!';
        msg.style.color = 'var(--green)';
        document.getElementById('new-pin').value = '';
      } else {
        msg.textContent = 'Please enter exactly 4 digits.';
        msg.style.color = 'var(--red)';
      }
    });

    // Reset all
    document.getElementById('reset-all').addEventListener('click', function() {
      if (confirm('Are you sure you want to reset ALL of Daisy\'s progress? This cannot be undone!')) {
        state.resetAllProgress();
        window.app.audio.play('whoosh');
        renderParentDashboard();
      }
    });
  }
};
