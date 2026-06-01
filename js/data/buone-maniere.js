/* ============================================
   Buone Maniere (Good Manners) - Vocabulary & Exercises
   Theme: Disney Princesses
   Holiday special: being polite in Italy!
   ============================================ */

window.BUONE_MANIERE_DATA = {
  id: 'buone-maniere',

  vocabulary: [
    // 0
    { italian: 'grazie', english: 'thank you', emoji: '😊', hint: 'Every princess says this - it\'s the magic word!' },
    // 1
    { italian: 'per favore', english: 'please', emoji: '🙏', hint: 'Princesses always ask politely!' },
    // 2
    { italian: 'prego', english: 'you\'re welcome', emoji: '🤗', hint: 'What you say back when someone thanks you!' },
    // 3
    { italian: 'scusa', english: 'sorry / excuse me', emoji: '😅', hint: 'When you need to get past or say sorry!' },
    // 4
    { italian: 'buongiorno', english: 'good morning / hello', emoji: '☀️', hint: 'How to greet people during the day!' },
    // 5
    { italian: 'buonasera', english: 'good evening', emoji: '🌆', hint: 'The polite greeting for evening time!' },
    // 6
    { italian: 'il pranzo', english: 'lunch', emoji: '🍽️', hint: 'The big midday meal in Italy!' },
    // 7
    { italian: 'la cena', english: 'dinner', emoji: '🌙', hint: 'The evening meal when the whole family eats together!' },
    // 8
    { italian: 'la colazione', english: 'breakfast', emoji: '🥐', hint: 'The morning meal to start the day!' },
    // 9
    { italian: 'buono', english: 'good / tasty', emoji: '👍', hint: 'When the food is really yummy!' },
    // 10
    { italian: 'molto gentile', english: 'very kind', emoji: '💝', hint: 'A lovely thing to say to someone nice!' },
    // 11
    { italian: 'mi scusi', english: 'excuse me (formal)', emoji: '🎩', hint: 'The extra-polite version for grown-ups you don\'t know!' }
  ],

  phrases: [
    // L2 - Short polite phrases
    // 0
    { italian: 'Grazie mille', english: 'Thank you very much', emoji: '😊❤️', hint: 'Extra grateful - a thousand thanks!' },
    // 1
    { italian: 'Grazie per il pranzo', english: 'Thank you for lunch', emoji: '🍽️😊', hint: 'Polite after a yummy lunch!' },
    // 2
    { italian: 'Grazie per la cena', english: 'Thank you for dinner', emoji: '🌙😊', hint: 'Polite after a lovely dinner!' },
    // 3
    { italian: 'Sì, per favore', english: 'Yes, please', emoji: '✅🙏', hint: 'The polite way to say yes!' },
    // 4
    { italian: 'No, grazie', english: 'No, thank you', emoji: '❌😊', hint: 'The polite way to say no!' },

    // L3 - Full polite sentences
    // 5
    { italian: 'Grazie per la colazione, era buona!', english: 'Thank you for breakfast, it was tasty!', emoji: '🥐😊', hint: 'Being polite after a yummy breakfast!' },
    // 6
    { italian: 'Grazie per il pranzo, era molto buono!', english: 'Thank you for lunch, it was very tasty!', emoji: '🍽️😋', hint: 'After a delicious Italian lunch!' },
    // 7
    { italian: 'Grazie per la cena, era buonissima!', english: 'Thank you for dinner, it was delicious!', emoji: '🌙🤤', hint: 'Buonissima means really delicious!' },
    // 8
    { italian: 'Sei molto gentile, grazie!', english: 'You\'re very kind, thank you!', emoji: '💝😊', hint: 'A lovely thing to say to someone nice!' },
    // 9
    { italian: 'Mi scusi, posso avere l\'acqua per favore?', english: 'Excuse me, can I have water please?', emoji: '🎩💧', hint: 'Super polite way to ask in a restaurant!' }
  ],

  lessons: [

    /* --------------------------------------------------
       Lesson 1 - Magic Words (vocabIndices 0-5)
       -------------------------------------------------- */
    {
      id: 'buone-maniere-1',
      title: 'Magic Words',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice - grazie
        {
          type: 'multiple-choice',
          prompt: 'Every princess knows this magic word! What does "grazie" mean?',
          correctAnswer: 'thank you',
          options: ['thank you', 'please', 'sorry', 'hello'],
          daisySays: 'The most important word in Italian!',
          speakWord: 'grazie'
        },

        // 2. Listen-pick - per favore
        {
          type: 'listen-pick',
          prompt: 'Listen! What polite word do you hear?',
          speakWord: 'per favore',
          correctAnswer: 'per favore',
          options: ['per favore', 'grazie', 'prego', 'scusa']
        },

        // 3. Multiple choice - prego
        {
          type: 'multiple-choice',
          prompt: 'Someone says "Grazie!" to you. How do you reply? What does "prego" mean?',
          correctAnswer: 'you\'re welcome',
          options: ['you\'re welcome', 'thank you', 'please', 'goodbye'],
          daisySays: 'It\'s like saying "no problem!"',
          speakWord: 'prego'
        },

        // 4. Multiple choice - scusa
        {
          type: 'multiple-choice',
          prompt: 'How do you say "sorry" or "excuse me" in Italian?',
          correctAnswer: 'scusa',
          options: ['scusa', 'grazie', 'prego', 'buongiorno'],
          daisySays: 'You need this when you bump into someone!',
          speakWord: 'scusa'
        },

        // 5. Picture match - buongiorno
        {
          type: 'picture-match',
          prompt: 'The princess arrives at the castle! Tap the morning greeting!',
          speakWord: 'buongiorno',
          correctAnswer: 'buongiorno',
          options: [
            { value: 'buongiorno', emoji: '☀️', label: 'buongiorno' },
            { value: 'buonasera',  emoji: '🌆', label: 'buonasera' },
            { value: 'grazie',     emoji: '😊', label: 'grazie' },
            { value: 'scusa',      emoji: '😅', label: 'scusa' }
          ]
        },

        // 6. Fill-blank - grazie
        {
          type: 'fill-blank',
          prompt: 'Someone gives you a present! What do you say?',
          correctAnswer: 'grazie',
          sentence: 'The princess smiles and says: "____!"',
          hint: 'The magic word! Starts with G!'
        },

        // 7. Say-it - grazie
        {
          type: 'say-it',
          prompt: 'Can you say the magic word?',
          italian: 'grazie',
          correctAnswer: 'grazie',
          daisySays: 'Say thank you like an Italian princess!'
        },

        // 8. Matching - all magic words
        {
          type: 'matching',
          prompt: 'Match the Italian manners to English!',
          pairs: [
            { left: 'grazie', right: 'thank you' },
            { left: 'per favore', right: 'please' },
            { left: 'prego', right: 'you\'re welcome' },
            { left: 'scusa', right: 'sorry / excuse me' }
          ]
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 2 - Mealtime Manners (vocabIndices 6-11)
       Thank you for meals!
       -------------------------------------------------- */
    {
      id: 'buone-maniere-2',
      title: 'Mealtime Manners',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice - il pranzo
        {
          type: 'multiple-choice',
          prompt: 'It\'s the middle of the day and the princess sits down to eat. What is "il pranzo"?',
          correctAnswer: 'lunch',
          options: ['lunch', 'dinner', 'breakfast', 'snack'],
          daisySays: 'The big midday meal in Italy!',
          speakWord: 'il pranzo'
        },

        // 2. Multiple choice - la cena
        {
          type: 'multiple-choice',
          prompt: 'The stars are coming out. How do you say "dinner" in Italian?',
          correctAnswer: 'la cena',
          options: ['la cena', 'il pranzo', 'la colazione', 'il gelato'],
          daisySays: 'The evening meal when the whole family eats together!',
          speakWord: 'la cena'
        },

        // 3. Listen-pick - la colazione
        {
          type: 'listen-pick',
          prompt: 'The princess wakes up and goes to eat. Listen!',
          speakWord: 'la colazione',
          correctAnswer: 'la colazione',
          options: ['la colazione', 'il pranzo', 'la cena', 'il gelato']
        },

        // 4. Multiple choice - Grazie per il pranzo
        {
          type: 'multiple-choice',
          prompt: 'What does "Grazie per il pranzo" mean?',
          correctAnswer: 'Thank you for lunch',
          options: ['Thank you for lunch', 'Thank you for dinner', 'Thank you for breakfast', 'Thank you very much'],
          daisySays: 'Always say thank you after eating!',
          speakWord: 'Grazie per il pranzo'
        },

        // 5. Multiple choice - Grazie per la cena
        {
          type: 'multiple-choice',
          prompt: 'How do you say "Thank you for dinner" in Italian?',
          correctAnswer: 'Grazie per la cena',
          options: ['Grazie per la cena', 'Grazie per il pranzo', 'Grazie per la colazione', 'Grazie mille'],
          daisySays: 'So polite!',
          speakWord: 'Grazie per la cena'
        },

        // 6. Fill-blank - Grazie per la ____
        {
          type: 'fill-blank',
          prompt: 'You just finished a lovely dinner. Fill in the blank!',
          correctAnswer: 'cena',
          sentence: 'Grazie per la ____!',
          hint: 'The evening meal! Starts with C!'
        },

        // 7. Translate to Italian - very kind
        {
          type: 'translate-to-italian',
          prompt: 'How do you say "very kind" in Italian?',
          english: 'very kind',
          correctAnswer: 'molto gentile',
          options: ['molto gentile', 'grazie mille', 'per favore', 'buongiorno'],
          _trackedWord: 'molto gentile'
        },

        // 8. Matching - mealtime words
        {
          type: 'matching',
          prompt: 'Match the Italian meals to English!',
          pairs: [
            { left: 'la colazione', right: 'breakfast' },
            { left: 'il pranzo', right: 'lunch' },
            { left: 'la cena', right: 'dinner' },
            { left: 'buono', right: 'good / tasty' }
          ]
        },

        // 9. Matching - thank you phrases
        {
          type: 'matching',
          prompt: 'Match the polite mealtime phrases!',
          pairs: [
            { left: 'Grazie per il pranzo', right: 'Thank you for lunch' },
            { left: 'Grazie per la cena', right: 'Thank you for dinner' },
            { left: 'Grazie mille', right: 'Thank you very much' },
            { left: 'Sì, per favore', right: 'Yes, please' }
          ]
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 3 - Polite Conversations! (all vocab, review)
       Full polite sentences for real situations
       -------------------------------------------------- */
    {
      id: 'buone-maniere-3',
      title: 'Polite Conversations!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order - a polite restaurant visit
        {
          type: 'conversation-order',
          prompt: 'Put the princess\'s polite restaurant visit in order!',
          scenario: 'The princess visits a restaurant in Italy and shows perfect manners!',
          correctOrder: [
            'Buonasera!',
            'Mi scusi, posso avere l\'acqua per favore?',
            'Sì, per favore!',
            'Grazie!',
            'Grazie per la cena, era buonissima!',
            'Sei molto gentile, grazie!',
            'Arrivederci!'
          ]
        },

        // 2. Multiple choice - Grazie per la colazione, era buona!
        {
          type: 'multiple-choice',
          prompt: 'What does "Grazie per la colazione, era buona!" mean?',
          correctAnswer: 'Thank you for breakfast, it was tasty!',
          options: ['Thank you for breakfast, it was tasty!', 'Thank you for lunch, it was very tasty!', 'Thank you for dinner, it was delicious!', 'You\'re very kind!'],
          daisySays: 'Perfect manners after breakfast!',
          speakWord: 'Grazie per la colazione, era buona'
        },

        // 3. Multiple choice - buonissima
        {
          type: 'multiple-choice',
          prompt: '"Grazie per la cena, era buonissima!" What does "buonissima" mean?',
          correctAnswer: 'really delicious',
          options: ['really delicious', 'quite good', 'a bit cold', 'very big'],
          daisySays: 'The -issima ending means REALLY!',
          speakWord: 'buonissima'
        },

        // 4. Listen-comprehend
        {
          type: 'listen-comprehend',
          sentence: 'Mi scusi, posso avere l\'acqua per favore?',
          question: 'What does the speaker want?',
          correctAnswer: 'Water',
          options: ['Water', 'Food', 'The menu', 'Ice cream'],
          daisySays: 'Listen to the super polite request!'
        },

        // 5. Sentence-build - Thank you for lunch
        {
          type: 'sentence-build',
          prompt: 'Build: "Thank you for lunch"',
          correctOrder: ['Grazie', 'per', 'il', 'pranzo'],
          hint: 'Thank you for lunch',
          daisySays: 'Put the polite words together!'
        },

        // 6. Fill-blank - era ____
        {
          type: 'fill-blank',
          prompt: 'The dinner was delicious! Fill in the missing word!',
          correctAnswer: 'buonissima',
          sentence: 'Grazie per la cena, era ____!',
          hint: 'It means "really delicious" - starts with B!'
        },

        // 7. Say-it - Grazie per la cena
        {
          type: 'say-it',
          prompt: 'Can you say this after dinner?',
          italian: 'Grazie per la cena',
          correctAnswer: 'Grazie per la cena',
          daisySays: 'Say thank you for dinner like a princess!'
        },

        // 8. Sentence-build - You're very kind
        {
          type: 'sentence-build',
          prompt: 'Build: "You\'re very kind, thank you!"',
          correctOrder: ['Sei', 'molto', 'gentile', 'grazie'],
          hint: 'You\'re very kind, thank you!',
          daisySays: 'What a lovely thing to say!'
        },

        // 9. Matching - polite sentences
        {
          type: 'matching',
          prompt: 'Match these polite Italian sentences!',
          pairs: [
            { left: 'Grazie per la colazione', right: 'Thank you for breakfast' },
            { left: 'Grazie per il pranzo', right: 'Thank you for lunch' },
            { left: 'Grazie per la cena', right: 'Thank you for dinner' },
            { left: 'Sei molto gentile', right: 'You\'re very kind' }
          ]
        },

        // 10. Matching - full review
        {
          type: 'matching',
          prompt: 'Final match! You have the best manners in all of Italy!',
          pairs: [
            { left: 'mi scusi', right: 'excuse me (formal)' },
            { left: 'No, grazie', right: 'No, thank you' },
            { left: 'molto gentile', right: 'very kind' },
            { left: 'buonissima', right: 'really delicious' }
          ]
        }
      ]
    }

  ]
};
