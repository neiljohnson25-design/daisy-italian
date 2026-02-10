/* ============================================
   Numeri (Numbers) - K-Pop Demon Hunters Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.NUMERI_DATA = {
  id: 'numeri',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'uno',
      english: 'one',
      number: 1,
      emoji: '1\uFE0F\u20E3'
    },
    // 1
    {
      italian: 'due',
      english: 'two',
      number: 2,
      emoji: '2\uFE0F\u20E3'
    },
    // 2
    {
      italian: 'tre',
      english: 'three',
      number: 3,
      emoji: '3\uFE0F\u20E3'
    },
    // 3
    {
      italian: 'quattro',
      english: 'four',
      number: 4,
      emoji: '4\uFE0F\u20E3'
    },
    // 4
    {
      italian: 'cinque',
      english: 'five',
      number: 5,
      emoji: '5\uFE0F\u20E3'
    },
    // 5
    {
      italian: 'sei',
      english: 'six',
      number: 6,
      emoji: '6\uFE0F\u20E3'
    },
    // 6
    {
      italian: 'sette',
      english: 'seven',
      number: 7,
      emoji: '7\uFE0F\u20E3'
    },
    // 7
    {
      italian: 'otto',
      english: 'eight',
      number: 8,
      emoji: '8\uFE0F\u20E3'
    },
    // 8
    {
      italian: 'nove',
      english: 'nine',
      number: 9,
      emoji: '9\uFE0F\u20E3'
    },
    // 9
    {
      italian: 'dieci',
      english: 'ten',
      number: 10,
      emoji: '\uD83D\uDD1F'
    },
    // 10
    {
      italian: 'undici',
      english: 'eleven',
      number: 11,
      emoji: '11'
    },
    // 11
    {
      italian: 'dodici',
      english: 'twelve',
      number: 12,
      emoji: '12'
    },
    // 12
    {
      italian: 'tredici',
      english: 'thirteen',
      number: 13,
      emoji: '13'
    },
    // 13
    {
      italian: 'quattordici',
      english: 'fourteen',
      number: 14,
      emoji: '14'
    },
    // 14
    {
      italian: 'quindici',
      english: 'fifteen',
      number: 15,
      emoji: '15'
    },
    // 15
    {
      italian: 'sedici',
      english: 'sixteen',
      number: 16,
      emoji: '16'
    },
    // 16
    {
      italian: 'diciassette',
      english: 'seventeen',
      number: 17,
      emoji: '17'
    },
    // 17
    {
      italian: 'diciotto',
      english: 'eighteen',
      number: 18,
      emoji: '18'
    },
    // 18
    {
      italian: 'diciannove',
      english: 'nineteen',
      number: 19,
      emoji: '19'
    },
    // 19
    {
      italian: 'venti',
      english: 'twenty',
      number: 20,
      emoji: '20'
    },
    // 20
    {
      italian: 'pi\u00F9',
      english: 'plus',
      emoji: '\u2795'
    },
    // 21
    {
      italian: 'meno',
      english: 'minus',
      emoji: '\u2796'
    },
    // 22
    {
      italian: 'fa',
      english: 'equals',
      emoji: '\uD83D\uDFF0'
    }
  ],

  /* ------------------------------------------
     Phrases & Sentences
     ------------------------------------------ */
  phrases: [
    // L2 phrases (indices 0-4)
    // 0
    {
      italian: 'Ho tre gatti',
      english: 'I have three cats',
      emoji: '\uD83D\uDC31\uD83D\uDC31\uD83D\uDC31',
      hint: 'The demon hunter keeps three cats as spirit guardians!'
    },
    // 1
    {
      italian: 'Vedo cinque stelle',
      english: 'I see five stars',
      emoji: '\u2B50\u2B50\u2B50\u2B50\u2B50',
      hint: 'Five glowing stars light up the demon hunter\u2019s sky!'
    },
    // 2
    {
      italian: 'Ho due mani',
      english: 'I have two hands',
      emoji: '\u270B\u270B',
      hint: 'Two powerful hands to cast demon-banishing spells!'
    },
    // 3
    {
      italian: 'Ci sono quattro fiori',
      english: 'There are four flowers',
      emoji: '\uD83C\uDF38\uD83C\uDF38\uD83C\uDF38\uD83C\uDF38',
      hint: 'Four magical flowers grow where the demons were defeated!'
    },
    // 4
    {
      italian: 'Ho dieci dita',
      english: 'I have ten fingers',
      emoji: '\uD83D\uDD1F\u270B',
      hint: 'Ten fingers ready to play the K-Pop demon-fighting anthem!'
    },
    // L3 sentences (indices 5-8)
    // 5
    {
      italian: 'Quanti anni hai?',
      english: 'How old are you?',
      emoji: '\uD83C\uDF82',
      hint: 'Even demon hunters have birthdays!'
    },
    // 6
    {
      italian: 'Ho sei anni!',
      english: 'I am six years old!',
      emoji: '6\uFE0F\u20E3\uD83C\uDF89',
      hint: 'The youngest demon hunter on the squad!'
    },
    // 7
    {
      italian: 'Uno, due, tre, via!',
      english: 'One, two, three, go!',
      emoji: '\uD83C\uDFC3',
      hint: 'The demon hunters\u2019 battle countdown!'
    },
    // 8
    {
      italian: 'Conta con me!',
      english: 'Count with me!',
      emoji: '\uD83E\uDD1D',
      hint: 'The squad leader rallies everyone to count together!'
    }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Numbers 1-10
       ========================================== */
    {
      id: 'numeri-1',
      title: 'Numbers 1-10',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      exercises: [

        // 1. Multiple choice: uno
        {
          type: 'multiple-choice',
          prompt: 'The lead demon hunter holds up ONE finger. What is "uno" in English?',
          correctAnswer: 'one',
          options: ['one', 'two', 'three', 'four'],
          daisySays: 'UNO! That\'s the number one hunter on the team!',
          speakWord: 'uno'
        },

        // 2. Listen and pick: tre
        {
          type: 'listen-pick',
          prompt: 'The hunters count their magical swords! Which number do you hear?',
          speakWord: 'tre',
          correctAnswer: 'tre',
          options: ['tre', 'due', 'sei', 'otto']
        },

        // 3. Multiple choice: cinque
        {
          type: 'multiple-choice',
          prompt: 'How many demons did the hunters defeat? Cinque! What number is that?',
          correctAnswer: 'five',
          options: ['five', 'six', 'three', 'eight'],
          daisySays: 'High five! Cinque means FIVE! The hunters got them all!',
          speakWord: 'cinque'
        },

        // 4. Matching: first five numbers
        {
          type: 'matching',
          prompt: 'The demon hunters need to unlock a secret code! Match the Italian numbers to English!',
          pairs: [
            { left: 'uno', right: 'one' },
            { left: 'due', right: 'two' },
            { left: 'tre', right: 'three' },
            { left: 'quattro', right: 'four' }
          ]
        },

        // 5. Listen and pick: sette
        {
          type: 'listen-pick',
          prompt: 'The hunters count the stars on their K-Pop badge! Which number do you hear?',
          speakWord: 'sette',
          correctAnswer: 'sette',
          options: ['sette', 'cinque', 'nove', 'tre']
        },

        // 6. Fill in the blank: otto
        {
          type: 'fill-blank',
          prompt: 'Spell this number in Italian!',
          correctAnswer: 'otto',
          sentence: 'The hunters have ____ magic crystals.',
          hint: 'It means 8! Starts with O and has double T.'
        },

        // 7. Multiple choice: dieci
        {
          type: 'multiple-choice',
          prompt: 'The demon hunters scored a perfect TEN on their dance battle! What is "dieci"?',
          correctAnswer: 'ten',
          options: ['ten', 'seven', 'nine', 'six'],
          daisySays: 'DIECI! A perfect ten! The crowd goes wild!',
          speakWord: 'dieci'
        },

        // 8. Matching: numbers 5-10
        {
          type: 'matching',
          prompt: 'Final round! Match these numbers to complete the demon hunter training!',
          pairs: [
            { left: 'sei', right: 'six' },
            { left: 'sette', right: 'seven' },
            { left: 'nove', right: 'nine' },
            { left: 'dieci', right: 'ten' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Number Phrases
       ========================================== */
    {
      id: 'numeri-2',
      title: 'Number Phrases',
      vocabIndices: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // 1. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'The demon hunter checks on the spirit guardians! What does "Ho tre gatti" mean?',
          correctAnswer: 'I have three cats',
          options: ['I have three cats', 'I see three cats', 'There are three cats', 'I want three cats'],
          daisySays: 'Ho tre gatti! Three spirit-guardian cats protect the base!',
          speakWord: 'Ho tre gatti'
        },

        // 2. Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'The hunters look up at the night sky! What does "Vedo cinque stelle" mean?',
          correctAnswer: 'I see five stars',
          options: ['I see five stars', 'I have five stars', 'There are five stars', 'I want five stars'],
          daisySays: 'Cinque stelle! Five stars guide the demon hunters through the night!',
          speakWord: 'Vedo cinque stelle'
        },

        // 3. Listen and pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'The squad leader shouts a command! Which phrase do you hear?',
          speakWord: 'Ho due mani',
          correctAnswer: 'Ho due mani',
          options: ['Ho due mani', 'Ho tre gatti', 'Ho dieci dita', 'Vedo cinque stelle']
        },

        // 4. Listen and pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'A hunter reports what they found after the battle! Which phrase do you hear?',
          speakWord: 'Ci sono quattro fiori',
          correctAnswer: 'Ci sono quattro fiori',
          options: ['Ci sono quattro fiori', 'Ho tre gatti', 'Vedo cinque stelle', 'Ho dieci dita']
        },

        // 5. Fill in the blank: single word missing
        {
          type: 'fill-blank',
          prompt: 'The demon hunter counts their cats! Fill in the missing number word!',
          correctAnswer: 'tre',
          sentence: 'Ho ____ gatti.',
          hint: 'How many spirit-guardian cats? It\u2019s the number 3 in Italian!'
        },

        // 6. Fill in the blank: single word missing
        {
          type: 'fill-blank',
          prompt: 'The hunter wiggles all their fingers! Fill in the missing number word!',
          correctAnswer: 'dieci',
          sentence: 'Ho ____ dita.',
          hint: 'How many fingers do you have? It\u2019s the number 10 in Italian!'
        },

        // 7. Matching: Italian phrases to English
        {
          type: 'matching',
          prompt: 'The demon hunters need to decode the ancient scroll! Match each phrase!',
          pairs: [
            { left: 'Ho tre gatti', right: 'I have three cats' },
            { left: 'Vedo cinque stelle', right: 'I see five stars' },
            { left: 'Ho due mani', right: 'I have two hands' },
            { left: 'Ci sono quattro fiori', right: 'There are four flowers' }
          ]
        },

        // 8. Matching: more phrases
        {
          type: 'matching',
          prompt: 'Final challenge! Match these phrases to complete the demon hunter\u2019s training!',
          pairs: [
            { left: 'Ho dieci dita', right: 'I have ten fingers' },
            { left: 'Ho tre gatti', right: 'I have three cats' },
            { left: 'Ci sono quattro fiori', right: 'There are four flowers' },
            { left: 'Vedo cinque stelle', right: 'I see five stars' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Number Sentences!
       ========================================== */
    {
      id: 'numeri-3',
      title: 'Number Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      phraseIndices: [5, 6, 7, 8],
      exercises: [

        // 1. Conversation order: demon hunter countdown
        {
          type: 'conversation-order',
          prompt: 'The demon hunters are about to charge! Put the countdown in the right order!',
          correctOrder: [
            { speaker: 'leader', text: 'Pronti?' },
            { speaker: 'hunter', text: 'Tre!' },
            { speaker: 'hunter', text: 'Due!' },
            { speaker: 'hunter', text: 'Uno!' },
            { speaker: 'leader', text: 'Via!' },
            { speaker: 'all', text: 'Andiamo!' }
          ],
          daisySays: 'Pronti? Tre, due, uno, VIA! The demon hunters charge into battle!'
        },

        // 2. Maths generator: 3 questions
        {
          type: 'maths',
          generatorConfig: {
            operations: ['+', '-'],
            maxResult: 20,
            minResult: 0,
            count: 3
          }
        },

        // 3. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'The youngest demon hunter introduces herself! What does "Ho sei anni" mean?',
          correctAnswer: 'I am six years old',
          options: ['I am six years old', 'I have six cats', 'I see six stars', 'There are six flowers'],
          daisySays: 'Ho sei anni! She\u2019s six years old and already fighting demons!',
          speakWord: 'Ho sei anni'
        },

        // 4. Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'The squad leader asks a question! What does "Quanti anni hai?" mean?',
          correctAnswer: 'How old are you?',
          options: ['How old are you?', 'How are you?', 'What is your name?', 'Where are you?'],
          daisySays: 'Quanti anni hai? The leader wants to know your age for the team roster!',
          speakWord: 'Quanti anni hai?'
        },

        // 5. Fill in the blank: single word in sentence
        {
          type: 'fill-blank',
          prompt: 'The little demon hunter tells everyone her age! Fill in the missing number!',
          correctAnswer: 'sei',
          sentence: 'Ho ____ anni.',
          hint: 'She\u2019s 6 years old! What\u2019s the Italian word for six?'
        },

        // 6. Matching: number sentences to English
        {
          type: 'matching',
          prompt: 'Decode the demon hunter\u2019s secret messages! Match each sentence!',
          pairs: [
            { left: 'Quanti anni hai?', right: 'How old are you?' },
            { left: 'Ho sei anni!', right: 'I am six years old!' },
            { left: 'Uno, due, tre, via!', right: 'One, two, three, go!' },
            { left: 'Conta con me!', right: 'Count with me!' }
          ]
        }
      ]
    }
  ]
};
