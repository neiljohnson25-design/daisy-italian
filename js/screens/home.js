/* ============================================
   Home Screen
   ============================================ */

window.renderHomeScreen = function(container) {
  var state = window.app.state;
  var totalStars = state.getTotalStars();
  var streak = state.state.currentStreak;

  container.className = 'screen-home';

  // Build HTML
  var html = '';

  // Daisy avatar
  html += '<div id="daisy-home" style="margin-bottom: -10px;"></div>';

  // Title
  html += '<h1 class="app-title animate-fadeInUp">Daisy\'s Italian Adventure!</h1>';
  html += '<p class="app-subtitle animate-fadeInUp" style="animation-delay: 0.1s;">Impariamo l\'italiano!</p>';

  // Stats
  if (totalStars > 0 || streak > 0) {
    html += '<div class="home-stats animate-fadeInUp" style="animation-delay: 0.2s;">';
    if (totalStars > 0) {
      html += '<div class="star-counter"><span class="star-icon">&#9733;</span> ' + totalStars + '</div>';
    }
    if (streak > 1) {
      html += '<div class="streak-badge">&#128293; ' + streak + ' day streak!</div>';
    }
    html += '</div>';
  }

  // Play button
  html += '<button class="btn btn-play animate-fadeInUp" style="animation-delay: 0.3s;" onclick="window.app.router.navigate(\'/topics\')">PLAY!</button>';

  // Progress button (if they have some progress)
  if (totalStars > 0) {
    html += '<button class="btn btn-secondary animate-fadeInUp" style="animation-delay: 0.4s; font-size: var(--font-size-body);" onclick="window.app.router.navigate(\'/progress\')">My Progress</button>';
  }

  // Parent zone link (subtle)
  html += '<button class="parent-link" onclick="window.app.router.navigate(\'/parent\')" title="Parent Zone">&#9881;</button>';

  container.innerHTML = html;

  // Render Daisy
  var daisyEl = document.getElementById('daisy-home');
  if (daisyEl) {
    DaisyAvatar.render(daisyEl, 'waving', 'large');
  }

  // Speak greeting after a short delay
  setTimeout(function() {
    window.app.speech.speak('Ciao Daisy! Giochiamo!');
  }, 800);
};
