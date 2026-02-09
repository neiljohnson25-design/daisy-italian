/* ============================================
   Topic Selection Screen
   ============================================ */

window.renderTopicsScreen = function(container) {
  var state = window.app.state;
  container.className = 'screen-topics';

  var html = '<h2 class="topics-title">Choose a Topic!</h2>';
  html += '<div class="topics-grid">';

  window.TOPICS.forEach(function(topic, index) {
    var unlocked = state.isTopicUnlocked(topic.id);
    var topicStars = state.getTopicStars(topic.id);
    var complete = state.isTopicComplete(topic.id);
    var characterImg = state.getCharacterImage(topic.theme);

    var classes = 'card card-topic theme-' + topic.theme;
    if (!unlocked) classes += ' locked';
    if (complete) classes += ' completed';

    html += '<div class="' + classes + ' animate-fadeInUp stagger-' + (index + 1) + '" ';
    if (unlocked) {
      html += 'onclick="window.app.router.navigate(\'/lesson/' + topic.id + '/' + topic.id + '-1\')" ';
    }
    html += 'style="cursor: ' + (unlocked ? 'pointer' : 'not-allowed') + ';">';

    // Character image slot
    if (characterImg) {
      html += '<div class="topic-character character-image-slot"><img src="' + characterImg + '" alt="' + topic.theme + '"></div>';
    }

    // Lock icon
    if (!unlocked) {
      html += '<div class="topic-lock">🔒</div>';
    }

    // Topic icon
    html += '<div class="topic-icon">' + topic.icon + '</div>';

    // Title
    html += '<div class="topic-title">' + topic.titleIT + '</div>';
    html += '<div class="topic-subtitle">' + topic.titleEN + '</div>';

    // Stars
    html += '<div class="stars-display">';
    for (var s = 0; s < 3; s++) {
      // Each topic has 3 lessons, show total lesson stars as topic progress
      // Simplify: show stars based on completed lessons
      var lessonId = topic.id + '-' + (s + 1);
      var lessonProgress = state.getLessonProgress(topic.id, lessonId);
      var lessonStars = lessonProgress ? lessonProgress.stars : 0;
      html += '<span class="star' + (lessonStars > 0 ? ' earned' : '') + '">&#9733;</span>';
    }
    html += '</div>';

    html += '</div>';
  });

  html += '</div>';

  container.innerHTML = html;

  // Update header star counter
  window.app.updateStarCounter();
};
