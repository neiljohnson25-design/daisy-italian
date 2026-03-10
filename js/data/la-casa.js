/* ============================================
   La Casa (At Home) - Loud House Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.LA_CASA_DATA = {
  id: 'la-casa',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'cucina',
      english: 'kitchen',
      emoji: '🍳',
      hint: 'Where the Loud House family cooks dinner!',
      gender: 'feminine'
    },
    // 1
    {
      italian: 'bagno',
      english: 'bathroom',
      emoji: '🚿',
      hint: 'Where you brush your teeth!',
      gender: 'masculine'
    },
    // 2
    {
      italian: 'camera',
      english: 'bedroom',
      emoji: '🛏️',
      hint: 'Where you sleep at night!',
      gender: 'feminine'
    },
    // 3
    {
      italian: 'tavolo',
      english: 'table',
      emoji: '🪑',
      hint: 'Where the family eats together!',
      gender: 'masculine'
    },
    // 4
    {
      italian: 'sedia',
      english: 'chair',
      emoji: '💺',
      hint: 'You sit on this at the table!',
      gender: 'feminine'
    },
    // 5
    {
      italian: 'letto',
      english: 'bed',
      emoji: '🛏️',
      hint: 'So soft and cosy for sleeping!',
      gender: 'masculine'
    },
    // 6
    {
      italian: 'porta',
      english: 'door',
      emoji: '🚪',
      hint: 'You open this to go in and out!',
      gender: 'feminine'
    },
    // 7
    {
      italian: 'finestra',
      english: 'window',
      emoji: '🪟',
      hint: 'Look through this to see outside!',
      gender: 'feminine'
    },
    // 8
    {
      italian: 'giardino',
      english: 'garden',
      emoji: '🌻',
      hint: 'The green space outside the house!',
      gender: 'masculine'
    },
    // 9
    {
      italian: 'divano',
      english: 'sofa',
      emoji: '🛋️',
      hint: 'The family watches TV on this!',
      gender: 'masculine'
    },
    // 10
    {
      italian: 'televisione',
      english: 'television',
      emoji: '📺',
      hint: 'Everyone wants to watch this!',
      gender: 'feminine'
    },
    // 11
    {
      italian: 'scala',
      english: 'stairs',
      emoji: '🪜',
      hint: 'You go up these to the bedrooms!',
      gender: 'feminine'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases
    // 0
    { italian: 'in cucina', english: 'in the kitchen', emoji: '🍳', hint: 'Where Mum makes dinner!' },
    // 1
    { italian: 'in bagno', english: 'in the bathroom', emoji: '🚿', hint: 'Where you wash your hands!' },
    // 2
    { italian: 'la mia camera', english: 'my bedroom', emoji: '🛏️', hint: 'Your special room!' },
    // 3
    { italian: 'sul tavolo', english: 'on the table', emoji: '🪑', hint: 'Where you put your dinner plate!' },
    // 4
    { italian: 'in giardino', english: 'in the garden', emoji: '🌻', hint: 'Outside where the flowers grow!' },

    // L3 - Full sentences
    // 5
    { italian: 'La mamma è in cucina!', english: 'Mum is in the kitchen!', emoji: '👩‍🍳', hint: 'Where is Mum? She is cooking!' },
    // 6
    { italian: 'Vado in camera mia!', english: 'I\'m going to my bedroom!', emoji: '🛏️', hint: 'Tell everyone where you are going!' },
    // 7
    { italian: 'Apri la porta per favore!', english: 'Open the door please!', emoji: '🚪', hint: 'Ask nicely to open the door!' },
    // 8
    { italian: 'Il gatto è sul divano!', english: 'The cat is on the sofa!', emoji: '🐱🛋️', hint: 'The cat is sitting somewhere comfy!' },
    // 9
    { italian: 'Andiamo in giardino!', english: 'Let\'s go to the garden!', emoji: '🌻', hint: 'Let\'s all go outside together!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Rooms of the House
       ========================================== */
    {
      id: 'la-casa-1',
      title: 'Rooms of the House',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: cucina
        {
          type: 'multiple-choice',
          prompt: 'What does "cucina" mean in English?',
          correctAnswer: 'kitchen',
          options: ['kitchen', 'bathroom', 'bedroom', 'garden'],
          daisySays: 'This is where the Loud House family makes their yummy dinner!',
          speakWord: 'cucina'
        },

        // 2. Picture match: bagno
        {
          type: 'picture-match',
          prompt: 'Which picture matches "bagno"?',
          speakWord: 'bagno',
          correctAnswer: 'bagno',
          options: [
            { value: 'bagno', emoji: '🚿', label: 'bagno' },
            { value: 'cucina', emoji: '🍳', label: 'cucina' },
            { value: 'camera', emoji: '🛏️', label: 'camera' },
            { value: 'tavolo', emoji: '🪑', label: 'tavolo' }
          ]
        },

        // 3. Listen and pick: camera
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which room do you hear?',
          speakWord: 'camera',
          correctAnswer: 'camera',
          options: ['camera', 'cucina', 'bagno', 'sedia']
        },

        // 4. Multiple choice: tavolo
        {
          type: 'multiple-choice',
          prompt: 'The whole Loud family sits around the "tavolo" for dinner. What is it?',
          correctAnswer: 'table',
          options: ['table', 'chair', 'bed', 'door'],
          daisySays: 'Imagine all the Loud kids around it - so noisy!',
          speakWord: 'tavolo'
        },

        // 5. Fill in the blank: sedia
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word!',
          correctAnswer: 'sedia',
          sentence: 'You sit on a ____ at the table.',
          hint: 'It means chair! Starts with S.'
        },

        // 6. Matching: rooms and furniture
        {
          type: 'matching',
          prompt: 'Match each Italian word to its English meaning!',
          pairs: [
            { left: 'cucina', right: 'kitchen' },
            { left: 'bagno', right: 'bathroom' },
            { left: 'camera', right: 'bedroom' },
            { left: 'tavolo', right: 'table' }
          ]
        },

        // 7. Picture match: cucina
        {
          type: 'picture-match',
          prompt: 'Lincoln is hungry! Which room is the "cucina"?',
          speakWord: 'cucina',
          correctAnswer: 'cucina',
          options: [
            { value: 'cucina', emoji: '🍳', label: 'cucina' },
            { value: 'bagno', emoji: '🚿', label: 'bagno' },
            { value: 'camera', emoji: '🛏️', label: 'camera' },
            { value: 'sedia', emoji: '💺', label: 'sedia' }
          ]
        },

        // 8. Listen and pick: sedia
        {
          type: 'listen-pick',
          prompt: 'What word do you hear? Listen closely!',
          speakWord: 'sedia',
          correctAnswer: 'sedia',
          options: ['sedia', 'tavolo', 'cucina', 'camera']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Furniture & Places
       Now we learn about things in the house!
       ========================================== */
    {
      id: 'la-casa-2',
      title: 'Furniture & Places',
      vocabIndices: [5, 6, 7, 8],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: letto
        {
          type: 'multiple-choice',
          prompt: 'What does "letto" mean in English?',
          correctAnswer: 'bed',
          options: ['bed', 'door', 'window', 'garden'],
          daisySays: 'All the Loud kids have one of these - some have to share!',
          speakWord: 'letto'
        },

        // 2. Listen-pick: porta
        {
          type: 'listen-pick',
          prompt: 'Lincoln is knocking! What word do you hear?',
          speakWord: 'porta',
          correctAnswer: 'porta',
          options: ['porta', 'finestra', 'letto', 'giardino']
        },

        // 3. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "in cucina" mean?',
          correctAnswer: 'in the kitchen',
          options: ['in the kitchen', 'in the bathroom', 'in the garden', 'on the table'],
          daisySays: 'Where does Mum cook? She is...',
          speakWord: 'in cucina'
        },

        // 4. Fill-blank: finestra
        {
          type: 'fill-blank',
          prompt: 'Look through this to see outside! Fill in the word!',
          correctAnswer: 'finestra',
          sentence: 'Luna looks through the ____ at the moon.',
          hint: 'It means window! Starts with F.'
        },

        // 5. Matching: furniture and phrases
        {
          type: 'matching',
          prompt: 'Match the Italian words to their English meanings!',
          pairs: [
            { left: 'letto', right: 'bed' },
            { left: 'porta', right: 'door' },
            { left: 'finestra', right: 'window' },
            { left: 'giardino', right: 'garden' }
          ]
        },

        // 6. Translate to Italian: in the bathroom
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'in the bathroom',
          correctAnswer: 'in bagno',
          options: ['in bagno', 'in cucina', 'in giardino', 'la mia camera'],
          _trackedWord: 'bagno'
        },

        // 7. Listen-pick: la mia camera
        {
          type: 'listen-pick',
          prompt: 'Lori is talking about her room! What phrase do you hear?',
          speakWord: 'la mia camera',
          correctAnswer: 'la mia camera',
          options: ['la mia camera', 'in cucina', 'sul tavolo', 'in giardino']
        },

        // 8. Say it: giardino
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'giardino',
          correctAnswer: 'giardino',
          daisySays: 'The garden! Where the Louds play outside! Say it!'
        },

        // 9. Fill-blank: phrase context
        {
          type: 'fill-blank',
          prompt: 'Where is dinner? It is on the... Fill in the phrase!',
          correctAnswer: 'tavolo',
          sentence: 'La cena è sul ____.',
          hint: 'It means table! Starts with T.'
        },

        // 10. Matching: phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian phrases to their English meanings!',
          pairs: [
            { left: 'in cucina', right: 'in the kitchen' },
            { left: 'in bagno', right: 'in the bathroom' },
            { left: 'la mia camera', right: 'my bedroom' },
            { left: 'in giardino', right: 'in the garden' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Family at Home
       Full sentences about family life!
       ========================================== */
    {
      id: 'la-casa-3',
      title: 'Family at Home',
      vocabIndices: [9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: A day in the Loud House
        {
          type: 'conversation-order',
          prompt: 'Put the Loud House morning in order!',
          scenario: 'It is morning in the Loud House! What happens first?',
          correctOrder: [
            'Buongiorno!',
            'Vado in bagno!',
            'La mamma è in cucina!',
            'Andiamo in giardino!',
            'Ciao ciao!'
          ]
        },

        // 2. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "La mamma è in cucina!" mean?',
          correctAnswer: 'Mum is in the kitchen!',
          options: ['Mum is in the kitchen!', 'Mum is in the garden!', 'Mum is in the bedroom!', 'Mum is in the bathroom!'],
          daisySays: 'Where is Mum? She is making something yummy!',
          speakWord: 'La mamma è in cucina'
        },

        // 3. Listen comprehend: Il gatto è sul divano
        {
          type: 'listen-comprehend',
          sentence: 'Il gatto è sul divano!',
          question: 'Where is the cat?',
          correctAnswer: 'On the sofa',
          options: ['On the sofa', 'In the kitchen', 'In the garden', 'On the table'],
          daisySays: 'Listen carefully - where is the cat sitting?'
        },

        // 4. Sentence build: Vado in camera mia
        {
          type: 'sentence-build',
          prompt: 'Build: "I\'m going to my bedroom!"',
          correctOrder: ['Vado', 'in', 'camera', 'mia'],
          hint: 'I\'m going to my bedroom',
          daisySays: 'Put the words in the right order!'
        },

        // 5. Fill-blank: word in sentence context
        {
          type: 'fill-blank',
          prompt: 'The family watches TV! Fill in the missing word!',
          correctAnswer: 'televisione',
          sentence: 'Lincoln guarda la ____.',
          hint: 'It means television! Starts with T.'
        },

        // 6. Matching: sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their meanings!',
          pairs: [
            { left: 'La mamma è in cucina', right: 'Mum is in the kitchen' },
            { left: 'Vado in camera mia', right: 'I\'m going to my bedroom' },
            { left: 'Il gatto è sul divano', right: 'The cat is on the sofa' },
            { left: 'Andiamo in giardino', right: 'Let\'s go to the garden' }
          ]
        },

        // 7. Multiple choice: divano
        {
          type: 'multiple-choice',
          prompt: 'The whole family wants to sit on the "divano" to watch TV. What is it?',
          correctAnswer: 'sofa',
          options: ['sofa', 'chair', 'bed', 'table'],
          daisySays: 'It is soft and comfy - perfect for movie night!',
          speakWord: 'divano'
        },

        // 8. Listen comprehend: Apri la porta per favore
        {
          type: 'listen-comprehend',
          sentence: 'Apri la porta per favore!',
          question: 'What is the person asking you to do?',
          correctAnswer: 'Open the door',
          options: ['Open the door', 'Close the window', 'Go to the garden', 'Sit on the sofa'],
          daisySays: 'Listen to what they are asking - so polite!'
        },

        // 9. Fill-blank: scala
        {
          type: 'fill-blank',
          prompt: 'You go up these to get to the bedrooms! Fill in the word!',
          correctAnswer: 'scala',
          sentence: 'Lincoln sale la ____ per andare in camera.',
          hint: 'It means stairs! Starts with S.'
        },

        // 10. Matching: new vocab (divano, televisione, scala) + review
        {
          type: 'matching',
          prompt: 'Final challenge! Match ALL these home words!',
          pairs: [
            { left: 'divano', right: 'sofa' },
            { left: 'televisione', right: 'television' },
            { left: 'scala', right: 'stairs' },
            { left: 'porta', right: 'door' }
          ]
        }
      ]
    }
  ]
};
