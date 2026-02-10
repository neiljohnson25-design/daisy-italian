/* ============================================
   My Rewards Screen
   Shows all earned rewards in one place
   ============================================ */

window.renderRewardsScreen = function(container) {
  var state = window.app.state;
  container.className = 'screen-rewards';

  var html = '';

  // Header
  html += '<h2 class="rewards-title">My Rewards! \uD83C\uDF81</h2>';

  // Daisy
  html += '<div id="daisy-rewards"></div>';

  // Check if any rewards are set
  var hasAnyReward = false;
  var topics = window.TOPICS || [];
  topics.forEach(function(topic) {
    var reward = state.getReward(topic.id);
    if (reward && reward.text) hasAnyReward = true;
  });

  if (!hasAnyReward) {
    // Empty state
    html += '<div class="rewards-empty">';
    html += '<div style="font-size: 3rem; margin-bottom: var(--gap-md);">\uD83C\uDF81</div>';
    html += '<p style="font-size: var(--font-size-large); font-weight: 700; color: var(--grey-dark);">No rewards yet!</p>';
    html += '<p style="color: var(--grey); margin-top: var(--gap-sm);">Ask Daddy to set up rewards in the Parent Zone!</p>';
    html += '</div>';
  } else {
    // Reward cards
    html += '<div class="rewards-list">';

    topics.forEach(function(topic) {
      var reward = state.getReward(topic.id);
      if (!reward || !reward.text) return;

      var topicComplete = state.isTopicComplete(topic.id);
      var claimed = reward.claimed;

      // Card class
      var cardClass = 'reward-card-item';
      if (!topicComplete) cardClass += ' locked';
      else if (claimed) cardClass += ' claimed';
      else cardClass += ' earned';

      html += '<div class="' + cardClass + '" data-topic="' + topic.id + '">';

      // Topic icon and name
      html += '<div class="reward-card-header">';
      html += '<span class="reward-topic-icon">' + topic.icon + '</span>';
      html += '<div class="reward-topic-info">';
      html += '<div class="reward-topic-name">' + topic.titleEN + '</div>';

      // Progress for locked
      if (!topicComplete) {
        var completedLessons = 0;
        for (var l = 1; l <= 3; l++) {
          var lp = state.getLessonProgress(topic.id, topic.id + '-' + l);
          if (lp && lp.completed) completedLessons++;
        }
        html += '<div class="reward-progress-text">' + completedLessons + '/3 lessons done</div>';
      }

      html += '</div>';
      html += '</div>';

      // Reward content
      html += '<div class="reward-card-body">';
      if (!topicComplete) {
        // Locked - tease the reward
        html += '<div class="reward-locked-text">\uD83D\uDD12 Complete ' + topic.titleIT + ' to reveal!</div>';
      } else {
        // Show the reward
        html += '<div class="reward-text-display">\uD83C\uDF81 ' + reward.text + '</div>';

        // Claim/unclaim button
        if (claimed) {
          html += '<button class="btn btn-reward-claimed" data-topic="' + topic.id + '">\u2705 Done!</button>';
        } else {
          html += '<button class="btn btn-reward-claim" data-topic="' + topic.id + '">\uD83C\uDF89 I got my reward!</button>';
        }
      }
      html += '</div>';

      html += '</div>';
    });

    html += '</div>';
  }

  // Back button
  html += '<div style="text-align: center; padding: var(--gap-lg);">';
  html += '<button class="btn btn-secondary" id="rewards-back">Back Home</button>';
  html += '</div>';

  container.innerHTML = html;

  // Render Daisy
  var daisyEl = document.getElementById('daisy-rewards');
  if (daisyEl) {
    var anyEarned = false;
    topics.forEach(function(t) {
      var r = state.getReward(t.id);
      if (r && r.text && state.isTopicComplete(t.id)) anyEarned = true;
    });
    if (anyEarned) {
      DaisyAvatar.createWithBubble(daisyEl, 'celebrating', 'Look at all your rewards!', 'small');
    } else {
      DaisyAvatar.createWithBubble(daisyEl, 'pointing', 'Keep learning to earn rewards!', 'small');
    }
  }

  // Attach claim/unclaim handlers
  var claimBtns = container.querySelectorAll('.btn-reward-claim');
  claimBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var topicId = btn.getAttribute('data-topic');
      state.claimReward(topicId);
      window.app.audio.play('reward');
      // Re-render
      window.renderRewardsScreen(container);
    });
  });

  var claimedBtns = container.querySelectorAll('.btn-reward-claimed');
  claimedBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var topicId = btn.getAttribute('data-topic');
      // Unclaim - toggle back
      if (state.parentState.rewards[topicId]) {
        state.parentState.rewards[topicId].claimed = false;
        state.saveParent();
      }
      window.app.audio.play('click');
      window.renderRewardsScreen(container);
    });
  });

  // Back button
  var backBtn = document.getElementById('rewards-back');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.app.audio.play('click');
      window.app.router.navigate('/');
    });
  }
};
