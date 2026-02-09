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
       LESSON 2 - Numbers 11-20
       ========================================== */
    {
      id: 'numeri-2',
      title: 'Numbers 11-20',
      vocabIndices: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      exercises: [

        // 1. Multiple choice: undici
        {
          type: 'multiple-choice',
          prompt: 'The demon hunter squad has 11 members! What is "undici" in English?',
          correctAnswer: 'eleven',
          options: ['eleven', 'twelve', 'thirteen', 'fifteen'],
          daisySays: 'Undici brave hunters ready for battle! That\'s eleven!',
          speakWord: 'undici'
        },

        // 2. Listen and pick: tredici
        {
          type: 'listen-pick',
          prompt: 'Spooky! The demons appear at this number! Which one do you hear?',
          speakWord: 'tredici',
          correctAnswer: 'tredici',
          options: ['tredici', 'undici', 'quindici', 'dodici']
        },

        // 3. Multiple choice: quindici
        {
          type: 'multiple-choice',
          prompt: 'The K-Pop concert starts in quindici minutes! How many is that?',
          correctAnswer: 'fifteen',
          options: ['fifteen', 'fourteen', 'sixteen', 'thirteen'],
          daisySays: 'Quindici! That\'s fifteen minutes to showtime! Get your glow sticks ready!',
          speakWord: 'quindici'
        },

        // 4. Matching: 11-14
        {
          type: 'matching',
          prompt: 'The hunters found a number puzzle on the demon\'s door! Match them up!',
          pairs: [
            { left: 'undici', right: 'eleven' },
            { left: 'dodici', right: 'twelve' },
            { left: 'tredici', right: 'thirteen' },
            { left: 'quattordici', right: 'fourteen' }
          ]
        },

        // 5. Fill in the blank: venti
        {
          type: 'fill-blank',
          prompt: 'Spell the biggest number the hunters can count to!',
          correctAnswer: 'venti',
          sentence: 'There are ____ levels in the demon tower.',
          hint: 'It means 20! Starts with V. The final boss level!'
        },

        // 6. Listen and pick: diciotto
        {
          type: 'listen-pick',
          prompt: 'The hunters count their trophies! Which number do you hear?',
          speakWord: 'diciotto',
          correctAnswer: 'diciotto',
          options: ['diciotto', 'diciannove', 'sedici', 'diciassette']
        },

        // 7. Multiple choice: diciassette
        {
          type: 'multiple-choice',
          prompt: 'The demon hunters have diciassette dance moves! How many is that?',
          correctAnswer: 'seventeen',
          options: ['seventeen', 'eighteen', 'sixteen', 'nineteen'],
          daisySays: 'Diciassette epic moves! That\'s seventeen! Can you learn them all?',
          speakWord: 'diciassette'
        },

        // 8. Matching: 17-20
        {
          type: 'matching',
          prompt: 'Almost there! Match these big numbers to defeat the final demon boss!',
          pairs: [
            { left: 'diciassette', right: 'seventeen' },
            { left: 'diciotto', right: 'eighteen' },
            { left: 'diciannove', right: 'nineteen' },
            { left: 'venti', right: 'twenty' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 3 - Italian Maths!
       ========================================== */
    {
      id: 'numeri-3',
      title: 'Italian Maths!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      exercises: [
        {
          type: 'maths',
          generatorConfig: {
            operations: ['+', '-'],
            maxResult: 20,
            minResult: 0,
            count: 8
          }
        }
      ]
    }
  ]
};
