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

    // Find the next uncompleted lesson (or default to lesson 1)
    var nextLesson = topic.id + '-1';
    for (var nl = 1; nl <= 3; nl++) {
      var nlProgress = state.getLessonProgress(topic.id, topic.id + '-' + nl);
      if (!nlProgress || !nlProgress.completed) {
        nextLesson = topic.id + '-' + nl;
        break;
      }
    }

    html += '<div class="' + classes + ' animate-fadeInUp stagger-' + (index + 1) + '" ';
    if (unlocked) {
      html += 'onclick="window.app.router.navigate(\'/lesson/' + topic.id + '/' + nextLesson + '\')" ';
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

    // Reward teaser on topic card
    var reward = state.getReward(topic.id);
    if (reward && reward.text && unlocked && !complete) {
      html += '<div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 700; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">&#127873; ' + reward.text + '</div>';
    } else if (complete && reward && reward.text && !reward.claimed) {
      html += '<div style="font-size: 0.7rem; color: var(--green); font-weight: 700; margin-top: 2px;">&#127873; Reward earned!</div>';
    }

    html += '</div>';
  });

  html += '</div>';

  container.innerHTML = html;

  // Update header star counter
  window.app.updateStarCounter();
};
