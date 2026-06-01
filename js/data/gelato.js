/* ============================================
   Gelato (Ice Cream) - Vocabulary & Exercises
   Theme: Sam and Cat
   Holiday special: ordering ice cream in Italy!
   ============================================ */

window.GELATO_DATA = {
  id: 'gelato',

  vocabulary: [
    // 0
    { italian: 'il gelato', english: 'the ice cream', emoji: '🍦', hint: 'Sam and Cat\'s favourite holiday treat!' },
    // 1
    { italian: 'cioccolato', english: 'chocolate', emoji: '🍫', hint: 'Cat always picks this dark, yummy flavour!' },
    // 2
    { italian: 'fragola', english: 'strawberry', emoji: '🍓', hint: 'A pink fruity flavour - Sam loves it!' },
    // 3
    { italian: 'vaniglia', english: 'vanilla', emoji: '🍦', hint: 'The classic creamy white flavour!' },
    // 4
    { italian: 'limone', english: 'lemon', emoji: '🍋', hint: 'A tangy yellow flavour - perfect on a hot day!' },
    // 5
    { italian: 'pistacchio', english: 'pistachio', emoji: '🟢', hint: 'The green nutty one - very Italian!' },
    // 6
    { italian: 'il cono', english: 'the cone', emoji: '🍦', hint: 'You eat your gelato in one of these!' },
    // 7
    { italian: 'la coppetta', english: 'the cup', emoji: '🥤', hint: 'If you don\'t want a cone, ask for this!' },
    // 8
    { italian: 'grande', english: 'big / large', emoji: '⬆️', hint: 'Sam always wants the biggest one!' },
    // 9
    { italian: 'piccolo', english: 'small', emoji: '⬇️', hint: 'Cat sometimes picks the little one!' },
    // 10
    { italian: 'panna', english: 'cream / whipped cream', emoji: '🍨', hint: 'Would you like cream on top?' },
    // 11
    { italian: 'nocciola', english: 'hazelnut', emoji: '🌰', hint: 'A nutty brown flavour - like Nutella!' }
  ],

  phrases: [
    // L2 - Short ice cream phrases
    // 0
    { italian: 'Un gelato, per favore', english: 'An ice cream, please', emoji: '🍦🙏', hint: 'Sam politely asks for a treat!' },
    // 1
    { italian: 'Che gusti avete?', english: 'What flavours do you have?', emoji: '🍦❓', hint: 'Cat wants to know what\'s available!' },
    // 2
    { italian: 'Vorrei il cioccolato', english: 'I\'d like chocolate', emoji: '🍫🙏', hint: 'Politely choosing your flavour!' },
    // 3
    { italian: 'In un cono, per favore', english: 'In a cone, please', emoji: '🍦🙏', hint: 'Tell them how you want it served!' },
    // 4
    { italian: 'In una coppetta, per favore', english: 'In a cup, please', emoji: '🥤🙏', hint: 'A cup is less messy on a hot day!' },

    // L3 - Full ordering sentences
    // 5
    { italian: 'Vorrei un gelato alla fragola, per favore', english: 'I\'d like a strawberry ice cream, please', emoji: '🍓🍦', hint: 'A full order for Sam\'s favourite!' },
    // 6
    { italian: 'Due gusti in un cono, per favore', english: 'Two flavours in a cone, please', emoji: '🍦🍦', hint: 'In Italy you can pick two flavours!' },
    // 7
    { italian: 'Con panna, per favore', english: 'With cream, please', emoji: '🍨🙏', hint: 'Add whipped cream on top - yum!' },
    // 8
    { italian: 'Quanto costa?', english: 'How much does it cost?', emoji: '💰❓', hint: 'Always good to know the price!' },
    // 9
    { italian: 'È buonissimo!', english: 'It\'s delicious!', emoji: '🍦😋', hint: 'What you say after the first lick!' }
  ],

  lessons: [

    /* --------------------------------------------------
       Lesson 1 - Gelato Flavours (vocabIndices 0-5)
       -------------------------------------------------- */
    {
      id: 'gelato-1',
      title: 'Gelato Flavours',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice - gelato
        {
          type: 'multiple-choice',
          prompt: 'You\'re in Italy and it\'s HOT! What is "gelato"?',
          correctAnswer: 'ice cream',
          options: ['ice cream', 'chocolate', 'cake', 'lemon'],
          daisySays: 'This is the BEST thing about Italy!',
          speakWord: 'gelato'
        },

        // 2. Picture match - cioccolato
        {
          type: 'picture-match',
          prompt: 'Tap the flavour that matches "cioccolato"!',
          speakWord: 'cioccolato',
          correctAnswer: 'cioccolato',
          options: [
            { value: 'cioccolato', emoji: '🍫', label: 'cioccolato' },
            { value: 'fragola',    emoji: '🍓', label: 'fragola' },
            { value: 'limone',     emoji: '🍋', label: 'limone' },
            { value: 'vaniglia',   emoji: '🍦', label: 'vaniglia' }
          ]
        },

        // 3. Listen and pick - fragola
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which ice cream flavour do you hear?',
          speakWord: 'fragola',
          correctAnswer: 'fragola',
          options: ['fragola', 'vaniglia', 'cioccolato', 'limone']
        },

        // 4. Multiple choice - limone
        {
          type: 'multiple-choice',
          prompt: 'How do you say "lemon" in Italian?',
          correctAnswer: 'limone',
          options: ['limone', 'fragola', 'pistacchio', 'vaniglia'],
          daisySays: 'This tangy yellow flavour is perfect on a hot day!',
          speakWord: 'limone'
        },

        // 5. Picture match - pistacchio
        {
          type: 'picture-match',
          prompt: 'Tap the picture that matches "pistacchio"!',
          speakWord: 'pistacchio',
          correctAnswer: 'pistacchio',
          options: [
            { value: 'pistacchio', emoji: '🟢', label: 'pistacchio' },
            { value: 'cioccolato', emoji: '🍫', label: 'cioccolato' },
            { value: 'fragola',    emoji: '🍓', label: 'fragola' },
            { value: 'limone',     emoji: '🍋', label: 'limone' }
          ]
        },

        // 6. Fill in the blank - vaniglia
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "vanilla"!',
          correctAnswer: 'vaniglia',
          sentence: 'The classic creamy flavour is ____.',
          hint: 'It starts with V and has 8 letters!'
        },

        // 7. Matching - all flavours
        {
          type: 'matching',
          prompt: 'Match the Italian flavours to English!',
          pairs: [
            { left: 'cioccolato', right: 'chocolate' },
            { left: 'fragola',    right: 'strawberry' },
            { left: 'vaniglia',   right: 'vanilla' },
            { left: 'limone',     right: 'lemon' }
          ]
        },

        // 8. Listen and pick - pistacchio
        {
          type: 'listen-pick',
          prompt: 'This is a very Italian flavour! Listen and pick!',
          speakWord: 'pistacchio',
          correctAnswer: 'pistacchio',
          options: ['pistacchio', 'fragola', 'cioccolato', 'vaniglia']
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 2 - At the Gelateria (vocabIndices 6-11)
       Cone or cup, big or small!
       -------------------------------------------------- */
    {
      id: 'gelato-2',
      title: 'At the Gelateria',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice - cono vs coppetta
        {
          type: 'multiple-choice',
          prompt: 'The gelateria man asks: "Cono o coppetta?" What is a "cono"?',
          correctAnswer: 'a cone',
          options: ['a cone', 'a cup', 'a spoon', 'a plate'],
          daisySays: 'Cone or cup? Big decision!',
          speakWord: 'cono'
        },

        // 2. Multiple choice - coppetta
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the cup" in Italian?',
          correctAnswer: 'la coppetta',
          options: ['la coppetta', 'il cono', 'il gelato', 'la panna'],
          daisySays: 'Sometimes a cup is easier on a hot day!',
          speakWord: 'la coppetta'
        },

        // 3. Listen-pick - grande
        {
          type: 'listen-pick',
          prompt: 'Sam always wants the biggest ice cream! Listen!',
          speakWord: 'grande',
          correctAnswer: 'grande',
          options: ['grande', 'piccolo', 'cono', 'coppetta']
        },

        // 4. Multiple choice - phrase
        {
          type: 'multiple-choice',
          prompt: 'What does "Un gelato, per favore" mean?',
          correctAnswer: 'An ice cream, please',
          options: ['An ice cream, please', 'What flavours do you have?', 'In a cone, please', 'How much does it cost?'],
          daisySays: 'Always say per favore - it\'s polite!',
          speakWord: 'Un gelato, per favore'
        },

        // 5. Translate to Italian - nocciola
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this flavour in Italian?',
          english: 'hazelnut',
          correctAnswer: 'nocciola',
          options: ['nocciola', 'pistacchio', 'vaniglia', 'fragola'],
          _trackedWord: 'nocciola'
        },

        // 6. Fill-blank - Vorrei il ____
        {
          type: 'fill-blank',
          prompt: 'You want chocolate! Fill in the missing word!',
          correctAnswer: 'cioccolato',
          sentence: 'Vorrei il ____.',
          hint: 'Your favourite brown flavour! Starts with C.'
        },

        // 7. Say-it - per favore
        {
          type: 'say-it',
          prompt: 'Can you say this polite word?',
          italian: 'per favore',
          correctAnswer: 'per favore',
          daisySays: 'Always be polite when ordering gelato!'
        },

        // 8. Matching - ordering phrases
        {
          type: 'matching',
          prompt: 'Match the ordering phrases!',
          pairs: [
            { left: 'Un gelato, per favore', right: 'An ice cream, please' },
            { left: 'Vorrei il cioccolato', right: 'I\'d like chocolate' },
            { left: 'In un cono', right: 'In a cone' },
            { left: 'In una coppetta', right: 'In a cup' }
          ]
        },

        // 9. Matching - sizes and extras
        {
          type: 'matching',
          prompt: 'Match the sizes and extras!',
          pairs: [
            { left: 'grande', right: 'big / large' },
            { left: 'piccolo', right: 'small' },
            { left: 'panna', right: 'whipped cream' },
            { left: 'nocciola', right: 'hazelnut' }
          ]
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 3 - Ordering Like a Pro! (all vocab, review)
       Full ordering conversations
       -------------------------------------------------- */
    {
      id: 'gelato-3',
      title: 'Ordering Like a Pro!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order - ordering gelato
        {
          type: 'conversation-order',
          prompt: 'Put the gelato order in the right order!',
          scenario: 'You walk into a gelateria in Italy on a sunny day!',
          correctOrder: [
            'Ciao!',
            'Che gusti avete?',
            'Vorrei il cioccolato e la fragola.',
            'In un cono, per favore.',
            'Con panna, per favore!',
            'Quanto costa?',
            'Grazie!',
            'È buonissimo!'
          ]
        },

        // 2. Multiple choice - Vorrei un gelato alla fragola
        {
          type: 'multiple-choice',
          prompt: 'What does "Vorrei un gelato alla fragola" mean?',
          correctAnswer: 'I\'d like a strawberry ice cream',
          options: ['I\'d like a strawberry ice cream', 'I\'d like a lemon ice cream', 'Two flavours in a cone', 'With cream please'],
          daisySays: 'You\'re ordering like a real Italian!',
          speakWord: 'Vorrei un gelato alla fragola'
        },

        // 3. Multiple choice - Quanto costa?
        {
          type: 'multiple-choice',
          prompt: 'How do you ask "How much does it cost?" in Italian?',
          correctAnswer: 'Quanto costa?',
          options: ['Quanto costa?', 'Che gusti avete?', 'Con panna?', 'È buonissimo!'],
          daisySays: 'Important to know the price!',
          speakWord: 'Quanto costa'
        },

        // 4. Listen-comprehend - ordering sentence
        {
          type: 'listen-comprehend',
          sentence: 'Vorrei un gelato alla fragola in un cono, per favore.',
          question: 'What flavour does the speaker want?',
          correctAnswer: 'Strawberry',
          options: ['Strawberry', 'Chocolate', 'Lemon', 'Vanilla'],
          daisySays: 'Listen carefully to the flavour!'
        },

        // 5. Sentence-build - ordering
        {
          type: 'sentence-build',
          prompt: 'Build: "I\'d like chocolate"',
          correctOrder: ['Vorrei', 'il', 'cioccolato'],
          hint: 'I\'d like chocolate',
          daisySays: 'Put the words in order to get your gelato!'
        },

        // 6. Fill-blank - Con ____, per favore
        {
          type: 'fill-blank',
          prompt: 'You want cream on top! Fill in the missing word!',
          correctAnswer: 'panna',
          sentence: 'Con ____, per favore!',
          hint: 'Whipped cream! Starts with P.'
        },

        // 7. Say-it - È buonissimo
        {
          type: 'say-it',
          prompt: 'Can you say this? It means "It\'s delicious!"',
          italian: 'È buonissimo',
          correctAnswer: 'È buonissimo',
          daisySays: 'Say it after your first lick of gelato!'
        },

        // 8. Sentence-build - full order
        {
          type: 'sentence-build',
          prompt: 'Build: "Two flavours in a cone, please"',
          correctOrder: ['Due', 'gusti', 'in', 'un', 'cono', 'per', 'favore'],
          hint: 'Two flavours in a cone, please',
          daisySays: 'In Italy you can pick two flavours!'
        },

        // 9. Matching - full ordering phrases
        {
          type: 'matching',
          prompt: 'Match these gelato phrases!',
          pairs: [
            { left: 'Che gusti avete?', right: 'What flavours do you have?' },
            { left: 'Quanto costa?', right: 'How much does it cost?' },
            { left: 'Con panna', right: 'With cream' },
            { left: 'È buonissimo!', right: 'It\'s delicious!' }
          ]
        },

        // 10. Matching - flavour review
        {
          type: 'matching',
          prompt: 'Final match! You\'re a gelato ordering superstar!',
          pairs: [
            { left: 'fragola', right: 'strawberry' },
            { left: 'pistacchio', right: 'pistachio' },
            { left: 'nocciola', right: 'hazelnut' },
            { left: 'limone', right: 'lemon' }
          ]
        }
      ]
    }

  ]
};
