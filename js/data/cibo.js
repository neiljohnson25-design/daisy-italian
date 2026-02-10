/* ============================================
   Cibo (Food) - Vocabulary & Exercises
   Theme: Sam and Cat
   ============================================ */

window.CIBO_DATA = {
  id: 'cibo',

  vocabulary: [
    // 0
    { italian: 'pizza',      english: 'pizza',      emoji: '\uD83C\uDF55', hint: 'Sam and Cat would love to make this for dinner!' },
    // 1
    { italian: 'pasta',      english: 'pasta',      emoji: '\uD83C\uDF5D', hint: 'Cat loves cooking big bowls of this!' },
    // 2
    { italian: 'gelato',     english: 'ice cream',  emoji: '\uD83C\uDF66', hint: 'Sam always wants this for dessert!' },
    // 3
    { italian: 'pane',       english: 'bread',      emoji: '\uD83C\uDF5E', hint: 'Sam and Cat make sandwiches with this!' },
    // 4
    { italian: 'formaggio',  english: 'cheese',     emoji: '\uD83E\uDDC0', hint: 'Put this on top of pizza - yummy!' },
    // 5
    { italian: 'pomodoro',   english: 'tomato',     emoji: '\uD83C\uDF45', hint: 'This red fruit goes on everything Italian!' },
    // 6
    { italian: 'mela',       english: 'apple',      emoji: '\uD83C\uDF4E', hint: 'Cat keeps one of these in her lunchbox!' },
    // 7
    { italian: 'banana',     english: 'banana',     emoji: '\uD83C\uDF4C', hint: 'A yellow fruit that Sam thinks is hilarious!' },
    // 8
    { italian: 'latte',      english: 'milk',       emoji: '\uD83E\uDD5B', hint: 'Sam and Cat pour this on their cereal!' },
    // 9
    { italian: 'acqua',      english: 'water',      emoji: '\uD83D\uDCA7', hint: 'You need to drink lots of this every day!' },
    // 10
    { italian: 'cioccolato', english: 'chocolate',  emoji: '\uD83C\uDF6B', hint: 'Sam would eat a whole bar of this!' },
    // 11
    { italian: 'biscotto',   english: 'biscuit',    emoji: '\uD83C\uDF6A', hint: 'Cat loves to bake these as a treat!' }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short food phrases (adjective + noun combos)
    // 0
    { italian: 'la pizza buona', english: 'the good pizza', emoji: '\uD83C\uDF55\uD83D\uDC4D', hint: 'Sam says the pizza is yummy!' },
    // 1
    { italian: 'il gelato freddo', english: 'the cold ice cream', emoji: '\uD83C\uDF66\u2744\uFE0F', hint: 'Cat keeps her ice cream nice and chilly!' },
    // 2
    { italian: 'il pane fresco', english: 'the fresh bread', emoji: '\uD83C\uDF5E\u2728', hint: 'Sam and Cat just baked this - smells amazing!' },
    // 3
    { italian: 'l\'acqua fresca', english: 'the cool water', emoji: '\uD83D\uDCA7\u2744\uFE0F', hint: 'On a hot day, Cat grabs a glass of this!' },
    // 4
    { italian: 'la mela rossa', english: 'the red apple', emoji: '\uD83C\uDF4E\uD83D\uDD34', hint: 'Cat packs this bright fruit in her lunchbox!' },

    // L3 - Full sentences
    // 5
    { italian: 'Voglio la pizza!', english: 'I want pizza!', emoji: '\uD83C\uDF55\u2764\uFE0F', hint: 'Sam shouts this at dinner time!' },
    // 6
    { italian: 'Mi piace il gelato!', english: 'I like ice cream!', emoji: '\uD83C\uDF66\uD83D\uDE0D', hint: 'Cat tells everyone her favourite treat!' },
    // 7
    { italian: 'Ho fame!', english: 'I\'m hungry!', emoji: '\uD83D\uDE0B', hint: 'Sam\'s tummy is rumbling!' },
    // 8
    { italian: 'Posso avere l\'acqua?', english: 'Can I have water?', emoji: '\uD83D\uDCA7\uD83D\uDE4F', hint: 'Cat asks politely for a drink!' },
    // 9
    { italian: 'La pizza \u00E8 buona!', english: 'The pizza is good!', emoji: '\uD83C\uDF55\uD83D\uDE0B', hint: 'Sam takes a big bite and says this!' }
  ],

  lessons: [

    /* --------------------------------------------------
       Lesson 1 - Yummy Italian Food (vocabIndices 0-4)
       -------------------------------------------------- */
    {
      id: 'cibo-1',
      title: 'Yummy Italian Food',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice - pizza
        {
          type: 'multiple-choice',
          prompt: 'What does "pizza" mean in English?',
          correctAnswer: 'pizza',
          options: ['pizza', 'pasta', 'bread', 'cheese'],
          daisySays: 'Sam and Cat are ordering dinner! What is pizza?',
          speakWord: 'pizza'
        },

        // 2. Picture match - pasta
        {
          type: 'picture-match',
          prompt: 'Tap the picture that matches "pasta"!',
          speakWord: 'pasta',
          correctAnswer: 'pasta',
          options: [
            { value: 'pasta',     emoji: '\uD83C\uDF5D', label: 'pasta' },
            { value: 'gelato',    emoji: '\uD83C\uDF66', label: 'gelato' },
            { value: 'pane',      emoji: '\uD83C\uDF5E', label: 'pane' },
            { value: 'formaggio', emoji: '\uD83E\uDDC0', label: 'formaggio' }
          ]
        },

        // 3. Listen and pick - gelato
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which word do you hear?',
          speakWord: 'gelato',
          correctAnswer: 'gelato',
          options: ['gelato', 'pizza', 'pane', 'formaggio']
        },

        // 4. Fill in the blank - pane
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "bread"!',
          correctAnswer: 'pane',
          sentence: 'Sam makes a sandwich with ____.',
          hint: 'It starts with P and has 4 letters!'
        },

        // 5. Matching - all five words
        {
          type: 'matching',
          prompt: 'Match the Italian food words to English!',
          pairs: [
            { left: 'pizza',     right: 'pizza' },
            { left: 'pasta',     right: 'pasta' },
            { left: 'gelato',    right: 'ice cream' },
            { left: 'pane',      right: 'bread' },
            { left: 'formaggio', right: 'cheese' }
          ]
        },

        // 6. Multiple choice - formaggio
        {
          type: 'multiple-choice',
          prompt: 'How do you say "cheese" in Italian?',
          correctAnswer: 'formaggio',
          options: ['formaggio', 'gelato', 'pasta', 'pane'],
          daisySays: 'Cat is making a cheesy pizza! What is cheese in Italian?',
          speakWord: 'formaggio'
        },

        // 7. Picture match - gelato
        {
          type: 'picture-match',
          prompt: 'Sam wants a treat! Tap "gelato"!',
          speakWord: 'gelato',
          correctAnswer: 'gelato',
          options: [
            { value: 'gelato',    emoji: '\uD83C\uDF66', label: 'gelato' },
            { value: 'pizza',     emoji: '\uD83C\uDF55', label: 'pizza' },
            { value: 'formaggio', emoji: '\uD83E\uDDC0', label: 'formaggio' },
            { value: 'pasta',     emoji: '\uD83C\uDF5D', label: 'pasta' }
          ]
        },

        // 8. Listen and pick - formaggio
        {
          type: 'listen-pick',
          prompt: 'Listen and pick the right word!',
          speakWord: 'formaggio',
          correctAnswer: 'formaggio',
          options: ['formaggio', 'gelato', 'pizza', 'pane']
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 2 - Food Phrases (vocabIndices 5-9)
       Now we combine food words into short phrases!
       -------------------------------------------------- */
    {
      id: 'cibo-2',
      title: 'Food Phrases',
      vocabIndices: [5, 6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice - phrase translation: la pizza buona
        {
          type: 'multiple-choice',
          prompt: 'What does "la pizza buona" mean?',
          correctAnswer: 'the good pizza',
          options: ['the good pizza', 'the cold ice cream', 'the fresh bread', 'the red apple'],
          daisySays: 'Sam just tasted the pizza and loves it!',
          speakWord: 'la pizza buona'
        },

        // 2. Multiple choice - phrase translation: il gelato freddo
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the cold ice cream" in Italian?',
          correctAnswer: 'il gelato freddo',
          options: ['il gelato freddo', 'la pizza buona', 'il pane fresco', 'la mela rossa'],
          daisySays: 'Cat keeps her treat in the freezer!',
          speakWord: 'il gelato freddo'
        },

        // 3. Listen-pick - hear a phrase: il pane fresco
        {
          type: 'listen-pick',
          prompt: 'Listen! What food phrase do you hear?',
          speakWord: 'il pane fresco',
          correctAnswer: 'il pane fresco',
          options: ['il pane fresco', 'la pizza buona', 'il gelato freddo', 'la mela rossa']
        },

        // 4. Listen-pick - hear a phrase: l'acqua fresca
        {
          type: 'listen-pick',
          prompt: 'Sam is thirsty! Listen - what does he ask for?',
          speakWord: 'l\'acqua fresca',
          correctAnswer: 'l\'acqua fresca',
          options: ['l\'acqua fresca', 'il pane fresco', 'la pizza buona', 'il gelato freddo']
        },

        // 5. Fill-blank - single word missing: la pizza ____
        {
          type: 'fill-blank',
          prompt: 'The pizza is good! Fill in the missing word!',
          correctAnswer: 'buona',
          sentence: 'La pizza ____!',
          hint: 'It means "good" - starts with B!'
        },

        // 6. Fill-blank - single word missing: il gelato ____
        {
          type: 'fill-blank',
          prompt: 'The ice cream is cold! What word is missing?',
          correctAnswer: 'freddo',
          sentence: 'Il gelato ____.',
          hint: 'It means "cold" - starts with F!'
        },

        // 7. Matching - Italian phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian food phrases to English!',
          pairs: [
            { left: 'la pizza buona', right: 'the good pizza' },
            { left: 'il gelato freddo', right: 'the cold ice cream' },
            { left: 'il pane fresco', right: 'the fresh bread' },
            { left: 'l\'acqua fresca', right: 'the cool water' }
          ]
        },

        // 8. Matching - more food phrases
        {
          type: 'matching',
          prompt: 'Sam and Cat are shopping! Match the rest!',
          pairs: [
            { left: 'la mela rossa', right: 'the red apple' },
            { left: 'pomodoro', right: 'tomato' },
            { left: 'banana', right: 'banana' },
            { left: 'latte', right: 'milk' }
          ]
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 3 - Food Sentences! (vocabIndices 0-11, review)
       Full sentences using food words + conversation
       -------------------------------------------------- */
    {
      id: 'cibo-3',
      title: 'Food Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Conversation order - Sam and Cat order dinner
        {
          type: 'conversation-order',
          prompt: 'Put Sam and Cat\'s restaurant visit in order!',
          scenario: 'Sam and Cat go to an Italian restaurant for dinner!',
          correctOrder: [
            'Ciao!',
            'Ho fame!',
            'Voglio la pizza, per favore.',
            'Posso avere l\'acqua?',
            'La pizza \u00E8 buona!',
            'Grazie!'
          ]
        },

        // 2. Multiple choice - sentence translation: Voglio la pizza!
        {
          type: 'multiple-choice',
          prompt: 'What does "Voglio la pizza!" mean?',
          correctAnswer: 'I want pizza!',
          options: ['I want pizza!', 'I like ice cream!', 'I\'m hungry!', 'The pizza is good!'],
          daisySays: 'Sam is ready to order at the restaurant!',
          speakWord: 'Voglio la pizza'
        },

        // 3. Multiple choice - sentence translation: Mi piace il gelato!
        {
          type: 'multiple-choice',
          prompt: 'How do you say "I like ice cream!" in Italian?',
          correctAnswer: 'Mi piace il gelato!',
          options: ['Mi piace il gelato!', 'Voglio la pizza!', 'Ho fame!', 'Posso avere l\'acqua?'],
          daisySays: 'Cat tells everyone about her favourite dessert!',
          speakWord: 'Mi piace il gelato'
        },

        // 4. Listen-pick - hear a sentence: Ho fame!
        {
          type: 'listen-pick',
          prompt: 'Sam\'s tummy is rumbling! What sentence do you hear?',
          speakWord: 'Ho fame',
          correctAnswer: 'Ho fame!',
          options: ['Ho fame!', 'Voglio la pizza!', 'Mi piace il gelato!', 'La pizza \u00E8 buona!']
        },

        // 5. Fill-blank - single word in sentence: Voglio la ____!
        {
          type: 'fill-blank',
          prompt: 'Sam wants pizza! Fill in the missing word!',
          correctAnswer: 'pizza',
          sentence: 'Voglio la ____!',
          hint: 'Sam\'s favourite Italian food! Starts with P.'
        },

        // 6. Fill-blank - single word in sentence: La pizza è ____!
        {
          type: 'fill-blank',
          prompt: 'The pizza is good! What word is missing?',
          correctAnswer: 'buona',
          sentence: 'La pizza \u00E8 ____!',
          hint: 'It means "good" - starts with B!'
        },

        // 7. Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian sentences to their meanings!',
          pairs: [
            { left: 'Voglio la pizza!', right: 'I want pizza!' },
            { left: 'Mi piace il gelato!', right: 'I like ice cream!' },
            { left: 'Ho fame!', right: 'I\'m hungry!' },
            { left: 'La pizza \u00E8 buona!', right: 'The pizza is good!' }
          ]
        },

        // 8. Matching - more sentences and review
        {
          type: 'matching',
          prompt: 'Last match! You are a food sentence superstar!',
          pairs: [
            { left: 'Posso avere l\'acqua?', right: 'Can I have water?' },
            { left: 'cioccolato', right: 'chocolate' },
            { left: 'biscotto', right: 'biscuit' },
            { left: 'formaggio', right: 'cheese' }
          ]
        }
      ]
    }

  ]
};
