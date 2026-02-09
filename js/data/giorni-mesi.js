/* ============================================
   Giorni e Mesi (Days & Months) - Disney Princesses Theme
   Topic Data: Vocabulary + 3 Lessons
   ============================================ */

window.GIORNI_MESI_DATA = {
  id: 'giorni-mesi',

  /* ------------------------------------------
     Vocabulary
     ------------------------------------------ */
  vocabulary: [
    // 0
    {
      italian: 'luned\u00EC',
      english: 'Monday',
      emoji: '\uD83D\uDCC5',
      hint: 'Cinderella starts her chores on luned\u00EC - Monday!'
    },
    // 1
    {
      italian: 'marted\u00EC',
      english: 'Tuesday',
      emoji: '\uD83D\uDCC5',
      hint: 'Belle reads a new book every marted\u00EC - Tuesday!'
    },
    // 2
    {
      italian: 'mercoled\u00EC',
      english: 'Wednesday',
      emoji: '\uD83D\uDCC5',
      hint: 'Rapunzel paints the tower walls on mercoled\u00EC - Wednesday!'
    },
    // 3
    {
      italian: 'gioved\u00EC',
      english: 'Thursday',
      emoji: '\uD83D\uDCC5',
      hint: 'Ariel explores the ocean on gioved\u00EC - Thursday!'
    },
    // 4
    {
      italian: 'venerd\u00EC',
      english: 'Friday',
      emoji: '\uD83D\uDCC5',
      hint: 'Moana sets sail on venerd\u00EC - Friday!'
    },
    // 5
    {
      italian: 'sabato',
      english: 'Saturday',
      emoji: '\uD83C\uDF89',
      hint: 'The royal ball is on sabato - Saturday!'
    },
    // 6
    {
      italian: 'domenica',
      english: 'Sunday',
      emoji: '\u2600\uFE0F',
      hint: 'Aurora has a lovely rest on domenica - Sunday!'
    },
    // 7
    {
      italian: 'gennaio',
      english: 'January',
      emoji: '\u2744\uFE0F',
      hint: 'Elsa loves gennaio - January - because it\'s snowy!'
    },
    // 8
    {
      italian: 'febbraio',
      english: 'February',
      emoji: '\uD83D\uDC95',
      hint: 'Snow White gets valentines in febbraio - February!'
    },
    // 9
    {
      italian: 'marzo',
      english: 'March',
      emoji: '\uD83C\uDF31',
      hint: 'Rapunzel watches flowers sprout in marzo - March!'
    },
    // 10
    {
      italian: 'aprile',
      english: 'April',
      emoji: '\uD83C\uDF38',
      hint: 'Jasmine\'s garden blooms in aprile - April!'
    },
    // 11
    {
      italian: 'maggio',
      english: 'May',
      emoji: '\uD83C\uDF3A',
      hint: 'Aurora dances with flowers in maggio - May!'
    },
    // 12
    {
      italian: 'giugno',
      english: 'June',
      emoji: '\u2600\uFE0F',
      hint: 'Moana surfs the sunny waves in giugno - June!'
    },
    // 13
    {
      italian: 'luglio',
      english: 'July',
      emoji: '\uD83C\uDFD6\uFE0F',
      hint: 'Ariel splashes at the beach in luglio - July!'
    },
    // 14
    {
      italian: 'agosto',
      english: 'August',
      emoji: '\uD83C\uDF3B',
      hint: 'Pocahontas picks sunflowers in agosto - August!'
    },
    // 15
    {
      italian: 'settembre',
      english: 'September',
      emoji: '\uD83C\uDF42',
      hint: 'Belle goes back to reading in settembre - September!'
    },
    // 16
    {
      italian: 'ottobre',
      english: 'October',
      emoji: '\uD83C\uDF83',
      hint: 'Cinderella\'s pumpkin coach appears in ottobre - October!'
    },
    // 17
    {
      italian: 'novembre',
      english: 'November',
      emoji: '\uD83C\uDF41',
      hint: 'Pocahontas watches the leaves fall in novembre - November!'
    },
    // 18
    {
      italian: 'dicembre',
      english: 'December',
      emoji: '\uD83C\uDF84',
      hint: 'All the princesses celebrate in dicembre - December!'
    },
    // 19
    {
      italian: 'oggi',
      english: 'today',
      emoji: '\uD83D\uDCC6',
      hint: 'Oggi means today - the princess adventure is TODAY!'
    },
    // 20
    {
      italian: 'domani',
      english: 'tomorrow',
      emoji: '\u27A1\uFE0F',
      hint: 'Domani means tomorrow - the ball is TOMORROW!'
    },
    // 21
    {
      italian: 'ieri',
      english: 'yesterday',
      emoji: '\u2B05\uFE0F',
      hint: 'Ieri means yesterday - Cinderella lost her slipper YESTERDAY!'
    }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [

    /* ==========================================
       LESSON 1 - Days of the Week
       ========================================== */
    {
      id: 'giorni-mesi-1',
      title: 'Days of the Week',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6],
      exercises: [

        // 1. Multiple choice: luned\u00EC
        {
          type: 'multiple-choice',
          prompt: 'Cinderella starts cleaning on "luned\u00EC". What day is that?',
          correctAnswer: 'Monday',
          options: ['Monday', 'Tuesday', 'Friday', 'Sunday'],
          daisySays: 'Poor Cinderella! She scrubs the floors every Monday!',
          speakWord: 'luned\u00EC'
        },

        // 2. Listen and pick: marted\u00EC
        {
          type: 'listen-pick',
          prompt: 'Belle is off to the library! Listen - which day do you hear?',
          speakWord: 'marted\u00EC',
          correctAnswer: 'marted\u00EC',
          options: ['marted\u00EC', 'luned\u00EC', 'gioved\u00EC', 'sabato']
        },

        // 3. Multiple choice: mercoled\u00EC
        {
          type: 'multiple-choice',
          prompt: 'Rapunzel paints on "mercoled\u00EC". What day is that in English?',
          correctAnswer: 'Wednesday',
          options: ['Wednesday', 'Thursday', 'Monday', 'Saturday'],
          daisySays: 'Rapunzel\'s tower is SO colourful by Wednesday!',
          speakWord: 'mercoled\u00EC'
        },

        // 4. Matching: first four days
        {
          type: 'matching',
          prompt: 'Match the Italian days to the English days! The princesses need your help!',
          pairs: [
            { left: 'luned\u00EC', right: 'Monday' },
            { left: 'marted\u00EC', right: 'Tuesday' },
            { left: 'mercoled\u00EC', right: 'Wednesday' },
            { left: 'gioved\u00EC', right: 'Thursday' }
          ]
        },

        // 5. Listen and pick: venerd\u00EC
        {
          type: 'listen-pick',
          prompt: 'Moana is getting her boat ready! Which day do you hear?',
          speakWord: 'venerd\u00EC',
          correctAnswer: 'venerd\u00EC',
          options: ['venerd\u00EC', 'mercoled\u00EC', 'sabato', 'domenica']
        },

        // 6. Multiple choice: sabato
        {
          type: 'multiple-choice',
          prompt: 'The royal ball is on "sabato"! What day is the ball?',
          correctAnswer: 'Saturday',
          options: ['Saturday', 'Sunday', 'Friday', 'Wednesday'],
          daisySays: 'Cinderella dances at the ball on Saturday! So magical!',
          speakWord: 'sabato'
        },

        // 7. Fill in the blank: domenica
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for the day Aurora rests!',
          correctAnswer: 'domenica',
          sentence: 'Aurora rests on ____.',
          hint: 'It means Sunday! Starts with D.'
        },

        // 8. Matching: weekend + review
        {
          type: 'matching',
          prompt: 'Can you match ALL these days? You\'re a true princess scholar!',
          pairs: [
            { left: 'venerd\u00EC', right: 'Friday' },
            { left: 'sabato', right: 'Saturday' },
            { left: 'domenica', right: 'Sunday' },
            { left: 'luned\u00EC', right: 'Monday' }
          ]
        }
      ]
    },

    /* ==========================================
       LESSON 2 - Months of the Year
       ========================================== */
    {
      id: 'giorni-mesi-2',
      title: 'Months of the Year',
      vocabIndices: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      exercises: [

        // 1. Multiple choice: gennaio
        {
          type: 'multiple-choice',
          prompt: 'Elsa builds a snowman in "gennaio". What month is that?',
          correctAnswer: 'January',
          options: ['January', 'February', 'December', 'March'],
          daisySays: 'Brrr! Elsa LOVES the cold in January! Let it snow!',
          speakWord: 'gennaio'
        },

        // 2. Listen and pick: aprile
        {
          type: 'listen-pick',
          prompt: 'Jasmine\'s garden is blooming! Listen - which month do you hear?',
          speakWord: 'aprile',
          correctAnswer: 'aprile',
          options: ['aprile', 'marzo', 'maggio', 'giugno']
        },

        // 3. Matching: winter and spring months
        {
          type: 'matching',
          prompt: 'Match the Italian months to the English ones! The princesses are counting the seasons!',
          pairs: [
            { left: 'gennaio', right: 'January' },
            { left: 'febbraio', right: 'February' },
            { left: 'marzo', right: 'March' },
            { left: 'aprile', right: 'April' }
          ]
        },

        // 4. Multiple choice: luglio
        {
          type: 'multiple-choice',
          prompt: 'Ariel splashes at the beach in "luglio". What month is that?',
          correctAnswer: 'July',
          options: ['July', 'June', 'August', 'May'],
          daisySays: 'Ariel loves July! The water is so warm and sparkly!',
          speakWord: 'luglio'
        },

        // 5. Fill in the blank: ottobre
        {
          type: 'fill-blank',
          prompt: 'Spell the month when Cinderella\'s pumpkin coach appears!',
          correctAnswer: 'ottobre',
          sentence: 'The pumpkin coach comes in ____.',
          hint: 'It means October! Starts with O and has double T.'
        },

        // 6. Listen and pick: dicembre
        {
          type: 'listen-pick',
          prompt: 'The princesses are opening presents! Which month do you hear?',
          speakWord: 'dicembre',
          correctAnswer: 'dicembre',
          options: ['dicembre', 'novembre', 'settembre', 'gennaio']
        },

        // 7. Matching: summer and autumn months
        {
          type: 'matching',
          prompt: 'Match the summer and autumn months! Ariel and Belle need your help!',
          pairs: [
            { left: 'giugno', right: 'June' },
            { left: 'agosto', right: 'August' },
            { left: 'settembre', right: 'September' },
            { left: 'dicembre', right: 'December' }
          ]
        },

        // 8. Multiple choice: novembre
        {
          type: 'multiple-choice',
          prompt: 'Pocahontas watches leaves fall in "novembre". What month is that?',
          correctAnswer: 'November',
          options: ['November', 'October', 'September', 'December'],
          daisySays: 'The leaves are so pretty when they fall! Just like Pocahontas says!',
          speakWord: 'novembre'
        }
      ]
    },

    /* ==========================================
       LESSON 3 - When is it? (Mixed Review)
       ========================================== */
    {
      id: 'giorni-mesi-3',
      title: 'When is it?',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      exercises: [

        // 1. Multiple choice: oggi
        {
          type: 'multiple-choice',
          prompt: 'The princess adventure is "oggi"! What does "oggi" mean?',
          correctAnswer: 'today',
          options: ['today', 'tomorrow', 'yesterday', 'Sunday'],
          daisySays: 'Oggi means right now, THIS day! The adventure starts today!',
          speakWord: 'oggi'
        },

        // 2. Listen and pick: domani
        {
          type: 'listen-pick',
          prompt: 'Cinderella says the ball is coming soon! Listen - what word do you hear?',
          speakWord: 'domani',
          correctAnswer: 'domani',
          options: ['domani', 'oggi', 'ieri', 'sabato']
        },

        // 3. Multiple choice: ieri
        {
          type: 'multiple-choice',
          prompt: 'Cinderella lost her glass slipper "ieri". What does "ieri" mean?',
          correctAnswer: 'yesterday',
          options: ['yesterday', 'today', 'tomorrow', 'Monday'],
          daisySays: 'Oh no! She lost her slipper yesterday! The prince will find it!',
          speakWord: 'ieri'
        },

        // 4. Matching: oggi, domani, ieri + a day
        {
          type: 'matching',
          prompt: 'Match the Italian time words! Every princess needs to know when things happen!',
          pairs: [
            { left: 'oggi', right: 'today' },
            { left: 'domani', right: 'tomorrow' },
            { left: 'ieri', right: 'yesterday' },
            { left: 'sabato', right: 'Saturday' }
          ]
        },

        // 5. Fill in the blank: oggi
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "today"!',
          correctAnswer: 'oggi',
          sentence: 'The princess party is ____!',
          hint: 'It means today! It starts with O and has double G.'
        },

        // 6. Listen and pick: maggio
        {
          type: 'listen-pick',
          prompt: 'Aurora is picking flowers for a special month! Which month do you hear?',
          speakWord: 'maggio',
          correctAnswer: 'maggio',
          options: ['maggio', 'marzo', 'giugno', 'aprile']
        },

        // 7. Matching: big review of days and months
        {
          type: 'matching',
          prompt: 'The grand princess review! Match them all - you can do it!',
          pairs: [
            { left: 'mercoled\u00EC', right: 'Wednesday' },
            { left: 'gennaio', right: 'January' },
            { left: 'domenica', right: 'Sunday' },
            { left: 'ottobre', right: 'October' }
          ]
        },

        // 8. Multiple choice: domani
        {
          type: 'multiple-choice',
          prompt: 'Rapunzel will see the floating lanterns "domani". What does "domani" mean?',
          correctAnswer: 'tomorrow',
          options: ['tomorrow', 'yesterday', 'today', 'Friday'],
          daisySays: 'Rapunzel can\'t wait! The lanterns fly TOMORROW! How exciting!',
          speakWord: 'domani'
        }
      ]
    }
  ]
};
