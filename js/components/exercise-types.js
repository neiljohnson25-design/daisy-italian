/* ============================================
   Exercise Type Renderers
   ============================================ */

window.ExerciseTypes = {

  // ---- Multiple Choice ----
  renderMultipleChoice: function(exercise, area, onAnswer) {
    var html = '';

    // Speaker button if there's a word to speak
    if (exercise.speakWord) {
      html += '<div class="text-center" style="margin-bottom: var(--gap-md);">';
      html += '<button class="btn btn-speaker" onclick="window.app.speech.speak(\'' + exercise.speakWord.replace(/'/g, "\\'") + '\')">&#128264;</button>';
      html += '</div>';
      // Auto-play
      setTimeout(function() { window.app.speech.speak(exercise.speakWord); }, 300);
    }

    html += '<div class="options-grid">';
    var shuffled = this.shuffleArray(exercise.options.slice());
    shuffled.forEach(function(opt) {
      html += '<button class="option-btn" data-answer="' + opt.replace(/"/g, '&quot;') + '">' + opt + '</button>';
    });
    html += '</div>';

    area.innerHTML = html;

    // Attach click handlers
    var buttons = area.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.classList.contains('disabled')) return;
        var answer = btn.getAttribute('data-answer');
        var isCorrect = answer === exercise.correctAnswer;

        // Disable all buttons
        buttons.forEach(function(b) { b.classList.add('disabled'); });

        if (isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
          // Show correct answer
          buttons.forEach(function(b) {
            if (b.getAttribute('data-answer') === exercise.correctAnswer) {
              b.classList.add('revealed');
            }
          });
        }

        setTimeout(function() { onAnswer(isCorrect); }, 800);
      });
    });
  },

  // ---- Listen and Pick ----
  renderListenPick: function(exercise, area, onAnswer) {
    var html = '';

    html += '<div class="text-center" style="margin-bottom: var(--gap-lg);">';
    html += '<button class="btn btn-speaker" style="width: 80px; height: 80px; font-size: 2rem;" onclick="window.app.speech.speak(\'' + exercise.speakWord.replace(/'/g, "\\'") + '\')">&#128264;</button>';
    html += '<p style="margin-top: var(--gap-sm); color: var(--grey-dark); font-weight: 600;">Tap to listen again</p>';
    html += '</div>';

    html += '<div class="options-grid">';
    var shuffled = this.shuffleArray(exercise.options.slice());
    shuffled.forEach(function(opt) {
      html += '<button class="option-btn" data-answer="' + opt.replace(/"/g, '&quot;') + '">' + opt + '</button>';
    });
    html += '</div>';

    area.innerHTML = html;

    // Auto-play the word
    setTimeout(function() { window.app.speech.speak(exercise.speakWord); }, 500);

    // Attach handlers
    var buttons = area.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.classList.contains('disabled')) return;
        var answer = btn.getAttribute('data-answer');
        var isCorrect = answer === exercise.correctAnswer;

        buttons.forEach(function(b) { b.classList.add('disabled'); });

        if (isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
          buttons.forEach(function(b) {
            if (b.getAttribute('data-answer') === exercise.correctAnswer) {
              b.classList.add('revealed');
            }
          });
        }

        setTimeout(function() { onAnswer(isCorrect); }, 800);
      });
    });
  },

  // ---- Matching ----
  renderMatching: function(exercise, area, onAnswer) {
    var self = this;
    var pairs = exercise.pairs;
    var matchedCount = 0;
    var selectedLeft = null;
    var selectedRight = null;
    var attempts = 0;
    var wrongAttempts = 0;

    var leftItems = this.shuffleArray(pairs.map(function(p) { return p.left; }));
    var rightItems = this.shuffleArray(pairs.map(function(p) { return p.right; }));

    var html = '<div class="matching-container">';

    // Left column (Italian)
    html += '<div class="matching-column">';
    leftItems.forEach(function(item) {
      html += '<div class="match-item match-left" data-value="' + item.replace(/"/g, '&quot;') + '">' + item + '</div>';
    });
    html += '</div>';

    // Right column (English)
    html += '<div class="matching-column">';
    rightItems.forEach(function(item) {
      html += '<div class="match-item match-right" data-value="' + item.replace(/"/g, '&quot;') + '">' + item + '</div>';
    });
    html += '</div>';

    html += '</div>';

    area.innerHTML = html;

    // Click handlers
    area.querySelectorAll('.match-left').forEach(function(el) {
      el.addEventListener('click', function() {
        if (el.classList.contains('matched')) return;
        // Deselect previous
        area.querySelectorAll('.match-left.selected').forEach(function(s) { s.classList.remove('selected'); });
        el.classList.add('selected');
        selectedLeft = el.getAttribute('data-value');
        checkMatch();
      });
    });

    area.querySelectorAll('.match-right').forEach(function(el) {
      el.addEventListener('click', function() {
        if (el.classList.contains('matched')) return;
        area.querySelectorAll('.match-right.selected').forEach(function(s) { s.classList.remove('selected'); });
        el.classList.add('selected');
        selectedRight = el.getAttribute('data-value');
        checkMatch();
      });
    });

    function checkMatch() {
      if (!selectedLeft || !selectedRight) return;

      var isMatch = pairs.some(function(p) {
        return p.left === selectedLeft && p.right === selectedRight;
      });

      var leftEl = area.querySelector('.match-left[data-value="' + selectedLeft.replace(/"/g, '\\"') + '"]');
      var rightEl = area.querySelector('.match-right[data-value="' + selectedRight.replace(/"/g, '\\"') + '"]');

      if (isMatch) {
        leftEl.classList.remove('selected');
        rightEl.classList.remove('selected');
        leftEl.classList.add('matched');
        rightEl.classList.add('matched');
        matchedCount++;
        window.app.audio.play('correct');

        // Speak the Italian word
        window.app.speech.speak(selectedLeft);

        if (matchedCount === pairs.length) {
          setTimeout(function() {
            onAnswer(true, wrongAttempts);
          }, 600);
        }
      } else {
        wrongAttempts++;
        leftEl.classList.add('wrong');
        rightEl.classList.add('wrong');
        window.app.audio.play('incorrect');

        setTimeout(function() {
          leftEl.classList.remove('wrong', 'selected');
          rightEl.classList.remove('wrong', 'selected');
        }, 500);
      }

      selectedLeft = null;
      selectedRight = null;
    }
  },

  // ---- Fill in the Blank (Scaffolded Letter Tiles) ----
  // Difficulty levels:
  //   'easy'   = most letters shown, only 1-2 blanks to fill
  //   'medium' = about half the letters are blank
  //   'hard'   = all letters are blank (full spelling from tiles)
  // If not specified, defaults to 'easy'
  renderFillBlank: function(exercise, area, onAnswer) {
    var answer = exercise.correctAnswer.toLowerCase();
    var letters = answer.split('');
    var difficulty = exercise.difficulty || 'easy';

    // Determine which positions are blanks vs given letters
    var blankPositions = this._pickBlanks(letters, difficulty);

    // Build the set of missing letters (what the child needs to fill in)
    var missingLetters = blankPositions.map(function(idx) { return letters[idx]; });

    // Build tile options: the missing letters + some distractors
    var extraLetters = 'abcdefghilmnopqrstuvz'.split('');
    var tileLetters = missingLetters.slice();
    var extraCount = Math.max(2, Math.min(4, 8 - tileLetters.length));
    for (var i = 0; i < extraCount; i++) {
      tileLetters.push(extraLetters[Math.floor(Math.random() * extraLetters.length)]);
    }
    tileLetters = this.shuffleArray(tileLetters);

    var currentBlanks = []; // tracks which blanks have been filled
    var html = '';

    // Prompt with blank
    if (exercise.sentence) {
      html += '<p class="exercise-question">' + exercise.sentence.replace('____', '<span style="border-bottom: 3px solid var(--purple); padding: 0 20px;">____</span>') + '</p>';
    }

    // Show the word with blanks
    html += '<p style="text-align: center; color: var(--grey-dark); font-size: var(--font-size-body); font-weight: 600; margin-bottom: var(--gap-xs);">Fill in the missing letters:</p>';

    // Hint
    if (exercise.hint) {
      html += '<p style="color: var(--grey); font-size: var(--font-size-small); text-align: center; font-style: italic;">' + exercise.hint + '</p>';
    }

    // Word display: given letters shown, blanks as empty slots
    html += '<div class="answer-slots" id="answer-slots">';
    letters.forEach(function(letter, idx) {
      var isBlank = blankPositions.indexOf(idx) !== -1;
      if (isBlank) {
        html += '<div class="answer-slot" data-pos="' + idx + '" data-blank="true"></div>';
      } else {
        // Given letter - shown and locked
        html += '<div class="answer-slot filled" data-pos="' + idx + '" style="border-bottom-color: var(--purple-light); color: var(--purple); opacity: 0.8;">' + letter + '</div>';
      }
    });
    html += '</div>';

    // Letter tiles (only the letters needed + distractors)
    html += '<div class="letter-tiles" id="letter-tiles">';
    tileLetters.forEach(function(letter, idx) {
      html += '<button class="letter-tile" data-index="' + idx + '" data-letter="' + letter + '">' + letter + '</button>';
    });
    html += '</div>';

    // Clear button
    html += '<div class="text-center" style="margin-top: var(--gap-sm);">';
    html += '<button class="btn btn-icon" id="clear-answer" style="font-size: 1rem; width: 40px; height: 40px;" title="Clear">&#10006;</button>';
    html += '</div>';

    area.innerHTML = html;

    var blankSlots = area.querySelectorAll('.answer-slot[data-blank="true"]');
    var tiles = area.querySelectorAll('.letter-tile');
    var filledCount = 0;

    // Tile click handler - fills next empty blank slot
    tiles.forEach(function(tile) {
      tile.addEventListener('click', function() {
        if (tile.classList.contains('used')) return;
        if (filledCount >= blankSlots.length) return;

        tile.classList.add('used');
        var targetSlot = blankSlots[filledCount];
        targetSlot.textContent = tile.getAttribute('data-letter');
        targetSlot.classList.add('filled');

        currentBlanks.push({
          letter: tile.getAttribute('data-letter'),
          tileIndex: parseInt(tile.getAttribute('data-index'))
        });
        filledCount++;

        window.app.audio.play('click');

        // Check if all blanks filled
        if (filledCount === blankSlots.length) {
          // Build the full word and check
          var allSlots = area.querySelectorAll('.answer-slot');
          var attempt = '';
          allSlots.forEach(function(s) { attempt += s.textContent; });
          var isCorrect = attempt === answer;

          if (isCorrect) {
            allSlots.forEach(function(s) { s.style.borderBottomColor = 'var(--green)'; });
          } else {
            blankSlots.forEach(function(s) { s.style.borderBottomColor = 'var(--red)'; });
            // Clear blanks after a moment to let them retry
            setTimeout(function() {
              currentBlanks.forEach(function(c) {
                tiles[c.tileIndex].classList.remove('used');
              });
              currentBlanks = [];
              filledCount = 0;
              blankSlots.forEach(function(s) {
                s.textContent = '';
                s.classList.remove('filled');
                s.style.borderBottomColor = '';
              });
            }, 600);
          }

          setTimeout(function() { onAnswer(isCorrect); }, isCorrect ? 500 : 800);
        }
      });
    });

    // Blank slot click to remove last filled letter
    blankSlots.forEach(function(slot, idx) {
      slot.addEventListener('click', function() {
        if (filledCount > 0 && idx === filledCount - 1) {
          var removed = currentBlanks.pop();
          tiles[removed.tileIndex].classList.remove('used');
          filledCount--;
          blankSlots[filledCount].textContent = '';
          blankSlots[filledCount].classList.remove('filled');
        }
      });
    });

    // Clear button
    var clearBtn = area.querySelector('#clear-answer');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        currentBlanks.forEach(function(c) {
          tiles[c.tileIndex].classList.remove('used');
        });
        currentBlanks = [];
        filledCount = 0;
        blankSlots.forEach(function(s) {
          s.textContent = '';
          s.classList.remove('filled');
          s.style.borderBottomColor = '';
        });
      });
    }
  },

  // Pick which letter positions should be blanks based on difficulty
  _pickBlanks: function(letters, difficulty) {
    var len = letters.length;
    var blankCount;

    if (difficulty === 'easy') {
      // 1-2 blanks max
      blankCount = Math.min(2, Math.max(1, Math.floor(len * 0.2)));
    } else if (difficulty === 'medium') {
      // About half the letters
      blankCount = Math.max(2, Math.floor(len * 0.5));
    } else {
      // Hard: all letters are blanks
      var all = [];
      for (var i = 0; i < len; i++) all.push(i);
      return all;
    }

    // Pick random positions for blanks, but avoid making the first letter blank on easy
    var candidates = [];
    for (var j = 0; j < len; j++) candidates.push(j);

    if (difficulty === 'easy') {
      // Don't blank the first letter on easy - it's a helpful hint
      candidates.shift();
    }

    // Shuffle candidates and pick blankCount
    candidates = this.shuffleArray(candidates);
    return candidates.slice(0, blankCount).sort(function(a, b) { return a - b; });
  },

  // ---- Maths in Italian ----
  renderMaths: function(exercise, area, onAnswer) {
    var numWords = window.NUMERI_DATA ? window.NUMERI_DATA.vocabulary : [];

    function numToItalian(n) {
      var item = numWords.find(function(v) { return v.number === n; });
      return item ? item.italian : String(n);
    }

    var a = exercise.a;
    var b = exercise.b;
    var op = exercise.op;
    var result = exercise.result;
    var opWord = op === '+' ? 'più' : 'meno';

    var html = '';

    // Show the sum in Italian
    html += '<div class="text-center" style="margin-bottom: var(--gap-lg);">';
    html += '<p style="font-size: var(--font-size-large); font-weight: 800; color: var(--purple);">' +
      numToItalian(a) + ' ' + opWord + ' ' + numToItalian(b) + ' fa...?' +
    '</p>';
    html += '<p style="font-size: var(--font-size-medium); color: var(--grey-dark);">' +
      a + ' ' + op + ' ' + b + ' = ?' +
    '</p>';

    // Speaker
    var speakText = numToItalian(a) + ' ' + opWord + ' ' + numToItalian(b) + ' fa';
    html += '<button class="btn btn-speaker" style="margin-top: var(--gap-sm);" onclick="window.app.speech.speak(\'' + speakText.replace(/'/g, "\\'") + '\')">&#128264;</button>';
    html += '</div>';

    // Generate options
    var options = [result];
    while (options.length < 4) {
      var wrong = result + Math.floor(Math.random() * 7) - 3;
      if (wrong >= 0 && wrong <= 20 && options.indexOf(wrong) === -1) {
        options.push(wrong);
      }
    }
    options = this.shuffleArray(options);

    html += '<div class="options-grid">';
    options.forEach(function(opt) {
      html += '<button class="option-btn" data-answer="' + opt + '">' +
        '<span style="font-size: var(--font-size-large);">' + opt + '</span>' +
        '<br><span style="font-size: var(--font-size-small); color: var(--grey-dark);">' + numToItalian(opt) + '</span>' +
      '</button>';
    });
    html += '</div>';

    area.innerHTML = html;

    // Auto speak
    setTimeout(function() { window.app.speech.speak(speakText); }, 400);

    // Handlers
    var buttons = area.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.classList.contains('disabled')) return;
        var answer = parseInt(btn.getAttribute('data-answer'));
        var isCorrect = answer === result;

        buttons.forEach(function(b) { b.classList.add('disabled'); });
        if (isCorrect) {
          btn.classList.add('correct');
          window.app.speech.speak(numToItalian(result));
        } else {
          btn.classList.add('incorrect');
          buttons.forEach(function(b) {
            if (parseInt(b.getAttribute('data-answer')) === result) {
              b.classList.add('revealed');
            }
          });
        }

        setTimeout(function() { onAnswer(isCorrect); }, 800);
      });
    });
  },

  // ---- Conversation Order ----
  renderConversationOrder: function(exercise, area, onAnswer) {
    var correctOrder = exercise.correctOrder;
    var shuffled = this.shuffleArray(correctOrder.slice());
    var placed = [];
    var wrongAttempts = 0;

    var html = '';

    if (exercise.scenario) {
      html += '<p style="text-align: center; color: var(--grey-dark); font-weight: 600; font-style: italic; margin-bottom: var(--gap-md);">' + exercise.scenario + '</p>';
    }

    // Placed area
    html += '<div id="placed-area" class="conversation-items" style="min-height: 50px; margin-bottom: var(--gap-md); padding: var(--gap-sm); background: var(--grey-light); border-radius: var(--radius-md);"></div>';

    // Available phrases
    html += '<div id="available-phrases" class="conversation-items"></div>';

    area.innerHTML = html;

    var placedArea = area.querySelector('#placed-area');
    var availableArea = area.querySelector('#available-phrases');

    renderAvailable();

    function renderAvailable() {
      availableArea.innerHTML = '';
      shuffled.forEach(function(phrase, idx) {
        if (placed.indexOf(phrase) !== -1) return;

        var item = document.createElement('div');
        item.className = 'conversation-item';
        item.innerHTML = '<span>' + phrase + '</span>';
        item.style.cursor = 'pointer';

        // Speaker button
        var speaker = document.createElement('button');
        speaker.className = 'btn-icon';
        speaker.style.width = '32px';
        speaker.style.height = '32px';
        speaker.style.fontSize = '0.9rem';
        speaker.style.flexShrink = '0';
        speaker.innerHTML = '&#128264;';
        speaker.addEventListener('click', function(e) {
          e.stopPropagation();
          window.app.speech.speak(phrase);
        });

        item.insertBefore(speaker, item.firstChild);

        item.addEventListener('click', function() {
          // Check if this is the correct next phrase
          var nextIdx = placed.length;
          if (phrase === correctOrder[nextIdx]) {
            placed.push(phrase);
            renderPlaced();
            renderAvailable();
            window.app.audio.play('correct');
            window.app.speech.speak(phrase);

            if (placed.length === correctOrder.length) {
              setTimeout(function() {
                onAnswer(true, wrongAttempts);
              }, 600);
            }
          } else {
            wrongAttempts++;
            item.classList.add('wrong-order');
            window.app.audio.play('incorrect');
            setTimeout(function() {
              item.classList.remove('wrong-order');
            }, 500);
          }
        });

        availableArea.appendChild(item);
      });
    }

    function renderPlaced() {
      placedArea.innerHTML = '';
      if (placed.length === 0) {
        placedArea.innerHTML = '<p style="text-align: center; color: var(--grey); font-style: italic; padding: var(--gap-sm);">Tap the phrases in the right order...</p>';
        return;
      }
      placed.forEach(function(phrase, idx) {
        var item = document.createElement('div');
        item.className = 'conversation-item placed';
        item.innerHTML = '<span class="item-number">' + (idx + 1) + '</span><span>' + phrase + '</span>';
        placedArea.appendChild(item);
      });
    }

    renderPlaced();
  },

  // ---- Picture Match (uses emoji as pictures) ----
  renderPictureMatch: function(exercise, area, onAnswer) {
    var html = '';

    if (exercise.speakWord) {
      html += '<div class="text-center" style="margin-bottom: var(--gap-md);">';
      html += '<button class="btn btn-speaker" onclick="window.app.speech.speak(\'' + exercise.speakWord.replace(/'/g, "\\'") + '\')">&#128264;</button>';
      html += '</div>';
      setTimeout(function() { window.app.speech.speak(exercise.speakWord); }, 300);
    }

    html += '<div class="options-grid">';
    var shuffled = this.shuffleArray(exercise.options.slice());
    shuffled.forEach(function(opt) {
      html += '<button class="option-btn" data-answer="' + opt.value.replace(/"/g, '&quot;') + '" style="font-size: 2.5rem; padding: var(--gap-lg); flex-direction: column;">' +
        '<span>' + opt.emoji + '</span>' +
        '<span style="font-size: var(--font-size-small);">' + opt.label + '</span>' +
      '</button>';
    });
    html += '</div>';

    area.innerHTML = html;

    var buttons = area.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.classList.contains('disabled')) return;
        var answer = btn.getAttribute('data-answer');
        var isCorrect = answer === exercise.correctAnswer;

        buttons.forEach(function(b) { b.classList.add('disabled'); });
        if (isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('incorrect');
          buttons.forEach(function(b) {
            if (b.getAttribute('data-answer') === exercise.correctAnswer) {
              b.classList.add('revealed');
            }
          });
        }

        setTimeout(function() { onAnswer(isCorrect); }, 800);
      });
    });
  },

  // ---- Utilities ----
  shuffleArray: function(arr) {
    var shuffled = arr.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }
};
