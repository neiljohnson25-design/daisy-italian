/* ============================================
   Star Counter Component
   ============================================ */

window.StarCounter = {
  update: function() {
    var el = document.getElementById('star-count');
    if (el) {
      el.textContent = window.app.state.getTotalStars();
    }
  },

  renderStars: function(container, earned, total) {
    total = total || 3;
    container.innerHTML = '';
    container.className = 'stars-display';

    for (var i = 0; i < total; i++) {
      var star = document.createElement('span');
      star.className = 'star' + (i < earned ? ' earned' : '');
      star.innerHTML = '&#9733;';
      container.appendChild(star);
    }
  },

  animateStars: function(container, earned, total) {
    total = total || 3;
    container.innerHTML = '';
    container.className = 'stars-display';

    for (var i = 0; i < total; i++) {
      var star = document.createElement('span');
      star.className = 'star';
      star.innerHTML = '&#9733;';

      if (i < earned) {
        (function(starEl, delay) {
          setTimeout(function() {
            starEl.classList.add('animating');
            window.app.audio.play('star');
          }, delay);
        })(star, (i + 1) * 500);
      }

      container.appendChild(star);
    }
  }
};
