/* ============================================
   In Vacanza (On Holiday) - Vocabulary & Exercises
   Theme: Loud House
   Holiday special: things Daisy needs to say on holiday!
   ============================================ */

window.IN_VACANZA_DATA = {
  id: 'in-vacanza',

  vocabulary: [
    // 0
    { italian: 'ho fame', english: 'I\'m hungry', emoji: '😋', hint: 'Lincoln\'s tummy is rumbling on holiday!' },
    // 1
    { italian: 'ho sete', english: 'I\'m thirsty', emoji: '💧', hint: 'It\'s a hot day and Lincoln needs a drink!' },
    // 2
    { italian: 'l\'acqua', english: 'water', emoji: '💦', hint: 'The most important drink on a hot holiday!' },
    // 3
    { italian: 'voglio', english: 'I want', emoji: '👉', hint: 'When you really want something!' },
    // 4
    { italian: 'posso', english: 'can I / may I', emoji: '🙋', hint: 'The polite way to ask for something!' },
    // 5
    { italian: 'guardare la TV', english: 'to watch TV', emoji: '📺', hint: 'What the Loud kids want to do after the beach!' },
    // 6
    { italian: 'sono stanca', english: 'I\'m tired', emoji: '😴', hint: 'After a big day of holiday adventures!' },
    // 7
    { italian: 'ho caldo', english: 'I\'m hot', emoji: '🥵', hint: 'When the Italian sun is really strong!' },
    // 8
    { italian: 'la spiaggia', english: 'the beach', emoji: '🏖️', hint: 'Where the Loud family spends their holiday days!' },
    // 9
    { italian: 'la piscina', english: 'the swimming pool', emoji: '🏊', hint: 'Splash! Time for a swim at the hotel!' },
    // 10
    { italian: 'andiamo', english: 'let\'s go', emoji: '🚶', hint: 'When it\'s time to head out on an adventure!' },
    // 11
    { italian: 'aiuto', english: 'help', emoji: '🆘', hint: 'An important word to know, just in case!' }
  ],

  phrases: [
    // L2 - Short holiday phrases
    // 0
    { italian: 'Ho fame, Mamma', english: 'I\'m hungry, Mum', emoji: '😋👩', hint: 'Telling Mum your tummy needs food!' },
    // 1
    { italian: 'Voglio l\'acqua', english: 'I want water', emoji: '💦👉', hint: 'You need a drink on this hot day!' },
    // 2
    { italian: 'Posso guardare la TV?', english: 'Can I watch TV?', emoji: '📺🙋', hint: 'Asking politely if you can watch telly!' },
    // 3
    { italian: 'Ho caldo, Papà', english: 'I\'m hot, Dad', emoji: '🥵👨', hint: 'Telling Dad it\'s really warm!' },
    // 4
    { italian: 'Andiamo alla spiaggia!', english: 'Let\'s go to the beach!', emoji: '🏖️🚶', hint: 'Time for a beach adventure!' },

    // L3 - Full holiday sentences
    // 5
    { italian: 'Ho fame. Posso avere la pizza?', english: 'I\'m hungry. Can I have pizza?', emoji: '😋🍕', hint: 'Hungry AND you know what you want!' },
    // 6
    { italian: 'Ho sete. Voglio l\'acqua, per favore.', english: 'I\'m thirsty. I want water, please.', emoji: '💧🙏', hint: 'Thirsty and polite - well done!' },
    // 7
    { italian: 'Sono stanca. Posso guardare la TV?', english: 'I\'m tired. Can I watch TV?', emoji: '😴📺', hint: 'After a big day, time to relax!' },
    // 8
    { italian: 'Andiamo alla piscina!', english: 'Let\'s go to the pool!', emoji: '🏊🚶', hint: 'Time for a splash!' },
    // 9
    { italian: 'Ho caldo. Voglio il gelato!', english: 'I\'m hot. I want ice cream!', emoji: '🥵🍦', hint: 'The perfect solution to a hot day!' }
  ],

  lessons: [

    /* --------------------------------------------------
       Lesson 1 - Holiday Needs (vocabIndices 0-5)
       -------------------------------------------------- */
    {
      id: 'in-vacanza-1',
      title: 'Holiday Needs',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice - ho fame
        {
          type: 'multiple-choice',
          prompt: 'Lincoln\'s tummy is rumbling! What does "Ho fame" mean?',
          correctAnswer: 'I\'m hungry',
          options: ['I\'m hungry', 'I\'m thirsty', 'I\'m tired', 'I\'m hot'],
          daisySays: 'This is super useful on holiday!',
          speakWord: 'Ho fame'
        },

        // 2. Multiple choice - ho sete
        {
          type: 'multiple-choice',
          prompt: 'It\'s a hot day! How do you say "I\'m thirsty" in Italian?',
          correctAnswer: 'ho sete',
          options: ['ho sete', 'ho fame', 'ho caldo', 'voglio'],
          daisySays: 'You\'ll need this one a lot in the Italian sun!',
          speakWord: 'ho sete'
        },

        // 3. Listen-pick - voglio
        {
          type: 'listen-pick',
          prompt: 'Listen! What word means "I want"?',
          speakWord: 'voglio',
          correctAnswer: 'voglio',
          options: ['voglio', 'posso', 'ho fame', 'l\'acqua']
        },

        // 4. Multiple choice - posso
        {
          type: 'multiple-choice',
          prompt: 'What is the polite word for "can I" in Italian?',
          correctAnswer: 'posso',
          options: ['posso', 'voglio', 'andiamo', 'aiuto'],
          daisySays: 'Use this to ask nicely!',
          speakWord: 'posso'
        },

        // 5. Picture match - guardare la TV
        {
          type: 'picture-match',
          prompt: 'The Loud kids want to relax! Tap "guardare la TV"!',
          speakWord: 'guardare la TV',
          correctAnswer: 'guardare la TV',
          options: [
            { value: 'guardare la TV', emoji: '📺', label: 'guardare la TV' },
            { value: 'l\'acqua',       emoji: '💦', label: 'l\'acqua' },
            { value: 'ho fame',        emoji: '😋', label: 'ho fame' },
            { value: 'la spiaggia',    emoji: '🏖️', label: 'la spiaggia' }
          ]
        },

        // 6. Fill-blank - acqua
        {
          type: 'fill-blank',
          prompt: 'You\'re thirsty! What do you need?',
          correctAnswer: 'acqua',
          sentence: 'Voglio l\'____!',
          hint: 'It means "water" - starts with A!'
        },

        // 7. Matching - holiday needs
        {
          type: 'matching',
          prompt: 'Match the Italian words to English!',
          pairs: [
            { left: 'ho fame', right: 'I\'m hungry' },
            { left: 'ho sete', right: 'I\'m thirsty' },
            { left: 'voglio', right: 'I want' },
            { left: 'posso', right: 'can I' }
          ]
        },

        // 8. Listen-pick - l'acqua
        {
          type: 'listen-pick',
          prompt: 'What drink do you hear?',
          speakWord: 'l\'acqua',
          correctAnswer: 'l\'acqua',
          options: ['l\'acqua', 'ho sete', 'voglio', 'posso']
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 2 - Holiday Phrases (vocabIndices 6-11)
       Combining words into useful phrases!
       -------------------------------------------------- */
    {
      id: 'in-vacanza-2',
      title: 'Holiday Phrases',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice - sono stanca
        {
          type: 'multiple-choice',
          prompt: 'After a big day at the beach, Lola says "Sono stanca." What does it mean?',
          correctAnswer: 'I\'m tired',
          options: ['I\'m tired', 'I\'m hungry', 'I\'m hot', 'I\'m thirsty'],
          daisySays: 'Holiday adventures are tiring!',
          speakWord: 'Sono stanca'
        },

        // 2. Multiple choice - ho caldo
        {
          type: 'multiple-choice',
          prompt: 'The sun is blazing! How do you say "I\'m hot"?',
          correctAnswer: 'ho caldo',
          options: ['ho caldo', 'ho fame', 'ho sete', 'sono stanca'],
          daisySays: 'Italy can be really warm!',
          speakWord: 'ho caldo'
        },

        // 3. Listen-pick - Posso guardare la TV?
        {
          type: 'listen-pick',
          prompt: 'The Loud kids are back from the beach! Listen to what they ask!',
          speakWord: 'Posso guardare la TV?',
          correctAnswer: 'Posso guardare la TV?',
          options: ['Posso guardare la TV?', 'Andiamo alla spiaggia!', 'Ho fame, Mamma', 'Voglio l\'acqua']
        },

        // 4. Multiple choice - phrase
        {
          type: 'multiple-choice',
          prompt: 'What does "Andiamo alla spiaggia!" mean?',
          correctAnswer: 'Let\'s go to the beach!',
          options: ['Let\'s go to the beach!', 'Let\'s go to the pool!', 'I\'m tired!', 'Can I watch TV?'],
          daisySays: 'Adventure time!',
          speakWord: 'Andiamo alla spiaggia'
        },

        // 5. Picture match - la piscina
        {
          type: 'picture-match',
          prompt: 'Time for a swim! Tap "la piscina"!',
          speakWord: 'la piscina',
          correctAnswer: 'la piscina',
          options: [
            { value: 'la piscina',  emoji: '🏊', label: 'la piscina' },
            { value: 'la spiaggia', emoji: '🏖️', label: 'la spiaggia' },
            { value: 'la TV',       emoji: '📺', label: 'la TV' },
            { value: 'l\'acqua',    emoji: '💦', label: 'l\'acqua' }
          ]
        },

        // 6. Fill-blank - Sono ____
        {
          type: 'fill-blank',
          prompt: 'You\'re tired after a big day. Fill in the missing word!',
          correctAnswer: 'stanca',
          sentence: 'Sono ____.',
          hint: 'It means "tired" - starts with S!'
        },

        // 7. Translate to Italian - help
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this important word in Italian?',
          english: 'help',
          correctAnswer: 'aiuto',
          options: ['aiuto', 'andiamo', 'posso', 'voglio'],
          _trackedWord: 'aiuto'
        },

        // 8. Matching - holiday phrases
        {
          type: 'matching',
          prompt: 'Match the holiday phrases!',
          pairs: [
            { left: 'Ho fame, Mamma', right: 'I\'m hungry, Mum' },
            { left: 'Voglio l\'acqua', right: 'I want water' },
            { left: 'Posso guardare la TV?', right: 'Can I watch TV?' },
            { left: 'Andiamo alla spiaggia!', right: 'Let\'s go to the beach!' }
          ]
        },

        // 9. Matching - more holiday words
        {
          type: 'matching',
          prompt: 'Match the rest!',
          pairs: [
            { left: 'sono stanca', right: 'I\'m tired' },
            { left: 'ho caldo', right: 'I\'m hot' },
            { left: 'andiamo', right: 'let\'s go' },
            { left: 'aiuto', right: 'help' }
          ]
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 3 - Holiday Conversations! (all vocab, review)
       Full sentences for real holiday situations
       -------------------------------------------------- */
    {
      id: 'in-vacanza-3',
      title: 'Holiday Conversations!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order - a holiday morning
        {
          type: 'conversation-order',
          prompt: 'Put the Loud family\'s holiday morning in order!',
          scenario: 'The Loud family wakes up at their Italian holiday hotel!',
          correctOrder: [
            'Buongiorno!',
            'Ho fame. Posso avere la pizza?',
            'Ho sete. Voglio l\'acqua, per favore.',
            'Andiamo alla spiaggia!',
            'Ho caldo. Voglio il gelato!',
            'Sono stanca. Posso guardare la TV?'
          ]
        },

        // 2. Multiple choice - Ho fame. Posso avere la pizza?
        {
          type: 'multiple-choice',
          prompt: 'What does "Ho fame. Posso avere la pizza?" mean?',
          correctAnswer: 'I\'m hungry. Can I have pizza?',
          options: ['I\'m hungry. Can I have pizza?', 'I\'m thirsty. I want water.', 'I\'m tired. Can I watch TV?', 'I\'m hot. I want ice cream!'],
          daisySays: 'Hungry AND you know what you want!',
          speakWord: 'Ho fame. Posso avere la pizza?'
        },

        // 3. Multiple choice - building sentence
        {
          type: 'multiple-choice',
          prompt: 'How do you say "I\'m thirsty. I want water, please." in Italian?',
          correctAnswer: 'Ho sete. Voglio l\'acqua, per favore.',
          options: ['Ho sete. Voglio l\'acqua, per favore.', 'Ho fame. Posso avere la pizza?', 'Sono stanca. Posso guardare la TV?', 'Andiamo alla piscina!'],
          daisySays: 'Perfect for a hot Italian day!',
          speakWord: 'Ho sete. Voglio l\'acqua, per favore.'
        },

        // 4. Listen-comprehend
        {
          type: 'listen-comprehend',
          sentence: 'Ho caldo. Voglio il gelato!',
          question: 'Why does the speaker want ice cream?',
          correctAnswer: 'Because they\'re hot',
          options: ['Because they\'re hot', 'Because they\'re hungry', 'Because they\'re tired', 'Because they\'re thirsty'],
          daisySays: 'Listen to what they feel!'
        },

        // 5. Sentence-build - I'm hungry
        {
          type: 'sentence-build',
          prompt: 'Build: "I\'m hungry, Mum"',
          correctOrder: ['Ho', 'fame', 'Mamma'],
          hint: 'I\'m hungry, Mum',
          daisySays: 'Tell Mummy you\'re hungry in Italian!'
        },

        // 6. Fill-blank - Posso guardare la ____?
        {
          type: 'fill-blank',
          prompt: 'You want to watch telly! Fill in the missing word!',
          correctAnswer: 'TV',
          sentence: 'Posso guardare la ____?',
          hint: 'Two letters - you watch it at home!'
        },

        // 7. Sentence-build - Let's go to the pool
        {
          type: 'sentence-build',
          prompt: 'Build: "Let\'s go to the pool!"',
          correctOrder: ['Andiamo', 'alla', 'piscina'],
          hint: 'Let\'s go to the pool!',
          daisySays: 'Time for a swim!'
        },

        // 8. Say-it - Ho fame
        {
          type: 'say-it',
          prompt: 'Can you say this? Your tummy is rumbling!',
          italian: 'Ho fame',
          correctAnswer: 'Ho fame',
          daisySays: 'Say it to Mummy when you\'re hungry on holiday!'
        },

        // 9. Matching - full holiday sentences
        {
          type: 'matching',
          prompt: 'Match these holiday sentences!',
          pairs: [
            { left: 'Ho fame. Posso avere la pizza?', right: 'I\'m hungry. Can I have pizza?' },
            { left: 'Ho sete. Voglio l\'acqua.', right: 'I\'m thirsty. I want water.' },
            { left: 'Ho caldo. Voglio il gelato!', right: 'I\'m hot. I want ice cream!' },
            { left: 'Andiamo alla piscina!', right: 'Let\'s go to the pool!' }
          ]
        },

        // 10. Matching - feelings review
        {
          type: 'matching',
          prompt: 'Last match! You\'re ready for your Italian holiday!',
          pairs: [
            { left: 'Sono stanca', right: 'I\'m tired' },
            { left: 'Posso guardare la TV?', right: 'Can I watch TV?' },
            { left: 'la spiaggia', right: 'the beach' },
            { left: 'aiuto', right: 'help' }
          ]
        }
      ]
    }

  ]
};
