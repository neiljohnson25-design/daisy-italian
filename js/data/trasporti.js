/* ============================================
   Trasporti (Transport) - Topic Data
   Theme: K-Pop Demon Hunters
   ============================================ */

window.TRASPORTI_DATA = {
  id: 'trasporti',

  vocabulary: [
    // 0 - macchina
    { italian: 'macchina', english: 'car', emoji: '🚗', hint: 'The demon hunters chase demons in this!' },
    // 1 - autobus
    { italian: 'autobus', english: 'bus', emoji: '🚌', hint: 'The whole demon hunter squad rides together in this!' },
    // 2 - treno
    { italian: 'treno', english: 'train', emoji: '🚂', hint: 'The demon hunters take this on long missions across the land!' },
    // 3 - aereo
    { italian: 'aereo', english: 'aeroplane', emoji: '✈️', hint: 'The demon hunters fly across the sky to fight evil!' },
    // 4 - bicicletta
    { italian: 'bicicletta', english: 'bicycle', emoji: '🚲', hint: 'A demon hunter in training pedals this to stay fast!' },
    // 5 - barca
    { italian: 'barca', english: 'boat', emoji: '⛵', hint: 'The demon hunters sail this to battle sea monsters!' },
    // 6 - moto
    { italian: 'moto', english: 'motorbike', emoji: '🏍️', hint: 'The coolest demon hunter zooms on this with K-Pop blasting!' },
    // 7 - elicottero
    { italian: 'elicottero', english: 'helicopter', emoji: '🚁', hint: 'The demon hunters hover above the city spotting demons from this!' },
    // 8 - ambulanza
    { italian: 'ambulanza', english: 'ambulance', emoji: '🚑', hint: 'This rushes in to save demon hunters after a big battle!' },
    // 9 - camion
    { italian: 'camion', english: 'lorry', emoji: '🚛', hint: 'The demon hunters carry all their gear in this big vehicle!' },
    // 10 - monopattino
    { italian: 'monopattino', english: 'scooter', emoji: '🛴', hint: 'The youngest demon hunter zips around on this!' },
    // 11 - razzo
    { italian: 'razzo', english: 'rocket', emoji: '🚀', hint: 'The fastest vehicle in the demon fleet - blasts into space!' }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'la macchina rossa', english: 'the red car', emoji: '🚗', hint: 'The demon hunters\' red ride is ready for action!' },
    // 1
    { italian: 'il treno veloce', english: 'the fast train', emoji: '🚂', hint: 'This speedy train gets the hunters to the demon lair!' },
    // 2
    { italian: 'la barca grande', english: 'the big boat', emoji: '⛵', hint: 'A huge boat for the demon hunters\' ocean mission!' },
    // 3
    { italian: 'la mia bicicletta', english: 'my bicycle', emoji: '🚲', hint: 'Every demon hunter trainee has their own set of wheels!' },
    // 4
    { italian: 'l\'aereo nel cielo', english: 'the aeroplane in the sky', emoji: '✈️', hint: 'Look up! The demon hunters are flying overhead!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Andiamo in macchina!', english: 'Let\'s go by car!', emoji: '🚗💨', hint: 'The demon hunters are heading out on a mission!' },
    // 6
    { italian: 'Il treno è molto veloce!', english: 'The train is very fast!', emoji: '🚂💨', hint: 'Hold on tight - demon hunter express coming through!' },
    // 7
    { italian: 'Mi piace la bicicletta!', english: 'I like the bicycle!', emoji: '🚲❤️', hint: 'A demon hunter tells everyone their favourite ride!' },
    // 8
    { italian: 'L\'aereo vola nel cielo!', english: 'The aeroplane flies in the sky!', emoji: '✈️🌤️', hint: 'The demon hunters soar above the clouds!' },
    // 9
    { italian: 'Vedo un\'ambulanza!', english: 'I see an ambulance!', emoji: '🚑👀', hint: 'A demon hunter spots the rescue vehicle!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [
    /* ==========================================
       Lesson 1: Road Vehicles (vocabIndices 0,1,2,4,6,10)
       ========================================== */
    {
      id: 'trasporti-1',
      title: 'Road Vehicles',
      description: 'Learn the Italian names for vehicles you see on the road!',
      vocabIndices: [0, 1, 2, 4, 6, 10],
      exercises: [
        // Exercise 1: Picture match - macchina
        {
          type: 'picture-match',
          prompt: 'Which one is a "macchina"?',
          speakWord: 'macchina',
          correctAnswer: 'macchina',
          options: [
            { value: 'macchina', emoji: '🚗', label: 'macchina' },
            { value: 'treno', emoji: '🚂', label: 'treno' },
            { value: 'bicicletta', emoji: '🚲', label: 'bicicletta' },
            { value: 'autobus', emoji: '🚌', label: 'autobus' }
          ]
        },

        // Exercise 2: Multiple choice - autobus
        {
          type: 'multiple-choice',
          prompt: 'What is "bus" in Italian?',
          correctAnswer: 'autobus',
          options: ['autobus', 'macchina', 'treno', 'moto'],
          daisySays: 'The whole demon hunter squad piles into this one!',
          speakWord: 'autobus'
        },

        // Exercise 3: Listen and pick - treno
        {
          type: 'listen-pick',
          prompt: 'Listen! Which vehicle do you hear?',
          speakWord: 'treno',
          correctAnswer: 'treno',
          options: ['treno', 'macchina', 'autobus', 'moto']
        },

        // Exercise 4: Multiple choice - bicicletta
        {
          type: 'multiple-choice',
          prompt: 'What is "bicycle" in Italian?',
          correctAnswer: 'bicicletta',
          options: ['bicicletta', 'monopattino', 'moto', 'macchina'],
          daisySays: 'A demon hunter trainee pedals this to stay quick!',
          speakWord: 'bicicletta'
        },

        // Exercise 5: Picture match - moto
        {
          type: 'picture-match',
          prompt: 'The coolest demon hunter rides this! Which one is a "moto"?',
          speakWord: 'moto',
          correctAnswer: 'moto',
          options: [
            { value: 'moto', emoji: '🏍️', label: 'moto' },
            { value: 'macchina', emoji: '🚗', label: 'macchina' },
            { value: 'monopattino', emoji: '🛴', label: 'monopattino' },
            { value: 'bicicletta', emoji: '🚲', label: 'bicicletta' }
          ]
        },

        // Exercise 6: Listen and pick - monopattino
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! What vehicle do you hear?',
          speakWord: 'monopattino',
          correctAnswer: 'monopattino',
          options: ['monopattino', 'bicicletta', 'autobus', 'treno']
        },

        // Exercise 7: Matching - road vehicles
        {
          type: 'matching',
          prompt: 'Match the Italian vehicle names to English!',
          pairs: [
            { left: 'macchina', right: 'car' },
            { left: 'autobus', right: 'bus' },
            { left: 'treno', right: 'train' },
            { left: 'bicicletta', right: 'bicycle' }
          ]
        },

        // Exercise 8: Multiple choice - monopattino
        {
          type: 'multiple-choice',
          prompt: 'What is "scooter" in Italian?',
          correctAnswer: 'monopattino',
          options: ['monopattino', 'moto', 'bicicletta', 'macchina'],
          daisySays: 'The youngest demon hunter zips around on this!',
          speakWord: 'monopattino'
        },

        // Exercise 9: Picture match - autobus
        {
          type: 'picture-match',
          prompt: 'Which one is an "autobus"?',
          speakWord: 'autobus',
          correctAnswer: 'autobus',
          options: [
            { value: 'autobus', emoji: '🚌', label: 'autobus' },
            { value: 'treno', emoji: '🚂', label: 'treno' },
            { value: 'moto', emoji: '🏍️', label: 'moto' },
            { value: 'macchina', emoji: '🚗', label: 'macchina' }
          ]
        },

        // Exercise 10: Matching - more road vehicles
        {
          type: 'matching',
          prompt: 'Match the rest of the demon hunter vehicles!',
          pairs: [
            { left: 'moto', right: 'motorbike' },
            { left: 'monopattino', right: 'scooter' },
            { left: 'macchina', right: 'car' },
            { left: 'treno', right: 'train' }
          ]
        }
      ]
    },

    /* ==========================================
       Lesson 2: All Transport with Adjectives (vocabIndices 3,5,7,8,9,11)
       ========================================== */
    {
      id: 'trasporti-2',
      title: 'All Transport with Adjectives',
      description: 'Learn more vehicles and describe them with adjectives!',
      vocabIndices: [3, 5, 7, 8, 9, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [
        // Exercise 1: Multiple choice - aereo
        {
          type: 'multiple-choice',
          prompt: 'What is "aeroplane" in Italian?',
          correctAnswer: 'aereo',
          options: ['aereo', 'elicottero', 'razzo', 'barca'],
          daisySays: 'The demon hunters fly across the sky in this!',
          speakWord: 'aereo'
        },

        // Exercise 2: Listen and pick - barca
        {
          type: 'listen-pick',
          prompt: 'Listen! Which vehicle do you hear?',
          speakWord: 'barca',
          correctAnswer: 'barca',
          options: ['barca', 'aereo', 'camion', 'ambulanza']
        },

        // Exercise 3: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "la macchina rossa" mean?',
          correctAnswer: 'the red car',
          options: ['the red car', 'the fast train', 'the big boat', 'my bicycle'],
          daisySays: 'The demon hunters\' favourite coloured ride!',
          speakWord: 'la macchina rossa'
        },

        // Exercise 4: Multiple choice - phrase to Italian
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the fast train" in Italian?',
          correctAnswer: 'il treno veloce',
          options: ['il treno veloce', 'la macchina rossa', 'la barca grande', 'la mia bicicletta'],
          daisySays: 'This speedy transport gets the hunters there in no time!',
          speakWord: 'il treno veloce'
        },

        // Exercise 5: Fill-blank - macchina rossa
        {
          type: 'fill-blank',
          prompt: 'What colour is the car? Fill in the missing word!',
          correctAnswer: 'rossa',
          sentence: 'la macchina ____',
          hint: 'It means red! The demon hunters\' car colour - starts with R.'
        },

        // Exercise 6: Listen and pick - elicottero
        {
          type: 'listen-pick',
          prompt: 'The demon hunters are hovering! What do you hear?',
          speakWord: 'elicottero',
          correctAnswer: 'elicottero',
          options: ['elicottero', 'aereo', 'razzo', 'camion']
        },

        // Exercise 7: Sentence build - la barca grande
        {
          type: 'sentence-build',
          prompt: 'Build: "the big boat"',
          correctOrder: ['la', 'barca', 'grande'],
          hint: 'the big boat',
          daisySays: 'Put the words in order for the demon hunters\' ocean vessel!'
        },

        // Exercise 8: Fill-blank - treno veloce
        {
          type: 'fill-blank',
          prompt: 'How fast is the train? Fill in the missing word!',
          correctAnswer: 'veloce',
          sentence: 'il treno ____',
          hint: 'It means fast! The demon hunter express - starts with V.'
        },

        // Exercise 9: Multiple choice - razzo
        {
          type: 'multiple-choice',
          prompt: 'What is "rocket" in Italian?',
          correctAnswer: 'razzo',
          options: ['razzo', 'aereo', 'elicottero', 'camion'],
          daisySays: 'The fastest vehicle in the demon fleet - it blasts into space!',
          speakWord: 'razzo'
        },

        // Exercise 10: Sentence build - la mia bicicletta
        {
          type: 'sentence-build',
          prompt: 'Build: "my bicycle"',
          correctOrder: ['la', 'mia', 'bicicletta'],
          hint: 'my bicycle',
          daisySays: 'Every demon hunter trainee has their own set of wheels!'
        }
      ]
    },

    /* ==========================================
       Lesson 3: Travel Sentences! (phraseIndices 5-9)
       ========================================== */
    {
      id: 'trasporti-3',
      title: 'Travel Sentences!',
      description: 'Build full Italian sentences about travelling and transport!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [
        // Exercise 1: Conversation order - a demon hunter journey
        {
          type: 'conversation-order',
          prompt: 'Put the demon hunters\' journey in order!',
          scenario: 'The K-Pop Demon Hunters set off on an epic mission across the city!',
          correctOrder: [
            'Andiamo in macchina!',
            'Il treno è molto veloce!',
            'L\'aereo vola nel cielo!',
            'Vedo un\'ambulanza!',
            'Siamo arrivati!'
          ]
        },

        // Exercise 2: Multiple choice - sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "Andiamo in macchina!" mean?',
          correctAnswer: 'Let\'s go by car!',
          options: ['Let\'s go by car!', 'I like the car!', 'The car is red!', 'I see a car!'],
          daisySays: 'The demon hunters are heading out on a mission!',
          speakWord: 'Andiamo in macchina'
        },

        // Exercise 3: Translate to Italian - the fast train
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'The train is very fast!',
          correctAnswer: 'Il treno è molto veloce!',
          options: ['Il treno è molto veloce!', 'Andiamo in macchina!', 'Mi piace la bicicletta!', 'L\'aereo vola nel cielo!'],
          _trackedWord: 'treno'
        },

        // Exercise 4: Listen comprehend - aereo
        {
          type: 'listen-comprehend',
          sentence: 'L\'aereo vola nel cielo!',
          question: 'What is flying in the sky?',
          correctAnswer: 'The aeroplane',
          options: ['The aeroplane', 'The helicopter', 'The rocket', 'The bird'],
          daisySays: 'Listen to what the demon hunters spotted above!'
        },

        // Exercise 5: Sentence build - Andiamo in macchina
        {
          type: 'sentence-build',
          prompt: 'Build: "Let\'s go by car!"',
          correctOrder: ['Andiamo', 'in', 'macchina!'],
          hint: 'Let\'s go by car!',
          daisySays: 'Put the words together for the demon hunters\' battle cry!'
        },

        // Exercise 6: Translate to Italian - I like the bicycle
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'I like the bicycle!',
          correctAnswer: 'Mi piace la bicicletta!',
          options: ['Mi piace la bicicletta!', 'Andiamo in macchina!', 'Il treno è molto veloce!', 'Vedo un\'ambulanza!'],
          _trackedWord: 'bicicletta'
        },

        // Exercise 7: Listen comprehend - ambulanza
        {
          type: 'listen-comprehend',
          sentence: 'Vedo un\'ambulanza!',
          question: 'What does the speaker see?',
          correctAnswer: 'An ambulance',
          options: ['An ambulance', 'A fire engine', 'A police car', 'A lorry'],
          daisySays: 'A demon hunter spots something with sirens!'
        },

        // Exercise 8: Sentence build - Mi piace la bicicletta
        {
          type: 'sentence-build',
          prompt: 'Build: "I like the bicycle!"',
          correctOrder: ['Mi', 'piace', 'la', 'bicicletta!'],
          hint: 'I like the bicycle!',
          daisySays: 'Tell everyone which ride you love!'
        },

        // Exercise 9: Multiple choice - sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "Il treno è molto veloce!" mean?',
          correctAnswer: 'The train is very fast!',
          options: ['The train is very fast!', 'The car is red!', 'I like the train!', 'The boat is big!'],
          daisySays: 'Hold on tight - the demon hunter express is coming through!',
          speakWord: 'Il treno è molto veloce'
        },

        // Exercise 10: Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian travel sentences to English!',
          pairs: [
            { left: 'Andiamo in macchina!', right: 'Let\'s go by car!' },
            { left: 'Mi piace la bicicletta!', right: 'I like the bicycle!' },
            { left: 'L\'aereo vola nel cielo!', right: 'The aeroplane flies in the sky!' },
            { left: 'Vedo un\'ambulanza!', right: 'I see an ambulance!' }
          ]
        }
      ]
    }
  ]
};
