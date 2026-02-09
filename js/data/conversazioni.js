/* ============================================
   Conversazioni (Talking) - Sam and Cat Theme
   Topic Data: Vocabulary + 3 Lessons
   Special: Daisy has an Italian mum and
   Italian family she can practice with!
   ============================================ */

window.CONVERSAZIONI_DATA = {
  id: 'conversazioni',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'Mi piace...',
      english: 'I like...',
      emoji: '\uD83D\uDE0A',
      hint: 'Tell Nonna what you like! Sam always tells Cat what her favourite things are!',
      example: 'Mi piace la pizza!'
    },
    // 1
    {
      italian: 'Non mi piace...',
      english: 'I don\'t like...',
      emoji: '\uD83D\uDE15',
      hint: 'It\'s OK to say what you don\'t like! Even Cat doesn\'t like everything!',
      example: 'Non mi piace il broccolo!'
    },
    // 2
    {
      italian: 'Voglio...',
      english: 'I want...',
      emoji: '\uD83D\uDE4F',
      hint: 'Sam and Cat always ask for what they want! Tell your Italian family what you\'d like!',
      example: 'Voglio un gelato, per favore!'
    },
    // 3
    {
      italian: 'Posso avere...?',
      english: 'Can I have...?',
      emoji: '\uD83E\uDD14',
      hint: 'This is the polite way to ask! Cat always says please when she wants something!',
      example: 'Posso avere l\'acqua?'
    },
    // 4
    {
      italian: 'Come stai?',
      english: 'How are you?',
      emoji: '\uD83D\uDC4B',
      hint: 'Always ask your Italian relatives how they are! Sam greets everyone she meets!',
      example: 'Ciao Nonna! Come stai?'
    },
    // 5
    {
      italian: 'Sto bene, grazie',
      english: 'I\'m fine, thank you',
      emoji: '\uD83D\uDE0A',
      hint: 'When Nonna asks how you are, this is what you say! Cat always answers with a big smile!',
      example: 'Sto bene, grazie!'
    },
    // 6
    {
      italian: 'Come ti chiami?',
      english: 'What\'s your name?',
      emoji: '\uD83C\uDFF7\uFE0F',
      hint: 'When you meet someone new at a family gathering, ask their name! Just like Sam does!',
      example: 'Come ti chiami?'
    },
    // 7
    {
      italian: 'Mi chiamo Daisy',
      english: 'My name is Daisy',
      emoji: '\uD83D\uDC67',
      hint: 'Tell everyone your name! Cat loves introducing herself to new friends!',
      example: 'Ciao! Mi chiamo Daisy!'
    },
    // 8
    {
      italian: 'Quanti anni hai?',
      english: 'How old are you?',
      emoji: '\uD83C\uDF82',
      hint: 'Ask your Italian cousins how old they are! Sam and Cat love birthday parties!',
      example: 'Quanti anni hai?'
    },
    // 9
    {
      italian: 'Ho sei anni',
      english: 'I am six years old',
      emoji: '6\uFE0F\u20E3',
      hint: 'Tell your Italian family how old you are! You\'re sei - that\'s six!',
      example: 'Ho sei anni!'
    },
    // 10
    {
      italian: 'Ho fame',
      english: 'I\'m hungry',
      emoji: '\uD83C\uDF7D\uFE0F',
      hint: 'Sam is ALWAYS hungry! Tell Nonna when you want something to eat!',
      example: 'Nonna, ho fame!'
    },
    // 11
    {
      italian: 'Ho sete',
      english: 'I\'m thirsty',
      emoji: '\uD83E\uDD64',
      hint: 'After playing with your Italian cousins, tell Nonna you need a drink!',
      example: 'Nonna, ho sete!'
    }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Talking About Me
       (Greetings & Introductions)
       ========================================== */
    {
      id: 'conversazioni-1',
      title: 'Talking About Me',
      vocabIndices: [4, 5, 6, 7, 8, 9],
      exercises: [

        // 1. Multiple choice: Come stai?
        {
          type: 'multiple-choice',
          prompt: 'What does "Come stai?" mean in English?',
          correctAnswer: 'How are you?',
          options: ['How are you?', 'What\'s your name?', 'How old are you?', 'I\'m fine'],
          daisySays: 'When you see Nonna, always ask her this! Sam says hi to everyone!',
          speakWord: 'Come stai?'
        },

        // 2. Listen and pick: Sto bene, grazie
        {
          type: 'listen-pick',
          prompt: 'Nonna asks how you are. Listen and pick the right answer!',
          speakWord: 'Sto bene, grazie',
          correctAnswer: 'Sto bene, grazie',
          options: ['Sto bene, grazie', 'Mi chiamo Daisy', 'Ho sei anni', 'Ho fame']
        },

        // 3. Multiple choice: Come ti chiami?
        {
          type: 'multiple-choice',
          prompt: 'You meet your Italian cousin for the first time. What do you ask to find out their name?',
          correctAnswer: 'Come ti chiami?',
          options: ['Come ti chiami?', 'Come stai?', 'Quanti anni hai?', 'Ho fame'],
          daisySays: 'Cat loves making new friends! Ask their name just like she does!',
          speakWord: 'Come ti chiami?'
        },

        // 4. Fill in the blank: Mi chiamo Daisy
        {
          type: 'fill-blank',
          prompt: 'Someone asks your name! Fill in the gap to answer!',
          correctAnswer: 'Daisy',
          sentence: 'Mi chiamo ____.',
          hint: 'What\'s your name? Put YOUR name in the gap!'
        },

        // 5. Matching: greetings
        {
          type: 'matching',
          prompt: 'Match the Italian phrases to their English meanings!',
          pairs: [
            { left: 'Come stai?', right: 'How are you?' },
            { left: 'Come ti chiami?', right: 'What\'s your name?' },
            { left: 'Quanti anni hai?', right: 'How old are you?' },
            { left: 'Sto bene, grazie', right: 'I\'m fine, thank you' }
          ]
        },

        // 6. Multiple choice: Quanti anni hai?
        {
          type: 'multiple-choice',
          prompt: 'Your Italian cousin wants to know how old you are. What did they ask?',
          correctAnswer: 'Quanti anni hai?',
          options: ['Quanti anni hai?', 'Come ti chiami?', 'Come stai?', 'Ho sete'],
          daisySays: 'Sam and Cat love birthday parties! Tell everyone how old you are!',
          speakWord: 'Quanti anni hai?'
        },

        // 7. Listen and pick: Ho sei anni
        {
          type: 'listen-pick',
          prompt: 'Listen! How does Daisy say her age in Italian?',
          speakWord: 'Ho sei anni',
          correctAnswer: 'Ho sei anni',
          options: ['Ho sei anni', 'Ho fame', 'Sto bene', 'Mi chiamo Daisy']
        },

        // 8. Fill in the blank: Ho sei anni
        {
          type: 'fill-blank',
          prompt: 'Tell your Italian family how old you are!',
          correctAnswer: 'sei',
          sentence: 'Ho ____ anni.',
          hint: 'You are 6 years old! What is six in Italian? It starts with S!'
        }
      ]
    },

    /* ==========================================
       LESSON 2 - What I Like and Want
       (Likes, dislikes, wants & needs)
       ========================================== */
    {
      id: 'conversazioni-2',
      title: 'What I Like and Want',
      vocabIndices: [0, 1, 2, 3, 10, 11],
      exercises: [

        // 1. Multiple choice: Mi piace
        {
          type: 'multiple-choice',
          prompt: 'What does "Mi piace" mean?',
          correctAnswer: 'I like',
          options: ['I like', 'I don\'t like', 'I want', 'Can I have'],
          daisySays: 'Tell Nonna what you like! Sam always tells everyone her favourite things!',
          speakWord: 'Mi piace'
        },

        // 2. Listen and pick: Non mi piace
        {
          type: 'listen-pick',
          prompt: 'Oh no, you don\'t like something! Listen and pick the right phrase!',
          speakWord: 'Non mi piace',
          correctAnswer: 'Non mi piace',
          options: ['Non mi piace', 'Mi piace', 'Voglio', 'Ho fame']
        },

        // 3. Multiple choice: Voglio
        {
          type: 'multiple-choice',
          prompt: 'Sam really wants some fried chicken! How does she say "I want" in Italian?',
          correctAnswer: 'Voglio',
          options: ['Voglio', 'Posso avere', 'Mi piace', 'Ho fame'],
          daisySays: 'Sam and Cat always ask for what they want! Just say Voglio!',
          speakWord: 'Voglio'
        },

        // 4. Fill in the blank: Posso avere
        {
          type: 'fill-blank',
          prompt: 'Ask Nonna politely! Fill in the gap!',
          correctAnswer: 'Posso avere',
          sentence: '____ un gelato, per favore?',
          hint: 'The polite way to ask! It means "Can I have". Cat always uses her manners!'
        },

        // 5. Matching: likes and wants
        {
          type: 'matching',
          prompt: 'Match the Italian to the English! Sam and Cat need your help!',
          pairs: [
            { left: 'Mi piace', right: 'I like' },
            { left: 'Non mi piace', right: 'I don\'t like' },
            { left: 'Voglio', right: 'I want' },
            { left: 'Posso avere...?', right: 'Can I have...?' }
          ]
        },

        // 6. Multiple choice: Ho fame
        {
          type: 'multiple-choice',
          prompt: 'Sam\'s tummy is rumbling! What does "Ho fame" mean?',
          correctAnswer: 'I\'m hungry',
          options: ['I\'m hungry', 'I\'m thirsty', 'I like', 'I want'],
          daisySays: 'Sam is ALWAYS hungry! Just like when you visit Nonna\'s house!',
          speakWord: 'Ho fame'
        },

        // 7. Listen and pick: Ho sete
        {
          type: 'listen-pick',
          prompt: 'You\'ve been playing with your cousins and need a drink! Listen and pick!',
          speakWord: 'Ho sete',
          correctAnswer: 'Ho sete',
          options: ['Ho sete', 'Ho fame', 'Voglio', 'Mi piace']
        },

        // 8. Fill in the blank: Ho fame
        {
          type: 'fill-blank',
          prompt: 'Tell Nonna you\'re hungry!',
          correctAnswer: 'fame',
          sentence: 'Nonna, ho ____!',
          hint: 'You\'re hungry! The word sounds a bit like "famine". Starts with F!'
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Talking to Nonna
       (Full conversation practice - all phrases)
       ========================================== */
    {
      id: 'conversazioni-3',
      title: 'Talking to Nonna',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [

        // 1. Conversation order: Arriving at Nonna's house
        {
          type: 'conversation-order',
          prompt: 'Put the conversation in order!',
          scenario: 'Daisy arrives at Nonna\'s house for dinner',
          correctOrder: [
            'Ciao Nonna!',
            'Come stai?',
            'Sto bene, grazie',
            'Ho fame!',
            'Posso avere la pizza, per favore?',
            'Grazie!'
          ]
        },

        // 2. Multiple choice: review Come stai?
        {
          type: 'multiple-choice',
          prompt: 'You walk into Nonna\'s kitchen. What do you say first?',
          correctAnswer: 'Ciao Nonna! Come stai?',
          options: ['Ciao Nonna! Come stai?', 'Ho fame!', 'Voglio la pizza!', 'Non mi piace!'],
          daisySays: 'Always greet Nonna first! Sam and Cat have great manners with grown-ups!',
          speakWord: 'Come stai?'
        },

        // 3. Listen and pick: Mi piace
        {
          type: 'listen-pick',
          prompt: 'Nonna made your favourite food! Listen and pick what you say!',
          speakWord: 'Mi piace',
          correctAnswer: 'Mi piace',
          options: ['Mi piace', 'Non mi piace', 'Ho sete', 'Come stai?']
        },

        // 4. Fill in the blank: Posso avere
        {
          type: 'fill-blank',
          prompt: 'Ask Nonna for some water, the polite way!',
          correctAnswer: 'Posso avere',
          sentence: '____ l\'acqua, per favore?',
          hint: 'The polite way to ask for something! It means "Can I have". Cat always asks nicely!'
        },

        // 5. Matching: full review
        {
          type: 'matching',
          prompt: 'You\'re chatting with your Italian family! Match everything up!',
          pairs: [
            { left: 'Ho fame', right: 'I\'m hungry' },
            { left: 'Ho sete', right: 'I\'m thirsty' },
            { left: 'Mi piace', right: 'I like' },
            { left: 'Voglio', right: 'I want' }
          ]
        },

        // 6. Multiple choice: Mi chiamo
        {
          type: 'multiple-choice',
          prompt: 'A new cousin arrives at the family party! They ask "Come ti chiami?" - what do you say?',
          correctAnswer: 'Mi chiamo Daisy',
          options: ['Mi chiamo Daisy', 'Ho sei anni', 'Sto bene, grazie', 'Ho fame'],
          daisySays: 'Cat loves making new friends at parties! Tell them your name!',
          speakWord: 'Mi chiamo Daisy'
        },

        // 7. Listen and pick: Quanti anni hai?
        {
          type: 'listen-pick',
          prompt: 'Your new cousin wants to know something about you. Listen carefully!',
          speakWord: 'Quanti anni hai?',
          correctAnswer: 'Quanti anni hai?',
          options: ['Quanti anni hai?', 'Come ti chiami?', 'Come stai?', 'Posso avere...?']
        },

        // 8. Matching: greetings and introductions review
        {
          type: 'matching',
          prompt: 'Final challenge! Match these phrases to show Nonna how much you\'ve learned!',
          pairs: [
            { left: 'Come stai?', right: 'How are you?' },
            { left: 'Mi chiamo Daisy', right: 'My name is Daisy' },
            { left: 'Ho sei anni', right: 'I am six years old' },
            { left: 'Sto bene, grazie', right: 'I\'m fine, thank you' }
          ]
        }
      ]
    }
  ]
};
