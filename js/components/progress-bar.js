/* ============================================
   Progress Bar Component
   ============================================ */

window.ProgressBar = {
  render: function(container, current, total) {
    var pct = total > 0 ? Math.round((current / total) * 100) : 0;

    container.innerHTML =
      '<div class="progress-bar-container">' +
        '<div class="progress-bar-fill" style="width: ' + pct + '%;"></div>' +
      '</div>' +
      '<div class="progress-bar-text">' + current + ' / ' + total + '</div>';
  }
};
