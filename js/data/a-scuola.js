/* ============================================
   A Scuola (At School) - Sam and Cat Theme
   School vocabulary + phrases + 3 Lessons
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.A_SCUOLA_DATA = {
  id: 'a-scuola',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'scuola',
      english: 'school',
      emoji: '\uD83C\uDFEB',
      hint: 'Sam and Cat walk here every morning!'
    },
    // 1
    {
      italian: 'libro',
      english: 'book',
      emoji: '\uD83D\uDCD6',
      hint: 'Sam needs this for her homework!'
    },
    // 2
    {
      italian: 'penna',
      english: 'pen',
      emoji: '\uD83D\uDD8A\uFE0F',
      hint: 'Cat uses this to write silly notes!'
    },
    // 3
    {
      italian: 'matita',
      english: 'pencil',
      emoji: '\u270F\uFE0F',
      hint: 'Sam draws pictures with this!'
    },
    // 4
    {
      italian: 'quaderno',
      english: 'notebook',
      emoji: '\uD83D\uDCD3',
      hint: 'Cat writes her secret diary in this!'
    },
    // 5
    {
      italian: 'zaino',
      english: 'backpack',
      emoji: '\uD83C\uDF92',
      hint: 'Sam carries all her stuff in this!'
    },
    // 6
    {
      italian: 'maestra',
      english: 'teacher',
      emoji: '\uD83D\uDC69\u200D\uD83C\uDFEB',
      hint: 'She teaches Sam and Cat new things every day!'
    },
    // 7
    {
      italian: 'amico',
      english: 'friend',
      emoji: '\uD83D\uDC6B',
      hint: 'Sam and Cat are best ones of these!'
    },
    // 8
    {
      italian: 'classe',
      english: 'classroom',
      emoji: '\uD83C\uDFEB',
      hint: 'The room where Sam and Cat learn together!'
    },
    // 9
    {
      italian: 'banco',
      english: 'desk',
      emoji: '\uD83E\uDE91',
      hint: 'Sam sits at this to do her work!'
    },
    // 10
    {
      italian: 'lavagna',
      english: 'whiteboard',
      emoji: '\uD83D\uDCCB',
      hint: 'The teacher writes on this at the front of class!'
    },
    // 11
    {
      italian: 'colore',
      english: 'crayon/colour',
      emoji: '\uD83D\uDD8D\uFE0F',
      hint: 'Cat\'s favourite thing in class - she loves to colour!'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'il mio zaino', english: 'my backpack', emoji: '\uD83C\uDF92', hint: 'Sam never leaves home without it!' },
    // 1
    { italian: 'la mia maestra', english: 'my teacher', emoji: '\uD83D\uDC69\u200D\uD83C\uDFEB', hint: 'Cat waves hello to her every morning!' },
    // 2
    { italian: 'il mio amico', english: 'my friend', emoji: '\uD83D\uDC6B', hint: 'Sam says Cat is her best one!' },
    // 3
    { italian: 'nella classe', english: 'in the classroom', emoji: '\uD83C\uDFEB', hint: 'Where Sam and Cat spend their school day!' },
    // 4
    { italian: 'sul banco', english: 'on the desk', emoji: '\uD83E\uDE91', hint: 'Where Cat puts her things at school!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Vado a scuola!', english: 'I go to school!', emoji: '\uD83C\uDFEB', hint: 'Sam says this every morning!' },
    // 6
    { italian: 'Dov\'\u00E8 il mio libro?', english: 'Where is my book?', emoji: '\uD83D\uDCD6', hint: 'Cat is always losing things!' },
    // 7
    { italian: 'La maestra \u00E8 gentile!', english: 'The teacher is kind!', emoji: '\uD83D\uDC69\u200D\uD83C\uDFEB', hint: 'Sam loves her teacher!' },
    // 8
    { italian: 'Gioco con il mio amico!', english: 'I play with my friend!', emoji: '\uD83D\uDC6B', hint: 'Sam and Cat at break time!' },
    // 9
    { italian: 'Ho dimenticato la penna!', english: 'I forgot the pen!', emoji: '\uD83D\uDD8A\uFE0F', hint: 'Oops! Cat forgot something again!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - School Items (vocabIndices 0-5)
       ========================================== */
    {
      id: 'a-scuola-1',
      title: 'School Items',
      description: 'Learn the Italian words for things you take to school!',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // Exercise 1: Multiple choice - scuola
        {
          type: 'multiple-choice',
          prompt: 'What does "scuola" mean in English?',
          correctAnswer: 'school',
          options: ['school', 'book', 'pencil', 'backpack'],
          daisySays: 'Sam and Cat walk here every morning together!',
          speakWord: 'scuola'
        },

        // Exercise 2: Picture match - libro
        {
          type: 'picture-match',
          prompt: 'Sam needs something for her homework! Which one is a "libro"?',
          speakWord: 'libro',
          correctAnswer: 'libro',
          options: [
            { value: 'libro', emoji: '\uD83D\uDCD6', label: 'libro' },
            { value: 'penna', emoji: '\uD83D\uDD8A\uFE0F', label: 'penna' },
            { value: 'matita', emoji: '\u270F\uFE0F', label: 'matita' },
            { value: 'zaino', emoji: '\uD83C\uDF92', label: 'zaino' }
          ]
        },

        // Exercise 3: Listen and pick - penna
        {
          type: 'listen-pick',
          prompt: 'Cat is writing a note! Which school word do you hear?',
          speakWord: 'penna',
          correctAnswer: 'penna',
          options: ['penna', 'matita', 'libro', 'quaderno']
        },

        // Exercise 4: Multiple choice - matita
        {
          type: 'multiple-choice',
          prompt: 'Sam is drawing with a "matita". What is it?',
          correctAnswer: 'pencil',
          options: ['pencil', 'pen', 'notebook', 'school'],
          daisySays: 'Sam loves drawing pictures of Cat with this!',
          speakWord: 'matita'
        },

        // Exercise 5: Picture match - zaino
        {
          type: 'picture-match',
          prompt: 'Sam is packing for school! Which one is a "zaino"?',
          speakWord: 'zaino',
          correctAnswer: 'zaino',
          options: [
            { value: 'zaino', emoji: '\uD83C\uDF92', label: 'zaino' },
            { value: 'scuola', emoji: '\uD83C\uDFEB', label: 'scuola' },
            { value: 'quaderno', emoji: '\uD83D\uDCD3', label: 'quaderno' },
            { value: 'libro', emoji: '\uD83D\uDCD6', label: 'libro' }
          ]
        },

        // Exercise 6: Listen and pick - quaderno
        {
          type: 'listen-pick',
          prompt: 'Cat writes her secret diary in this! What word do you hear?',
          speakWord: 'quaderno',
          correctAnswer: 'quaderno',
          options: ['quaderno', 'zaino', 'scuola', 'penna']
        },

        // Exercise 7: Matching - school items
        {
          type: 'matching',
          prompt: 'Help Sam pack her bag! Match the Italian words to English!',
          pairs: [
            { left: 'libro', right: 'book' },
            { left: 'penna', right: 'pen' },
            { left: 'matita', right: 'pencil' },
            { left: 'zaino', right: 'backpack' }
          ]
        },

        // Exercise 8: Multiple choice - quaderno
        {
          type: 'multiple-choice',
          prompt: 'What does "quaderno" mean in English?',
          correctAnswer: 'notebook',
          options: ['notebook', 'backpack', 'school', 'pen'],
          daisySays: 'Cat keeps her secret diary in one of these!',
          speakWord: 'quaderno'
        },

        // Exercise 9: Picture match - scuola
        {
          type: 'picture-match',
          prompt: 'Where do Sam and Cat go to learn? Which one is "scuola"?',
          speakWord: 'scuola',
          correctAnswer: 'scuola',
          options: [
            { value: 'scuola', emoji: '\uD83C\uDFEB', label: 'scuola' },
            { value: 'libro', emoji: '\uD83D\uDCD6', label: 'libro' },
            { value: 'matita', emoji: '\u270F\uFE0F', label: 'matita' },
            { value: 'penna', emoji: '\uD83D\uDD8A\uFE0F', label: 'penna' }
          ]
        },

        // Exercise 10: Matching - more school items
        {
          type: 'matching',
          prompt: 'Final challenge! Match all the school items!',
          pairs: [
            { left: 'scuola', right: 'school' },
            { left: 'quaderno', right: 'notebook' },
            { left: 'zaino', right: 'backpack' },
            { left: 'matita', right: 'pencil' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 2 - School People & Places (vocabIndices 6-11, phraseIndices 0-4)
       ========================================== */
    {
      id: 'a-scuola-2',
      title: 'School People & Places',
      description: 'Learn about the people and places at school!',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // Exercise 1: Multiple choice - maestra
        {
          type: 'multiple-choice',
          prompt: 'What does "maestra" mean in English?',
          correctAnswer: 'teacher',
          options: ['teacher', 'friend', 'desk', 'classroom'],
          daisySays: 'She teaches Sam and Cat something new every day!',
          speakWord: 'maestra'
        },

        // Exercise 2: Listen and pick - amico
        {
          type: 'listen-pick',
          prompt: 'Sam and Cat are best ones of these! What word do you hear?',
          speakWord: 'amico',
          correctAnswer: 'amico',
          options: ['amico', 'maestra', 'classe', 'banco']
        },

        // Exercise 3: Multiple choice - classe
        {
          type: 'multiple-choice',
          prompt: 'Sam and Cat learn in the "classe". What is it?',
          correctAnswer: 'classroom',
          options: ['classroom', 'whiteboard', 'desk', 'teacher'],
          daisySays: 'It\'s the room where all the fun learning happens!',
          speakWord: 'classe'
        },

        // Exercise 4: Fill-blank - banco
        {
          type: 'fill-blank',
          prompt: 'Sam sits at this to do her work! Spell the Italian word for "desk"!',
          correctAnswer: 'banco',
          sentence: 'Sam mette il libro sul ____.',
          hint: 'It means desk! Starts with B.'
        },

        // Exercise 5: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "il mio zaino" mean?',
          correctAnswer: 'my backpack',
          options: ['my backpack', 'my teacher', 'my friend', 'on the desk'],
          daisySays: 'Sam never leaves home without it!',
          speakWord: 'il mio zaino'
        },

        // Exercise 6: Matching - school people & places
        {
          type: 'matching',
          prompt: 'Match the Italian school words to English!',
          pairs: [
            { left: 'maestra', right: 'teacher' },
            { left: 'amico', right: 'friend' },
            { left: 'classe', right: 'classroom' },
            { left: 'banco', right: 'desk' }
          ]
        },

        // Exercise 7: Listen and pick - lavagna
        {
          type: 'listen-pick',
          prompt: 'The teacher writes on this! What word do you hear?',
          speakWord: 'lavagna',
          correctAnswer: 'lavagna',
          options: ['lavagna', 'colore', 'banco', 'classe']
        },

        // Exercise 8: Sentence build - il mio amico
        {
          type: 'sentence-build',
          prompt: 'Build: "my friend"',
          correctOrder: ['il', 'mio', 'amico'],
          hint: 'my friend',
          daisySays: 'Sam says Cat is her best friend! Put the words in order!'
        },

        // Exercise 9: Fill-blank - phrase context
        {
          type: 'fill-blank',
          prompt: 'Cat puts her things on the desk! Fill in the missing word!',
          correctAnswer: 'banco',
          sentence: 'Il quaderno \u00E8 sul ____.',
          hint: 'It means desk! Starts with B.'
        },

        // Exercise 10: Matching - phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian school phrases to English!',
          pairs: [
            { left: 'il mio zaino', right: 'my backpack' },
            { left: 'la mia maestra', right: 'my teacher' },
            { left: 'nella classe', right: 'in the classroom' },
            { left: 'sul banco', right: 'on the desk' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - School Day Sentences (all vocab, phraseIndices 5-9)
       ========================================== */
    {
      id: 'a-scuola-3',
      title: 'School Day Sentences',
      description: 'Talk about your school day in Italian!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // Exercise 1: Conversation order - A school day!
        {
          type: 'conversation-order',
          prompt: 'Put Sam and Cat\'s school day in order!',
          scenario: 'A day at school!',
          correctOrder: [
            'Vado a scuola!',
            'La maestra \u00E8 gentile!',
            'Dov\'\u00E8 il mio libro?',
            'Gioco con il mio amico!',
            'Ho dimenticato la penna!'
          ]
        },

        // Exercise 2: Listen comprehend - Dov'è il mio libro?
        {
          type: 'listen-comprehend',
          sentence: 'Dov\'\u00E8 il mio libro?',
          question: 'What is Cat asking?',
          correctAnswer: 'Where is my book?',
          options: ['Where is my book?', 'I like my book', 'Give me the book', 'This is my book'],
          daisySays: 'Listen carefully to what Cat is looking for!'
        },

        // Exercise 3: Sentence build - Vado a scuola
        {
          type: 'sentence-build',
          prompt: 'Build: "I go to school!"',
          correctOrder: ['Vado', 'a', 'scuola'],
          hint: 'I go to school!',
          daisySays: 'Sam says this every single morning! Put the words in order!'
        },

        // Exercise 4: Translate to Italian - The teacher is kind
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'The teacher is kind!',
          correctAnswer: 'La maestra \u00E8 gentile!',
          options: ['La maestra \u00E8 gentile!', 'Vado a scuola!', 'Ho dimenticato la penna!', 'Gioco con il mio amico!'],
          _trackedWord: 'maestra'
        },

        // Exercise 5: Fill-blank - word in sentence context
        {
          type: 'fill-blank',
          prompt: 'Oh no! Cat forgot something! Fill in the missing word!',
          correctAnswer: 'penna',
          sentence: 'Ho dimenticato la ____!',
          hint: 'It means pen! Cat is always forgetting things - starts with P.'
        },

        // Exercise 6: Listen comprehend - La maestra è gentile
        {
          type: 'listen-comprehend',
          sentence: 'La maestra \u00E8 gentile!',
          question: 'What is Sam saying about the teacher?',
          correctAnswer: 'The teacher is kind!',
          options: ['The teacher is kind!', 'The teacher is funny!', 'The teacher is tall!', 'The teacher is here!'],
          daisySays: 'Sam really loves her teacher! Listen to what she says!'
        },

        // Exercise 7: Sentence build - Gioco con il mio amico
        {
          type: 'sentence-build',
          prompt: 'Build: "I play with my friend!"',
          correctOrder: ['Gioco', 'con', 'il', 'mio', 'amico'],
          hint: 'I play with my friend!',
          daisySays: 'Sam and Cat love playing together at break time!'
        },

        // Exercise 8: Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian school sentences to English!',
          pairs: [
            { left: 'Vado a scuola', right: 'I go to school' },
            { left: 'Gioco con il mio amico', right: 'I play with my friend' },
            { left: 'La maestra \u00E8 gentile', right: 'The teacher is kind' },
            { left: 'Ho dimenticato la penna', right: 'I forgot the pen' }
          ]
        },

        // Exercise 9: Translate to Italian - Where is my book?
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'Where is my book?',
          correctAnswer: 'Dov\'\u00E8 il mio libro?',
          options: ['Dov\'\u00E8 il mio libro?', 'Vado a scuola!', 'La maestra \u00E8 gentile!', 'Ho dimenticato la penna!'],
          _trackedWord: 'libro'
        },

        // Exercise 10: Listen comprehend - Gioco con il mio amico
        {
          type: 'listen-comprehend',
          sentence: 'Gioco con il mio amico!',
          question: 'What is Sam doing?',
          correctAnswer: 'Playing with her friend',
          options: ['Playing with her friend', 'Going to school', 'Looking for her book', 'Sitting at her desk'],
          daisySays: 'Sam and Cat have so much fun at break time!'
        }
      ]
    }
  ]
};
