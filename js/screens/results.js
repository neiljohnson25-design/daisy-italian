/* ============================================
   Results / Celebration Screen
   ============================================ */

window.renderResultsScreen = function(container, params) {
  var topicId = params.topicId;
  var lessonId = params.lessonId;
  var topic = window.getTopicById(topicId);

  // Parse query params from hash
  var hashParts = window.location.hash.split('?');
  var queryParams = {};
  if (hashParts[1]) {
    hashParts[1].split('&').forEach(function(p) {
      var kv = p.split('=');
      queryParams[kv[0]] = kv[1];
    });
  }

  var score = parseInt(queryParams.score) || 0;
  var maxScore = parseInt(queryParams.max) || 1;
  var stars = parseInt(queryParams.stars) || 0;
  var correct = parseInt(queryParams.correct) || 0;
  var total = parseInt(queryParams.total) || 0;

  container.className = 'screen-results';

  // Check if topic is now complete for reward
  var topicComplete = window.app.state.isTopicComplete(topicId);
  var reward = window.app.state.getReward(topicId);
  var showReward = topicComplete && reward && reward.text && !reward.claimed;

  // Title based on stars
  var titles = {
    3: 'Bravissima!',
    2: 'Molto Bene!',
    1: 'Buon Lavoro!',
    0: 'Keep Trying!'
  };

  var html = '';

  // Confetti for 2+ stars
  if (stars >= 2) {
    html += createConfetti();
  }

  // Daisy celebrating
  html += '<div id="daisy-results"></div>';

  // Title
  html += '<h1 class="results-title">' + titles[stars] + '</h1>';

  // Stars
  html += '<div class="results-stars" id="results-stars"></div>';

  // Score
  html += '<p class="results-score">You got ' + correct + ' out of ' + total + ' correct!</p>';

  // Reward card (if earned)
  if (showReward) {
    html += '<div class="reward-card" id="reward-card" style="display: none;">';
    html += '<div class="reward-emoji">🎁</div>';
    html += '<h3>Reward Unlocked!</h3>';
    html += '<p class="reward-text">' + reward.text + '</p>';
    html += '<button class="btn btn-warning" style="margin-top: var(--gap-md);" onclick="window.app.state.claimReward(\'' + topicId + '\'); this.parentElement.querySelector(\'h3\').textContent = \'Claimed!\'; this.style.display = \'none\';">Claim Reward!</button>';
    html += '</div>';
  }

  // Action buttons
  html += '<div class="results-actions">';
  html += '<button class="btn btn-secondary" onclick="window.app.router.navigate(\'/exercise/' + topicId + '/' + lessonId + '\')">Play Again</button>';

  // Determine next lesson
  var lessonNum = parseInt(lessonId.split('-').pop());
  var nextLessonId = topicId + '-' + (lessonNum + 1);
  var nextLessonExists = false;

  var topicData = window.getTopicData(topicId);
  if (topicData) {
    nextLessonExists = topicData.lessons.some(function(l) { return l.id === nextLessonId; });
  }

  if (nextLessonExists && stars >= 1) {
    html += '<button class="btn btn-primary" onclick="window.app.router.navigate(\'/lesson/' + topicId + '/' + nextLessonId + '\')">Next Lesson &#8594;</button>';
  } else {
    html += '<button class="btn btn-primary" onclick="window.app.router.navigate(\'/topics\')">Back to Topics</button>';
  }
  html += '</div>';

  container.innerHTML = html;

  // Render Daisy
  var daisyEl = document.getElementById('daisy-results');
  if (daisyEl) {
    DaisyAvatar.render(daisyEl, stars >= 1 ? 'celebrating' : 'encouraging', 'medium');
  }

  // Animate stars
  var starsEl = document.getElementById('results-stars');
  if (starsEl) {
    StarCounter.animateStars(starsEl, stars, 3);
  }

  // Speak the title
  window.app.speech.speak(titles[stars]);

  // Play celebration sound
  if (stars >= 2) {
    window.app.audio.play('celebration');
  } else if (stars >= 1) {
    window.app.audio.play('correct');
  }

  // Show reward after a delay
  if (showReward) {
    setTimeout(function() {
      var rewardCard = document.getElementById('reward-card');
      if (rewardCard) {
        rewardCard.style.display = 'block';
        window.app.audio.play('reward');
      }
    }, 2500);
  }

  // Update global star counter
  window.app.updateStarCounter();
};

function createConfetti() {
  var colors = ['#FF6B9D', '#A855F7', '#38BDF8', '#4ADE80', '#FBBF24', '#FB923C', '#FF69B4', '#00F5FF'];
  var html = '<div class="confetti-container">';

  for (var i = 0; i < 30; i++) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    var left = Math.random() * 100;
    var delay = Math.random() * 2;
    var size = 8 + Math.random() * 10;
    var duration = 2 + Math.random() * 2;

    html += '<div class="confetti-piece" style="' +
      'left: ' + left + '%;' +
      'width: ' + size + 'px;' +
      'height: ' + (size * 0.6) + 'px;' +
      'background: ' + color + ';' +
      'animation-delay: ' + delay + 's;' +
      'animation-duration: ' + duration + 's;' +
    '"></div>';
  }

  html += '</div>';
  return html;
}
