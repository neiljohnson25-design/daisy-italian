/* ============================================
   Sound Effects Manager (Web Audio API)
   ============================================ */

window.AudioManager = class AudioManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  getContext() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('Web Audio not available');
        this.enabled = false;
      }
    }
    // Resume if suspended (autoplay policy)
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playTone(frequency, duration, type, volume) {
    var ctx = this.getContext();
    if (!ctx) return;

    var osc = ctx.createOscillator();
    var gain = ctx.createGain();

    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume || 0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }

  play(soundName) {
    if (!this.enabled) return;

    switch (soundName) {
      case 'correct':
        this.playCorrect();
        break;
      case 'incorrect':
        this.playIncorrect();
        break;
      case 'star':
        this.playStar();
        break;
      case 'celebration':
        this.playCelebration();
        break;
      case 'click':
        this.playClick();
        break;
      case 'reward':
        this.playReward();
        break;
      case 'whoosh':
        this.playWhoosh();
        break;
    }
  }

  playCorrect() {
    var ctx = this.getContext();
    if (!ctx) return;

    // Ascending happy chime: C5 -> E5 -> G5
    var notes = [523.25, 659.25, 783.99];
    var self = this;
    notes.forEach(function(freq, i) {
      setTimeout(function() {
        self.playTone(freq, 0.3, 'sine', 0.2);
      }, i * 100);
    });
  }

  playIncorrect() {
    // Gentle low buzz
    this.playTone(200, 0.3, 'sine', 0.1);
    var self = this;
    setTimeout(function() {
      self.playTone(180, 0.3, 'sine', 0.08);
    }, 150);
  }

  playStar() {
    var ctx = this.getContext();
    if (!ctx) return;

    // Sparkle ascending
    var notes = [784, 988, 1175, 1318];
    var self = this;
    notes.forEach(function(freq, i) {
      setTimeout(function() {
        self.playTone(freq, 0.2, 'sine', 0.15);
      }, i * 80);
    });
  }

  playCelebration() {
    var ctx = this.getContext();
    if (!ctx) return;

    // Fanfare
    var notes = [523, 659, 784, 1047, 784, 1047];
    var self = this;
    notes.forEach(function(freq, i) {
      setTimeout(function() {
        self.playTone(freq, 0.25, 'sine', 0.18);
      }, i * 150);
    });
  }

  playClick() {
    this.playTone(800, 0.05, 'sine', 0.1);
  }

  playReward() {
    var ctx = this.getContext();
    if (!ctx) return;

    // Magical reward sound
    var notes = [523, 659, 784, 1047, 1319, 1568];
    var self = this;
    notes.forEach(function(freq, i) {
      setTimeout(function() {
        self.playTone(freq, 0.4, 'sine', 0.15);
      }, i * 120);
    });
  }

  playWhoosh() {
    var ctx = this.getContext();
    if (!ctx) return;

    var osc = ctx.createOscillator();
    var gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  }
};
