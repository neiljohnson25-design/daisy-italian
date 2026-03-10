/* ============================================
   Al Parco (At the Park) - Disney Princesses Theme
   Merges Animali + Colori + Nature
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.AL_PARCO_DATA = {
  id: 'al-parco',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'albero',
      english: 'tree',
      emoji: '\uD83C\uDF33',
      hint: 'The princess reads under this in the garden!'
    },
    // 1
    {
      italian: 'fiore',
      english: 'flower',
      emoji: '\uD83C\uDF38',
      hint: 'Rapunzel loves picking these!'
    },
    // 2
    {
      italian: 'erba',
      english: 'grass',
      emoji: '\uD83C\uDF3F',
      hint: 'The soft green carpet in the park!'
    },
    // 3
    {
      italian: 'sole',
      english: 'sun',
      emoji: '\u2600\uFE0F',
      hint: 'It shines bright and keeps us warm!'
    },
    // 4
    {
      italian: 'cielo',
      english: 'sky',
      emoji: '\uD83C\uDF24\uFE0F',
      hint: 'Look up! It\'s blue and beautiful!'
    },
    // 5
    {
      italian: 'nuvola',
      english: 'cloud',
      emoji: '\u2601\uFE0F',
      hint: 'White and fluffy in the sky!'
    },
    // 6
    {
      italian: 'palla',
      english: 'ball',
      emoji: '\u26BD',
      hint: 'Kick it, throw it, catch it!'
    },
    // 7
    {
      italian: 'altalena',
      english: 'swing',
      emoji: '\uD83C\uDFA0',
      hint: 'Go back and forth, higher and higher!'
    },
    // 8
    {
      italian: 'scivolo',
      english: 'slide',
      emoji: '\uD83D\uDEDD',
      hint: 'Climb up and whoosh down!'
    },
    // 9
    {
      italian: 'panchina',
      english: 'bench',
      emoji: '\uD83E\uDE91',
      hint: 'Sit down and rest your legs!'
    },
    // 10
    {
      italian: 'lago',
      english: 'lake',
      emoji: '\uD83C\uDFDE\uFE0F',
      hint: 'A big puddle of water with ducks!'
    },
    // 11
    {
      italian: 'farfalla',
      english: 'butterfly',
      emoji: '\uD83E\uDD8B',
      hint: 'It has beautiful colourful wings!'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'l\'albero grande', english: 'the big tree', emoji: '\uD83C\uDF33', hint: 'A tall one in the enchanted forest!' },
    // 1
    { italian: 'il fiore rosso', english: 'the red flower', emoji: '\uD83C\uDF38\uD83D\uDD34', hint: 'Belle\'s favourite from the Beast\'s garden!' },
    // 2
    { italian: 'il cielo blu', english: 'the blue sky', emoji: '\uD83C\uDF24\uFE0F\uD83D\uDD35', hint: 'Look up above the princess castle!' },
    // 3
    { italian: 'la palla verde', english: 'the green ball', emoji: '\u26BD\uD83D\uDFE2', hint: 'Tiana plays with this in the park!' },
    // 4
    { italian: 'il lago piccolo', english: 'the small lake', emoji: '\uD83C\uDFDE\uFE0F', hint: 'Where the princess feeds the ducks!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Andiamo al parco!', english: 'Let\'s go to the park!', emoji: '\uD83C\uDF33', hint: 'The princesses want to go on an adventure!' },
    // 6
    { italian: 'Vedo una farfalla gialla!', english: 'I see a yellow butterfly!', emoji: '\uD83E\uDD8B\uD83D\uDFE1', hint: 'Rapunzel spots something beautiful flying by!' },
    // 7
    { italian: 'Giochiamo con la palla!', english: 'Let\'s play with the ball!', emoji: '\u26BD', hint: 'The princesses want to play together!' },
    // 8
    { italian: 'Il sole \u00E8 caldo oggi!', english: 'The sun is hot today!', emoji: '\u2600\uFE0F', hint: 'Moana knows all about the warm sun!' },
    // 9
    { italian: 'Sediamoci sulla panchina!', english: 'Let\'s sit on the bench!', emoji: '\uD83E\uDE91', hint: 'Time for the princesses to rest!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Nature Words (vocabIndices 0-5)
       ========================================== */
    {
      id: 'al-parco-1',
      title: 'Nature Words',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // Exercise 1: Multiple choice - albero
        {
          type: 'multiple-choice',
          prompt: 'What does "albero" mean in English?',
          correctAnswer: 'tree',
          options: ['tree', 'flower', 'grass', 'cloud'],
          daisySays: 'Belle loves to sit under one of these and read her book!',
          speakWord: 'albero'
        },

        // Exercise 2: Picture match - fiore
        {
          type: 'picture-match',
          prompt: 'Rapunzel is in the garden! Which one is a "fiore"?',
          speakWord: 'fiore',
          correctAnswer: 'fiore',
          options: [
            { value: 'fiore', emoji: '\uD83C\uDF38', label: 'fiore' },
            { value: 'albero', emoji: '\uD83C\uDF33', label: 'albero' },
            { value: 'erba', emoji: '\uD83C\uDF3F', label: 'erba' },
            { value: 'nuvola', emoji: '\u2601\uFE0F', label: 'nuvola' }
          ]
        },

        // Exercise 3: Listen and pick - erba
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which nature word do you hear?',
          speakWord: 'erba',
          correctAnswer: 'erba',
          options: ['erba', 'albero', 'sole', 'fiore']
        },

        // Exercise 4: Multiple choice - sole
        {
          type: 'multiple-choice',
          prompt: 'Moana looks up and sees the bright "sole". What is it?',
          correctAnswer: 'sun',
          options: ['sun', 'sky', 'cloud', 'tree'],
          daisySays: 'It shines down on the princesses and keeps them warm!',
          speakWord: 'sole'
        },

        // Exercise 5: Fill in the blank - cielo
        {
          type: 'fill-blank',
          prompt: 'Jasmine looks up from her magic carpet! Spell the Italian word for "sky"!',
          correctAnswer: 'cielo',
          sentence: 'Jasmine flies through the beautiful ____.',
          hint: 'It means sky! Starts with C.'
        },

        // Exercise 6: Matching - nature words
        {
          type: 'matching',
          prompt: 'Match the Italian nature words to English!',
          pairs: [
            { left: 'albero', right: 'tree' },
            { left: 'fiore', right: 'flower' },
            { left: 'sole', right: 'sun' },
            { left: 'cielo', right: 'sky' }
          ]
        },

        // Exercise 7: Picture match - nuvola
        {
          type: 'picture-match',
          prompt: 'What is fluffy and white in the sky? Which one is a "nuvola"?',
          speakWord: 'nuvola',
          correctAnswer: 'nuvola',
          options: [
            { value: 'nuvola', emoji: '\u2601\uFE0F', label: 'nuvola' },
            { value: 'sole', emoji: '\u2600\uFE0F', label: 'sole' },
            { value: 'fiore', emoji: '\uD83C\uDF38', label: 'fiore' },
            { value: 'erba', emoji: '\uD83C\uDF3F', label: 'erba' }
          ]
        },

        // Exercise 8: Listen and pick - sole
        {
          type: 'listen-pick',
          prompt: 'The princesses feel something warm! What word do you hear?',
          speakWord: 'sole',
          correctAnswer: 'sole',
          options: ['sole', 'cielo', 'nuvola', 'erba']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Park Descriptions (vocabIndices 6-9, phraseIndices 0-4)
       ========================================== */
    {
      id: 'al-parco-2',
      title: 'Park Descriptions',
      vocabIndices: [6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // Exercise 1: Multiple choice - palla
        {
          type: 'multiple-choice',
          prompt: 'What does "palla" mean in English?',
          correctAnswer: 'ball',
          options: ['ball', 'swing', 'slide', 'bench'],
          daisySays: 'The princesses love kicking this around the royal park!',
          speakWord: 'palla'
        },

        // Exercise 2: Listen-pick - altalena
        {
          type: 'listen-pick',
          prompt: 'Rapunzel is at the playground! What word do you hear?',
          speakWord: 'altalena',
          correctAnswer: 'altalena',
          options: ['altalena', 'scivolo', 'panchina', 'palla']
        },

        // Exercise 3: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "il fiore rosso" mean?',
          correctAnswer: 'the red flower',
          options: ['the red flower', 'the big tree', 'the blue sky', 'the green ball'],
          daisySays: 'Belle found a beautiful one in the Beast\'s enchanted garden!',
          speakWord: 'il fiore rosso'
        },

        // Exercise 4: Fill-blank - scivolo
        {
          type: 'fill-blank',
          prompt: 'You climb up and whoosh down! Spell the Italian word for "slide"!',
          correctAnswer: 'scivolo',
          sentence: 'Ariel goes down the ____ - wheee!',
          hint: 'It means slide! Starts with S.'
        },

        // Exercise 5: Matching - park equipment
        {
          type: 'matching',
          prompt: 'Match the Italian park words to English!',
          pairs: [
            { left: 'palla', right: 'ball' },
            { left: 'altalena', right: 'swing' },
            { left: 'scivolo', right: 'slide' },
            { left: 'panchina', right: 'bench' }
          ]
        },

        // Exercise 6: Translate to Italian - the big tree
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'the big tree',
          correctAnswer: 'l\'albero grande',
          options: ['l\'albero grande', 'il fiore rosso', 'il cielo blu', 'la palla verde'],
          _trackedWord: 'albero'
        },

        // Exercise 7: Listen-pick - il cielo blu
        {
          type: 'listen-pick',
          prompt: 'Jasmine is describing what she sees! What phrase do you hear?',
          speakWord: 'il cielo blu',
          correctAnswer: 'il cielo blu',
          options: ['il cielo blu', 'il fiore rosso', 'l\'albero grande', 'la palla verde']
        },

        // Exercise 8: Say it - panchina
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'panchina',
          correctAnswer: 'panchina',
          daisySays: 'The princess sits on the bench to rest! Say it like royalty!'
        },

        // Exercise 9: Fill-blank - phrase context
        {
          type: 'fill-blank',
          prompt: 'What colour is the ball? Fill in the missing word!',
          correctAnswer: 'verde',
          sentence: 'La palla \u00E8 ____.',
          hint: 'It means green! Starts with V.'
        },

        // Exercise 10: Matching - phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian park phrases to English!',
          pairs: [
            { left: 'l\'albero grande', right: 'the big tree' },
            { left: 'il fiore rosso', right: 'the red flower' },
            { left: 'il cielo blu', right: 'the blue sky' },
            { left: 'il lago piccolo', right: 'the small lake' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Park Adventures (vocabIndices 10-11, phraseIndices 5-9)
       ========================================== */
    {
      id: 'al-parco-3',
      title: 'Park Adventures',
      vocabIndices: [10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // Exercise 1: Conversation order - A day at the park!
        {
          type: 'conversation-order',
          prompt: 'Put the princesses\' park day in order!',
          scenario: 'A day at the park!',
          correctOrder: [
            'Andiamo al parco!',
            'Vedo una farfalla gialla!',
            'Giochiamo con la palla!',
            'Il sole \u00E8 caldo oggi!',
            'Sediamoci sulla panchina!'
          ]
        },

        // Exercise 2: Listen comprehend - Vedo una farfalla gialla
        {
          type: 'listen-comprehend',
          sentence: 'Vedo una farfalla gialla!',
          question: 'What does the princess see?',
          correctAnswer: 'A yellow butterfly',
          options: ['A yellow butterfly', 'A red flower', 'A green ball', 'A big tree'],
          daisySays: 'Listen carefully to what Rapunzel spots in the park!'
        },

        // Exercise 3: Sentence build - Andiamo al parco
        {
          type: 'sentence-build',
          prompt: 'Build: "Let\'s go to the park!"',
          correctOrder: ['Andiamo', 'al', 'parco'],
          hint: 'Let\'s go to the park!',
          daisySays: 'Put the words in the right order so we can go on an adventure!'
        },

        // Exercise 4: Multiple choice - lago
        {
          type: 'multiple-choice',
          prompt: 'Ariel sees a beautiful "lago" in the park. What is it?',
          correctAnswer: 'lake',
          options: ['lake', 'tree', 'bench', 'cloud'],
          daisySays: 'Ariel loves anything with water - even in the park!',
          speakWord: 'lago'
        },

        // Exercise 5: Fill-blank - word in sentence context
        {
          type: 'fill-blank',
          prompt: 'The sun is hot! Fill in the missing word!',
          correctAnswer: 'caldo',
          sentence: 'Il sole \u00E8 ____ oggi!',
          hint: 'It means hot! Moana knows all about the warm sun - starts with C.'
        },

        // Exercise 6: Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian park sentences to English!',
          pairs: [
            { left: 'Andiamo al parco', right: 'Let\'s go to the park' },
            { left: 'Giochiamo con la palla', right: 'Let\'s play with the ball' },
            { left: 'Il sole \u00E8 caldo oggi', right: 'The sun is hot today' },
            { left: 'Sediamoci sulla panchina', right: 'Let\'s sit on the bench' }
          ]
        },

        // Exercise 7: Multiple choice - farfalla sentence
        {
          type: 'multiple-choice',
          prompt: 'How do you say "I see a yellow butterfly!" in Italian?',
          correctAnswer: 'Vedo una farfalla gialla!',
          options: ['Vedo una farfalla gialla!', 'Andiamo al parco!', 'Giochiamo con la palla!', 'Il sole \u00E8 caldo oggi!'],
          daisySays: 'Rapunzel sees something beautiful flying in the park!',
          speakWord: 'Vedo una farfalla gialla'
        },

        // Exercise 8: Listen-pick - Giochiamo con la palla
        {
          type: 'listen-pick',
          prompt: 'The princesses want to play! What sentence do you hear?',
          speakWord: 'Giochiamo con la palla',
          correctAnswer: 'Giochiamo con la palla!',
          options: ['Giochiamo con la palla!', 'Andiamo al parco!', 'Vedo una farfalla gialla!', 'Sediamoci sulla panchina!']
        },

        // Exercise 9: Fill-blank - farfalla
        {
          type: 'fill-blank',
          prompt: 'Rapunzel sees something with beautiful wings! Fill in the missing word!',
          correctAnswer: 'farfalla',
          sentence: 'Vedo una ____ gialla!',
          hint: 'It means butterfly! It has colourful wings - starts with F.'
        },

        // Exercise 10: Matching - all park adventure words
        {
          type: 'matching',
          prompt: 'Final princess challenge! Match these park words!',
          pairs: [
            { left: 'lago', right: 'lake' },
            { left: 'farfalla', right: 'butterfly' },
            { left: 'palla', right: 'ball' },
            { left: 'panchina', right: 'bench' }
          ]
        }
      ]
    }
  ]
};
