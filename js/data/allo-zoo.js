/* ============================================
   Allo Zoo (At the Zoo) - Topic Data
   Theme: Disney Princesses
   ============================================ */

window.ALLO_ZOO_DATA = {
  id: 'allo-zoo',

  vocabulary: [
    // 0 - giraffa
    { italian: 'giraffa', english: 'giraffe', emoji: '🦒', hint: 'Rapunzel would love to see this tall animal from her tower!' },
    // 1 - zebra
    { italian: 'zebra', english: 'zebra', emoji: '🦓', hint: 'Mulan would admire this horse with black and white stripes!' },
    // 2 - scimmia
    { italian: 'scimmia', english: 'monkey', emoji: '🐒', hint: 'Jasmine\'s cheeky friend Abu is one of these!' },
    // 3 - pinguino
    { italian: 'pinguino', english: 'penguin', emoji: '🐧', hint: 'Elsa would love this little bird that waddles on the ice!' },
    // 4 - coccodrillo
    { italian: 'coccodrillo', english: 'crocodile', emoji: '🐊', hint: 'Tiana sees these sneaky creatures in the bayou!' },
    // 5 - serpente
    { italian: 'serpente', english: 'snake', emoji: '🐍', hint: 'Jasmine\'s enemy Jafar turns into one of these!' },
    // 6 - pappagallo
    { italian: 'pappagallo', english: 'parrot', emoji: '🦜', hint: 'Jafar\'s chatty sidekick Iago is one of these colourful birds!' },
    // 7 - tigre
    { italian: 'tigre', english: 'tiger', emoji: '🐅', hint: 'Jasmine\'s big stripy friend Rajah is one of these!' },
    // 8 - ippopotamo
    { italian: 'ippopotamo', english: 'hippo', emoji: '🦛', hint: 'Tiana would see this big splashy animal by the river!' },
    // 9 - tartaruga
    { italian: 'tartaruga', english: 'turtle', emoji: '🐢', hint: 'Moana\'s ocean friend with a little shell on its back!' },
    // 10 - delfino
    { italian: 'delfino', english: 'dolphin', emoji: '🐬', hint: 'Moana\'s ocean friend that loves to jump and splash!' },
    // 11 - squalo
    { italian: 'squalo', english: 'shark', emoji: '🦈', hint: 'Ariel would swim away fast from this big-toothed fish!' }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'la giraffa alta', english: 'the tall giraffe', emoji: '🦒', hint: 'Rapunzel looks up at this tall zoo friend!' },
    // 1
    { italian: 'la tartaruga lenta', english: 'the slow turtle', emoji: '🐢', hint: 'Moana\'s shelled friend takes its time!' },
    // 2
    { italian: 'la scimmia piccola', english: 'the small monkey', emoji: '🐒', hint: 'Jasmine\'s little friend Abu is not very big!' },
    // 3
    { italian: 'il pappagallo verde', english: 'the green parrot', emoji: '🦜', hint: 'A colourful bird like the ones in Moana\'s islands!' },
    // 4
    { italian: 'il delfino veloce', english: 'the fast dolphin', emoji: '🐬', hint: 'Ariel\'s speedy ocean friend!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'La giraffa è molto alta!', english: 'The giraffe is very tall!', emoji: '🦒✨', hint: 'Rapunzel describes the tallest animal at the zoo!' },
    // 6
    { italian: 'Il pinguino è bianco e nero!', english: 'The penguin is black and white!', emoji: '🐧⬛⬜', hint: 'Elsa describes her favourite waddling bird!' },
    // 7
    { italian: 'La scimmia mangia la banana!', english: 'The monkey is eating a banana!', emoji: '🐒🍌', hint: 'Abu is having a yummy snack!' },
    // 8
    { italian: 'Mi piace il delfino!', english: 'I like the dolphin!', emoji: '🐬❤️', hint: 'Moana tells everyone her favourite ocean animal!' },
    // 9
    { italian: 'Il coccodrillo ha una bocca grande!', english: 'The crocodile has a big mouth!', emoji: '🐊😮', hint: 'Tiana watches out for this big-mouthed bayou creature!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [
    /* ==========================================
       Lesson 1: Zoo Animals (vocabIndices 0-5)
       ========================================== */
    {
      id: 'allo-zoo-1',
      title: 'Zoo Animals',
      description: 'Learn the names of amazing zoo animals!',
      vocabIndices: [0, 1, 2, 3, 4, 5],
      exercises: [
        // Exercise 1: Picture match - giraffa
        {
          type: 'picture-match',
          prompt: 'Rapunzel is at the zoo! Which animal is a "giraffa"?',
          speakWord: 'giraffa',
          correctAnswer: 'giraffa',
          options: [
            { value: 'giraffa', emoji: '🦒', label: 'giraffa' },
            { value: 'zebra', emoji: '🦓', label: 'zebra' },
            { value: 'scimmia', emoji: '🐒', label: 'scimmia' },
            { value: 'pinguino', emoji: '🐧', label: 'pinguino' }
          ]
        },

        // Exercise 2: Multiple choice - zebra
        {
          type: 'multiple-choice',
          prompt: 'What is "zebra" in Italian?',
          correctAnswer: 'zebra',
          options: ['zebra', 'giraffa', 'serpente', 'coccodrillo'],
          daisySays: 'This stripy animal looks like a horse in pyjamas!',
          speakWord: 'zebra'
        },

        // Exercise 3: Listen and pick - scimmia
        {
          type: 'listen-pick',
          prompt: 'Jasmine is talking about Abu! Which word do you hear?',
          speakWord: 'scimmia',
          correctAnswer: 'scimmia',
          options: ['scimmia', 'serpente', 'giraffa', 'pinguino']
        },

        // Exercise 4: Picture match - pinguino
        {
          type: 'picture-match',
          prompt: 'Elsa loves these icy birds! Which one is a "pinguino"?',
          speakWord: 'pinguino',
          correctAnswer: 'pinguino',
          options: [
            { value: 'pinguino', emoji: '🐧', label: 'pinguino' },
            { value: 'coccodrillo', emoji: '🐊', label: 'coccodrillo' },
            { value: 'giraffa', emoji: '🦒', label: 'giraffa' },
            { value: 'zebra', emoji: '🦓', label: 'zebra' }
          ]
        },

        // Exercise 5: Multiple choice - coccodrillo
        {
          type: 'multiple-choice',
          prompt: 'Tiana sees these in the bayou! What is "crocodile" in Italian?',
          correctAnswer: 'coccodrillo',
          options: ['coccodrillo', 'serpente', 'scimmia', 'pinguino'],
          daisySays: 'This sneaky creature has lots of teeth!',
          speakWord: 'coccodrillo'
        },

        // Exercise 6: Listen and pick - serpente
        {
          type: 'listen-pick',
          prompt: 'Oh no, Jafar transformed! What animal do you hear?',
          speakWord: 'serpente',
          correctAnswer: 'serpente',
          options: ['serpente', 'scimmia', 'zebra', 'coccodrillo']
        },

        // Exercise 7: Matching - zoo animals
        {
          type: 'matching',
          prompt: 'Match the Italian zoo animal names to the English ones!',
          pairs: [
            { left: 'giraffa', right: 'giraffe' },
            { left: 'zebra', right: 'zebra' },
            { left: 'scimmia', right: 'monkey' },
            { left: 'pinguino', right: 'penguin' }
          ]
        },

        // Exercise 8: Picture match - serpente
        {
          type: 'picture-match',
          prompt: 'Which slithery animal is a "serpente"?',
          speakWord: 'serpente',
          correctAnswer: 'serpente',
          options: [
            { value: 'serpente', emoji: '🐍', label: 'serpente' },
            { value: 'coccodrillo', emoji: '🐊', label: 'coccodrillo' },
            { value: 'scimmia', emoji: '🐒', label: 'scimmia' },
            { value: 'giraffa', emoji: '🦒', label: 'giraffa' }
          ]
        },

        // Exercise 9: Matching - more zoo animals
        {
          type: 'matching',
          prompt: 'Match the rest of the zoo animals!',
          pairs: [
            { left: 'coccodrillo', right: 'crocodile' },
            { left: 'serpente', right: 'snake' },
            { left: 'giraffa', right: 'giraffe' },
            { left: 'zebra', right: 'zebra' }
          ]
        },

        // Exercise 10: Multiple choice - giraffa
        {
          type: 'multiple-choice',
          prompt: 'Rapunzel sees the tallest animal! What is "giraffe" in Italian?',
          correctAnswer: 'giraffa',
          options: ['giraffa', 'zebra', 'coccodrillo', 'pinguino'],
          daisySays: 'This animal has a very long neck, just like Rapunzel\'s hair is very long!',
          speakWord: 'giraffa'
        }
      ]
    },

    /* ==========================================
       Lesson 2: Describing Zoo Animals (vocabIndices 6-11, phraseIndices 0-4)
       ========================================== */
    {
      id: 'allo-zoo-2',
      title: 'Describing Zoo Animals',
      description: 'Learn to describe zoo animals with Italian phrases!',
      vocabIndices: [6, 7, 8, 9, 10, 11],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [
        // Exercise 1: Multiple choice - pappagallo
        {
          type: 'multiple-choice',
          prompt: 'Iago is Jafar\'s pet! What is "parrot" in Italian?',
          correctAnswer: 'pappagallo',
          options: ['pappagallo', 'delfino', 'squalo', 'tigre'],
          daisySays: 'This colourful bird can talk just like you!',
          speakWord: 'pappagallo'
        },

        // Exercise 2: Listen and pick - tigre
        {
          type: 'listen-pick',
          prompt: 'Jasmine is with Rajah! Which animal do you hear?',
          speakWord: 'tigre',
          correctAnswer: 'tigre',
          options: ['tigre', 'pappagallo', 'tartaruga', 'ippopotamo']
        },

        // Exercise 3: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "la giraffa alta" mean?',
          correctAnswer: 'the tall giraffe',
          options: ['the tall giraffe', 'the slow turtle', 'the small monkey', 'the green parrot'],
          daisySays: 'Rapunzel looks way up at this tall zoo friend!',
          speakWord: 'la giraffa alta'
        },

        // Exercise 4: Listen and pick - phrase
        {
          type: 'listen-pick',
          prompt: 'Moana describes an ocean friend! What phrase do you hear?',
          speakWord: 'il delfino veloce',
          correctAnswer: 'il delfino veloce',
          options: ['il delfino veloce', 'la tartaruga lenta', 'la giraffa alta', 'il pappagallo verde']
        },

        // Exercise 5: Fill-blank - alta
        {
          type: 'fill-blank',
          prompt: 'How tall is the giraffe? Fill in the missing word!',
          correctAnswer: 'alta',
          sentence: 'La giraffa è ____.',
          hint: 'It means tall! Like Rapunzel\'s tower - starts with A.'
        },

        // Exercise 6: Fill-blank - lenta
        {
          type: 'fill-blank',
          prompt: 'How fast is the turtle? Fill in the missing word!',
          correctAnswer: 'lenta',
          sentence: 'La tartaruga è ____.',
          hint: 'It means slow! This shelled friend takes its time - starts with L.'
        },

        // Exercise 7: Sentence build - la scimmia piccola
        {
          type: 'sentence-build',
          prompt: 'Build: "the small monkey"',
          correctOrder: ['la', 'scimmia', 'piccola'],
          hint: 'the small monkey',
          daisySays: 'Put the words together to describe Abu!'
        },

        // Exercise 8: Multiple choice - how to say phrase
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the green parrot" in Italian?',
          correctAnswer: 'il pappagallo verde',
          options: ['il pappagallo verde', 'il delfino veloce', 'la giraffa alta', 'la tartaruga lenta'],
          daisySays: 'Think of a colourful bird in the tropical islands!',
          speakWord: 'il pappagallo verde'
        },

        // Exercise 9: Sentence build - il delfino veloce
        {
          type: 'sentence-build',
          prompt: 'Build: "the fast dolphin"',
          correctOrder: ['il', 'delfino', 'veloce'],
          hint: 'the fast dolphin',
          daisySays: 'Moana\'s speedy ocean friend!'
        },

        // Exercise 10: Matching - phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian zoo phrases to English!',
          pairs: [
            { left: 'la giraffa alta', right: 'the tall giraffe' },
            { left: 'la tartaruga lenta', right: 'the slow turtle' },
            { left: 'la scimmia piccola', right: 'the small monkey' },
            { left: 'il delfino veloce', right: 'the fast dolphin' }
          ]
        }
      ]
    },

    /* ==========================================
       Lesson 3: Zoo Day Sentences (all vocab, phraseIndices 5-9)
       ========================================== */
    {
      id: 'allo-zoo-3',
      title: 'Zoo Day Sentences!',
      description: 'Build full Italian sentences about a day at the zoo!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [
        // Exercise 1: Conversation order - a day at the zoo
        {
          type: 'conversation-order',
          prompt: 'Put the princesses\' zoo day adventure in order!',
          scenario: 'The Disney Princesses visit the zoo together!',
          correctOrder: [
            'Andiamo allo zoo!',
            'Guarda la giraffa!',
            'La scimmia mangia la banana!',
            'Mi piace il delfino!',
            'Il coccodrillo ha una bocca grande!',
            'Che bella giornata!'
          ]
        },

        // Exercise 2: Multiple choice - sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "La giraffa è molto alta!" mean?',
          correctAnswer: 'The giraffe is very tall!',
          options: ['The giraffe is very tall!', 'The monkey is very small!', 'The turtle is very slow!', 'The dolphin is very fast!'],
          daisySays: 'Rapunzel describes the tallest animal at the zoo!',
          speakWord: 'La giraffa è molto alta'
        },

        // Exercise 3: Translate to Italian - sentence
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'I like the dolphin!',
          correctAnswer: 'Mi piace il delfino!',
          options: ['Mi piace il delfino!', 'Mi piace il pinguino!', 'Mi piace la giraffa!', 'Mi piace la scimmia!'],
          _trackedWord: 'delfino'
        },

        // Exercise 4: Listen comprehend - monkey eating
        {
          type: 'listen-comprehend',
          sentence: 'La scimmia mangia la banana!',
          question: 'What is happening?',
          correctAnswer: 'The monkey is eating a banana',
          options: ['The monkey is eating a banana', 'The monkey is sleeping', 'I like monkeys', 'The monkey is small'],
          daisySays: 'Listen carefully to what Abu is doing!'
        },

        // Exercise 5: Sentence build - La giraffa è molto alta!
        {
          type: 'sentence-build',
          prompt: 'Build: "The giraffe is very tall!"',
          correctOrder: ['La', 'giraffa', 'è', 'molto', 'alta'],
          hint: 'The giraffe is very tall!',
          daisySays: 'Rapunzel looks way up from her tower at this amazing animal!'
        },

        // Exercise 6: Translate to Italian - penguin colours
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'The penguin is black and white!',
          correctAnswer: 'Il pinguino è bianco e nero!',
          options: ['Il pinguino è bianco e nero!', 'Il pinguino è grande!', 'Mi piace il pinguino!', 'Il pinguino mangia il pesce!'],
          _trackedWord: 'pinguino'
        },

        // Exercise 7: Listen comprehend - crocodile mouth
        {
          type: 'listen-comprehend',
          sentence: 'Il coccodrillo ha una bocca grande!',
          question: 'What does the crocodile have?',
          correctAnswer: 'A big mouth',
          options: ['A big mouth', 'A long tail', 'Sharp teeth', 'Green skin'],
          daisySays: 'Tiana watches out for this creature in the bayou!'
        },

        // Exercise 8: Sentence build - Mi piace il delfino!
        {
          type: 'sentence-build',
          prompt: 'Build: "I like the dolphin!"',
          correctOrder: ['Mi', 'piace', 'il', 'delfino'],
          hint: 'I like the dolphin!',
          daisySays: 'Tell Moana which ocean animal you love!'
        },

        // Exercise 9: Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian zoo sentences to English!',
          pairs: [
            { left: 'La giraffa è molto alta!', right: 'The giraffe is very tall!' },
            { left: 'Mi piace il delfino!', right: 'I like the dolphin!' },
            { left: 'La scimmia mangia la banana!', right: 'The monkey eats a banana!' },
            { left: 'Il pinguino è bianco e nero!', right: 'The penguin is black and white!' }
          ]
        },

        // Exercise 10: Conversation order - at the aquarium section
        {
          type: 'conversation-order',
          prompt: 'Put the ocean zone visit in order!',
          scenario: 'Ariel and Moana visit the zoo\'s ocean zone!',
          correctOrder: [
            'Guarda il delfino!',
            'Il delfino è veloce!',
            'Mi piace il delfino!',
            'C\'è anche uno squalo!',
            'Il coccodrillo ha una bocca grande!'
          ]
        }
      ]
    }
  ]
};