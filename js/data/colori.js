/* ============================================
   Colori (Colours) - K-Pop Demon Hunters Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.COLORI_DATA = {
  id: 'colori',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'rosso',
      english: 'red',
      emoji: '\uD83D\uDD34',
      hint: 'The colour of the demon hunter\'s power blast!',
      gender: 'masculine'
    },
    // 1
    {
      italian: 'blu',
      english: 'blue',
      emoji: '\uD83D\uDD35',
      hint: 'The colour of the demon hunter\'s shield spell!',
      gender: 'masculine'
    },
    // 2
    {
      italian: 'verde',
      english: 'green',
      emoji: '\uD83D\uDFE2',
      hint: 'The colour of the healing potion the hunters drink!',
      gender: 'masculine'
    },
    // 3
    {
      italian: 'giallo',
      english: 'yellow',
      emoji: '\uD83D\uDFE1',
      hint: 'The colour of the lightning bolt attack!',
      gender: 'masculine'
    },
    // 4
    {
      italian: 'arancione',
      english: 'orange',
      emoji: '\uD83D\uDFE0',
      hint: 'The colour of the fire sword the leader carries!',
      gender: 'masculine'
    },
    // 5
    {
      italian: 'viola',
      english: 'purple',
      emoji: '\uD83D\uDFE3',
      hint: 'The colour of the magical portal the hunters jump through!',
      gender: 'masculine'
    },
    // 6
    {
      italian: 'rosa',
      english: 'pink',
      emoji: '\uD83C\uDF38',
      hint: 'The colour of the cherry blossom dance move!',
      gender: 'masculine'
    },
    // 7
    {
      italian: 'nero',
      english: 'black',
      emoji: '\u26AB',
      hint: 'The colour of the demon\'s cloak - spooky!',
      gender: 'masculine'
    },
    // 8
    {
      italian: 'bianco',
      english: 'white',
      emoji: '\u26AA',
      hint: 'The colour of the angel wings that protect the hunters!',
      gender: 'masculine'
    },
    // 9
    {
      italian: 'marrone',
      english: 'brown',
      emoji: '\uD83D\uDFE4',
      hint: 'The colour of the demon hunter\'s cool leather jacket!',
      gender: 'masculine'
    },
    // 10
    {
      italian: 'grigio',
      english: 'grey',
      emoji: '\uD83E\uDD0D',
      hint: 'The colour of the smoke when a demon disappears - poof!',
      gender: 'masculine'
    },
    // 11
    {
      italian: 'azzurro',
      english: 'light blue',
      emoji: '\uD83E\uDDE3',
      hint: 'The colour of the sky when the hunters win and the sun comes out!',
      gender: 'masculine'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (adjective + noun combos)
    // 0
    { italian: 'il cielo blu', english: 'the blue sky', emoji: '\uD83D\uDD35\u2601\uFE0F', hint: 'Look up! The sky after the battle!' },
    // 1
    { italian: 'la rosa rossa', english: 'the red rose', emoji: '\uD83C\uDF39', hint: 'A beautiful flower - it is this colour!' },
    // 2
    { italian: 'l\'erba verde', english: 'the green grass', emoji: '\uD83C\uDF3F', hint: 'The ground in the park is covered in this!' },
    // 3
    { italian: 'il sole giallo', english: 'the yellow sun', emoji: '\u2600\uFE0F', hint: 'It shines bright in the sky!' },
    // 4
    { italian: 'il gatto nero', english: 'the black cat', emoji: '\uD83D\uDC08\u200D\u2B1B', hint: 'A spooky animal the colour of the demon\'s cloak!' },

    // L3 - Full sentences
    // 5
    { italian: 'Mi piace il rosso!', english: 'I like red!', emoji: '\u2764\uFE0F\uD83D\uDD34', hint: 'Tell everyone your favourite!' },
    // 6
    { italian: 'Il cielo \u00E8 azzurro.', english: 'The sky is light blue.', emoji: '\uD83C\uDF24\uFE0F', hint: 'Describe what you see above!' },
    // 7
    { italian: 'Vedo un fiore arancione!', english: 'I see an orange flower!', emoji: '\uD83C\uDF3C', hint: 'The hunters spot something colourful!' },
    // 8
    { italian: 'Il mio colore preferito \u00E8 il rosa!', english: 'My favourite colour is pink!', emoji: '\uD83C\uDF38\u2764\uFE0F', hint: 'Tell Mummy which colour you love most!' },
    // 9
    { italian: 'La mia maglietta \u00E8 viola.', english: 'My T-shirt is purple.', emoji: '\uD83D\uDC55\uD83D\uDFE3', hint: 'Describe what you\'re wearing!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Basic Colours (UNCHANGED)
       ========================================== */
    {
      id: 'colori-1',
      title: 'Basic Colours',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: rosso
        {
          type: 'multiple-choice',
          prompt: 'What does "rosso" mean in English?',
          correctAnswer: 'red',
          options: ['red', 'blue', 'green', 'yellow'],
          daisySays: 'The demon hunters\' power blast is this colour! BOOM!',
          speakWord: 'rosso'
        },

        // 2. Picture match: blu
        {
          type: 'picture-match',
          prompt: 'Which picture matches "blu"?',
          speakWord: 'blu',
          correctAnswer: 'blu',
          options: [
            { value: 'blu', emoji: '\uD83D\uDD35', label: 'blu' },
            { value: 'rosso', emoji: '\uD83D\uDD34', label: 'rosso' },
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' },
            { value: 'giallo', emoji: '\uD83D\uDFE1', label: 'giallo' }
          ]
        },

        // 3. Listen and pick: verde
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which colour do you hear?',
          speakWord: 'verde',
          correctAnswer: 'verde',
          options: ['verde', 'rosso', 'giallo', 'arancione']
        },

        // 4. Multiple choice: giallo
        {
          type: 'multiple-choice',
          prompt: 'The lightning bolt attack is "giallo". What colour is that?',
          correctAnswer: 'yellow',
          options: ['yellow', 'orange', 'red', 'green'],
          daisySays: 'ZAP! The lightning bolt is this colour!',
          speakWord: 'giallo'
        },

        // 5. Fill in the blank: arancione
        {
          type: 'fill-blank',
          prompt: 'Fill in the missing colour!',
          correctAnswer: 'arancione',
          sentence: 'The fire sword is ____.',
          hint: 'It is the colour of oranges! Starts with A.'
        },

        // 6. Matching: all basic colours
        {
          type: 'matching',
          prompt: 'Match each Italian colour to its English meaning!',
          pairs: [
            { left: 'rosso', right: 'red' },
            { left: 'blu', right: 'blue' },
            { left: 'verde', right: 'green' },
            { left: 'giallo', right: 'yellow' }
          ]
        },

        // 7. Picture match: rosso
        {
          type: 'picture-match',
          prompt: 'The demon hunter shouts "ROSSO!" - which colour is it?',
          speakWord: 'rosso',
          correctAnswer: 'rosso',
          options: [
            { value: 'rosso', emoji: '\uD83D\uDD34', label: 'rosso' },
            { value: 'blu', emoji: '\uD83D\uDD35', label: 'blu' },
            { value: 'arancione', emoji: '\uD83D\uDFE0', label: 'arancione' },
            { value: 'verde', emoji: '\uD83D\uDFE2', label: 'verde' }
          ]
        },

        // 8. Listen and pick: arancione
        {
          type: 'listen-pick',
          prompt: 'The leader picks up a coloured sword. Which colour do you hear?',
          speakWord: 'arancione',
          correctAnswer: 'arancione',
          options: ['arancione', 'giallo', 'rosso', 'verde']
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Colour Phrases
       Now we combine colours with things!
       ========================================== */
    {
      id: 'colori-2',
      title: 'Colour Phrases',
      vocabIndices: [5, 6, 7, 8],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "il cielo blu" mean?',
          correctAnswer: 'the blue sky',
          options: ['the blue sky', 'the green grass', 'the yellow sun', 'the red rose'],
          daisySays: 'The demon hunters look up after the battle!',
          speakWord: 'il cielo blu'
        },

        // 2. Listen-pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'Listen! What colour phrase do you hear?',
          speakWord: 'la rosa rossa',
          correctAnswer: 'la rosa rossa',
          options: ['la rosa rossa', 'il sole giallo', 'l\'erba verde', 'il cielo blu']
        },

        // 3. Multiple choice: what is the yellow sun?
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the yellow sun" in Italian?',
          correctAnswer: 'il sole giallo',
          options: ['il sole giallo', 'il cielo blu', 'la rosa rossa', 'il gatto nero'],
          daisySays: 'It shines bright after the demons are gone!',
          speakWord: 'il sole giallo'
        },

        // 4. Fill-blank: single word in phrase context
        {
          type: 'fill-blank',
          prompt: 'What colour is the sky? Fill in the missing word!',
          correctAnswer: 'blu',
          sentence: 'Il cielo \u00E8 ____.',
          hint: 'The sky is... what colour? Starts with B!'
        },

        // 5. Matching: phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian colour phrases to English!',
          pairs: [
            { left: 'il cielo blu', right: 'the blue sky' },
            { left: 'il sole giallo', right: 'the yellow sun' },
            { left: 'la rosa rossa', right: 'the red rose' },
            { left: 'l\'erba verde', right: 'the green grass' }
          ]
        },

        // 6. Translate to Italian: purple
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'purple',
          correctAnswer: 'viola',
          options: ['viola', 'rosa', 'nero', 'bianco'],
          _trackedWord: 'viola'
        },

        // 7. Listen-pick: il gatto nero
        {
          type: 'listen-pick',
          prompt: 'A spooky animal! What phrase do you hear?',
          speakWord: 'il gatto nero',
          correctAnswer: 'il gatto nero',
          options: ['il gatto nero', 'il cielo blu', 'la rosa rossa', 'il sole giallo']
        },

        // 8. Say it: arancione
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'arancione',
          correctAnswer: 'arancione',
          daisySays: 'The colour of the fire sword! Say it loud!'
        },

        // 9. Fill-blank: the green grass
        {
          type: 'fill-blank',
          prompt: 'The grass in the park is green! Fill in the colour!',
          correctAnswer: 'verde',
          sentence: 'L\'erba \u00E8 ____.',
          hint: 'It\'s the colour of the healing potion! Starts with V.'
        },

        // 10. Matching: single colour words review (viola, rosa, nero, bianco)
        {
          type: 'matching',
          prompt: 'You also learned new colours! Match them up!',
          pairs: [
            { left: 'viola', right: 'purple' },
            { left: 'rosa', right: 'pink' },
            { left: 'nero', right: 'black' },
            { left: 'bianco', right: 'white' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Colour Sentences!
       Full sentences using colours + conversation
       ========================================== */
    {
      id: 'colori-3',
      title: 'Colour Sentences!',
      vocabIndices: [9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order: Demon hunters describe what they see
        {
          type: 'conversation-order',
          prompt: 'Put the demon hunters\' adventure in order!',
          scenario: 'The demon hunters explore after winning the battle!',
          correctOrder: [
            'Ciao!',
            'Vedo il cielo blu!',
            'L\'erba \u00E8 verde!',
            'Mi piace il rosso!',
            'Andiamo!'
          ]
        },

        // 2. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "Mi piace il rosso!" mean?',
          correctAnswer: 'I like red!',
          options: ['I like red!', 'I see red!', 'It is red!', 'I want red!'],
          daisySays: 'This is how you tell someone your favourite!',
          speakWord: 'Mi piace il rosso'
        },

        // 3. Listen comprehend: Mi piace il rosso
        {
          type: 'listen-comprehend',
          sentence: 'Mi piace il rosso!',
          question: 'What colour does the speaker like?',
          correctAnswer: 'Red',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          daisySays: 'Listen carefully to what they say they like!'
        },

        // 4. Listen-pick: hear a sentence
        {
          type: 'listen-pick',
          prompt: 'The hunters are talking! What sentence do you hear?',
          speakWord: 'Il cielo \u00E8 azzurro',
          correctAnswer: 'Il cielo \u00E8 azzurro',
          options: ['Il cielo \u00E8 azzurro', 'L\'erba \u00E8 verde', 'Mi piace il rosso', 'Vedo un fiore arancione']
        },

        // 5. Fill-blank: word in sentence context
        {
          type: 'fill-blank',
          prompt: 'What colour is your favourite? Fill in the missing word!',
          correctAnswer: 'rosa',
          sentence: 'Il mio colore preferito \u00E8 il ____!',
          hint: 'It means pink! Starts with R.'
        },

        // 6. Matching: sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their meanings!',
          pairs: [
            { left: 'Mi piace il rosso', right: 'I like red' },
            { left: 'Il cielo \u00E8 azzurro', right: 'The sky is light blue' },
            { left: 'L\'erba \u00E8 verde', right: 'The grass is green' },
            { left: 'Il sole \u00E8 giallo', right: 'The sun is yellow' }
          ]
        },

        // 7. Sentence build: Mi piace il rosso
        {
          type: 'sentence-build',
          prompt: 'Build: "I like red"',
          correctOrder: ['Mi', 'piace', 'il', 'rosso'],
          hint: 'I like red',
          daisySays: 'Put the words in the right order!'
        },

        // 8. Multiple choice: how do you say...
        {
          type: 'multiple-choice',
          prompt: 'How do you say "I see an orange flower!" in Italian?',
          correctAnswer: 'Vedo un fiore arancione!',
          options: ['Vedo un fiore arancione!', 'Mi piace il rosso!', 'Il cielo \u00E8 blu!', 'L\'erba \u00E8 verde!'],
          daisySays: 'The hunters spot something beautiful!',
          speakWord: 'Vedo un fiore arancione'
        },

        // 9. Fill-blank: word in sentence
        {
          type: 'fill-blank',
          prompt: 'Describe what you see! Fill in the colour!',
          correctAnswer: 'viola',
          sentence: 'La mia maglietta \u00E8 ____.',
          hint: 'The colour of the portal! Starts with V.'
        },

        // 10. Matching: new vocab (marrone, grigio, azzurro) + review
        {
          type: 'matching',
          prompt: 'Final mission! Match ALL these colours!',
          pairs: [
            { left: 'marrone', right: 'brown' },
            { left: 'grigio', right: 'grey' },
            { left: 'azzurro', right: 'light blue' },
            { left: 'arancione', right: 'orange' }
          ]
        }
      ]
    }
  ]
};
