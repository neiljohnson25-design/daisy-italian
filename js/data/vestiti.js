/* ============================================
   Vestiti (Clothes) - Disney Princesses Theme
   Topic Data: Vocabulary + 3 Lessons
   Merges Colori + Corpo themes
   ============================================ */

window.VESTITI_DATA = {
  id: 'vestiti',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'maglietta',
      english: 't-shirt',
      emoji: '👕',
      hint: 'The princess wears this every casual day!',
      gender: 'feminine'
    },
    // 1
    {
      italian: 'pantaloni',
      english: 'trousers',
      emoji: '👖',
      hint: 'You wear these on your legs!',
      gender: 'masculine'
    },
    // 2
    {
      italian: 'scarpe',
      english: 'shoes',
      emoji: '👟',
      hint: 'Cinderella lost one of these at the ball!',
      gender: 'feminine'
    },
    // 3
    {
      italian: 'cappello',
      english: 'hat',
      emoji: '🎩',
      hint: 'You put this on your head!',
      gender: 'masculine'
    },
    // 4
    {
      italian: 'gonna',
      english: 'skirt',
      emoji: '👗',
      hint: 'A twirly thing the princess loves to wear!',
      gender: 'feminine'
    },
    // 5
    {
      italian: 'vestito',
      english: 'dress',
      emoji: '👗',
      hint: 'Every princess has a beautiful one of these!',
      gender: 'masculine'
    },
    // 6
    {
      italian: 'calzini',
      english: 'socks',
      emoji: '🧦',
      hint: 'They keep your feet warm inside your shoes!',
      gender: 'masculine'
    },
    // 7
    {
      italian: 'giacca',
      english: 'jacket',
      emoji: '🧥',
      hint: 'You wear this when it is cold outside!',
      gender: 'feminine'
    },
    // 8
    {
      italian: 'sciarpa',
      english: 'scarf',
      emoji: '🧣',
      hint: 'You wrap this around your neck in winter!',
      gender: 'feminine'
    },
    // 9
    {
      italian: 'guanti',
      english: 'gloves',
      emoji: '🧤',
      hint: 'Elsa wears these on her hands!',
      gender: 'masculine'
    },
    // 10
    {
      italian: 'pigiama',
      english: 'pyjamas',
      emoji: '😴',
      hint: 'You wear this to bed at night!',
      gender: 'masculine'
    },
    // 11
    {
      italian: 'costume',
      english: 'swimsuit',
      emoji: '👙',
      hint: 'You wear this to go swimming!',
      gender: 'masculine'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (colour + clothing combos)
    // 0
    { italian: 'la maglietta rossa', english: 'the red t-shirt', emoji: '👕🔴', hint: 'A shirt + a colour you learned!' },
    // 1
    { italian: 'le scarpe nere', english: 'the black shoes', emoji: '👟⚫', hint: 'Shoes in the colour of night!' },
    // 2
    { italian: 'il cappello blu', english: 'the blue hat', emoji: '🎩🔵', hint: 'A hat in the colour of the sky!' },
    // 3
    { italian: 'la gonna rosa', english: 'the pink skirt', emoji: '👗🌸', hint: 'A princess favourite!' },
    // 4
    { italian: 'i guanti bianchi', english: 'the white gloves', emoji: '🧤⚪', hint: 'Elsa\'s favourite colour gloves!' },

    // L3 - Full sentences
    // 5
    { italian: 'Metti le scarpe!', english: 'Put your shoes on!', emoji: '👟', hint: 'Mummy says this every morning!' },
    // 6
    { italian: 'Mi piace il vestito viola!', english: 'I like the purple dress!', emoji: '👗💜', hint: 'Tell everyone about the dress you love!' },
    // 7
    { italian: 'Dove sono i miei calzini?', english: 'Where are my socks?', emoji: '🧦❓', hint: 'Ask Mummy when you can\'t find them!' },
    // 8
    { italian: 'Fa freddo, prendi la giacca!', english: 'It\'s cold, grab the jacket!', emoji: '🧥❄️', hint: 'Mummy says this when it\'s chilly!' },
    // 9
    { italian: 'Il mio pigiama \u00E8 rosa!', english: 'My pyjamas are pink!', emoji: '😴🌸', hint: 'Describe your favourite nighttime outfit!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Everyday Clothes
       ========================================== */
    {
      id: 'vestiti-1',
      title: 'Everyday Clothes',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: maglietta
        {
          type: 'multiple-choice',
          prompt: 'What does "maglietta" mean in English?',
          correctAnswer: 't-shirt',
          options: ['t-shirt', 'trousers', 'shoes', 'hat'],
          daisySays: 'The princess wears this every casual day!',
          speakWord: 'maglietta'
        },

        // 2. Picture match: scarpe
        {
          type: 'picture-match',
          prompt: 'Which picture matches "scarpe"?',
          speakWord: 'scarpe',
          correctAnswer: 'scarpe',
          options: [
            { value: 'scarpe', emoji: '👟', label: 'scarpe' },
            { value: 'cappello', emoji: '🎩', label: 'cappello' },
            { value: 'vestito', emoji: '👗', label: 'vestito' },
            { value: 'gonna', emoji: '👗', label: 'gonna' }
          ]
        },

        // 3. Listen and pick: pantaloni
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which clothes word do you hear?',
          speakWord: 'pantaloni',
          correctAnswer: 'pantaloni',
          options: ['pantaloni', 'maglietta', 'scarpe', 'cappello']
        },

        // 4. Multiple choice: cappello
        {
          type: 'multiple-choice',
          prompt: '"cappello" means...?',
          correctAnswer: 'hat',
          options: ['hat', 'scarf', 'gloves', 'socks'],
          daisySays: 'You put this on your head!',
          speakWord: 'cappello'
        },

        // 5. Fill in the blank: scarpe
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing word!',
          correctAnswer: 'scarpe',
          sentence: 'The princess lost her ____.',
          hint: 'Cinderella\'s glass ones! Starts with S.'
        },

        // 6. Matching: everyday clothes
        {
          type: 'matching',
          prompt: 'Match each Italian word to its English meaning!',
          pairs: [
            { left: 'maglietta', right: 't-shirt' },
            { left: 'pantaloni', right: 'trousers' },
            { left: 'scarpe', right: 'shoes' },
            { left: 'cappello', right: 'hat' }
          ]
        },

        // 7. Picture match: gonna
        {
          type: 'picture-match',
          prompt: 'Which is "gonna"?',
          speakWord: 'gonna',
          correctAnswer: 'gonna',
          options: [
            { value: 'gonna', emoji: '👗', label: 'gonna' },
            { value: 'cappello', emoji: '🎩', label: 'cappello' },
            { value: 'scarpe', emoji: '👟', label: 'scarpe' },
            { value: 'maglietta', emoji: '👕', label: 'maglietta' }
          ]
        },

        // 8. Listen and pick: gonna
        {
          type: 'listen-pick',
          prompt: 'Listen! Which clothes word do you hear?',
          speakWord: 'gonna',
          correctAnswer: 'gonna',
          options: ['gonna', 'vestito', 'calzini', 'scarpe']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Colourful Clothes
       Combining colours with clothing!
       ========================================== */
    {
      id: 'vestiti-2',
      title: 'Colourful Clothes',
      vocabIndices: [5, 6, 7, 8],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: la maglietta rossa
        {
          type: 'multiple-choice',
          prompt: 'What does "la maglietta rossa" mean?',
          correctAnswer: 'the red t-shirt',
          options: ['the red t-shirt', 'the blue hat', 'the black shoes', 'the pink skirt'],
          daisySays: 'A shirt plus a colour you learned!',
          speakWord: 'la maglietta rossa'
        },

        // 2. Listen-pick: le scarpe nere
        {
          type: 'listen-pick',
          prompt: 'Listen! What colourful clothes phrase do you hear?',
          speakWord: 'le scarpe nere',
          correctAnswer: 'le scarpe nere',
          options: ['le scarpe nere', 'il cappello blu', 'la gonna rosa', 'i guanti bianchi']
        },

        // 3. Multiple choice: the blue hat
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the blue hat" in Italian?',
          correctAnswer: 'il cappello blu',
          options: ['il cappello blu', 'la gonna rosa', 'le scarpe nere', 'la maglietta rossa'],
          daisySays: 'A hat in the colour of the sky!',
          speakWord: 'il cappello blu'
        },

        // 4. Fill-blank: rosa
        {
          type: 'fill-blank',
          prompt: 'What colour is the skirt? Fill in the missing word!',
          correctAnswer: 'rosa',
          sentence: 'La gonna \u00E8 ____.',
          hint: 'The colour of cherry blossoms! Starts with R.'
        },

        // 5. Matching: colourful clothes phrases
        {
          type: 'matching',
          prompt: 'Match the Italian phrases to English!',
          pairs: [
            { left: 'la maglietta rossa', right: 'the red t-shirt' },
            { left: 'le scarpe nere', right: 'the black shoes' },
            { left: 'il cappello blu', right: 'the blue hat' },
            { left: 'la gonna rosa', right: 'the pink skirt' }
          ]
        },

        // 6. Translate to Italian: dress
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'dress',
          correctAnswer: 'vestito',
          options: ['vestito', 'gonna', 'giacca', 'calzini'],
          _trackedWord: 'vestito'
        },

        // 7. Listen-pick: i guanti bianchi
        {
          type: 'listen-pick',
          prompt: 'Elsa is getting dressed! What phrase do you hear?',
          speakWord: 'i guanti bianchi',
          correctAnswer: 'i guanti bianchi',
          options: ['i guanti bianchi', 'le scarpe nere', 'la maglietta rossa', 'il cappello blu']
        },

        // 8. Say it: vestito
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'vestito',
          correctAnswer: 'vestito',
          daisySays: 'Every princess has a beautiful dress! Say it loud!'
        },

        // 9. Fill-blank: bianchi
        {
          type: 'fill-blank',
          prompt: 'What colour are the gloves? Fill in the missing word!',
          correctAnswer: 'bianchi',
          sentence: 'I guanti sono ____.',
          hint: 'The colour of snow! Starts with B.'
        },

        // 10. Matching: new clothing vocab
        {
          type: 'matching',
          prompt: 'You learned more clothes! Match them up!',
          pairs: [
            { left: 'vestito', right: 'dress' },
            { left: 'calzini', right: 'socks' },
            { left: 'giacca', right: 'jacket' },
            { left: 'sciarpa', right: 'scarf' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Getting Dressed!
       Full sentences about getting dressed + conversation
       ========================================== */
    {
      id: 'vestiti-3',
      title: 'Getting Dressed!',
      vocabIndices: [9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: Getting ready for school
        {
          type: 'conversation-order',
          prompt: 'Put the morning routine in order!',
          scenario: 'Getting ready for school!',
          correctOrder: [
            'Buongiorno!',
            'Dove sono i miei calzini?',
            'Metti le scarpe!',
            'Prendi la giacca!',
            'Andiamo!'
          ]
        },

        // 2. Multiple choice: Metti le scarpe!
        {
          type: 'multiple-choice',
          prompt: 'What does "Metti le scarpe!" mean?',
          correctAnswer: 'Put your shoes on!',
          options: ['Put your shoes on!', 'Take off your hat!', 'Wear the dress!', 'Find the gloves!'],
          daisySays: 'Mummy says this every morning!',
          speakWord: 'Metti le scarpe'
        },

        // 3. Listen comprehend: Mi piace il vestito viola!
        {
          type: 'listen-comprehend',
          sentence: 'Mi piace il vestito viola!',
          question: 'What does the speaker like?',
          correctAnswer: 'The purple dress',
          options: ['The purple dress', 'The pink skirt', 'The red t-shirt', 'The blue hat'],
          daisySays: 'Listen carefully to what they say they like!'
        },

        // 4. Listen-pick: Dove sono i miei calzini?
        {
          type: 'listen-pick',
          prompt: 'Someone is getting dressed! What sentence do you hear?',
          speakWord: 'Dove sono i miei calzini?',
          correctAnswer: 'Dove sono i miei calzini?',
          options: ['Dove sono i miei calzini?', 'Metti le scarpe!', 'Mi piace il vestito!', 'Prendi la giacca!']
        },

        // 5. Fill-blank: rosa
        {
          type: 'fill-blank',
          prompt: 'What colour are the pyjamas? Fill in the missing word!',
          correctAnswer: 'rosa',
          sentence: 'Il mio pigiama \u00E8 ____!',
          hint: 'Daisy\'s favourite colour! Starts with R.'
        },

        // 6. Matching: getting dressed sentences
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their meanings!',
          pairs: [
            { left: 'Metti le scarpe', right: 'Put your shoes on' },
            { left: 'Mi piace il vestito', right: 'I like the dress' },
            { left: 'Dove sono i calzini', right: 'Where are the socks' },
            { left: 'Prendi la giacca', right: 'Grab the jacket' }
          ]
        },

        // 7. Sentence build: I like the purple dress
        {
          type: 'sentence-build',
          prompt: 'Build: "I like the purple dress"',
          correctOrder: ['Mi', 'piace', 'il', 'vestito', 'viola'],
          hint: 'I like the purple dress',
          daisySays: 'Put the words in the right order!'
        },

        // 8. Multiple choice: costume
        {
          type: 'multiple-choice',
          prompt: 'How do you say "swimsuit" in Italian?',
          correctAnswer: 'costume',
          options: ['costume', 'pigiama', 'guanti', 'sciarpa'],
          daisySays: 'You wear this to go swimming!',
          speakWord: 'costume'
        },

        // 9. Translate to Italian: pyjamas
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'pyjamas',
          correctAnswer: 'pigiama',
          options: ['pigiama', 'costume', 'vestito', 'giacca'],
          _trackedWord: 'pigiama'
        },

        // 10. Matching: final vocab (pigiama, costume, guanti, sciarpa)
        {
          type: 'matching',
          prompt: 'Final challenge! Match all these clothes!',
          pairs: [
            { left: 'pigiama', right: 'pyjamas' },
            { left: 'costume', right: 'swimsuit' },
            { left: 'guanti', right: 'gloves' },
            { left: 'sciarpa', right: 'scarf' }
          ]
        }
      ]
    }
  ]
};
