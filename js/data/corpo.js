/* ============================================
   Corpo (Body) - K-Pop Demon Hunters Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.CORPO_DATA = {
  id: 'corpo',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'testa',
      english: 'head',
      emoji: '\uD83D\uDDE3\uFE0F',
      hint: 'The demon hunters wear a magical headband on their testa!'
    },
    // 1
    {
      italian: 'occhi',
      english: 'eyes',
      emoji: '\uD83D\uDC40',
      hint: 'The demon hunters use their occhi to spot sneaky demons!'
    },
    // 2
    {
      italian: 'naso',
      english: 'nose',
      emoji: '\uD83D\uDC43',
      hint: 'A demon hunter can smell danger with their naso!'
    },
    // 3
    {
      italian: 'bocca',
      english: 'mouth',
      emoji: '\uD83D\uDC44',
      hint: 'The demon hunters shout battle cries with their bocca!'
    },
    // 4
    {
      italian: 'orecchie',
      english: 'ears',
      emoji: '\uD83D\uDC42',
      hint: 'The demon hunters listen for spooky sounds with their orecchie!'
    },
    // 5
    {
      italian: 'mani',
      english: 'hands',
      emoji: '\uD83E\uDD32',
      hint: 'The demon hunters catch magic energy balls with their mani!'
    },
    // 6
    {
      italian: 'piedi',
      english: 'feet',
      emoji: '\uD83E\uDDB6',
      hint: 'The demon hunters do awesome K-Pop dance kicks with their piedi!'
    },
    // 7
    {
      italian: 'braccia',
      english: 'arms',
      emoji: '\uD83D\uDCAA',
      hint: 'The demon hunters train their braccia to be super strong!'
    },
    // 8
    {
      italian: 'gambe',
      english: 'legs',
      emoji: '\uD83E\uDDB5',
      hint: 'The demon hunters jump super high using their gambe!'
    },
    // 9
    {
      italian: 'capelli',
      english: 'hair',
      emoji: '\uD83D\uDC87',
      hint: 'Every K-Pop demon hunter has cool, colourful capelli!'
    },
    // 10
    {
      italian: 'dita',
      english: 'fingers',
      emoji: '\uD83D\uDD90\uFE0F',
      hint: 'The demon hunters snap their dita to cast spells!'
    },
    // 11
    {
      italian: 'pancia',
      english: 'tummy',
      emoji: '\uD83D\uDE0A',
      hint: 'After training, the demon hunters fill their pancia with yummy food!'
    }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Head to Toe
       ========================================== */
    {
      id: 'corpo-1',
      title: 'Head to Toe',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice: testa
        {
          type: 'multiple-choice',
          prompt: 'What does "testa" mean in English?',
          correctAnswer: 'head',
          options: ['head', 'hands', 'feet', 'nose'],
          daisySays: 'The demon hunters put on their magic headband! Where does it go?',
          speakWord: 'testa'
        },

        // 2. Picture match: occhi
        {
          type: 'picture-match',
          prompt: 'Which picture matches "occhi"?',
          speakWord: 'occhi',
          correctAnswer: 'occhi',
          options: [
            { value: 'occhi', emoji: '\uD83D\uDC40', label: 'occhi' },
            { value: 'naso', emoji: '\uD83D\uDC43', label: 'naso' },
            { value: 'bocca', emoji: '\uD83D\uDC44', label: 'bocca' },
            { value: 'orecchie', emoji: '\uD83D\uDC42', label: 'orecchie' }
          ]
        },

        // 3. Listen and pick: naso
        {
          type: 'listen-pick',
          prompt: 'The demon hunter sniffs out danger! Which body part do you hear?',
          speakWord: 'naso',
          correctAnswer: 'naso',
          options: ['naso', 'bocca', 'testa', 'mani']
        },

        // 4. Multiple choice: bocca
        {
          type: 'multiple-choice',
          prompt: 'The demon hunters shout "ATTACK!" with their "bocca". What is that?',
          correctAnswer: 'mouth',
          options: ['mouth', 'ears', 'eyes', 'head'],
          daisySays: 'Open wide and shout your battle cry! What body part do you use?',
          speakWord: 'bocca'
        },

        // 5. Fill in the blank: orecchie
        {
          type: 'fill-blank',
          prompt: 'What do the demon hunters use to hear sneaky demons?',
          correctAnswer: 'orecchie',
          sentence: 'I listen with my ____.',
          hint: 'It means ears! Starts with O.'
        },

        // 6. Matching: head area body parts
        {
          type: 'matching',
          prompt: 'Match each Italian body part to its English meaning!',
          pairs: [
            { left: 'testa', right: 'head' },
            { left: 'occhi', right: 'eyes' },
            { left: 'naso', right: 'nose' },
            { left: 'bocca', right: 'mouth' }
          ]
        },

        // 7. Picture match: mani
        {
          type: 'picture-match',
          prompt: 'The demon hunter catches an energy ball! Which body part is "mani"?',
          speakWord: 'mani',
          correctAnswer: 'mani',
          options: [
            { value: 'mani', emoji: '\uD83E\uDD32', label: 'mani' },
            { value: 'orecchie', emoji: '\uD83D\uDC42', label: 'orecchie' },
            { value: 'testa', emoji: '\uD83D\uDDE3\uFE0F', label: 'testa' },
            { value: 'occhi', emoji: '\uD83D\uDC40', label: 'occhi' }
          ]
        },

        // 8. Listen and pick: testa
        {
          type: 'listen-pick',
          prompt: 'Time to put on the magic headband! Which body part do you hear?',
          speakWord: 'testa',
          correctAnswer: 'testa',
          options: ['testa', 'mani', 'orecchie', 'naso']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Move Your Body
       ========================================== */
    {
      id: 'corpo-2',
      title: 'Move Your Body',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      exercises: [

        // 1. Multiple choice: piedi
        {
          type: 'multiple-choice',
          prompt: 'What does "piedi" mean in English?',
          correctAnswer: 'feet',
          options: ['feet', 'fingers', 'arms', 'legs'],
          daisySays: 'Stomp stomp! The demon hunters dance with these!',
          speakWord: 'piedi'
        },

        // 2. Picture match: braccia
        {
          type: 'picture-match',
          prompt: 'Which picture matches "braccia"?',
          speakWord: 'braccia',
          correctAnswer: 'braccia',
          options: [
            { value: 'braccia', emoji: '\uD83D\uDCAA', label: 'braccia' },
            { value: 'gambe', emoji: '\uD83E\uDDB5', label: 'gambe' },
            { value: 'piedi', emoji: '\uD83E\uDDB6', label: 'piedi' },
            { value: 'dita', emoji: '\uD83D\uDD90\uFE0F', label: 'dita' }
          ]
        },

        // 3. Listen and pick: gambe
        {
          type: 'listen-pick',
          prompt: 'The demon hunters jump super high! Which body part do you hear?',
          speakWord: 'gambe',
          correctAnswer: 'gambe',
          options: ['gambe', 'braccia', 'piedi', 'pancia']
        },

        // 4. Multiple choice: capelli
        {
          type: 'multiple-choice',
          prompt: 'Every K-Pop demon hunter has cool, colourful "capelli". What is that?',
          correctAnswer: 'hair',
          options: ['hair', 'tummy', 'fingers', 'arms'],
          daisySays: 'K-Pop stars always have the coolest style on their head!',
          speakWord: 'capelli'
        },

        // 5. Fill in the blank: dita
        {
          type: 'fill-blank',
          prompt: 'What do the demon hunters snap to cast a spell?',
          correctAnswer: 'dita',
          sentence: 'I snap my ____ to make magic!',
          hint: 'It means fingers! Starts with D.'
        },

        // 6. Matching: body movement parts
        {
          type: 'matching',
          prompt: 'Match the Italian body parts to their English names!',
          pairs: [
            { left: 'piedi', right: 'feet' },
            { left: 'braccia', right: 'arms' },
            { left: 'gambe', right: 'legs' },
            { left: 'capelli', right: 'hair' }
          ]
        },

        // 7. Picture match: pancia
        {
          type: 'picture-match',
          prompt: 'After training, the hunters are hungry! Which body part is "pancia"?',
          speakWord: 'pancia',
          correctAnswer: 'pancia',
          options: [
            { value: 'pancia', emoji: '\uD83D\uDE0A', label: 'pancia' },
            { value: 'capelli', emoji: '\uD83D\uDC87', label: 'capelli' },
            { value: 'braccia', emoji: '\uD83D\uDCAA', label: 'braccia' },
            { value: 'gambe', emoji: '\uD83E\uDDB5', label: 'gambe' }
          ]
        },

        // 8. Listen and pick: dita
        {
          type: 'listen-pick',
          prompt: 'SNAP! The spell is cast! Which body part do you hear?',
          speakWord: 'dita',
          correctAnswer: 'dita',
          options: ['dita', 'piedi', 'pancia', 'capelli']
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Body Master! (Mixed Review)
       ========================================== */
    {
      id: 'corpo-3',
      title: 'Body Master!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [

        // 1. Matching: big mix
        {
          type: 'matching',
          prompt: 'The demon hunters need to know ALL body parts! Match them up!',
          pairs: [
            { left: 'testa', right: 'head' },
            { left: 'piedi', right: 'feet' },
            { left: 'braccia', right: 'arms' },
            { left: 'pancia', right: 'tummy' }
          ]
        },

        // 2. Multiple choice: gambe
        {
          type: 'multiple-choice',
          prompt: 'The demon hunters jump over a wall using their "gambe". What are those?',
          correctAnswer: 'legs',
          options: ['legs', 'arms', 'hands', 'feet'],
          daisySays: 'JUMP! You need these to leap over walls!',
          speakWord: 'gambe'
        },

        // 3. Picture match: orecchie
        {
          type: 'picture-match',
          prompt: 'Shhh! The hunter listens for demons. Which body part is "orecchie"?',
          speakWord: 'orecchie',
          correctAnswer: 'orecchie',
          options: [
            { value: 'orecchie', emoji: '\uD83D\uDC42', label: 'orecchie' },
            { value: 'occhi', emoji: '\uD83D\uDC40', label: 'occhi' },
            { value: 'naso', emoji: '\uD83D\uDC43', label: 'naso' },
            { value: 'bocca', emoji: '\uD83D\uDC44', label: 'bocca' }
          ]
        },

        // 4. Listen and pick: mani
        {
          type: 'listen-pick',
          prompt: 'The demon hunter grabs the magic sword! What body part do you hear?',
          speakWord: 'mani',
          correctAnswer: 'mani',
          options: ['mani', 'dita', 'braccia', 'piedi']
        },

        // 5. Fill in the blank: capelli
        {
          type: 'fill-blank',
          prompt: 'What do K-Pop demon hunters style before a big show?',
          correctAnswer: 'capelli',
          sentence: 'My ____ are pink and sparkly!',
          hint: 'It means hair! Starts with C.'
        },

        // 6. Multiple choice: dita
        {
          type: 'multiple-choice',
          prompt: 'SNAP! The demon hunters snap their "dita" to cast a spell. What are those?',
          correctAnswer: 'fingers',
          options: ['fingers', 'tummy', 'head', 'ears'],
          daisySays: 'Snap snap! You use these tiny wiggly things to make magic!',
          speakWord: 'dita'
        },

        // 7. Matching: review mix
        {
          type: 'matching',
          prompt: 'Final training round! Match all these body parts to prove you are a Body Master!',
          pairs: [
            { left: 'occhi', right: 'eyes' },
            { left: 'dita', right: 'fingers' },
            { left: 'capelli', right: 'hair' },
            { left: 'gambe', right: 'legs' }
          ]
        },

        // 8. Picture match: grand finale
        {
          type: 'picture-match',
          prompt: 'The demon hunters flex! Which body part is "braccia"?',
          speakWord: 'braccia',
          correctAnswer: 'braccia',
          options: [
            { value: 'braccia', emoji: '\uD83D\uDCAA', label: 'braccia' },
            { value: 'mani', emoji: '\uD83E\uDD32', label: 'mani' },
            { value: 'piedi', emoji: '\uD83E\uDDB6', label: 'piedi' },
            { value: 'pancia', emoji: '\uD83D\uDE0A', label: 'pancia' }
          ]
        }
      ]
    }
  ]
};
