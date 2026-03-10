/* ============================================
   Emozioni (Feelings) - Sam and Cat Theme
   Topic Data: Vocabulary + 3 Lessons
   Builds on Conversazioni
   ============================================ */

window.EMOZIONI_DATA = {
  id: 'emozioni',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'felice',
      english: 'happy',
      emoji: '😊',
      hint: 'When Sam gets a new job!'
    },
    // 1
    {
      italian: 'triste',
      english: 'sad',
      emoji: '😢',
      hint: 'When Cat loses her favourite toy!'
    },
    // 2
    {
      italian: 'arrabbiato',
      english: 'angry',
      emoji: '😠',
      hint: 'When someone eats Sam\'s sandwich!'
    },
    // 3
    {
      italian: 'stanco',
      english: 'tired',
      emoji: '😴',
      hint: 'After a long day of babysitting!'
    },
    // 4
    {
      italian: 'contento',
      english: 'pleased',
      emoji: '😄',
      hint: 'When everything goes right!'
    },
    // 5
    {
      italian: 'spaventato',
      english: 'scared',
      emoji: '😨',
      hint: 'When they hear a strange noise at night!'
    },
    // 6
    {
      italian: 'sorpreso',
      english: 'surprised',
      emoji: '😲',
      hint: 'When Cat gets an unexpected present!'
    },
    // 7
    {
      italian: 'annoiato',
      english: 'bored',
      emoji: '😑',
      hint: 'When there\'s nothing to do on a rainy day!'
    },
    // 8
    {
      italian: 'eccitato',
      english: 'excited',
      emoji: '🤩',
      hint: 'When Cat is going to a party!'
    },
    // 9
    {
      italian: 'gentile',
      english: 'kind',
      emoji: '🥰',
      hint: 'Cat is always this to everyone!'
    },
    // 10
    {
      italian: 'coraggioso',
      english: 'brave',
      emoji: '🦁',
      hint: 'Like a lion! When Sam is not afraid!'
    },
    // 11
    {
      italian: 'timido',
      english: 'shy',
      emoji: '🫣',
      hint: 'When you hide behind Mummy!'
    }
  ],

  /* ------------------------------------------
     Phrases & Sentences
     ------------------------------------------ */
  phrases: [
    // L2 - Short feeling phrases
    // 0
    { italian: 'sono felice', english: 'I am happy', emoji: '😊', hint: 'Cat says this when she gets a new toy!' },
    // 1
    { italian: 'sono triste', english: 'I am sad', emoji: '😢', hint: 'Sam says this when her sandwich is gone!' },
    // 2
    { italian: 'molto stanco', english: 'very tired', emoji: '😴', hint: 'After babysitting all day long!' },
    // 3
    { italian: 'un po\' spaventato', english: 'a little scared', emoji: '😨', hint: 'Just a tiny bit frightened! Not too much!' },
    // 4
    { italian: 'tanto eccitato', english: 'so excited', emoji: '🤩', hint: 'Cat before a party! SO much excitement!' },

    // L3 - Full sentences about feelings
    // 5
    { italian: 'Sono felice oggi!', english: 'I am happy today!', emoji: '😊☀️', hint: 'A great day! The sun is shining!' },
    // 6
    { italian: 'Perché sei triste?', english: 'Why are you sad?', emoji: '😢❓', hint: 'Ask a friend what\'s wrong! Sam checks on Cat!' },
    // 7
    { italian: 'Non ho paura!', english: 'I\'m not scared!', emoji: '💪', hint: 'Be brave like Sam! Nothing to be afraid of!' },
    // 8
    { italian: 'La nonna è gentile!', english: 'Grandma is kind!', emoji: '🥰👵', hint: 'Nonna is always so lovely and kind!' },
    // 9
    { italian: 'Sono eccitato per domani!', english: 'I\'m excited for tomorrow!', emoji: '🤩', hint: 'Something fun is happening tomorrow!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Basic Feelings
       (Learning the first 6 emotion words)
       ========================================== */
    {
      id: 'emozioni-1',
      title: 'Basic Feelings',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [

        // 1. Multiple choice: felice
        {
          type: 'multiple-choice',
          prompt: 'What does "felice" mean in English?',
          correctAnswer: 'happy',
          options: ['happy', 'sad', 'angry', 'tired'],
          daisySays: 'Sam just got a new job and she\'s smiling! How does she feel?',
          speakWord: 'felice'
        },

        // 2. Picture match: triste
        {
          type: 'picture-match',
          prompt: 'Cat lost her favourite toy! Which emoji matches "triste"?',
          speakWord: 'triste',
          correctAnswer: 'triste',
          options: [
            { value: 'triste', emoji: '😢', label: 'triste' },
            { value: 'felice', emoji: '😊', label: 'felice' },
            { value: 'arrabbiato', emoji: '😠', label: 'arrabbiato' },
            { value: 'stanco', emoji: '😴', label: 'stanco' }
          ]
        },

        // 3. Listen and pick: arrabbiato
        {
          type: 'listen-pick',
          prompt: 'Someone ate Sam\'s sandwich! Listen and pick the feeling you hear!',
          speakWord: 'arrabbiato',
          correctAnswer: 'arrabbiato',
          options: ['arrabbiato', 'felice', 'triste', 'stanco']
        },

        // 4. Multiple choice: stanco
        {
          type: 'multiple-choice',
          prompt: 'After a long day of babysitting, Sam and Cat are "stanco". What does that mean?',
          correctAnswer: 'tired',
          options: ['tired', 'happy', 'scared', 'angry'],
          daisySays: 'They\'ve been looking after kids all day! Time for a nap!',
          speakWord: 'stanco'
        },

        // 5. Fill in the blank: contento
        {
          type: 'fill-blank',
          prompt: 'Everything went right today! Sam is very ____.',
          correctAnswer: 'contento',
          sentence: 'Sam è molto ____.',
          hint: 'It means pleased! Starts with C. When everything goes right!'
        },

        // 6. Picture match: spaventato
        {
          type: 'picture-match',
          prompt: 'They heard a strange noise at night! Which emoji matches "spaventato"?',
          speakWord: 'spaventato',
          correctAnswer: 'spaventato',
          options: [
            { value: 'spaventato', emoji: '😨', label: 'spaventato' },
            { value: 'contento', emoji: '😄', label: 'contento' },
            { value: 'felice', emoji: '😊', label: 'felice' },
            { value: 'arrabbiato', emoji: '😠', label: 'arrabbiato' }
          ]
        },

        // 7. Matching: basic feelings
        {
          type: 'matching',
          prompt: 'Match the Italian feelings to their English meanings!',
          pairs: [
            { left: 'felice', right: 'happy' },
            { left: 'triste', right: 'sad' },
            { left: 'arrabbiato', right: 'angry' },
            { left: 'stanco', right: 'tired' }
          ]
        },

        // 8. Listen and pick: felice
        {
          type: 'listen-pick',
          prompt: 'Cat is smiling from ear to ear! Listen and pick the feeling you hear!',
          speakWord: 'felice',
          correctAnswer: 'felice',
          options: ['felice', 'triste', 'spaventato', 'contento']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Expressing Feelings
       (More emotion words + short phrases)
       ========================================== */
    {
      id: 'emozioni-2',
      title: 'Expressing Feelings',
      vocabIndices: [6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: sorpreso
        {
          type: 'multiple-choice',
          prompt: 'Cat gets an unexpected present! She\'s "sorpreso"! What does that mean?',
          correctAnswer: 'surprised',
          options: ['surprised', 'bored', 'excited', 'kind'],
          daisySays: 'Cat didn\'t expect a present at all! Her eyes went wide!',
          speakWord: 'sorpreso'
        },

        // 2. Listen and pick: annoiato
        {
          type: 'listen-pick',
          prompt: 'It\'s a rainy day and there\'s nothing to do! Listen and pick the feeling!',
          speakWord: 'annoiato',
          correctAnswer: 'annoiato',
          options: ['annoiato', 'eccitato', 'gentile', 'sorpreso']
        },

        // 3. Multiple choice: eccitato
        {
          type: 'multiple-choice',
          prompt: 'Cat is going to a party! She\'s so "eccitato"! What does that mean?',
          correctAnswer: 'excited',
          options: ['excited', 'bored', 'surprised', 'tired'],
          daisySays: 'Cat can\'t wait! She\'s jumping up and down!',
          speakWord: 'eccitato'
        },

        // 4. Fill in the blank: gentile
        {
          type: 'fill-blank',
          prompt: 'Cat is always nice to everyone. Cat è molto ____.',
          correctAnswer: 'gentile',
          sentence: 'Cat è molto ____.',
          hint: 'It means kind! Starts with G. Cat is always this to everyone!'
        },

        // 5. Translate to Italian: I am happy
        {
          type: 'translate-to-italian',
          prompt: 'How do you say "I am happy" in Italian?',
          english: 'I am happy',
          correctAnswer: 'sono felice',
          options: ['sono felice', 'sono triste', 'molto stanco', 'tanto eccitato'],
          _trackedWord: 'sono felice'
        },

        // 6. Matching: new feelings and phrases
        {
          type: 'matching',
          prompt: 'Match the Italian to the English! Sam and Cat need your help!',
          pairs: [
            { left: 'sorpreso', right: 'surprised' },
            { left: 'annoiato', right: 'bored' },
            { left: 'eccitato', right: 'excited' },
            { left: 'gentile', right: 'kind' }
          ]
        },

        // 7. Listen and pick: sono triste
        {
          type: 'listen-pick',
          prompt: 'Sam lost something! Listen and pick what she says!',
          speakWord: 'sono triste',
          correctAnswer: 'sono triste',
          options: ['sono triste', 'sono felice', 'molto stanco', 'tanto eccitato']
        },

        // 8. Translate to Italian: very tired
        {
          type: 'translate-to-italian',
          prompt: 'How do you say "very tired" in Italian?',
          english: 'very tired',
          correctAnswer: 'molto stanco',
          options: ['molto stanco', 'sono felice', 'tanto eccitato', 'un po\' spaventato'],
          _trackedWord: 'molto stanco'
        },

        // 9. Say it: sono felice
        {
          type: 'say-it',
          prompt: 'Can you say this phrase?',
          italian: 'sono felice',
          correctAnswer: 'sono felice',
          daisySays: 'Tell everyone you\'re happy! Say it in Italian!'
        },

        // 10. Fill in the blank: un po' spaventato
        {
          type: 'fill-blank',
          prompt: 'Cat is a little bit scared of the dark! Fill in the gap!',
          correctAnswer: 'spaventato',
          sentence: 'Sono un po\' ____.',
          hint: 'It means scared! Starts with S. Just a little bit frightened!'
        }
      ]
    },

    /* ==========================================
       LESSON 3 - How Do You Feel?
       (Full sentences + conversation practice)
       ========================================== */
    {
      id: 'emozioni-3',
      title: 'How Do You Feel?',
      vocabIndices: [10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: Cat asks Sam how she feels
        {
          type: 'conversation-order',
          prompt: 'Put the conversation in order!',
          scenario: 'Cat asks Sam how she feels',
          correctOrder: [
            'Ciao Sam!',
            'Come stai?',
            'Sono felice oggi!',
            'Perché sei felice?',
            'Perché domani è sabato!',
            'Anch\'io sono eccitato!'
          ]
        },

        // 2. Multiple choice: coraggioso
        {
          type: 'multiple-choice',
          prompt: 'Sam is not afraid of anything! She\'s like a lion! She\'s "coraggioso"! What does that mean?',
          correctAnswer: 'brave',
          options: ['brave', 'shy', 'kind', 'excited'],
          daisySays: 'Like a lion! Roar! Sam is never afraid!',
          speakWord: 'coraggioso'
        },

        // 3. Listen comprehend: Sono felice oggi!
        {
          type: 'listen-comprehend',
          sentence: 'Sono felice oggi!',
          question: 'How does the speaker feel?',
          correctAnswer: 'Happy',
          options: ['Happy', 'Sad', 'Scared', 'Tired'],
          daisySays: 'Listen carefully! How does Cat feel today?'
        },

        // 4. Multiple choice: timido
        {
          type: 'multiple-choice',
          prompt: 'When you hide behind Mummy because you feel "timido", what does that mean?',
          correctAnswer: 'shy',
          options: ['shy', 'brave', 'angry', 'bored'],
          daisySays: 'Sometimes we feel a little bit shy. That\'s OK!',
          speakWord: 'timido'
        },

        // 5. Sentence build: Non ho paura!
        {
          type: 'sentence-build',
          prompt: 'Build: "I\'m not scared!"',
          correctOrder: ['Non', 'ho', 'paura'],
          hint: 'I\'m not scared!',
          daisySays: 'Be brave like Sam! Put the words in order!'
        },

        // 6. Fill in the blank: La nonna è gentile
        {
          type: 'fill-blank',
          prompt: 'Grandma is always so lovely and nice! Fill in the gap!',
          correctAnswer: 'gentile',
          sentence: 'La nonna è ____!',
          hint: 'It means kind! Starts with G. Nonna is always this!'
        },

        // 7. Listen comprehend: Perché sei triste?
        {
          type: 'listen-comprehend',
          sentence: 'Perché sei triste?',
          question: 'What is the speaker asking about?',
          correctAnswer: 'Why someone is sad',
          options: ['Why someone is sad', 'Why someone is happy', 'Why someone is tired', 'Why someone is scared'],
          daisySays: 'Sam wants to know what\'s wrong! Listen to her question!'
        },

        // 8. Matching: full sentences
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their English meanings!',
          pairs: [
            { left: 'Sono felice oggi!', right: 'I am happy today!' },
            { left: 'Non ho paura!', right: 'I\'m not scared!' },
            { left: 'La nonna è gentile!', right: 'Grandma is kind!' },
            { left: 'Perché sei triste?', right: 'Why are you sad?' }
          ]
        },

        // 9. Fill in the blank: Sono eccitato per domani
        {
          type: 'fill-blank',
          prompt: 'Something fun is happening tomorrow! Fill in the gap!',
          correctAnswer: 'eccitato',
          sentence: 'Sono ____ per domani!',
          hint: 'It means excited! Starts with E. Cat can\'t wait!'
        },

        // 10. Multiple choice: Non ho paura!
        {
          type: 'multiple-choice',
          prompt: 'Sam says "Non ho paura!" What does she mean?',
          correctAnswer: 'I\'m not scared!',
          options: ['I\'m not scared!', 'I\'m not happy!', 'I\'m not tired!', 'I\'m not kind!'],
          daisySays: 'Sam is so brave! She\'s not afraid of anything!',
          speakWord: 'Non ho paura'
        }
      ]
    }
  ]
};
