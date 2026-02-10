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
     Phrases & Sentences
     ------------------------------------------ */
  phrases: [
    // L2 - Short body phrases (possessive + body part)
    // 0
    { italian: 'le mie mani', english: 'my hands', emoji: '\uD83E\uDD32', hint: 'The demon hunters hold up their powerful hands!' },
    // 1
    { italian: 'i miei piedi', english: 'my feet', emoji: '\uD83E\uDDB6', hint: 'Stomp stomp! The hunters dance with these!' },
    // 2
    { italian: 'i miei occhi', english: 'my eyes', emoji: '\uD83D\uDC40', hint: 'The hunters use these to spot demons in the dark!' },
    // 3
    { italian: 'la mia testa', english: 'my head', emoji: '\uD83D\uDDE3\uFE0F', hint: 'The magic headband goes right on top of this!' },
    // 4
    { italian: 'la mia bocca', english: 'my mouth', emoji: '\uD83D\uDC44', hint: 'The hunters shout the battle cry with this!' },

    // L3 - Full action sentences (commands)
    // 5
    { italian: 'Muovi le mani!', english: 'Move your hands!', emoji: '\uD83E\uDD32\u2728', hint: 'Wave those hands like a K-Pop star!' },
    // 6
    { italian: 'Batti i piedi!', english: 'Stamp your feet!', emoji: '\uD83E\uDDB6\uD83D\uDCA5', hint: 'Stomp the ground to scare the demons!' },
    // 7
    { italian: 'Tocca la testa!', english: 'Touch your head!', emoji: '\uD83D\uDDE3\uFE0F\u270B', hint: 'Tap your head to activate the headband!' },
    // 8
    { italian: 'Apri la bocca!', english: 'Open your mouth!', emoji: '\uD83D\uDC44\uD83D\uDE2E', hint: 'Open wide and roar like a hunter!' },
    // 9
    { italian: 'Alza le braccia!', english: 'Raise your arms!', emoji: '\uD83D\uDCAA\uD83D\uDE4C', hint: 'Reach for the sky \u2013 ultimate power move!' }
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
       LESSON 2 - Body Phrases
       Short possessive phrases with body parts
       ========================================== */
    {
      id: 'corpo-2',
      title: 'Body Phrases',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "le mie mani" mean?',
          correctAnswer: 'my hands',
          options: ['my hands', 'my feet', 'my eyes', 'my head'],
          daisySays: 'The demon hunters hold up their powerful hands!',
          speakWord: 'le mie mani'
        },

        // 2. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "my eyes" in Italian?',
          correctAnswer: 'i miei occhi',
          options: ['i miei occhi', 'i miei piedi', 'la mia testa', 'la mia bocca'],
          daisySays: 'The hunters need these to spot demons hiding in the shadows!',
          speakWord: 'i miei occhi'
        },

        // 3. Listen-pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'The demon hunter is getting ready! What phrase do you hear?',
          speakWord: 'i miei piedi',
          correctAnswer: 'i miei piedi',
          options: ['i miei piedi', 'le mie mani', 'la mia testa', 'i miei occhi']
        },

        // 4. Listen-pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'The hunter shouts a battle cry! What phrase do you hear?',
          speakWord: 'la mia bocca',
          correctAnswer: 'la mia bocca',
          options: ['la mia bocca', 'la mia testa', 'le mie mani', 'i miei piedi']
        },

        // 5. Fill-blank: single word missing from phrase
        {
          type: 'fill-blank',
          prompt: 'The demon hunter wiggles their fingers! Fill in the body part!',
          correctAnswer: 'mani',
          sentence: 'Queste sono le mie ____!',
          hint: 'It means hands! Starts with M.'
        },

        // 6. Fill-blank: single word missing from phrase
        {
          type: 'fill-blank',
          prompt: 'The hunter puts on the magic headband! Fill in the body part!',
          correctAnswer: 'testa',
          sentence: 'Questa \u00E8 la mia ____!',
          hint: 'It means head! Starts with T.'
        },

        // 7. Matching: Italian phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian body phrases to their English meanings!',
          pairs: [
            { left: 'le mie mani', right: 'my hands' },
            { left: 'i miei piedi', right: 'my feet' },
            { left: 'i miei occhi', right: 'my eyes' },
            { left: 'la mia testa', right: 'my head' }
          ]
        },

        // 8. Matching: more body phrases
        {
          type: 'matching',
          prompt: 'Final round! Match these demon hunter body phrases!',
          pairs: [
            { left: 'la mia bocca', right: 'my mouth' },
            { left: 'le mie mani', right: 'my hands' },
            { left: 'la mia testa', right: 'my head' },
            { left: 'i miei piedi', right: 'my feet' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Body Sentences!
       Full action sentences using body parts
       ========================================== */
    {
      id: 'corpo-3',
      title: 'Body Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: demon hunter dance training
        {
          type: 'conversation-order',
          prompt: 'Put the demon hunter dance training in order!',
          scenario: 'The K-Pop demon hunters are practising their battle dance!',
          correctOrder: [
            'Pronti?',
            'Alza le braccia!',
            'Muovi le mani!',
            'Batti i piedi!',
            'Tocca la testa!',
            'Bravissimo!'
          ]
        },

        // 2. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "Muovi le mani!" mean?',
          correctAnswer: 'Move your hands!',
          options: ['Move your hands!', 'Stamp your feet!', 'Touch your head!', 'Raise your arms!'],
          daisySays: 'The demon hunters wave their hands like K-Pop stars!',
          speakWord: 'Muovi le mani'
        },

        // 3. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "Raise your arms!" in Italian?',
          correctAnswer: 'Alza le braccia!',
          options: ['Alza le braccia!', 'Muovi le mani!', 'Batti i piedi!', 'Apri la bocca!'],
          daisySays: 'Reach for the sky \u2013 ultimate demon hunter power move!',
          speakWord: 'Alza le braccia'
        },

        // 4. Listen-pick: hear a sentence
        {
          type: 'listen-pick',
          prompt: 'The dance trainer gives a command! What sentence do you hear?',
          speakWord: 'Batti i piedi',
          correctAnswer: 'Batti i piedi!',
          options: ['Batti i piedi!', 'Muovi le mani!', 'Tocca la testa!', 'Alza le braccia!']
        },

        // 5. Fill-blank: single word in sentence
        {
          type: 'fill-blank',
          prompt: 'The trainer says to move something! Fill in the body part!',
          correctAnswer: 'mani',
          sentence: 'Muovi le ____!',
          hint: 'It means hands! Starts with M.'
        },

        // 6. Fill-blank: single word in sentence
        {
          type: 'fill-blank',
          prompt: 'The demon hunter must touch something! Fill in the body part!',
          correctAnswer: 'testa',
          sentence: 'Tocca la ____!',
          hint: 'It means head! Starts with T.'
        },

        // 7. Matching: action sentences to English
        {
          type: 'matching',
          prompt: 'Match the demon hunter commands to their English meanings!',
          pairs: [
            { left: 'Muovi le mani!', right: 'Move your hands!' },
            { left: 'Batti i piedi!', right: 'Stamp your feet!' },
            { left: 'Tocca la testa!', right: 'Touch your head!' },
            { left: 'Alza le braccia!', right: 'Raise your arms!' }
          ]
        },

        // 8. Matching: more sentence pairs
        {
          type: 'matching',
          prompt: 'Final battle dance! Match all the commands!',
          pairs: [
            { left: 'Apri la bocca!', right: 'Open your mouth!' },
            { left: 'Alza le braccia!', right: 'Raise your arms!' },
            { left: 'Batti i piedi!', right: 'Stamp your feet!' },
            { left: 'Muovi le mani!', right: 'Move your hands!' }
          ]
        }
      ]
    }
  ]
};
