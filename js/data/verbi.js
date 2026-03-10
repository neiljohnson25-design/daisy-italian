/* ============================================
   Verbi (Actions) - K-Pop Demon Hunters Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.VERBI_DATA = {
  id: 'verbi',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'mangiare',
      english: 'to eat',
      emoji: '\uD83C\uDF7D\uFE0F',
      hint: 'The demon hunters need energy!'
    },
    // 1
    {
      italian: 'bere',
      english: 'to drink',
      emoji: '\uD83E\uDD64',
      hint: 'Drink the healing potion!'
    },
    // 2
    {
      italian: 'dormire',
      english: 'to sleep',
      emoji: '\uD83D\uDE34',
      hint: 'Even demon hunters need rest!'
    },
    // 3
    {
      italian: 'giocare',
      english: 'to play',
      emoji: '\uD83C\uDFAE',
      hint: 'After training, they have fun!'
    },
    // 4
    {
      italian: 'correre',
      english: 'to run',
      emoji: '\uD83C\uDFC3',
      hint: 'Chase the demons as fast as you can!'
    },
    // 5
    {
      italian: 'saltare',
      english: 'to jump',
      emoji: '\uD83E\uDD98',
      hint: 'Jump over the obstacles!'
    },
    // 6
    {
      italian: 'cantare',
      english: 'to sing',
      emoji: '\uD83C\uDFA4',
      hint: 'K-Pop stars love to do this!'
    },
    // 7
    {
      italian: 'ballare',
      english: 'to dance',
      emoji: '\uD83D\uDC83',
      hint: 'Show off your K-Pop moves!'
    },
    // 8
    {
      italian: 'leggere',
      english: 'to read',
      emoji: '\uD83D\uDCD6',
      hint: 'Read the spell book to learn magic!'
    },
    // 9
    {
      italian: 'disegnare',
      english: 'to draw',
      emoji: '\uD83C\uDFA8',
      hint: 'Draw the battle plans!'
    },
    // 10
    {
      italian: 'nuotare',
      english: 'to swim',
      emoji: '\uD83C\uDFCA',
      hint: 'Swim across the enchanted lake!'
    },
    // 11
    {
      italian: 'volare',
      english: 'to fly',
      emoji: '\uD83D\uDD4A\uFE0F',
      hint: 'Fly through the sky like a demon hunter!'
    }
  ],

  /* ------------------------------------------
     Phrases & Sentences
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'mi piace mangiare', english: 'I like eating', emoji: '\uD83C\uDF7D\uFE0F', hint: 'The demon hunters love to eat after a big battle!' },
    // 1
    { italian: 'voglio giocare', english: 'I want to play', emoji: '\uD83C\uDFAE', hint: 'After defeating demons, it\'s time for fun!' },
    // 2
    { italian: 'posso correre', english: 'I can run', emoji: '\uD83C\uDFC3', hint: 'The hunters are super fast!' },
    // 3
    { italian: 'andiamo a ballare', english: 'let\'s go dancing', emoji: '\uD83D\uDC83', hint: 'K-Pop demon hunters always dance together!' },
    // 4
    { italian: 'imparo a nuotare', english: 'I\'m learning to swim', emoji: '\uD83C\uDFCA', hint: 'Even demon hunters have to learn new skills!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Mi piace cantare e ballare!', english: 'I like singing and dancing!', emoji: '\uD83C\uDFA4\uD83D\uDC83', hint: 'The demon hunters love K-Pop style!' },
    // 6
    { italian: 'Voglio mangiare la pizza!', english: 'I want to eat pizza!', emoji: '\uD83C\uDF55', hint: 'Even demon hunters love Italian food!' },
    // 7
    { italian: 'Andiamo a giocare al parco!', english: 'Let\'s go play at the park!', emoji: '\uD83C\uDF33', hint: 'The demon hunters take a break at the park!' },
    // 8
    { italian: 'Il pesce nuota nel lago!', english: 'The fish swims in the lake!', emoji: '\uD83D\uDC1F\uD83C\uDFDE\uFE0F', hint: 'The enchanted lake is full of magic fish!' },
    // 9
    { italian: 'L\'uccello vola nel cielo!', english: 'The bird flies in the sky!', emoji: '\uD83D\uDC26\uD83C\uDF24\uFE0F', hint: 'The demon hunters\' bird scouts fly above!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Everyday Actions
       vocabIndices: [0,1,2,3,4,5]
       8 exercises
       ========================================== */
    {
      id: 'verbi-1',
      title: 'Everyday Actions',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice: mangiare
        {
          type: 'multiple-choice',
          prompt: 'What does "mangiare" mean in English?',
          correctAnswer: 'to eat',
          options: ['to eat', 'to drink', 'to sleep', 'to run'],
          daisySays: 'The demon hunters need energy after every battle! What do they do?',
          speakWord: 'mangiare'
        },

        // 2. Picture match: bere
        {
          type: 'picture-match',
          prompt: 'The demon hunter grabs a healing potion! Which action is "bere"?',
          speakWord: 'bere',
          correctAnswer: 'bere',
          options: [
            { value: 'bere', emoji: '\uD83E\uDD64', label: 'bere' },
            { value: 'mangiare', emoji: '\uD83C\uDF7D\uFE0F', label: 'mangiare' },
            { value: 'dormire', emoji: '\uD83D\uDE34', label: 'dormire' },
            { value: 'correre', emoji: '\uD83C\uDFC3', label: 'correre' }
          ]
        },

        // 3. Listen and pick: dormire
        {
          type: 'listen-pick',
          prompt: 'The demon hunters rest at camp! Which action word do you hear?',
          speakWord: 'dormire',
          correctAnswer: 'dormire',
          options: ['dormire', 'mangiare', 'giocare', 'saltare']
        },

        // 4. Multiple choice: giocare
        {
          type: 'multiple-choice',
          prompt: 'After training, the demon hunters have fun! What does "giocare" mean?',
          correctAnswer: 'to play',
          options: ['to play', 'to jump', 'to eat', 'to sleep'],
          daisySays: 'The demon hunters love having fun between missions!',
          speakWord: 'giocare'
        },

        // 5. Fill in the blank: correre
        {
          type: 'fill-blank',
          prompt: 'The demon hunters chase the demons! What action is this?',
          correctAnswer: 'correre',
          sentence: 'The hunters ____ as fast as they can!',
          hint: 'It means to run! Starts with C.'
        },

        // 6. Matching: first set of actions
        {
          type: 'matching',
          prompt: 'Match each Italian action to its English meaning!',
          pairs: [
            { left: 'mangiare', right: 'to eat' },
            { left: 'bere', right: 'to drink' },
            { left: 'dormire', right: 'to sleep' },
            { left: 'giocare', right: 'to play' }
          ]
        },

        // 7. Picture match: saltare
        {
          type: 'picture-match',
          prompt: 'The demon hunter leaps over an obstacle! Which action is "saltare"?',
          speakWord: 'saltare',
          correctAnswer: 'saltare',
          options: [
            { value: 'saltare', emoji: '\uD83E\uDD98', label: 'saltare' },
            { value: 'correre', emoji: '\uD83C\uDFC3', label: 'correre' },
            { value: 'bere', emoji: '\uD83E\uDD64', label: 'bere' },
            { value: 'giocare', emoji: '\uD83C\uDFAE', label: 'giocare' }
          ]
        },

        // 8. Listen and pick: correre
        {
          type: 'listen-pick',
          prompt: 'Quick! The demons are escaping! Which action word do you hear?',
          speakWord: 'correre',
          correctAnswer: 'correre',
          options: ['correre', 'saltare', 'dormire', 'bere']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - What I Like To Do
       vocabIndices: [6,7,8,9], phraseIndices: [0,1,2,3,4]
       10 exercises
       ========================================== */
    {
      id: 'verbi-2',
      title: 'What I Like To Do',
      vocabIndices: [6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: cantare
        {
          type: 'multiple-choice',
          prompt: 'K-Pop stars love to do this! What does "cantare" mean?',
          correctAnswer: 'to sing',
          options: ['to sing', 'to dance', 'to read', 'to draw'],
          daisySays: 'Every K-Pop demon hunter needs an amazing voice!',
          speakWord: 'cantare'
        },

        // 2. Listen and pick: ballare
        {
          type: 'listen-pick',
          prompt: 'The demon hunters show off their K-Pop moves! What do you hear?',
          speakWord: 'ballare',
          correctAnswer: 'ballare',
          options: ['ballare', 'cantare', 'leggere', 'disegnare']
        },

        // 3. Multiple choice: phrase - mi piace mangiare
        {
          type: 'multiple-choice',
          prompt: 'What does "mi piace mangiare" mean?',
          correctAnswer: 'I like eating',
          options: ['I like eating', 'I want to play', 'I can run', 'let\'s go dancing'],
          daisySays: 'The demon hunters love a good feast after battle!',
          speakWord: 'mi piace mangiare'
        },

        // 4. Fill in the blank: leggere
        {
          type: 'fill-blank',
          prompt: 'The demon hunter opens the spell book! What action is this?',
          correctAnswer: 'leggere',
          sentence: 'I love to ____ the magic spell book!',
          hint: 'It means to read! Starts with L.'
        },

        // 5. Matching: new verbs and phrases
        {
          type: 'matching',
          prompt: 'Match these action words to their English meanings!',
          pairs: [
            { left: 'cantare', right: 'to sing' },
            { left: 'ballare', right: 'to dance' },
            { left: 'leggere', right: 'to read' },
            { left: 'disegnare', right: 'to draw' }
          ]
        },

        // 6. Translate to Italian: to dance
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'to dance',
          correctAnswer: 'ballare',
          options: ['ballare', 'cantare', 'saltare', 'correre'],
          _trackedWord: 'ballare'
        },

        // 7. Listen and pick: phrase - voglio giocare
        {
          type: 'listen-pick',
          prompt: 'The demon hunter wants something! What phrase do you hear?',
          speakWord: 'voglio giocare',
          correctAnswer: 'voglio giocare',
          options: ['voglio giocare', 'mi piace mangiare', 'posso correre', 'andiamo a ballare']
        },

        // 8. Say it: cantare
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'cantare',
          correctAnswer: 'cantare',
          daisySays: 'Sing it out like a K-Pop demon hunter!'
        },

        // 9. Fill in the blank: phrase - posso correre
        {
          type: 'fill-blank',
          prompt: 'The demon hunter is super fast! Fill in the missing action!',
          correctAnswer: 'correre',
          sentence: 'Posso ____!',
          hint: 'It means to run! Starts with C.'
        },

        // 10. Matching: phrases to English
        {
          type: 'matching',
          prompt: 'Match the demon hunter phrases to their English meanings!',
          pairs: [
            { left: 'mi piace mangiare', right: 'I like eating' },
            { left: 'voglio giocare', right: 'I want to play' },
            { left: 'posso correre', right: 'I can run' },
            { left: 'andiamo a ballare', right: 'let\'s go dancing' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Action Sentences!
       vocabIndices: [10,11], phraseIndices: [5,6,7,8,9]
       10 exercises
       ========================================== */
    {
      id: 'verbi-3',
      title: 'Action Sentences!',
      vocabIndices: [10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: demon hunters plan their day
        {
          type: 'conversation-order',
          prompt: 'Put the demon hunters\' daily plan in order!',
          scenario: 'The demon hunters plan their day!',
          correctOrder: [
            'Buongiorno!',
            'Voglio mangiare la pizza!',
            'Andiamo a giocare al parco!',
            'Mi piace cantare e ballare!',
            'L\'uccello vola nel cielo!',
            'Che bella giornata!'
          ]
        },

        // 2. Listen comprehend: Voglio mangiare la pizza!
        {
          type: 'listen-comprehend',
          sentence: 'Voglio mangiare la pizza!',
          question: 'What does the demon hunter want to eat?',
          correctAnswer: 'Pizza',
          options: ['Pizza', 'Pasta', 'Gelato', 'Cake'],
          daisySays: 'Listen carefully to what the hungry hunter wants!'
        },

        // 3. Sentence build: Mi piace cantare e ballare!
        {
          type: 'sentence-build',
          prompt: 'Build: "I like singing and dancing!"',
          correctOrder: ['Mi', 'piace', 'cantare', 'e', 'ballare'],
          hint: 'I like singing and dancing!',
          daisySays: 'Put the words in order to show your K-Pop love!'
        },

        // 4. Multiple choice: nuotare
        {
          type: 'multiple-choice',
          prompt: 'The demon hunter dives into the enchanted lake! What does "nuotare" mean?',
          correctAnswer: 'to swim',
          options: ['to swim', 'to fly', 'to run', 'to jump'],
          daisySays: 'Splash! The hunter crosses the lake to reach the demon cave!',
          speakWord: 'nuotare'
        },

        // 5. Fill in the blank: volare
        {
          type: 'fill-blank',
          prompt: 'The bird soars through the sky! What action is this?',
          correctAnswer: 'volare',
          sentence: 'L\'uccello ____ nel cielo!',
          hint: 'It means to fly! Starts with V.'
        },

        // 6. Matching: sentences to English
        {
          type: 'matching',
          prompt: 'Match the demon hunter sentences to their English meanings!',
          pairs: [
            { left: 'Mi piace cantare e ballare!', right: 'I like singing and dancing!' },
            { left: 'Voglio mangiare la pizza!', right: 'I want to eat pizza!' },
            { left: 'Il pesce nuota nel lago!', right: 'The fish swims in the lake!' },
            { left: 'L\'uccello vola nel cielo!', right: 'The bird flies in the sky!' }
          ]
        },

        // 7. Multiple choice: sentence - Andiamo a giocare al parco!
        {
          type: 'multiple-choice',
          prompt: 'What does "Andiamo a giocare al parco!" mean?',
          correctAnswer: 'Let\'s go play at the park!',
          options: ['Let\'s go play at the park!', 'I like singing and dancing!', 'I want to eat pizza!', 'The bird flies in the sky!'],
          daisySays: 'The demon hunters take a break from fighting!',
          speakWord: 'Andiamo a giocare al parco'
        },

        // 8. Listen and pick: phrase - Il pesce nuota nel lago!
        {
          type: 'listen-pick',
          prompt: 'Something is splashing in the enchanted lake! What sentence do you hear?',
          speakWord: 'Il pesce nuota nel lago',
          correctAnswer: 'Il pesce nuota nel lago!',
          options: ['Il pesce nuota nel lago!', 'L\'uccello vola nel cielo!', 'Voglio mangiare la pizza!', 'Mi piace cantare e ballare!']
        },

        // 9. Fill in the blank: nuotare in sentence
        {
          type: 'fill-blank',
          prompt: 'The fish is doing something in the lake! Fill in the action!',
          correctAnswer: 'nuota',
          sentence: 'Il pesce ____ nel lago!',
          hint: 'It means swims! Starts with N.'
        },

        // 10. Matching: more sentence pairs
        {
          type: 'matching',
          prompt: 'Final mission! Match all the demon hunter action sentences!',
          pairs: [
            { left: 'Andiamo a giocare al parco!', right: 'Let\'s go play at the park!' },
            { left: 'L\'uccello vola nel cielo!', right: 'The bird flies in the sky!' },
            { left: 'Voglio mangiare la pizza!', right: 'I want to eat pizza!' },
            { left: 'Mi piace cantare e ballare!', right: 'I like singing and dancing!' }
          ]
        }
      ]
    }
  ]
};
