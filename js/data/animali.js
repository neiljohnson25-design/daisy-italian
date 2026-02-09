/* ============================================
   Animali (Animals) - Topic Data
   Theme: Disney Princesses
   ============================================ */

window.ANIMALI_DATA = {
  id: 'animali',

  vocabulary: [
    // 0 - gatto
    { italian: 'gatto', english: 'cat', emoji: '\uD83D\uDC31', hint: 'Lucifer is the sneaky one in Cinderella\'s castle!' },
    // 1 - cane
    { italian: 'cane', english: 'dog', emoji: '\uD83D\uDC36', hint: 'Ariel\'s friend Max loves to play on the beach!' },
    // 2 - cavallo
    { italian: 'cavallo', english: 'horse', emoji: '\uD83D\uDC34', hint: 'Rapunzel rides Maximus on big adventures!' },
    // 3 - uccello
    { italian: 'uccello', english: 'bird', emoji: '\uD83D\uDC26', hint: 'Snow White sings with her little feathered friends!' },
    // 4 - pesce
    { italian: 'pesce', english: 'fish', emoji: '\uD83D\uDC1F', hint: 'Ariel\'s best friend Flounder swims in the sea!' },
    // 5 - coniglio
    { italian: 'coniglio', english: 'rabbit', emoji: '\uD83D\uDC30', hint: 'Snow White has fluffy friends hopping in the forest!' },
    // 6 - farfalla
    { italian: 'farfalla', english: 'butterfly', emoji: '\uD83E\uDD8B', hint: 'Beautiful wings that flutter around Aurora\'s garden!' },
    // 7 - rana
    { italian: 'rana', english: 'frog', emoji: '\uD83D\uDC38', hint: 'Tiana kissed one of these and got a big surprise!' },
    // 8 - orso
    { italian: 'orso', english: 'bear', emoji: '\uD83D\uDC3B', hint: 'Merida\'s mum turned into a big fluffy one!' },
    // 9 - topo
    { italian: 'topo', english: 'mouse', emoji: '\uD83D\uDC2D', hint: 'Cinderella\'s little friends Jaq and Gus are these!' },
    // 10 - leone
    { italian: 'leone', english: 'lion', emoji: '\uD83E\uDD81', hint: 'The brave king of the jungle with a big golden mane!' },
    // 11 - elefante
    { italian: 'elefante', english: 'elephant', emoji: '\uD83D\uDC18', hint: 'Jasmine sees these amazing big animals in Agrabah!' }
  ],

  lessons: [
    /* ==========================================
       Lesson 1: Pet Animals (vocabIndices 0-4)
       ========================================== */
    {
      id: 'animali-1',
      title: 'Pet Animals',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [
        // Exercise 1: Picture match - gatto
        {
          type: 'picture-match',
          prompt: 'Which animal is a "gatto"?',
          speakWord: 'gatto',
          correctAnswer: 'gatto',
          options: [
            { value: 'gatto', emoji: '\uD83D\uDC31', label: 'gatto' },
            { value: 'cane', emoji: '\uD83D\uDC36', label: 'cane' },
            { value: 'pesce', emoji: '\uD83D\uDC1F', label: 'pesce' },
            { value: 'uccello', emoji: '\uD83D\uDC26', label: 'uccello' }
          ]
        },

        // Exercise 2: Multiple choice - cane
        {
          type: 'multiple-choice',
          prompt: 'What is "dog" in Italian?',
          correctAnswer: 'cane',
          options: ['cane', 'gatto', 'cavallo', 'pesce'],
          daisySays: 'Think of a princess\'s loyal friend who loves to run and play!',
          speakWord: 'cane'
        },

        // Exercise 3: Listen and pick - cavallo
        {
          type: 'listen-pick',
          prompt: 'Listen! Which word do you hear?',
          speakWord: 'cavallo',
          correctAnswer: 'cavallo',
          options: ['cavallo', 'gatto', 'uccello', 'cane']
        },

        // Exercise 4: Picture match - uccello
        {
          type: 'picture-match',
          prompt: 'Snow White loves to sing with these! Which one is an "uccello"?',
          speakWord: 'uccello',
          correctAnswer: 'uccello',
          options: [
            { value: 'uccello', emoji: '\uD83D\uDC26', label: 'uccello' },
            { value: 'pesce', emoji: '\uD83D\uDC1F', label: 'pesce' },
            { value: 'gatto', emoji: '\uD83D\uDC31', label: 'gatto' },
            { value: 'cavallo', emoji: '\uD83D\uDC34', label: 'cavallo' }
          ]
        },

        // Exercise 5: Multiple choice - pesce
        {
          type: 'multiple-choice',
          prompt: 'Ariel\'s friend Flounder is a... what is "fish" in Italian?',
          correctAnswer: 'pesce',
          options: ['pesce', 'cane', 'uccello', 'cavallo'],
          daisySays: 'Flounder swims with Ariel under the sea!',
          speakWord: 'pesce'
        },

        // Exercise 6: Matching - all 4 pet animals
        {
          type: 'matching',
          prompt: 'Match the Italian animal names to the English ones!',
          pairs: [
            { left: 'gatto', right: 'cat' },
            { left: 'cane', right: 'dog' },
            { left: 'cavallo', right: 'horse' },
            { left: 'uccello', right: 'bird' }
          ]
        },

        // Exercise 7: Fill in the blank - gatto
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "cat"!',
          correctAnswer: 'gatto',
          sentence: 'Lucifer the ____ lives in the castle.',
          hint: 'Cinderella\'s sneaky cat - it starts with "g"!'
        },

        // Exercise 8: Listen and pick - pesce
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! What animal do you hear?',
          speakWord: 'pesce',
          correctAnswer: 'pesce',
          options: ['pesce', 'cavallo', 'gatto', 'uccello']
        }
      ]
    },

    /* ==========================================
       Lesson 2: Wild Animals (vocabIndices 5-9)
       ========================================== */
    {
      id: 'animali-2',
      title: 'Wild Animals',
      vocabIndices: [5, 6, 7, 8, 9],
      exercises: [
        // Exercise 1: Picture match - rana
        {
          type: 'picture-match',
          prompt: 'Tiana kissed one of these! Which animal is a "rana"?',
          speakWord: 'rana',
          correctAnswer: 'rana',
          options: [
            { value: 'rana', emoji: '\uD83D\uDC38', label: 'rana' },
            { value: 'topo', emoji: '\uD83D\uDC2D', label: 'topo' },
            { value: 'coniglio', emoji: '\uD83D\uDC30', label: 'coniglio' },
            { value: 'orso', emoji: '\uD83D\uDC3B', label: 'orso' }
          ]
        },

        // Exercise 2: Multiple choice - coniglio
        {
          type: 'multiple-choice',
          prompt: 'What is "rabbit" in Italian?',
          correctAnswer: 'coniglio',
          options: ['coniglio', 'rana', 'topo', 'farfalla'],
          daisySays: 'Think of the fluffy friends hopping in Snow White\'s forest!',
          speakWord: 'coniglio'
        },

        // Exercise 3: Listen and pick - farfalla
        {
          type: 'listen-pick',
          prompt: 'Listen! Which beautiful creature do you hear?',
          speakWord: 'farfalla',
          correctAnswer: 'farfalla',
          options: ['farfalla', 'coniglio', 'rana', 'orso']
        },

        // Exercise 4: Picture match - topo
        {
          type: 'picture-match',
          prompt: 'Cinderella\'s tiny helpers! Which one is a "topo"?',
          speakWord: 'topo',
          correctAnswer: 'topo',
          options: [
            { value: 'topo', emoji: '\uD83D\uDC2D', label: 'topo' },
            { value: 'rana', emoji: '\uD83D\uDC38', label: 'rana' },
            { value: 'farfalla', emoji: '\uD83E\uDD8B', label: 'farfalla' },
            { value: 'orso', emoji: '\uD83D\uDC3B', label: 'orso' }
          ]
        },

        // Exercise 5: Multiple choice - orso
        {
          type: 'multiple-choice',
          prompt: 'Merida\'s mum was turned into one! What is "bear" in Italian?',
          correctAnswer: 'orso',
          options: ['orso', 'topo', 'coniglio', 'rana'],
          daisySays: 'Remember Brave? Merida\'s mum became big and fluffy!',
          speakWord: 'orso'
        },

        // Exercise 6: Fill in the blank - rana
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "frog"!',
          correctAnswer: 'rana',
          sentence: 'Tiana kissed the ____ and it turned into a prince!',
          hint: 'A little green friend - only 4 letters starting with "r"!'
        },

        // Exercise 7: Matching - wild animals
        {
          type: 'matching',
          prompt: 'Match the Italian animals to the English words!',
          pairs: [
            { left: 'coniglio', right: 'rabbit' },
            { left: 'farfalla', right: 'butterfly' },
            { left: 'rana', right: 'frog' },
            { left: 'topo', right: 'mouse' }
          ]
        },

        // Exercise 8: Listen and pick - orso
        {
          type: 'listen-pick',
          prompt: 'Listen to the word! Can you pick the right one?',
          speakWord: 'orso',
          correctAnswer: 'orso',
          options: ['orso', 'farfalla', 'topo', 'coniglio']
        }
      ]
    },

    /* ==========================================
       Lesson 3: All the Animals! (vocabIndices 0-11)
       ========================================== */
    {
      id: 'animali-3',
      title: 'All the Animals!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [
        // Exercise 1: Picture match - leone
        {
          type: 'picture-match',
          prompt: 'Which animal is a "leone"? The king of the jungle!',
          speakWord: 'leone',
          correctAnswer: 'leone',
          options: [
            { value: 'leone', emoji: '\uD83E\uDD81', label: 'leone' },
            { value: 'orso', emoji: '\uD83D\uDC3B', label: 'orso' },
            { value: 'cavallo', emoji: '\uD83D\uDC34', label: 'cavallo' },
            { value: 'elefante', emoji: '\uD83D\uDC18', label: 'elefante' }
          ]
        },

        // Exercise 2: Multiple choice - elefante
        {
          type: 'multiple-choice',
          prompt: 'Jasmine sees these big animals! What is "elephant" in Italian?',
          correctAnswer: 'elefante',
          options: ['elefante', 'leone', 'cavallo', 'orso'],
          daisySays: 'Think about the amazing animals in Agrabah!',
          speakWord: 'elefante'
        },

        // Exercise 3: Listen and pick - farfalla (review)
        {
          type: 'listen-pick',
          prompt: 'Listen! This pretty creature flies around Aurora\'s garden!',
          speakWord: 'farfalla',
          correctAnswer: 'farfalla',
          options: ['farfalla', 'uccello', 'pesce', 'rana']
        },

        // Exercise 4: Multiple choice - topo (review)
        {
          type: 'multiple-choice',
          prompt: 'Jaq and Gus help Cinderella! What is "mouse" in Italian?',
          correctAnswer: 'topo',
          options: ['topo', 'coniglio', 'gatto', 'rana'],
          daisySays: 'Cinderella\'s little helpers who made her beautiful dress!',
          speakWord: 'topo'
        },

        // Exercise 5: Picture match - mixed review
        {
          type: 'picture-match',
          prompt: 'Rapunzel rides one of these! Which one is a "cavallo"?',
          speakWord: 'cavallo',
          correctAnswer: 'cavallo',
          options: [
            { value: 'cavallo', emoji: '\uD83D\uDC34', label: 'cavallo' },
            { value: 'cane', emoji: '\uD83D\uDC36', label: 'cane' },
            { value: 'leone', emoji: '\uD83E\uDD81', label: 'leone' },
            { value: 'elefante', emoji: '\uD83D\uDC18', label: 'elefante' }
          ]
        },

        // Exercise 6: Matching - big review mix
        {
          type: 'matching',
          prompt: 'Match all the princess animals to the English words!',
          pairs: [
            { left: 'leone', right: 'lion' },
            { left: 'elefante', right: 'elephant' },
            { left: 'pesce', right: 'fish' },
            { left: 'farfalla', right: 'butterfly' }
          ]
        },

        // Exercise 7: Fill in the blank - leone
        {
          type: 'fill-blank',
          prompt: 'Spell the Italian word for "lion"!',
          correctAnswer: 'leone',
          sentence: 'The brave ____ is the king of the jungle!',
          hint: 'A big cat with a golden mane - starts with "l"!'
        },

        // Exercise 8: Listen and pick - elefante
        {
          type: 'listen-pick',
          prompt: 'Listen! Can you pick the animal Jasmine loves?',
          speakWord: 'elefante',
          correctAnswer: 'elefante',
          options: ['elefante', 'cavallo', 'leone', 'orso']
        }
      ]
    }
  ]
};
