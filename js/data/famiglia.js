/* ============================================
   Famiglia (Family) - Topic Data
   Theme: The Loud House
   ============================================ */

window.FAMIGLIA_DATA = {
  id: 'famiglia',

  vocabulary: [
    // 0
    {
      italian: 'mamma',
      english: 'mum',
      emoji: '\uD83D\uDC69',
      hint: 'Your mamma speaks Italian! You are SO lucky!'
    },
    // 1
    {
      italian: 'pap\u00E0',
      english: 'dad',
      emoji: '\uD83D\uDC68',
      hint: 'Lincoln\'s dad in the Loud House is always cooking - just like a pap\u00E0 italiano!'
    },
    // 2
    {
      italian: 'sorella',
      english: 'sister',
      emoji: '\uD83D\uDC67',
      hint: 'The Loud House has SO many of these - sorelle everywhere! Lincoln has ten!'
    },
    // 3
    {
      italian: 'fratello',
      english: 'brother',
      emoji: '\uD83D\uDC66',
      hint: 'Poor Lincoln is the only fratello in the Loud House!'
    },
    // 4
    {
      italian: 'nonna',
      english: 'grandma',
      emoji: '\uD83D\uDC75',
      hint: 'Your nonna lives in Italy! Maybe she makes yummy pasta for you!'
    },
    // 5
    {
      italian: 'nonno',
      english: 'grandpa',
      emoji: '\uD83D\uDC74',
      hint: 'Albert is Lincoln\'s nonno - grandpas are the best!'
    },
    // 6
    {
      italian: 'zia',
      english: 'aunt',
      emoji: '\uD83D\uDC69\u200D\uD83E\uDDB1',
      hint: 'A zia is your mamma\'s or pap\u00E0\'s sister - like a grown-up sorella!'
    },
    // 7
    {
      italian: 'zio',
      english: 'uncle',
      emoji: '\uD83D\uDC68\u200D\uD83E\uDDB1',
      hint: 'A zio is your mamma\'s or pap\u00E0\'s brother - imagine if Lincoln grew up!'
    },
    // 8
    {
      italian: 'cugina',
      english: 'cousin (girl)',
      emoji: '\uD83D\uDC67',
      hint: 'Your zia\'s daughter is your cugina! Like having an extra friend in the family!'
    },
    // 9
    {
      italian: 'bambina',
      english: 'little girl',
      emoji: '\uD83D\uDC76',
      hint: 'Lily is the littlest bambina in the Loud House - just like you were once!'
    },
    // 10
    {
      italian: 'famiglia',
      english: 'family',
      emoji: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67',
      hint: 'The Loud House has the biggest famiglia on TV! Yours is special because it speaks two languages!'
    }
  ],

  phrases: [
    // L2 phrases (indices 0-4): Short family phrases
    // 0
    {
      italian: 'la mia mamma',
      english: 'my mum',
      emoji: '\uD83D\uDC69\u2764\uFE0F',
      hint: 'In the Loud House, everyone loves la mia mamma - she keeps the whole family together!'
    },
    // 1
    {
      italian: 'il mio pap\u00E0',
      english: 'my dad',
      emoji: '\uD83D\uDC68\u2764\uFE0F',
      hint: 'Lincoln always says il mio pap\u00E0 makes the best Lynn-sagna!'
    },
    // 2
    {
      italian: 'la mia sorella',
      english: 'my sister',
      emoji: '\uD83D\uDC67\u2764\uFE0F',
      hint: 'Lincoln has TEN of these - la mia sorella times ten!'
    },
    // 3
    {
      italian: 'il mio fratello',
      english: 'my brother',
      emoji: '\uD83D\uDC66\u2764\uFE0F',
      hint: 'The Loud sisters would say il mio fratello Lincoln is always up to something!'
    },
    // 4
    {
      italian: 'la mia nonna',
      english: 'my grandma',
      emoji: '\uD83D\uDC75\u2764\uFE0F',
      hint: 'La mia nonna makes the best cookies - just like in the Loud House!'
    },
    // L3 sentences (indices 5-9): Full sentences
    // 5
    {
      italian: 'Ti voglio bene, Mamma!',
      english: 'I love you, Mum!',
      emoji: '\u2764\uFE0F\uD83D\uDC69',
      hint: 'This is how the Loud kids tell their mamma they love her - in Italian!'
    },
    // 6
    {
      italian: 'La mia famiglia \u00E8 grande!',
      english: 'My family is big!',
      emoji: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u2B50',
      hint: 'The Loud House famiglia has 13 people - that is REALLY grande!'
    },
    // 7
    {
      italian: 'Ho una sorella',
      english: 'I have a sister',
      emoji: '\uD83D\uDC67\uD83D\uDCAC',
      hint: 'Lincoln could say this TEN times! Ho una sorella, ho una sorella...'
    },
    // 8
    {
      italian: 'Ciao, Nonna!',
      english: 'Hello, Grandma!',
      emoji: '\uD83D\uDC75\uD83D\uDC4B',
      hint: 'When the Loud family visits Nonna, everyone shouts Ciao!'
    },
    // 9
    {
      italian: 'Andiamo a casa!',
      english: 'Let\'s go home!',
      emoji: '\uD83C\uDFE0\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67',
      hint: 'After a big Loud House adventure, it\'s time to go home - andiamo a casa!'
    }
  ],

  lessons: [
    // ==========================================
    // LESSON 1: My Family (mamma, papa, sorella, fratello, nonna)
    // ==========================================
    {
      id: 'famiglia-1',
      title: 'My Family',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [
        // 1 - Multiple choice: mamma
        {
          type: 'multiple-choice',
          prompt: 'What does "mamma" mean in English?',
          correctAnswer: 'mum',
          options: ['mum', 'dad', 'sister', 'grandma'],
          daisySays: 'This is an easy one! Think about YOUR mamma!',
          speakWord: 'mamma'
        },
        // 2 - Picture match: papa
        {
          type: 'picture-match',
          prompt: 'Which picture is "pap\u00E0"?',
          speakWord: 'pap\u00E0',
          correctAnswer: 'pap\u00E0',
          options: [
            { value: 'pap\u00E0', emoji: '\uD83D\uDC68', label: 'pap\u00E0' },
            { value: 'mamma', emoji: '\uD83D\uDC69', label: 'mamma' },
            { value: 'nonna', emoji: '\uD83D\uDC75', label: 'nonna' },
            { value: 'sorella', emoji: '\uD83D\uDC67', label: 'sorella' }
          ]
        },
        // 3 - Listen and pick: sorella
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! What word do you hear?',
          speakWord: 'sorella',
          correctAnswer: 'sorella',
          options: ['sorella', 'fratello', 'mamma', 'nonna']
        },
        // 4 - Multiple choice: fratello
        {
          type: 'multiple-choice',
          prompt: 'Lincoln is the only _______ in the Loud House. What is a "fratello"?',
          correctAnswer: 'brother',
          options: ['brother', 'sister', 'dad', 'grandpa'],
          daisySays: 'Lincoln is surrounded by sorelle but he is the one and only...!',
          speakWord: 'fratello'
        },
        // 5 - Matching: first 4 words
        {
          type: 'matching',
          prompt: 'Match the Italian word to the English word!',
          pairs: [
            { left: 'mamma', right: 'mum' },
            { left: 'pap\u00E0', right: 'dad' },
            { left: 'sorella', right: 'sister' },
            { left: 'fratello', right: 'brother' }
          ]
        },
        // 6 - Picture match: nonna
        {
          type: 'picture-match',
          prompt: 'Which picture is "nonna"?',
          speakWord: 'nonna',
          correctAnswer: 'nonna',
          options: [
            { value: 'nonna', emoji: '\uD83D\uDC75', label: 'nonna' },
            { value: 'mamma', emoji: '\uD83D\uDC69', label: 'mamma' },
            { value: 'pap\u00E0', emoji: '\uD83D\uDC68', label: 'pap\u00E0' },
            { value: 'sorella', emoji: '\uD83D\uDC67', label: 'sorella' }
          ]
        },
        // 7 - Fill in the blank: mamma
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "mum"!',
          correctAnswer: 'mamma',
          sentence: 'Your _____ speaks Italian to you!',
          hint: 'It starts with M and has a double letter!'
        },
        // 8 - Listen and pick: nonna
        {
          type: 'listen-pick',
          prompt: 'Listen! Which family member do you hear?',
          speakWord: 'nonna',
          correctAnswer: 'nonna',
          options: ['nonna', 'nonno', 'mamma', 'pap\u00E0']
        }
      ]
    },

    // ==========================================
    // LESSON 2: Family Phrases (L2 short phrases)
    // ==========================================
    {
      id: 'famiglia-2',
      title: 'Family Phrases',
      vocabIndices: [5, 6, 7, 8, 9, 10],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [
        // 1 - Multiple choice: la mia mamma
        {
          type: 'multiple-choice',
          prompt: 'What does "la mia mamma" mean in English?',
          correctAnswer: 'my mum',
          options: ['my mum', 'my dad', 'my sister', 'my grandma'],
          daisySays: 'In the Loud House, la mia mamma keeps everyone in line - even Lincoln!',
          speakWord: 'la mia mamma'
        },
        // 2 - Multiple choice: il mio fratello
        {
          type: 'multiple-choice',
          prompt: 'The Loud sisters would say "il mio fratello" when talking about Lincoln. What does it mean?',
          correctAnswer: 'my brother',
          options: ['my brother', 'my sister', 'my dad', 'my grandpa'],
          daisySays: 'All ten Loud sisters share just one fratello - il mio fratello Lincoln!',
          speakWord: 'il mio fratello'
        },
        // 3 - Listen and pick: la mia sorella
        {
          type: 'listen-pick',
          prompt: 'Listen to the phrase! What do you hear?',
          speakWord: 'la mia sorella',
          correctAnswer: 'la mia sorella',
          options: ['la mia sorella', 'il mio fratello', 'la mia mamma', 'la mia nonna']
        },
        // 4 - Listen and pick: il mio pap\u00E0
        {
          type: 'listen-pick',
          prompt: 'Listen carefully to this family phrase! What is it?',
          speakWord: 'il mio pap\u00E0',
          correctAnswer: 'il mio pap\u00E0',
          options: ['il mio pap\u00E0', 'la mia mamma', 'il mio fratello', 'la mia nonna']
        },
        // NEW: translate-to-italian: nonna
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'grandma',
          correctAnswer: 'nonna',
          options: ['nonna', 'mamma', 'zia', 'sorella'],
          _trackedWord: 'nonna'
        },
        // 5 - Fill in the blank: la mia _____ (mamma)
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word! "la mia _____" means "my mum"',
          correctAnswer: 'mamma',
          sentence: 'la mia _____',
          hint: 'The Loud House mamma keeps the whole family together! Starts with M!'
        },
        // 6 - Fill in the blank: il mio _____ (fratello)
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word! "il mio _____" means "my brother"',
          correctAnswer: 'fratello',
          sentence: 'il mio _____',
          hint: 'Lincoln is the only one of these in the Loud House! Starts with F!'
        },
        // NEW: say-it: famiglia
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'famiglia',
          correctAnswer: 'famiglia',
          daisySays: 'Say family in Italian! The Loud House has a BIG famiglia!'
        },
        // 7 - Matching: Italian phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian phrases to their English meanings!',
          pairs: [
            { left: 'la mia mamma', right: 'my mum' },
            { left: 'il mio pap\u00E0', right: 'my dad' },
            { left: 'la mia sorella', right: 'my sister' },
            { left: 'il mio fratello', right: 'my brother' }
          ]
        },
        // 8 - Matching: more phrases
        {
          type: 'matching',
          prompt: 'Match them up! The Loud family needs your help!',
          pairs: [
            { left: 'la mia nonna', right: 'my grandma' },
            { left: 'la mia sorella', right: 'my sister' },
            { left: 'il mio pap\u00E0', right: 'my dad' },
            { left: 'la mia mamma', right: 'my mum' }
          ]
        }
      ]
    },

    // ==========================================
    // LESSON 3: Family Sentences! (L3 full sentences)
    // ==========================================
    {
      id: 'famiglia-3',
      title: 'Family Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [
        // 1 - Conversation order: Visiting Nonna
        {
          type: 'conversation-order',
          prompt: 'The Loud family is visiting Nonna! Put these in the right order!',
          correctOrder: [
            'Ciao, Nonna!',
            'Come stai?',
            'La mia famiglia \u00E8 grande!',
            'Ho una sorella!',
            'Ti voglio bene!',
            'Arrivederci!'
          ],
          daisySays: 'Imagine the whole Loud family arriving at Nonna\'s house - what a noisy visit!'
        },
        // 2 - Multiple choice: Ti voglio bene, Mamma!
        {
          type: 'multiple-choice',
          prompt: 'What does "Ti voglio bene, Mamma!" mean?',
          correctAnswer: 'I love you, Mum!',
          options: ['I love you, Mum!', 'Hello, Mum!', 'Goodbye, Mum!', 'My family is big!'],
          daisySays: 'This is what the Loud kids say to their mamma before bedtime!',
          speakWord: 'Ti voglio bene, Mamma!'
        },
        // 3 - Multiple choice: La mia famiglia \u00E8 grande!
        {
          type: 'multiple-choice',
          prompt: 'Lincoln says "La mia famiglia \u00E8 grande!" What does he mean?',
          correctAnswer: 'My family is big!',
          options: ['My family is big!', 'I have a sister', 'Hello, Grandma!', 'I love you, Mum!'],
          daisySays: 'With 13 people in the Loud House, that is one grande famiglia!',
          speakWord: 'La mia famiglia \u00E8 grande!'
        },
        // NEW: listen-comprehend
        {
          type: 'listen-comprehend',
          sentence: 'La mia famiglia è grande!',
          question: 'What is the speaker\'s family like?',
          correctAnswer: 'Big',
          options: ['Big', 'Small', 'Funny', 'Quiet'],
          daisySays: 'Listen to what Lincoln says about his family!'
        },
        // 4 - Listen and pick: Andiamo a casa!
        {
          type: 'listen-pick',
          prompt: 'Listen to this sentence! What do you hear?',
          speakWord: 'Andiamo a casa!',
          correctAnswer: 'Andiamo a casa!',
          options: ['Andiamo a casa!', 'Ciao, Nonna!', 'Ho una sorella', 'Ti voglio bene, Mamma!']
        },
        // 5 - Fill in the blank: Ti voglio _____, Mamma! (bene)
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word! "Ti voglio _____, Mamma!" means "I love you, Mum!"',
          correctAnswer: 'bene',
          sentence: 'Ti voglio _____, Mamma!',
          hint: 'The Loud kids shout this word to show their love! It means "well" in Italian!'
        },
        // NEW: sentence-build
        {
          type: 'sentence-build',
          prompt: 'Build: "I love you, Mum!"',
          correctOrder: ['Ti', 'voglio', 'bene', 'Mamma'],
          hint: 'I love you, Mum!',
          daisySays: 'Put the words in order to tell Mamma you love her!'
        },
        // 6 - Fill in the blank: Ho una _____ (sorella)
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word! "Ho una _____" means "I have a sister"',
          correctAnswer: 'sorella',
          sentence: 'Ho una _____',
          hint: 'Lincoln has TEN of these in the Loud House! Starts with S!'
        },
        // 7 - Matching: Italian sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their English meanings!',
          pairs: [
            { left: 'Ti voglio bene, Mamma!', right: 'I love you, Mum!' },
            { left: 'Ciao, Nonna!', right: 'Hello, Grandma!' },
            { left: 'Ho una sorella', right: 'I have a sister' },
            { left: 'Andiamo a casa!', right: 'Let\'s go home!' }
          ]
        },
        // 8 - Matching: more sentences
        {
          type: 'matching',
          prompt: 'Last challenge! Match these Loud House sentences!',
          pairs: [
            { left: 'La mia famiglia \u00E8 grande!', right: 'My family is big!' },
            { left: 'Andiamo a casa!', right: 'Let\'s go home!' },
            { left: 'Ciao, Nonna!', right: 'Hello, Grandma!' },
            { left: 'Ti voglio bene, Mamma!', right: 'I love you, Mum!' }
          ]
        }
      ]
    }
  ]
};
