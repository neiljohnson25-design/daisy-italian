/* ============================================
   Progress / Trophy Cabinet Screen
   ============================================ */

window.renderProgressScreen = function(container) {
  var state = window.app.state;
  container.className = 'screen-progress';

  var totalStars = state.getTotalStars();
  var streak = state.state.currentStreak;

  var html = '';

  // Header
  html += '<div class="progress-header animate-fadeInUp">';

  // Daisy
  html += '<div id="daisy-progress" style="margin: 0 auto var(--gap-md);"></div>';

  html += '<div class="total-stars-display">';
  html += '<span class="star-icon">&#9733;</span>';
  html += '<span>' + totalStars + '</span>';
  html += '</div>';

  // Streak
  if (streak > 0) {
    html += '<div style="text-align: center; margin-top: var(--gap-sm);">';
    html += '<span class="streak-badge">&#128293; ' + streak + ' day streak!</span>';
    html += '</div>';
  }

  // Encouragement
  var msg = '';
  if (totalStars === 0) msg = 'Start your Italian adventure!';
  else if (totalStars < 10) msg = 'Great start! Keep learning!';
  else if (totalStars < 20) msg = 'You\'re doing brilliantly!';
  else if (totalStars < 30) msg = 'You\'re becoming an Italian superstar!';
  else msg = 'Incredibile! You\'re amazing at Italian!';
  html += '<p style="text-align: center; color: var(--purple); font-weight: 700; margin-top: var(--gap-sm);">' + msg + '</p>';

  html += '</div>';

  // Topics list
  html += '<div class="progress-topics-list">';

  window.TOPICS.forEach(function(topic, index) {
    var topicStars = state.getTopicStars(topic.id);
    var isComplete = state.isTopicComplete(topic.id);
    var unlocked = state.isTopicUnlocked(topic.id);
    var reward = state.getReward(topic.id);

    html += '<div class="progress-topic-row animate-fadeInUp stagger-' + (index + 1) + '">';

    // Icon
    html += '<div style="font-size: 1.8rem;">' + topic.icon + '</div>';

    // Info
    html += '<div class="topic-info">';
    html += '<div class="topic-name">' + topic.titleEN + '</div>';

    // Lesson stars
    html += '<div style="display: flex; gap: var(--gap-sm); margin-top: 2px;">';
    for (var l = 1; l <= 3; l++) {
      var lessonId = topic.id + '-' + l;
      var lp = state.getLessonProgress(topic.id, lessonId);
      var lessonStars = lp ? lp.stars : 0;
      var lessonDone = lp ? lp.completed : false;

      html += '<div style="display: flex; align-items: center; gap: 2px; font-size: 0.75rem;">';
      html += '<span style="color: var(--grey-dark);">L' + l + '</span>';
      for (var s = 0; s < 3; s++) {
        html += '<span style="color: ' + (s < lessonStars ? 'var(--gold)' : 'var(--grey-light)') + '; font-size: 0.7rem;">&#9733;</span>';
      }
      html += '</div>';
    }
    html += '</div>';

    // Reward status
    if (isComplete && reward && reward.text) {
      html += '<div style="font-size: var(--font-size-small); color: var(--green); margin-top: 2px;">';
      html += reward.claimed ? '&#10003; Reward claimed' : '&#127873; Reward earned!';
      html += '</div>';
    }

    html += '</div>';

    // Status badge
    if (!unlocked) {
      html += '<div style="color: var(--grey);">&#128274;</div>';
    } else if (isComplete) {
      html += '<div style="color: var(--green); font-size: 1.5rem;">&#10003;</div>';
    } else if (topicStars > 0) {
      html += '<div style="color: var(--orange); font-weight: 700; font-size: var(--font-size-small);">In progress</div>';
    } else {
      html += '<div style="color: var(--blue); font-weight: 700; font-size: var(--font-size-small);">Ready!</div>';
    }

    html += '</div>';
  });

  html += '</div>';

  // Achievements
  var achievements = state.state.achievements;
  if (achievements.length > 0) {
    html += '<div class="parent-section" style="margin-top: var(--gap-lg); max-width: 500px; margin-left: auto; margin-right: auto;">';
    html += '<h3 style="text-align: center;">Achievements</h3>';
    html += '<div style="display: flex; flex-wrap: wrap; gap: var(--gap-sm); justify-content: center; margin-top: var(--gap-md);">';
    achievements.forEach(function(a) {
      html += '<div style="background: var(--yellow-light); padding: var(--gap-sm) var(--gap-md); border-radius: var(--radius-md); font-weight: 700; font-size: var(--font-size-small);">&#127942; ' + a.name + '</div>';
    });
    html += '</div>';
    html += '</div>';
  }

  // Back button
  html += '<div style="text-align: center; margin-top: var(--gap-xl);">';
  html += '<button class="btn btn-primary" onclick="window.app.router.navigate(\'/topics\')">Keep Learning!</button>';
  html += '</div>';

  container.innerHTML = html;

  // Render Daisy
  var daisyEl = document.getElementById('daisy-progress');
  if (daisyEl) {
    DaisyAvatar.render(daisyEl, totalStars > 0 ? 'celebrating' : 'happy', 'medium');
  }
};
