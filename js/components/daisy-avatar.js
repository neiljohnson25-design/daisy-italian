/* ============================================
   Daisy Avatar Component
   Dark brown hair in ponytail, friendly face
   ============================================ */

window.DaisyAvatar = {
  // Render Daisy into a container element
  render: function(container, state, size) {
    state = state || 'happy';
    size = size || 'medium';

    var sizeMap = { small: 80, medium: 160, large: 260 };
    var px = sizeMap[size] || 160;

    container.innerHTML = this.buildSVG(state, px);
    container.className = 'daisy-avatar daisy-' + state + ' daisy-' + size;
    container.style.width = px + 'px';
    container.style.height = (px * 1.2) + 'px';
  },

  buildSVG: function(state, size) {
    var s = size;
    var cx = s / 2; // center x
    var headY = s * 0.3;
    var headR = s * 0.18;

    // Determine pose adjustments
    var mouthPath = this.getMouth(state, cx, headY, headR);
    var armLeft = this.getLeftArm(state, cx, s);
    var armRight = this.getRightArm(state, cx, s);
    var extras = this.getExtras(state, cx, headY, s);
    var eyeStyle = this.getEyeStyle(state);

    return '<svg viewBox="0 0 ' + s + ' ' + (s * 1.2) + '" width="' + s + '" height="' + (s * 1.2) + '" xmlns="http://www.w3.org/2000/svg">' +

      // Body (dress/top) - colourful purple dress
      '<ellipse cx="' + cx + '" cy="' + (s * 0.72) + '" rx="' + (s * 0.2) + '" ry="' + (s * 0.18) + '" fill="#A855F7"/>' +

      // Legs
      '<rect x="' + (cx - s * 0.08) + '" y="' + (s * 0.85) + '" width="' + (s * 0.06) + '" height="' + (s * 0.2) + '" rx="' + (s * 0.03) + '" fill="#FDBCB4"/>' +
      '<rect x="' + (cx + s * 0.02) + '" y="' + (s * 0.85) + '" width="' + (s * 0.06) + '" height="' + (s * 0.2) + '" rx="' + (s * 0.03) + '" fill="#FDBCB4"/>' +

      // Shoes
      '<ellipse cx="' + (cx - s * 0.05) + '" cy="' + (s * 1.06) + '" rx="' + (s * 0.05) + '" ry="' + (s * 0.025) + '" fill="#FF6B9D"/>' +
      '<ellipse cx="' + (cx + s * 0.05) + '" cy="' + (s * 1.06) + '" rx="' + (s * 0.05) + '" ry="' + (s * 0.025) + '" fill="#FF6B9D"/>' +

      // Arms
      armLeft + armRight +

      // Neck
      '<rect x="' + (cx - s * 0.03) + '" y="' + (s * 0.44) + '" width="' + (s * 0.06) + '" height="' + (s * 0.08) + '" fill="#FDBCB4"/>' +

      // Head
      '<circle cx="' + cx + '" cy="' + headY + '" r="' + headR + '" fill="#FDBCB4"/>' +

      // Hair (dark brown) - main hair
      '<path d="M' + (cx - headR * 1.05) + ',' + headY + ' ' +
        'Q' + (cx - headR * 1.1) + ',' + (headY - headR * 1.3) + ' ' + cx + ',' + (headY - headR * 1.15) + ' ' +
        'Q' + (cx + headR * 1.1) + ',' + (headY - headR * 1.3) + ' ' + (cx + headR * 1.05) + ',' + headY + '" ' +
        'fill="#4A2C17"/>' +

      // Hair sides
      '<ellipse cx="' + (cx - headR * 0.9) + '" cy="' + (headY + headR * 0.1) + '" rx="' + (headR * 0.25) + '" ry="' + (headR * 0.5) + '" fill="#4A2C17"/>' +
      '<ellipse cx="' + (cx + headR * 0.9) + '" cy="' + (headY + headR * 0.1) + '" rx="' + (headR * 0.25) + '" ry="' + (headR * 0.5) + '" fill="#4A2C17"/>' +

      // Ponytail
      '<g class="daisy-ponytail" style="animation: ponytail-sway 3s ease-in-out infinite;">' +
        '<path d="M' + (cx + headR * 0.3) + ',' + (headY - headR * 0.9) + ' ' +
          'Q' + (cx + headR * 1.8) + ',' + (headY - headR * 0.5) + ' ' +
          (cx + headR * 1.5) + ',' + (headY + headR * 0.8) + ' ' +
          'Q' + (cx + headR * 1.3) + ',' + (headY + headR * 1.2) + ' ' +
          (cx + headR * 1.0) + ',' + (headY + headR * 1.0) + '" ' +
          'fill="#4A2C17" stroke="#3D2213" stroke-width="0.5"/>' +
        // Hair tie
        '<circle cx="' + (cx + headR * 0.5) + '" cy="' + (headY - headR * 0.7) + '" r="' + (headR * 0.12) + '" fill="#FF6B9D"/>' +
      '</g>' +

      // Eyes
      '<g class="daisy-eyes" style="animation: blink 4s ease-in-out infinite;">' +
        // Left eye
        '<ellipse cx="' + (cx - headR * 0.35) + '" cy="' + (headY + headR * 0.05) + '" rx="' + (headR * 0.13) + '" ry="' + (headR * 0.15) + '" fill="#1E1B4B" ' + eyeStyle + '/>' +
        // Left eye sparkle
        '<circle cx="' + (cx - headR * 0.3) + '" cy="' + (headY - headR * 0.02) + '" r="' + (headR * 0.04) + '" fill="white"/>' +
        // Right eye
        '<ellipse cx="' + (cx + headR * 0.35) + '" cy="' + (headY + headR * 0.05) + '" rx="' + (headR * 0.13) + '" ry="' + (headR * 0.15) + '" fill="#1E1B4B" ' + eyeStyle + '/>' +
        // Right eye sparkle
        '<circle cx="' + (cx + headR * 0.4) + '" cy="' + (headY - headR * 0.02) + '" r="' + (headR * 0.04) + '" fill="white"/>' +
      '</g>' +

      // Eyebrows
      '<line x1="' + (cx - headR * 0.5) + '" y1="' + (headY - headR * 0.2) + '" x2="' + (cx - headR * 0.2) + '" y2="' + (headY - headR * 0.25) + '" stroke="#4A2C17" stroke-width="' + (headR * 0.06) + '" stroke-linecap="round"/>' +
      '<line x1="' + (cx + headR * 0.2) + '" y1="' + (headY - headR * 0.25) + '" x2="' + (cx + headR * 0.5) + '" y2="' + (headY - headR * 0.2) + '" stroke="#4A2C17" stroke-width="' + (headR * 0.06) + '" stroke-linecap="round"/>' +

      // Nose
      '<ellipse cx="' + cx + '" cy="' + (headY + headR * 0.25) + '" rx="' + (headR * 0.06) + '" ry="' + (headR * 0.05) + '" fill="#F0A090"/>' +

      // Mouth
      mouthPath +

      // Rosy cheeks
      '<circle cx="' + (cx - headR * 0.5) + '" cy="' + (headY + headR * 0.35) + '" r="' + (headR * 0.1) + '" fill="#FFB3CC" opacity="0.5"/>' +
      '<circle cx="' + (cx + headR * 0.5) + '" cy="' + (headY + headR * 0.35) + '" r="' + (headR * 0.1) + '" fill="#FFB3CC" opacity="0.5"/>' +

      // Extra elements based on state
      extras +

    '</svg>';
  },

  getMouth: function(state, cx, headY, headR) {
    switch (state) {
      case 'celebrating':
        // Big open smile
        return '<path d="M' + (cx - headR * 0.3) + ',' + (headY + headR * 0.4) + ' Q' + cx + ',' + (headY + headR * 0.75) + ' ' + (cx + headR * 0.3) + ',' + (headY + headR * 0.4) + '" fill="#FF6B9D" stroke="#E55A8A" stroke-width="0.5"/>';
      case 'thinking':
        // Small O shape
        return '<circle cx="' + cx + '" cy="' + (headY + headR * 0.45) + '" r="' + (headR * 0.08) + '" fill="#FF6B9D"/>';
      case 'encouraging':
        // Gentle smile
        return '<path d="M' + (cx - headR * 0.2) + ',' + (headY + headR * 0.42) + ' Q' + cx + ',' + (headY + headR * 0.58) + ' ' + (cx + headR * 0.2) + ',' + (headY + headR * 0.42) + '" fill="none" stroke="#E55A8A" stroke-width="' + (headR * 0.06) + '" stroke-linecap="round"/>';
      default:
        // Happy smile
        return '<path d="M' + (cx - headR * 0.25) + ',' + (headY + headR * 0.4) + ' Q' + cx + ',' + (headY + headR * 0.65) + ' ' + (cx + headR * 0.25) + ',' + (headY + headR * 0.4) + '" fill="none" stroke="#E55A8A" stroke-width="' + (headR * 0.06) + '" stroke-linecap="round"/>';
    }
  },

  getLeftArm: function(state, cx, s) {
    var armColor = '#FDBCB4';
    if (state === 'waving' || state === 'celebrating') {
      // Left arm up
      return '<g class="daisy-arm-left" style="animation: wave-arm 1s ease-in-out infinite; transform-origin: ' + (cx - s * 0.18) + 'px ' + (s * 0.58) + 'px;">' +
        '<path d="M' + (cx - s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx - s * 0.35) + ',' + (s * 0.35) + ' ' + (cx - s * 0.3) + ',' + (s * 0.3) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>' +
        // Hand
        '<circle cx="' + (cx - s * 0.3) + '" cy="' + (s * 0.29) + '" r="' + (s * 0.03) + '" fill="' + armColor + '"/>' +
      '</g>';
    }
    // Default: arm down
    return '<path d="M' + (cx - s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx - s * 0.28) + ',' + (s * 0.7) + ' ' + (cx - s * 0.22) + ',' + (s * 0.78) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>';
  },

  getRightArm: function(state, cx, s) {
    var armColor = '#FDBCB4';
    if (state === 'celebrating') {
      // Right arm up
      return '<g class="daisy-arm-right">' +
        '<path d="M' + (cx + s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx + s * 0.35) + ',' + (s * 0.35) + ' ' + (cx + s * 0.3) + ',' + (s * 0.3) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>' +
        '<circle cx="' + (cx + s * 0.3) + '" cy="' + (s * 0.29) + '" r="' + (s * 0.03) + '" fill="' + armColor + '"/>' +
      '</g>';
    }
    if (state === 'pointing') {
      // Right arm pointing forward
      return '<path d="M' + (cx + s * 0.18) + ',' + (s * 0.58) + ' L' + (cx + s * 0.38) + ',' + (s * 0.55) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>';
    }
    if (state === 'thinking') {
      // Hand on chin
      return '<path d="M' + (cx + s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx + s * 0.15) + ',' + (s * 0.42) + ' ' + (cx + s * 0.08) + ',' + (s * 0.38) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>';
    }
    if (state === 'encouraging') {
      // Thumbs up
      return '<g class="daisy-arm-right">' +
        '<path d="M' + (cx + s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx + s * 0.32) + ',' + (s * 0.45) + ' ' + (cx + s * 0.28) + ',' + (s * 0.38) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>' +
        '<circle cx="' + (cx + s * 0.28) + '" cy="' + (s * 0.36) + '" r="' + (s * 0.035) + '" fill="' + armColor + '"/>' +
        // Thumb up
        '<line x1="' + (cx + s * 0.28) + '" y1="' + (s * 0.36) + '" x2="' + (cx + s * 0.28) + '" y2="' + (s * 0.3) + '" stroke="' + armColor + '" stroke-width="' + (s * 0.025) + '" stroke-linecap="round"/>' +
      '</g>';
    }
    // Default: arm down
    return '<path d="M' + (cx + s * 0.18) + ',' + (s * 0.58) + ' Q' + (cx + s * 0.28) + ',' + (s * 0.7) + ' ' + (cx + s * 0.22) + ',' + (s * 0.78) + '" fill="none" stroke="' + armColor + '" stroke-width="' + (s * 0.05) + '" stroke-linecap="round"/>';
  },

  getEyeStyle: function(state) {
    if (state === 'celebrating') {
      return 'ry="0.08"'; // Squished happy eyes
    }
    return '';
  },

  getExtras: function(state, cx, headY, s) {
    var extras = '';

    if (state === 'celebrating') {
      // Stars around
      var starPositions = [
        [cx - s * 0.35, s * 0.15],
        [cx + s * 0.35, s * 0.12],
        [cx - s * 0.25, s * 0.08],
        [cx + s * 0.4, s * 0.22]
      ];
      starPositions.forEach(function(pos, i) {
        extras += '<text x="' + pos[0] + '" y="' + pos[1] + '" font-size="' + (s * 0.08) + '" style="animation: sparkle 1s ease-in-out infinite; animation-delay: ' + (i * 0.2) + 's;">&#9733;</text>';
      });
    }

    if (state === 'thinking') {
      // Question marks
      extras += '<text x="' + (cx + s * 0.25) + '" y="' + (headY - s * 0.15) + '" font-size="' + (s * 0.1) + '" fill="#A855F7" font-weight="bold" style="animation: float 2s ease-in-out infinite;">?</text>';
    }

    return extras;
  },

  // Convenience: create a small avatar with speech bubble
  createWithBubble: function(container, state, text, size) {
    var wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '8px';

    if (text) {
      var bubble = document.createElement('div');
      bubble.className = 'speech-bubble';
      bubble.textContent = text;
      wrapper.appendChild(bubble);
    }

    var avatarDiv = document.createElement('div');
    this.render(avatarDiv, state, size);
    wrapper.appendChild(avatarDiv);

    container.innerHTML = '';
    container.appendChild(wrapper);
  }
};
