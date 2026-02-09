/* ============================================
   Colori (Colours) - K-Pop Demon Hunters Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.COLORI_DATA = {
  id: 'colori',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'rosso',
      english: 'red',
      emoji: '\uD83D\uDD34',
      hint: 'The colour of the demon hunter\'s power blast!',
      gender: 'masculine'
    },
    // 1
    {
      italian: 'blu',
      english: 'blue',
      emoji: '\uD83D\uDD35',
      hint: 'The colour of the demon hunter\'s shield spell!',
      gender: 'masculine'
    },
    // 2
    {
      italian: 'verde',
      english: 'green',
      emoji: '\uD83D\uDFE2',
      hint: 'The colour of the healing potion the hunters drink!',
      gender: 'masculine'
    },
    // 3
    {
      italian: 'giallo',
      english: 'yellow',
      emoji: '\uD83D\uDFE1',
      hint: 'The colour of the lightning bolt attack!',
      gender: 'masculine'
    },
    // 4
    {
      italian: 'arancione',
      english: 'orange',
      emoji: '\uD83D\uDFE0',
      hint: 'The colour of the fire sword the leader carries!',
      gender: 'masculine'
    },
    // 5
    {
      italian: 'viola',
      english: 'purple',
      emoji: '\uD83D\uDFE3',
      hint: 'The colour of the magical portal the hunters jump through!',
      gender: 'masculine'
    },
    // 6
    {
      italian: 'rosa',
      english: 'pink',
      emoji: '\uD83C\uDF38',
      hint: 'The colour of the cherry blossom dance move!',
      gender: 'masculine'
    },
    // 7
    {
      italian: 'nero',
      english: 'black',
      emoji: '\u26AB',
      hint: 'The colour of the demon\'s cloak - spooky!',
      gender: 'masculine'
    },
    // 8
    {
      italian: 'bianco',
      english: 'white',
      emoji: '\u26AA',
      hint: 'The colour of the angel wings that protect the hunters!',
      gender: 'masculine'
    },
    // 9
    {
      italian: 'marrone',
      english: 'brown',
      emoji: '\uD83D\uDFE4',
      hint: 'The colour of the demon hunter\'s cool leather jacket!',
      gender: 'masculine'
    },
    // 10
    {
      italian: 'grigio',
      english: 'grey',
      emoji: '\uD83E\uDD0D',
      hint: 'The colour of the smoke when a demon disappears - poof!',
      gender: 'masculine'
    },
    // 11
    {
      italian: 'azzurro',
      english: 'light blue',
      emoji: '\uD83E\uDDE3',
      hint: 'The colour of the sky when the hunters win and the sun comes out!',
      gender: 'masculine'
    }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Basic Colours
       ========================================== */
    {
      id: 'colori-1',
      title: 'Basic Colours',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: rosso
        {
          type: 'multiple-choice',
          prompt: 'What does "rosso" mean in English?',
          correctAnswer: 'red',
          options: ['red', 'blue', 'green', 'yellow'],
          daisySays: 'The demon hunters\' power blast is this colour! BOOM!',
          speakWord: 'rosso'
        },

        // 2. Picture match: blu
        {
          type: 'picture-match',
          prompt: 'Which picture matches "blu"?',
          speakWord: 'blu',
          correctAnswer: 'blu',
          options: [
            { value: 'blu', emoji: '\uD83D\uDD35', label: 'blu' },
            { value: 'rosso', emoji: '\uD83D\uDD34', label: 'rosso' },
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' },
            { value: 'giallo', emoji: '\uD83D\uDFE1', label: 'giallo' }
          ]
        },

        // 3. Listen and pick: verde
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which colour do you hear?',
          speakWord: 'verde',
          correctAnswer: 'verde',
          options: ['verde', 'rosso', 'giallo', 'arancione']
        },

        // 4. Multiple choice: giallo
        {
          type: 'multiple-choice',
          prompt: 'The lightning bolt attack is "giallo". What colour is that?',
          correctAnswer: 'yellow',
          options: ['yellow', 'orange', 'red', 'green'],
          daisySays: 'ZAP! The lightning bolt is this colour!',
          speakWord: 'giallo'
        },

        // 5. Fill in the blank: arancione
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing colour!',
          correctAnswer: 'arancione',
          sentence: 'The fire sword is ____.',
          hint: 'It is the colour of oranges! Starts with A.'
        },

        // 6. Matching: all basic colours
        {
          type: 'matching',
          prompt: 'Match each Italian colour to its English meaning!',
          pairs: [
            { left: 'rosso', right: 'red' },
            { left: 'blu', right: 'blue' },
            { left: 'verde', right: 'green' },
            { left: 'giallo', right: 'yellow' }
          ]
        },

        // 7. Picture match: rosso
        {
          type: 'picture-match',
          prompt: 'The demon hunter shouts "ROSSO!" - which colour is it?',
          speakWord: 'rosso',
          correctAnswer: 'rosso',
          options: [
            { value: 'rosso', emoji: '\uD83D\uDD34', label: 'rosso' },
            { value: 'blu', emoji: '\uD83D\uDD35', label: 'blu' },
            { value: 'arancione', emoji: '\uD83D\uDFE0', label: 'arancione' },
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' }
          ]
        },

        // 8. Listen and pick: arancione
        {
          type: 'listen-pick',
          prompt: 'The leader picks up a coloured sword. Which colour do you hear?',
          speakWord: 'arancione',
          correctAnswer: 'arancione',
          options: ['arancione', 'giallo', 'rosso', 'verde']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - More Colours
       ========================================== */
    {
      id: 'colori-2',
      title: 'More Colours',
      vocabIndices: [5, 6, 7, 8],
      exercises: [

        // 1. Multiple choice: viola
        {
          type: 'multiple-choice',
          prompt: 'What does "viola" mean in English?',
          correctAnswer: 'purple',
          options: ['purple', 'pink', 'black', 'white'],
          daisySays: 'The magical portal is this colour! Whoooosh!',
          speakWord: 'viola'
        },

        // 2. Picture match: rosa
        {
          type: 'picture-match',
          prompt: 'Which picture matches "rosa"?',
          speakWord: 'rosa',
          correctAnswer: 'rosa',
          options: [
            { value: 'rosa', emoji: '\uD83C\uDF38', label: 'rosa' },
            { value: 'viola', emoji: '\uD83D\uDFE3', label: 'viola' },
            { value: 'nero', emoji: '\u26AB', label: 'nero' },
            { value: 'bianco', emoji: '\u26AA', label: 'bianco' }
          ]
        },

        // 3. Listen and pick: nero
        {
          type: 'listen-pick',
          prompt: 'Uh oh, a spooky colour! Listen and pick the right one!',
          speakWord: 'nero',
          correctAnswer: 'nero',
          options: ['nero', 'bianco', 'viola', 'rosa']
        },

        // 4. Multiple choice: bianco
        {
          type: 'multiple-choice',
          prompt: 'Angel wings are "bianco". What colour is that?',
          correctAnswer: 'white',
          options: ['white', 'black', 'grey', 'pink'],
          daisySays: 'So bright and sparkly, like angel wings!',
          speakWord: 'bianco'
        },

        // 5. Fill in the blank: viola
        {
          type: 'fill-blank',
          prompt: 'Spell the colour of the magical portal!',
          correctAnswer: 'viola',
          sentence: 'The portal is ____.',
          hint: 'It means purple! Starts with V.'
        },

        // 6. Matching: new colours
        {
          type: 'matching',
          prompt: 'Match the Italian colours to their English names!',
          pairs: [
            { left: 'viola', right: 'purple' },
            { left: 'rosa', right: 'pink' },
            { left: 'nero', right: 'black' },
            { left: 'bianco', right: 'white' }
          ]
        },

        // 7. Picture match: nero
        {
          type: 'picture-match',
          prompt: 'The demon\'s cloak is this colour! Which one is "nero"?',
          speakWord: 'nero',
          correctAnswer: 'nero',
          options: [
            { value: 'nero', emoji: '\u26AB', label: 'nero' },
            { value: 'bianco', emoji: '\u26AA', label: 'bianco' },
            { value: 'rosa', emoji: '\uD83C\uDF38', label: 'rosa' },
            { value: 'viola', emoji: '\uD83D\uDFE3', label: 'viola' }
          ]
        },

        // 8. Listen and pick: rosa
        {
          type: 'listen-pick',
          prompt: 'The cherry blossom dance begins! What colour do you hear?',
          speakWord: 'rosa',
          correctAnswer: 'rosa',
          options: ['rosa', 'viola', 'bianco', 'nero']
        }
      ]
    },

    /* ==========================================
       LESSON 3 - All the Colours! (Mixed Review)
       ========================================== */
    {
      id: 'colori-3',
      title: 'All the Colours!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [

        // 1. Matching: big mix
        {
          type: 'matching',
          prompt: 'The demon hunters need ALL their colours! Match them up!',
          pairs: [
            { left: 'marrone', right: 'brown' },
            { left: 'grigio', right: 'grey' },
            { left: 'azzurro', right: 'light blue' },
            { left: 'arancione', right: 'orange' }
          ]
        },

        // 2. Multiple choice: marrone
        {
          type: 'multiple-choice',
          prompt: 'The demon hunter\'s cool leather jacket is "marrone". What colour is that?',
          correctAnswer: 'brown',
          options: ['brown', 'grey', 'black', 'orange'],
          daisySays: 'Looking cool in their jacket! What colour is it?',
          speakWord: 'marrone'
        },

        // 3. Picture match: azzurro
        {
          type: 'picture-match',
          prompt: 'The sky clears after the battle! Which colour is "azzurro"?',
          speakWord: 'azzurro',
          correctAnswer: 'azzurro',
          options: [
            { value: 'azzurro', emoji: '\uD83E\uDDE3', label: 'azzurro' },
            { value: 'blu', emoji: '\uD83D\uDD35', label: 'blu' },
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' },
            { value: 'viola', emoji: '\uD83D\uDFE3', label: 'viola' }
          ]
        },

        // 4. Listen and pick: grigio
        {
          type: 'listen-pick',
          prompt: 'The demon vanishes in smoke! What colour do you hear?',
          speakWord: 'grigio',
          correctAnswer: 'grigio',
          options: ['grigio', 'bianco', 'nero', 'marrone']
        },

        // 5. Fill in the blank: azzurro
        {
          type: 'fill-blank',
          prompt: 'Spell the colour of the sky after the hunters win!',
          correctAnswer: 'azzurro',
          sentence: 'The sky is ____.',
          hint: 'It means light blue! Starts with A and has double Z.'
        },

        // 6. Multiple choice: grigio
        {
          type: 'multiple-choice',
          prompt: 'Poof! The smoke is "grigio". What colour is that?',
          correctAnswer: 'grey',
          options: ['grey', 'brown', 'white', 'light blue'],
          daisySays: 'When the demon goes POOF! the smoke is this colour!',
          speakWord: 'grigio'
        },

        // 7. Matching: review mix
        {
          type: 'matching',
          prompt: 'Final mission! Match all these colours to prove you\'re a true K-Pop Demon Hunter!',
          pairs: [
            { left: 'rosso', right: 'red' },
            { left: 'viola', right: 'purple' },
            { left: 'nero', right: 'black' },
            { left: 'bianco', right: 'white' }
          ]
        },

        // 8. Picture match: grand finale mix
        {
          type: 'picture-match',
          prompt: 'The demon hunters power up! Pick the colour "verde"!',
          speakWord: 'verde',
          correctAnswer: 'verde',
          options: [
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' },
            { value: 'giallo', emoji: '\uD83D\uDFE1', label: 'giallo' },
            { value: 'marrone', emoji: '\uD83D\uDFE4', label: 'marrone' },
            { value: 'azzurro', emoji: '\uD83E\uDDE3', label: 'azzurro' }
          ]
        }
      ]
    }
  ]
};
