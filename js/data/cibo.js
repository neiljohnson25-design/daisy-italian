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
       Lesson 2 - Fruit and Drinks (vocabIndices 5-9)
       -------------------------------------------------- */
    {
      id: 'cibo-2',
      title: 'Fruit and Drinks',
      vocabIndices: [5, 6, 7, 8, 9],
      exercises: [

        // 1. Picture match - pomodoro
        {
          type: 'picture-match',
          prompt: 'Tap the picture that matches "pomodoro"!',
          speakWord: 'pomodoro',
          correctAnswer: 'pomodoro',
          options: [
            { value: 'pomodoro', emoji: '\uD83C\uDF45', label: 'pomodoro' },
            { value: 'mela',    emoji: '\uD83C\uDF4E', label: 'mela' },
            { value: 'banana',  emoji: '\uD83C\uDF4C', label: 'banana' },
            { value: 'latte',   emoji: '\uD83E\uDD5B', label: 'latte' }
          ]
        },

        // 2. Multiple choice - mela
        {
          type: 'multiple-choice',
          prompt: 'What does "mela" mean in English?',
          correctAnswer: 'apple',
          options: ['apple', 'banana', 'tomato', 'water'],
          daisySays: 'Cat packed a healthy snack! What is a mela?',
          speakWord: 'mela'
        },

        // 3. Listen and pick - banana
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which word do you hear?',
          speakWord: 'banana',
          correctAnswer: 'banana',
          options: ['banana', 'mela', 'acqua', 'pomodoro']
        },

        // 4. Multiple choice - latte
        {
          type: 'multiple-choice',
          prompt: 'How do you say "milk" in Italian?',
          correctAnswer: 'latte',
          options: ['latte', 'acqua', 'banana', 'mela'],
          daisySays: 'Sam is pouring a big glass of milk! What is it in Italian?',
          speakWord: 'latte'
        },

        // 5. Fill in the blank - acqua
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "water"!',
          correctAnswer: 'acqua',
          sentence: 'Cat is thirsty and needs some ____.',
          hint: 'It starts with A and has 5 letters!'
        },

        // 6. Matching - all five words
        {
          type: 'matching',
          prompt: 'Match the Italian words to English!',
          pairs: [
            { left: 'pomodoro', right: 'tomato' },
            { left: 'mela',    right: 'apple' },
            { left: 'banana',  right: 'banana' },
            { left: 'latte',   right: 'milk' },
            { left: 'acqua',   right: 'water' }
          ]
        },

        // 7. Picture match - acqua
        {
          type: 'picture-match',
          prompt: 'Sam needs a drink! Tap "acqua"!',
          speakWord: 'acqua',
          correctAnswer: 'acqua',
          options: [
            { value: 'acqua',    emoji: '\uD83D\uDCA7', label: 'acqua' },
            { value: 'latte',    emoji: '\uD83E\uDD5B', label: 'latte' },
            { value: 'pomodoro', emoji: '\uD83C\uDF45', label: 'pomodoro' },
            { value: 'banana',   emoji: '\uD83C\uDF4C', label: 'banana' }
          ]
        },

        // 8. Listen and pick - pomodoro
        {
          type: 'listen-pick',
          prompt: 'Listen and pick the right word!',
          speakWord: 'pomodoro',
          correctAnswer: 'pomodoro',
          options: ['pomodoro', 'mela', 'latte', 'acqua']
        }
      ]
    },

    /* --------------------------------------------------
       Lesson 3 - All the Food! (vocabIndices 0-11, review)
       -------------------------------------------------- */
    {
      id: 'cibo-3',
      title: 'All the Food!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [

        // 1. Picture match - cioccolato
        {
          type: 'picture-match',
          prompt: 'Tap the picture that matches "cioccolato"!',
          speakWord: 'cioccolato',
          correctAnswer: 'cioccolato',
          options: [
            { value: 'cioccolato', emoji: '\uD83C\uDF6B', label: 'cioccolato' },
            { value: 'biscotto',   emoji: '\uD83C\uDF6A', label: 'biscotto' },
            { value: 'gelato',     emoji: '\uD83C\uDF66', label: 'gelato' },
            { value: 'pane',       emoji: '\uD83C\uDF5E', label: 'pane' }
          ]
        },

        // 2. Multiple choice - biscotto
        {
          type: 'multiple-choice',
          prompt: 'What does "biscotto" mean in English?',
          correctAnswer: 'biscuit',
          options: ['biscuit', 'chocolate', 'bread', 'ice cream'],
          daisySays: 'Cat just baked a batch of treats! What is a biscotto?',
          speakWord: 'biscotto'
        },

        // 3. Listen and pick - cioccolato
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! Which word do you hear?',
          speakWord: 'cioccolato',
          correctAnswer: 'cioccolato',
          options: ['cioccolato', 'biscotto', 'pomodoro', 'formaggio']
        },

        // 4. Fill in the blank - biscotto
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "biscuit"!',
          correctAnswer: 'biscotto',
          sentence: 'Cat baked a yummy ____ for Sam.',
          hint: 'It starts with B and has 8 letters!'
        },

        // 5. Matching - mixed review set 1
        {
          type: 'matching',
          prompt: 'Match all the food words! You know these!',
          pairs: [
            { left: 'cioccolato', right: 'chocolate' },
            { left: 'biscotto',   right: 'biscuit' },
            { left: 'pizza',      right: 'pizza' },
            { left: 'gelato',     right: 'ice cream' }
          ]
        },

        // 6. Multiple choice - review pomodoro
        {
          type: 'multiple-choice',
          prompt: 'How do you say "tomato" in Italian?',
          correctAnswer: 'pomodoro',
          options: ['pomodoro', 'formaggio', 'cioccolato', 'banana'],
          daisySays: 'Sam is making pizza sauce! What is tomato in Italian?',
          speakWord: 'pomodoro'
        },

        // 7. Picture match - review mix
        {
          type: 'picture-match',
          prompt: 'Sam is hungry! Tap "pane"!',
          speakWord: 'pane',
          correctAnswer: 'pane',
          options: [
            { value: 'pane',       emoji: '\uD83C\uDF5E', label: 'pane' },
            { value: 'cioccolato', emoji: '\uD83C\uDF6B', label: 'cioccolato' },
            { value: 'mela',       emoji: '\uD83C\uDF4E', label: 'mela' },
            { value: 'acqua',      emoji: '\uD83D\uDCA7', label: 'acqua' }
          ]
        },

        // 8. Matching - mixed review set 2
        {
          type: 'matching',
          prompt: 'One more match! You are a food superstar!',
          pairs: [
            { left: 'pane',    right: 'bread' },
            { left: 'latte',   right: 'milk' },
            { left: 'acqua',   right: 'water' },
            { left: 'mela',    right: 'apple' }
          ]
        }
      ]
    }

  ]
};
