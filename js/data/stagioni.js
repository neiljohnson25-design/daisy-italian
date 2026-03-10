/* ============================================
   Stagioni e Tempo (Seasons & Weather)
   Theme: The Loud House
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.STAGIONI_DATA = {
  id: 'stagioni',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'primavera',
      english: 'spring',
      emoji: '\uD83C\uDF38',
      hint: 'Flowers bloom in the Loud House garden!'
    },
    // 1
    {
      italian: 'estate',
      english: 'summer',
      emoji: '\u2600\uFE0F',
      hint: 'Time for the beach and ice cream!'
    },
    // 2
    {
      italian: 'autunno',
      english: 'autumn',
      emoji: '\uD83C\uDF42',
      hint: 'Leaves turn orange and fall from trees!'
    },
    // 3
    {
      italian: 'inverno',
      english: 'winter',
      emoji: '\u2744\uFE0F',
      hint: 'Snow! Time for snowball fights!'
    },
    // 4
    {
      italian: 'pioggia',
      english: 'rain',
      emoji: '\uD83C\uDF27\uFE0F',
      hint: 'Drip drop! Get the umbrella!'
    },
    // 5
    {
      italian: 'neve',
      english: 'snow',
      emoji: '\u2744\uFE0F',
      hint: 'White and cold - perfect for snowmen!'
    },
    // 6
    {
      italian: 'vento',
      english: 'wind',
      emoji: '\uD83D\uDCA8',
      hint: 'Whoosh! Hold on to your hat!'
    },
    // 7
    {
      italian: 'caldo',
      english: 'hot',
      emoji: '\uD83E\uDD75',
      hint: 'When the sun is really strong!'
    },
    // 8
    {
      italian: 'freddo',
      english: 'cold',
      emoji: '\uD83E\uDD76',
      hint: 'Brrr! Time for a warm jacket!'
    },
    // 9
    {
      italian: 'arcobaleno',
      english: 'rainbow',
      emoji: '\uD83C\uDF08',
      hint: 'All the colours in the sky after rain!'
    },
    // 10
    {
      italian: 'ombrello',
      english: 'umbrella',
      emoji: '\u2602\uFE0F',
      hint: 'Keep dry when it rains!'
    },
    // 11
    {
      italian: 'temporale',
      english: 'storm',
      emoji: '\u26C8\uFE0F',
      hint: 'Thunder and lightning! Stay inside!'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'fa caldo', english: 'it\'s hot', emoji: '\uD83E\uDD75', hint: 'Lincoln is sweating in the Loud House!' },
    // 1
    { italian: 'fa freddo', english: 'it\'s cold', emoji: '\uD83E\uDD76', hint: 'Leni is shivering and needs a scarf!' },
    // 2
    { italian: 'c\'\u00E8 il sole', english: 'it\'s sunny', emoji: '\u2600\uFE0F', hint: 'The sun is shining over the Loud House!' },
    // 3
    { italian: 'piove oggi', english: 'it\'s raining today', emoji: '\uD83C\uDF27\uFE0F', hint: 'Lori looks out the window and sees rain!' },
    // 4
    { italian: 'nevica in inverno', english: 'it snows in winter', emoji: '\u2744\uFE0F', hint: 'The Loud kids love playing in the snow!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Fa caldo in estate!', english: 'It\'s hot in summer!', emoji: '\u2600\uFE0F\uD83E\uDD75', hint: 'Lincoln fans himself on a hot summer day!' },
    // 6
    { italian: 'Mi piace la primavera!', english: 'I like spring!', emoji: '\uD83C\uDF38', hint: 'Lana loves the flowers and butterflies in spring!' },
    // 7
    { italian: 'Prendi l\'ombrello, piove!', english: 'Get the umbrella, it\'s raining!', emoji: '\u2602\uFE0F\uD83C\uDF27\uFE0F', hint: 'Mum tells the Loud kids to grab an umbrella!' },
    // 8
    { italian: 'In autunno le foglie sono arancioni!', english: 'In autumn the leaves are orange!', emoji: '\uD83C\uDF42\uD83D\uDFE0', hint: 'The Loud House yard is covered in orange leaves!' },
    // 9
    { italian: 'Che bello l\'arcobaleno!', english: 'How beautiful the rainbow!', emoji: '\uD83C\uDF08', hint: 'All the Loud siblings run outside to see it!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Four Seasons
       ========================================== */
    {
      id: 'stagioni-1',
      title: 'Four Seasons',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice: primavera
        {
          type: 'multiple-choice',
          prompt: 'What does "primavera" mean in English?',
          correctAnswer: 'spring',
          options: ['spring', 'summer', 'autumn', 'winter'],
          daisySays: 'The Loud House garden is full of flowers in this season!',
          speakWord: 'primavera'
        },

        // 2. Picture match: estate
        {
          type: 'picture-match',
          prompt: 'Which picture matches "estate"?',
          speakWord: 'estate',
          correctAnswer: 'estate',
          options: [
            { value: 'estate', emoji: '\u2600\uFE0F', label: 'estate' },
            { value: 'inverno', emoji: '\u2744\uFE0F', label: 'inverno' },
            { value: 'pioggia', emoji: '\uD83C\uDF27\uFE0F', label: 'pioggia' },
            { value: 'neve', emoji: '\u2744\uFE0F', label: 'neve' }
          ]
        },

        // 3. Listen and pick: autunno
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which season do you hear?',
          speakWord: 'autunno',
          correctAnswer: 'autunno',
          options: ['autunno', 'primavera', 'estate', 'inverno']
        },

        // 4. Multiple choice: inverno
        {
          type: 'multiple-choice',
          prompt: 'The Loud kids are having a snowball fight! Which season is "inverno"?',
          correctAnswer: 'winter',
          options: ['winter', 'spring', 'summer', 'autumn'],
          daisySays: 'Lincoln and his sisters build a giant snowman in this season!',
          speakWord: 'inverno'
        },

        // 5. Fill in the blank: pioggia
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing weather word!',
          correctAnswer: 'pioggia',
          sentence: 'Oh no! There is ____ outside! Get the umbrella!',
          hint: 'It means rain! Drip drop - starts with P.'
        },

        // 6. Matching: seasons and weather
        {
          type: 'matching',
          prompt: 'Match the Italian seasons and weather to English!',
          pairs: [
            { left: 'primavera', right: 'spring' },
            { left: 'estate', right: 'summer' },
            { left: 'autunno', right: 'autumn' },
            { left: 'inverno', right: 'winter' }
          ]
        },

        // 7. Picture match: neve
        {
          type: 'picture-match',
          prompt: 'The Loud kids are so excited! Which picture matches "neve"?',
          speakWord: 'neve',
          correctAnswer: 'neve',
          options: [
            { value: 'neve', emoji: '\u2744\uFE0F', label: 'neve' },
            { value: 'pioggia', emoji: '\uD83C\uDF27\uFE0F', label: 'pioggia' },
            { value: 'estate', emoji: '\u2600\uFE0F', label: 'estate' },
            { value: 'primavera', emoji: '\uD83C\uDF38', label: 'primavera' }
          ]
        },

        // 8. Listen and pick: primavera
        {
          type: 'listen-pick',
          prompt: 'Lana is talking about her favourite season! Which word do you hear?',
          speakWord: 'primavera',
          correctAnswer: 'primavera',
          options: ['primavera', 'estate', 'autunno', 'neve']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Weather Talk
       ========================================== */
    {
      id: 'stagioni-2',
      title: 'Weather Talk',
      vocabIndices: [6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: vento
        {
          type: 'multiple-choice',
          prompt: 'What does "vento" mean in English?',
          correctAnswer: 'wind',
          options: ['wind', 'rain', 'snow', 'storm'],
          daisySays: 'Whoosh! Lincoln\'s hat blows right off his head!',
          speakWord: 'vento'
        },

        // 2. Listen-pick: fa caldo
        {
          type: 'listen-pick',
          prompt: 'Listen! What weather phrase do you hear?',
          speakWord: 'fa caldo',
          correctAnswer: 'fa caldo',
          options: ['fa caldo', 'fa freddo', 'c\'\u00E8 il sole', 'piove oggi']
        },

        // 3. Multiple choice: fa freddo
        {
          type: 'multiple-choice',
          prompt: 'Leni is shivering! What does "fa freddo" mean?',
          correctAnswer: 'it\'s cold',
          options: ['it\'s cold', 'it\'s hot', 'it\'s sunny', 'it\'s raining today'],
          daisySays: 'Brrr! Time to wrap up warm at the Loud House!',
          speakWord: 'fa freddo'
        },

        // 4. Fill-blank: arcobaleno
        {
          type: 'fill-blank',
          prompt: 'All the Loud siblings run outside to see the... what?',
          correctAnswer: 'arcobaleno',
          sentence: 'Che bello! C\'\u00E8 un ____ nel cielo!',
          hint: 'All the colours in the sky after rain! Starts with A.'
        },

        // 5. Matching: weather phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian weather phrases to English!',
          pairs: [
            { left: 'fa caldo', right: 'it\'s hot' },
            { left: 'fa freddo', right: 'it\'s cold' },
            { left: 'c\'\u00E8 il sole', right: 'it\'s sunny' },
            { left: 'piove oggi', right: 'it\'s raining today' }
          ]
        },

        // 6. Translate to Italian: hot
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'hot',
          correctAnswer: 'caldo',
          options: ['caldo', 'freddo', 'vento', 'neve'],
          _trackedWord: 'caldo'
        },

        // 7. Listen-pick: c'e il sole
        {
          type: 'listen-pick',
          prompt: 'Luna looks outside! What weather phrase do you hear?',
          speakWord: 'c\'\u00E8 il sole',
          correctAnswer: 'c\'\u00E8 il sole',
          options: ['c\'\u00E8 il sole', 'fa caldo', 'piove oggi', 'fa freddo']
        },

        // 8. Say it: arcobaleno
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'arcobaleno',
          correctAnswer: 'arcobaleno',
          daisySays: 'All the colours in the sky! Say it like a Loud!'
        },

        // 9. Fill-blank: freddo
        {
          type: 'fill-blank',
          prompt: 'It\'s freezing outside! Fill in the missing word!',
          correctAnswer: 'freddo',
          sentence: 'Fa ____ oggi!',
          hint: 'It means cold! Brrr - starts with F.'
        },

        // 10. Matching: weather vocab to English
        {
          type: 'matching',
          prompt: 'Match the Italian weather words to English!',
          pairs: [
            { left: 'vento', right: 'wind' },
            { left: 'caldo', right: 'hot' },
            { left: 'freddo', right: 'cold' },
            { left: 'arcobaleno', right: 'rainbow' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Seasons & Weather
       Full sentences + conversation
       ========================================== */
    {
      id: 'stagioni-3',
      title: 'Seasons & Weather',
      vocabIndices: [10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: The Loud House family plans for the weather
        {
          type: 'conversation-order',
          prompt: 'Put the Loud House weather conversation in order!',
          scenario: 'The Loud House family plans for the weather!',
          correctOrder: [
            'Che tempo fa oggi?',
            'Piove oggi!',
            'Prendi l\'ombrello, piove!',
            'Fa freddo anche!',
            'Mi piace la primavera!',
            'Che bello l\'arcobaleno!'
          ]
        },

        // 2. Listen comprehend: Fa caldo in estate
        {
          type: 'listen-comprehend',
          sentence: 'Fa caldo in estate!',
          question: 'When is it hot?',
          correctAnswer: 'In summer',
          options: ['In summer', 'In winter', 'In spring', 'In autumn'],
          daisySays: 'Listen carefully to which season they are talking about!'
        },

        // 3. Sentence build: Mi piace la primavera
        {
          type: 'sentence-build',
          prompt: 'Build: "I like spring!"',
          correctOrder: ['Mi', 'piace', 'la', 'primavera'],
          hint: 'I like spring!',
          daisySays: 'Put the words in order like a real Italian speaker!'
        },

        // 4. Multiple choice: Prendi l'ombrello, piove!
        {
          type: 'multiple-choice',
          prompt: 'What does "Prendi l\'ombrello, piove!" mean?',
          correctAnswer: 'Get the umbrella, it\'s raining!',
          options: ['Get the umbrella, it\'s raining!', 'It\'s hot in summer!', 'I like spring!', 'How beautiful the rainbow!'],
          daisySays: 'Mum is telling the Loud kids what to grab before going outside!',
          speakWord: 'Prendi l\'ombrello, piove'
        },

        // 5. Fill-blank: ombrello
        {
          type: 'fill-blank',
          prompt: 'It\'s raining! What does Mum tell the kids to get?',
          correctAnswer: 'ombrello',
          sentence: 'Prendi l\'____! Piove!',
          hint: 'It keeps you dry in the rain! Starts with O.'
        },

        // 6. Matching: L3 sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian weather sentences to English!',
          pairs: [
            { left: 'Fa caldo in estate', right: 'It\'s hot in summer' },
            { left: 'Mi piace la primavera', right: 'I like spring' },
            { left: 'Che bello l\'arcobaleno', right: 'How beautiful the rainbow' },
            { left: 'Prendi l\'ombrello', right: 'Get the umbrella' }
          ]
        },

        // 7. Multiple choice: temporale
        {
          type: 'multiple-choice',
          prompt: 'There\'s thunder and lightning! What is "temporale" in English?',
          correctAnswer: 'storm',
          options: ['storm', 'rainbow', 'umbrella', 'wind'],
          daisySays: 'Lily hides under the blanket when this happens at the Loud House!',
          speakWord: 'temporale'
        },

        // 8. Listen-pick: In autunno le foglie sono arancioni
        {
          type: 'listen-pick',
          prompt: 'Lisa is talking about nature! What sentence do you hear?',
          speakWord: 'In autunno le foglie sono arancioni',
          correctAnswer: 'In autunno le foglie sono arancioni!',
          options: ['In autunno le foglie sono arancioni!', 'Fa caldo in estate!', 'Mi piace la primavera!', 'Che bello l\'arcobaleno!']
        },

        // 9. Fill-blank: temporale
        {
          type: 'fill-blank',
          prompt: 'Thunder and lightning! Fill in the missing word!',
          correctAnswer: 'temporale',
          sentence: 'C\'\u00E8 un ____ fuori! Resta dentro!',
          hint: 'It means storm! Starts with T.'
        },

        // 10. Matching: new vocab + review
        {
          type: 'matching',
          prompt: 'Final challenge! Match all the weather words!',
          pairs: [
            { left: 'ombrello', right: 'umbrella' },
            { left: 'temporale', right: 'storm' },
            { left: 'neve', right: 'snow' },
            { left: 'pioggia', right: 'rain' }
          ]
        }
      ]
    }
  ]
};
