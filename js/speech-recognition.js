/* ============================================
   Speech Recognition - Pronunciation Practice
   ============================================ */

window.ItalianRecognition = {
  supported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),

  listen: function(expectedWord, callback) {
    if (!this.supported) {
      callback(false, '');
      return;
    }

    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.lang = 'it-IT';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.continuous = false;

    var timeout = setTimeout(function() {
      recognition.stop();
      callback(false, '');
    }, 5000);

    recognition.onresult = function(event) {
      clearTimeout(timeout);
      var alternatives = [];
      for (var i = 0; i < event.results[0].length; i++) {
        alternatives.push(event.results[0][i].transcript.toLowerCase().trim());
      }

      var expected = expectedWord.toLowerCase().trim();
      var isMatch = alternatives.some(function(alt) {
        return alt === expected || levenshteinDistance(alt, expected) <= 2;
      });

      callback(isMatch, alternatives[0] || '');
    };

    recognition.onerror = function(event) {
      clearTimeout(timeout);
      callback(false, '');
    };

    recognition.onend = function() {
      clearTimeout(timeout);
    };

    try {
      recognition.start();
    } catch (e) {
      clearTimeout(timeout);
      callback(false, '');
    }
  },

  stop: function() {
    // No persistent instance to stop
  }
};

// Levenshtein distance for fuzzy matching child pronunciation
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  var matrix = [];
  for (var i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (var j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (var i = 1; i <= b.length; i++) {
    for (var j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
