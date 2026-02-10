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

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short phrases (indices 0-4)
    // 0
    { italian: 'il gatto piccolo', english: 'the small cat', emoji: '\uD83D\uDC31', hint: 'Cinderella\'s little furry friend in the castle!' },
    // 1
    { italian: 'il cane grande', english: 'the big dog', emoji: '\uD83D\uDC36', hint: 'Ariel\'s friend Max is a big brave pup!' },
    // 2
    { italian: 'il cavallo bianco', english: 'the white horse', emoji: '\uD83D\uDC34', hint: 'Every princess has a beautiful white steed!' },
    // 3
    { italian: 'l\'uccello blu', english: 'the blue bird', emoji: '\uD83D\uDC26', hint: 'Snow White\'s little songbird is this colour!' },
    // 4
    { italian: 'il pesce rosso', english: 'the goldfish', emoji: '\uD83D\uDC1F', hint: 'A little red fish swimming round and round!' },

    // L3 - Full sentences (indices 5-9)
    // 5
    { italian: 'Mi piace il gatto!', english: 'I like the cat!', emoji: '\uD83D\uDC31\u2764\uFE0F', hint: 'Tell everyone which animal you love!' },
    // 6
    { italian: 'Ho un cane grande', english: 'I have a big dog', emoji: '\uD83D\uDC36', hint: 'Ariel tells her friends about her pet!' },
    // 7
    { italian: 'Il cavallo \u00E8 bianco', english: 'The horse is white', emoji: '\uD83D\uDC34\u26AA', hint: 'Rapunzel describes Maximus!' },
    // 8
    { italian: 'Vedo un uccello blu!', english: 'I see a blue bird!', emoji: '\uD83D\uDC26\uD83D\uDD35', hint: 'Snow White spots one in the forest!' },
    // 9
    { italian: 'Il pesce nuota', english: 'The fish swims', emoji: '\uD83D\uDC1F\uD83C\uDF0A', hint: 'Flounder does this all day under the sea!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
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
       Lesson 2: Animal Phrases (phraseIndices 0-4)
       ========================================== */
    {
      id: 'animali-2',
      title: 'Animal Phrases',
      vocabIndices: [5, 6, 7, 8, 9],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [

        // Exercise 1: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'What does "il gatto piccolo" mean?',
          correctAnswer: 'the small cat',
          options: ['the small cat', 'the big dog', 'the white horse', 'the blue bird'],
          daisySays: 'Cinderella\'s little furry friend in the castle!',
          speakWord: 'il gatto piccolo'
        },

        // Exercise 2: Multiple choice - phrase translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "the white horse" in Italian?',
          correctAnswer: 'il cavallo bianco',
          options: ['il cavallo bianco', 'il cane grande', 'il gatto piccolo', 'il pesce rosso'],
          daisySays: 'Every princess rides a beautiful white steed!',
          speakWord: 'il cavallo bianco'
        },

        // Exercise 3: Listen-pick - hear a phrase
        {
          type: 'listen-pick',
          prompt: 'Listen! Which animal phrase do you hear?',
          speakWord: 'il cane grande',
          correctAnswer: 'il cane grande',
          options: ['il cane grande', 'il gatto piccolo', 'il pesce rosso', 'l\'uccello blu']
        },

        // Exercise 4: Listen-pick - hear a phrase
        {
          type: 'listen-pick',
          prompt: 'Snow White hears something! What phrase is it?',
          speakWord: 'l\'uccello blu',
          correctAnswer: 'l\'uccello blu',
          options: ['l\'uccello blu', 'il cavallo bianco', 'il cane grande', 'il gatto piccolo']
        },

        // Exercise 5: Translate to Italian - rabbit
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'rabbit',
          correctAnswer: 'coniglio',
          options: ['coniglio', 'gatto', 'rana', 'topo'],
          _trackedWord: 'coniglio'
        },

        // Exercise 6: Fill-blank - single word missing from phrase
        {
          type: 'fill-blank',
          prompt: 'What kind of cat? Fill in the missing word!',
          correctAnswer: 'piccolo',
          sentence: 'Il gatto \u00E8 ____.',
          hint: 'It means small! Cinderella\'s little cat - starts with P.'
        },

        // Exercise 7: Fill-blank - single word missing from phrase
        {
          type: 'fill-blank',
          prompt: 'What colour is the fish? Fill in the missing word!',
          correctAnswer: 'rosso',
          sentence: 'Il pesce \u00E8 ____.',
          hint: 'It means red! Like a goldfish - starts with R.'
        },

        // Exercise 8: Say it - butterfly
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'farfalla',
          correctAnswer: 'farfalla',
          daisySays: 'Beautiful butterfly! Say it like a princess!'
        },

        // Exercise 9: Matching - Italian phrases to English
        {
          type: 'matching',
          prompt: 'Match the Italian animal phrases to English!',
          pairs: [
            { left: 'il gatto piccolo', right: 'the small cat' },
            { left: 'il cane grande', right: 'the big dog' },
            { left: 'il cavallo bianco', right: 'the white horse' },
            { left: 'l\'uccello blu', right: 'the blue bird' }
          ]
        },

        // Exercise 10: Matching - more phrase pairs
        {
          type: 'matching',
          prompt: 'Match the rest of the princess animal phrases!',
          pairs: [
            { left: 'il pesce rosso', right: 'the goldfish' },
            { left: 'il cane grande', right: 'the big dog' },
            { left: 'l\'uccello blu', right: 'the blue bird' },
            { left: 'il cavallo bianco', right: 'the white horse' }
          ]
        }
      ]
    },

    /* ==========================================
       Lesson 3: Animal Sentences! (phraseIndices 5-9)
       ========================================== */
    {
      id: 'animali-3',
      title: 'Animal Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [

        // Exercise 1: Conversation order - Snow White meets forest animals
        {
          type: 'conversation-order',
          prompt: 'Put Snow White\'s forest adventure in order!',
          scenario: 'Snow White walks through the enchanted forest and meets the animals!',
          correctOrder: [
            'Ciao, animali!',
            'Vedo un uccello blu!',
            'Mi piace il gatto!',
            'Il cavallo \u00E8 bianco.',
            'Il pesce nuota!',
            'Che bello!'
          ]
        },

        // Exercise 2: Multiple choice - sentence translation
        {
          type: 'multiple-choice',
          prompt: 'What does "Mi piace il gatto!" mean?',
          correctAnswer: 'I like the cat!',
          options: ['I like the cat!', 'I see the cat!', 'I have a cat!', 'The cat is small!'],
          daisySays: 'This is how you tell a princess which animal you love!',
          speakWord: 'Mi piace il gatto'
        },

        // Exercise 3: Multiple choice - sentence translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "The horse is white" in Italian?',
          correctAnswer: 'Il cavallo \u00E8 bianco',
          options: ['Il cavallo \u00E8 bianco', 'Ho un cane grande', 'Mi piace il gatto', 'Il pesce nuota'],
          daisySays: 'Think about Rapunzel\'s beautiful horse Maximus!',
          speakWord: 'Il cavallo \u00E8 bianco'
        },

        // Exercise 4: Listen comprehend - big dog
        {
          type: 'listen-comprehend',
          sentence: 'Ho un cane grande',
          question: 'What animal does the speaker have?',
          correctAnswer: 'A big dog',
          options: ['A big dog', 'A small cat', 'A white horse', 'A blue bird'],
          daisySays: 'Listen to what animal they are talking about!'
        },

        // Exercise 5: Listen-pick - hear a sentence
        {
          type: 'listen-pick',
          prompt: 'Ariel is talking about her pet! What sentence do you hear?',
          speakWord: 'Ho un cane grande',
          correctAnswer: 'Ho un cane grande',
          options: ['Ho un cane grande', 'Mi piace il gatto', 'Il pesce nuota', 'Vedo un uccello blu']
        },

        // Exercise 6: Fill-blank - single word in sentence
        {
          type: 'fill-blank',
          prompt: 'What does the fish do? Fill in the missing word!',
          correctAnswer: 'nuota',
          sentence: 'Il pesce ____.',
          hint: 'Flounder does this all day! It means swims - starts with N.'
        },

        // Exercise 7: Sentence build - I like the cat
        {
          type: 'sentence-build',
          prompt: 'Build: "I like the cat"',
          correctOrder: ['Mi', 'piace', 'il', 'gatto'],
          hint: 'I like the cat',
          daisySays: 'Put the words in order to tell everyone which animal you love!'
        },

        // Exercise 8: Fill-blank - single word in sentence
        {
          type: 'fill-blank',
          prompt: 'What colour is the horse? Fill in the missing word!',
          correctAnswer: 'bianco',
          sentence: 'Il cavallo \u00E8 ____.',
          hint: 'Maximus is this colour! It means white - starts with B.'
        },

        // Exercise 9: Matching - sentences to English
        {
          type: 'matching',
          prompt: 'Match the Italian animal sentences to English!',
          pairs: [
            { left: 'Mi piace il gatto', right: 'I like the cat' },
            { left: 'Ho un cane grande', right: 'I have a big dog' },
            { left: 'Il pesce nuota', right: 'The fish swims' },
            { left: 'Vedo un uccello blu', right: 'I see a blue bird' }
          ]
        },

        // Exercise 10: Matching - more sentence pairs
        {
          type: 'matching',
          prompt: 'Match the rest of the princess animal sentences!',
          pairs: [
            { left: 'Il cavallo \u00E8 bianco', right: 'The horse is white' },
            { left: 'Il pesce nuota', right: 'The fish swims' },
            { left: 'Ho un cane grande', right: 'I have a big dog' },
            { left: 'Mi piace il gatto', right: 'I like the cat' }
          ]
        }
      ]
    }
  ]
};
