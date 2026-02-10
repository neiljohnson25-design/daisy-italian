/* ============================================
   Milestone Celebration Modal
   ============================================ */

window.MilestoneModal = {
  show: function(milestone, onClose) {
    // Create overlay
    var overlay = document.createElement('div');
    overlay.className = 'milestone-overlay';

    var html = '';

    // Confetti
    var colors = ['#FF6B9D', '#A855F7', '#38BDF8', '#4ADE80', '#FBBF24', '#FB923C', '#FF69B4', '#00F5FF'];
    html += '<div class="confetti-container">';
    for (var i = 0; i < 25; i++) {
      var color = colors[Math.floor(Math.random() * colors.length)];
      var left = Math.random() * 100;
      var delay = Math.random() * 2;
      var size = 8 + Math.random() * 10;
      var duration = 2 + Math.random() * 2;
      html += '<div class="confetti-piece" style="left:' + left + '%;width:' + size + 'px;height:' + (size * 0.6) + 'px;background:' + color + ';animation-delay:' + delay + 's;animation-duration:' + duration + 's;"></div>';
    }
    html += '</div>';

    // Content
    html += '<div class="milestone-content">';

    // Trophy
    html += '<div class="milestone-trophy animate-bounce">&#127942;</div>';

    // Daisy
    html += '<div id="milestone-daisy"></div>';

    // Achievement name
    html += '<h2 class="milestone-title">' + milestone.name + '</h2>';

    // Message
    if (milestone.message) {
      html += '<p class="milestone-message">' + milestone.message + '</p>';
    }

    // Continue button
    html += '<button class="btn btn-primary milestone-continue">Tap to continue!</button>';

    html += '</div>';

    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    // Render Daisy celebrating
    var daisyEl = overlay.querySelector('#milestone-daisy');
    if (daisyEl && window.DaisyAvatar) {
      DaisyAvatar.render(daisyEl, 'celebrating', 'medium');
    }

    // Play celebration sound
    if (window.app && window.app.audio) {
      window.app.audio.play('celebration');
    }

    // Speak the milestone
    if (window.app && window.app.speech) {
      window.app.speech.speak(milestone.name);
    }

    // Close handler
    overlay.querySelector('.milestone-continue').addEventListener('click', function() {
      overlay.classList.add('milestone-closing');
      setTimeout(function() {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        if (onClose) onClose();
      }, 300);
    });
  }
};
