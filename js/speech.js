/* ============================================
   Italian Text-to-Speech Module
   ============================================ */

window.ItalianSpeech = class ItalianSpeech {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voice = null;
    this.ready = false;

    // Chrome loads voices asynchronously
    if (this.synth && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.selectVoice();
    }
    // Try immediately for Firefox/Safari
    this.selectVoice();
  }

  selectVoice() {
    if (!this.synth) return;

    var voices = this.synth.getVoices();
    if (!voices.length) return;

    // Prefer a local Italian voice
    this.voice = voices.find(function(v) {
      return v.lang.startsWith('it') && v.localService;
    });

    // Fallback: any Italian voice
    if (!this.voice) {
      this.voice = voices.find(function(v) {
        return v.lang.startsWith('it');
      });
    }

    this.ready = true;
  }

  speak(text, rateOverride) {
    var self = this;
    var rate = rateOverride || window.app.state.getSpeechRate();

    return new Promise(function(resolve, reject) {
      if (!self.synth) {
        resolve();
        return;
      }

      // Cancel any in-progress speech
      self.synth.cancel();

      var utterance = new SpeechSynthesisUtterance(text);

      if (self.voice) {
        utterance.voice = self.voice;
      }

      utterance.lang = 'it-IT';
      utterance.rate = rate;
      utterance.pitch = 1.1; // Slightly higher, friendlier for children
      utterance.volume = 1.0;

      utterance.onend = function() {
        resolve();
      };

      utterance.onerror = function(e) {
        console.warn('Speech error:', e);
        resolve(); // Resolve anyway so app doesn't break
      };

      // Chrome bug workaround: speech stops after ~15 seconds
      // This isn't an issue for single words/short phrases
      self.synth.speak(utterance);
    });
  }

  // Speak word, pause, speak again slowly
  speakWithRepeat(text) {
    var self = this;
    return self.speak(text).then(function() {
      return new Promise(function(resolve) {
        setTimeout(resolve, 600);
      });
    }).then(function() {
      return self.speak(text, 0.65);
    });
  }

  // Speak and return immediately (fire and forget)
  speakNow(text) {
    this.speak(text);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
};
