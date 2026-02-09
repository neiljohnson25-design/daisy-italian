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
    // LESSON 2: More Family (nonno, zia, zio, cugina, bambina, famiglia)
    // ==========================================
    {
      id: 'famiglia-2',
      title: 'More Family',
      vocabIndices: [5, 6, 7, 8, 9, 10],
      exercises: [
        // 1 - Multiple choice: nonno
        {
          type: 'multiple-choice',
          prompt: 'What does "nonno" mean in English?',
          correctAnswer: 'grandpa',
          options: ['grandpa', 'grandma', 'uncle', 'dad'],
          daisySays: 'Think of Albert from the Loud House - he\'s Lincoln\'s nonno!',
          speakWord: 'nonno'
        },
        // 2 - Picture match: zia
        {
          type: 'picture-match',
          prompt: 'Which picture is "zia"?',
          speakWord: 'zia',
          correctAnswer: 'zia',
          options: [
            { value: 'zia', emoji: '\uD83D\uDC69\u200D\uD83E\uDDB1', label: 'zia' },
            { value: 'zio', emoji: '\uD83D\uDC68\u200D\uD83E\uDDB1', label: 'zio' },
            { value: 'nonna', emoji: '\uD83D\uDC75', label: 'nonna' },
            { value: 'cugina', emoji: '\uD83D\uDC67', label: 'cugina' }
          ]
        },
        // 3 - Listen and pick: zio
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! What word do you hear?',
          speakWord: 'zio',
          correctAnswer: 'zio',
          options: ['zio', 'zia', 'nonno', 'pap\u00E0']
        },
        // 4 - Multiple choice: cugina
        {
          type: 'multiple-choice',
          prompt: 'Your zia\'s daughter is your...?',
          correctAnswer: 'cugina',
          options: ['cugina', 'sorella', 'bambina', 'zia'],
          daisySays: 'A cugina is like having a built-in best friend in your family!',
          speakWord: 'cugina'
        },
        // 5 - Multiple choice: bambina
        {
          type: 'multiple-choice',
          prompt: 'Baby Lily in the Loud House is a little "bambina". What does that mean?',
          correctAnswer: 'little girl',
          options: ['little girl', 'sister', 'cousin (girl)', 'grandma'],
          daisySays: 'Lily is the tiniest member of the Loud House famiglia!',
          speakWord: 'bambina'
        },
        // 6 - Matching: lesson 2 words
        {
          type: 'matching',
          prompt: 'Match the Italian word to the English word!',
          pairs: [
            { left: 'nonno', right: 'grandpa' },
            { left: 'zia', right: 'aunt' },
            { left: 'zio', right: 'uncle' },
            { left: 'famiglia', right: 'family' }
          ]
        },
        // 7 - Fill in the blank: famiglia
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "family"!',
          correctAnswer: 'famiglia',
          sentence: 'The Loud House has a very big ____!',
          hint: 'It starts with F - and sounds a lot like the English word!'
        },
        // 8 - Picture match: famiglia
        {
          type: 'picture-match',
          prompt: 'Which picture shows "famiglia"?',
          speakWord: 'famiglia',
          correctAnswer: 'famiglia',
          options: [
            { value: 'famiglia', emoji: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', label: 'famiglia' },
            { value: 'bambina', emoji: '\uD83D\uDC76', label: 'bambina' },
            { value: 'nonno', emoji: '\uD83D\uDC74', label: 'nonno' },
            { value: 'zia', emoji: '\uD83D\uDC69\u200D\uD83E\uDDB1', label: 'zia' }
          ]
        }
      ]
    },

    // ==========================================
    // LESSON 3: The Whole Family! (mixed review of all 11 words)
    // ==========================================
    {
      id: 'famiglia-3',
      title: 'The Whole Family!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      exercises: [
        // 1 - Listen and pick: mamma
        {
          type: 'listen-pick',
          prompt: 'Listen! Who is this family member?',
          speakWord: 'mamma',
          correctAnswer: 'mamma',
          options: ['mamma', 'nonna', 'zia', 'sorella']
        },
        // 2 - Multiple choice: sorella
        {
          type: 'multiple-choice',
          prompt: 'The Loud House has TEN of these! What is a "sorella"?',
          correctAnswer: 'sister',
          options: ['sister', 'brother', 'cousin (girl)', 'aunt'],
          daisySays: 'Lori, Leni, Luna, Luan, Lynn, Lucy, Lana, Lola, Lisa and Lily - that is a LOT of sorelle!',
          speakWord: 'sorella'
        },
        // 3 - Picture match: fratello
        {
          type: 'picture-match',
          prompt: 'Which picture is "fratello"?',
          speakWord: 'fratello',
          correctAnswer: 'fratello',
          options: [
            { value: 'fratello', emoji: '\uD83D\uDC66', label: 'fratello' },
            { value: 'sorella', emoji: '\uD83D\uDC67', label: 'sorella' },
            { value: 'pap\u00E0', emoji: '\uD83D\uDC68', label: 'pap\u00E0' },
            { value: 'nonno', emoji: '\uD83D\uDC74', label: 'nonno' }
          ]
        },
        // 4 - Matching: mix of lesson 1 and 2
        {
          type: 'matching',
          prompt: 'Match the Italian words to English! You know all of these!',
          pairs: [
            { left: 'nonna', right: 'grandma' },
            { left: 'zio', right: 'uncle' },
            { left: 'bambina', right: 'little girl' },
            { left: 'cugina', right: 'cousin (girl)' }
          ]
        },
        // 5 - Fill in the blank: sorella
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "sister"!',
          correctAnswer: 'sorella',
          sentence: 'Lincoln has ten ____s in the Loud House!',
          hint: 'Starts with S and has a double L!'
        },
        // 6 - Multiple choice: zia
        {
          type: 'multiple-choice',
          prompt: 'What does "zia" mean in English?',
          correctAnswer: 'aunt',
          options: ['aunt', 'uncle', 'grandma', 'cousin (girl)'],
          daisySays: 'Your mamma\'s sorella is your zia!',
          speakWord: 'zia'
        },
        // 7 - Listen and pick: famiglia
        {
          type: 'listen-pick',
          prompt: 'Listen to this important word! What is it?',
          speakWord: 'famiglia',
          correctAnswer: 'famiglia',
          options: ['famiglia', 'fratello', 'bambina', 'cugina']
        },
        // 8 - Matching: full review
        {
          type: 'matching',
          prompt: 'Last challenge! Match them all up!',
          pairs: [
            { left: 'mamma', right: 'mum' },
            { left: 'pap\u00E0', right: 'dad' },
            { left: 'nonno', right: 'grandpa' },
            { left: 'famiglia', right: 'family' }
          ]
        }
      ]
    }
  ]
};
