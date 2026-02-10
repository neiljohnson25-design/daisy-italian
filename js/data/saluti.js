/* ============================================
   Saluti (Greetings) - Loud House Theme
   Learn greetings and polite phrases in Italian!
   ============================================ */

window.SALUTI_DATA = {
  id: 'saluti',

  vocabulary: [
    // 0
    {
      italian: 'ciao',
      english: 'hello / bye',
      emoji: '\uD83D\uDC4B',
      hint: 'Lincoln says this to all 10 sisters every morning!'
    },
    // 1
    {
      italian: 'buongiorno',
      english: 'good morning',
      emoji: '\u2600\uFE0F',
      hint: 'What Mr. and Mrs. Loud say when everyone wakes up for breakfast chaos!'
    },
    // 2
    {
      italian: 'buonasera',
      english: 'good evening',
      emoji: '\uD83C\uDF06',
      hint: 'Lincoln says this when the whole family sits down for dinner together!'
    },
    // 3
    {
      italian: 'buonanotte',
      english: 'goodnight',
      emoji: '\uD83C\uDF19',
      hint: 'What the Loud kids whisper before bed - if they can ever stop talking!'
    },
    // 4
    {
      italian: 'arrivederci',
      english: 'goodbye',
      emoji: '\uD83D\uDC4B',
      hint: 'What Lincoln says when he leaves for school and waves to the whole house!'
    },
    // 5
    {
      italian: 'per favore',
      english: 'please',
      emoji: '\uD83D\uDE4F',
      hint: 'Lola always says this when she wants something fancy - pretty please!'
    },
    // 6
    {
      italian: 'grazie',
      english: 'thank you',
      emoji: '\uD83D\uDE0A',
      hint: 'What Lincoln says when his sisters help him with a plan!'
    },
    // 7
    {
      italian: 'prego',
      english: "you're welcome",
      emoji: '\uD83E\uDD17',
      hint: 'Leni always says this with a big smile when she helps someone!'
    },
    // 8
    {
      italian: 's\u00EC',
      english: 'yes',
      emoji: '\u2705',
      hint: 'What all 11 Loud kids shout when Dad says pizza for dinner!'
    },
    // 9
    {
      italian: 'no',
      english: 'no',
      emoji: '\u274C',
      hint: 'What Lori says when Lincoln tries to use her phone!'
    },
    // 10
    {
      italian: 'scusa',
      english: 'sorry / excuse me',
      emoji: '\uD83D\uDE05',
      hint: 'Lincoln says this A LOT when he bumps into his sisters in the hallway!'
    },
    // 11
    {
      italian: 'come stai?',
      english: 'how are you?',
      emoji: '\uD83E\uDD14',
      hint: 'What Clyde always asks Lincoln when they meet up to hang out!'
    }
  ],

  /* ------------------------------------------
     Phrases (for L2 and L3 progression)
     ------------------------------------------ */
  phrases: [
    // L2 - Short greeting phrases
    // 0
    { italian: 'Ciao, come stai?', english: 'Hi, how are you?', emoji: '\uD83D\uDC4B\uD83E\uDD14', hint: 'Lincoln bumps into Clyde at school and says this!' },
    // 1
    { italian: 'S\u00EC, per favore', english: 'Yes, please', emoji: '\u2705\uD83D\uDE4F', hint: 'What Lola says when Dad offers her a cookie!' },
    // 2
    { italian: 'No, grazie', english: 'No, thank you', emoji: '\u274C\uD83D\uDE0A', hint: 'Lori politely turns down Lincoln\'s offer to help!' },
    // 3
    { italian: 'Grazie mille', english: 'Thanks a lot', emoji: '\uD83D\uDE0A\u2764\uFE0F', hint: 'Lincoln is SO grateful when all his sisters help him!' },
    // 4
    { italian: 'Buongiorno, Mamma!', english: 'Good morning, Mum!', emoji: '\u2600\uFE0F\uD83D\uDC69', hint: 'What the Loud kids say when Mum comes downstairs!' },

    // L3 - Full greeting sentences
    // 5
    { italian: 'Buongiorno, come stai?', english: 'Good morning, how are you?', emoji: '\u2600\uFE0F\uD83E\uDD14', hint: 'Clyde greets Lincoln at school every morning like this!' },
    // 6
    { italian: 'Sto bene, grazie!', english: 'I\'m fine, thank you!', emoji: '\uD83D\uDE0A\uD83D\uDC4D', hint: 'Lincoln always replies this way to Clyde!' },
    // 7
    { italian: 'Scusa, per favore', english: 'Excuse me, please', emoji: '\uD83D\uDE05\uD83D\uDE4F', hint: 'Lincoln squeezes past his sisters in the crowded hallway!' },
    // 8
    { italian: 'Ciao e arrivederci!', english: 'Hello and goodbye!', emoji: '\uD83D\uDC4B\uD83D\uDC4B', hint: 'Lincoln rushes in, grabs his comic, and rushes out again!' },
    // 9
    { italian: 'Come stai oggi?', english: 'How are you today?', emoji: '\uD83E\uDD14\u2600\uFE0F', hint: 'Clyde always adds "today" when he checks on Lincoln!' }
  ],

  /* ------------------------------------------
     Lessons
     ------------------------------------------ */
  lessons: [
    // =============================================
    // LESSON 1: Hello & Goodbye (vocabIndices 0-4)
    // =============================================
    {
      id: 'saluti-1',
      title: 'Hello & Goodbye',
      vocabIndices: [0, 1, 2, 3, 4],
      exercises: [
        // 1 - Multiple choice: ciao
        {
          type: 'multiple-choice',
          prompt: 'Lincoln waves to his sisters and says hello! What is "hello" in Italian?',
          correctAnswer: 'ciao',
          options: ['ciao', 'grazie', 'scusa', 'prego'],
          daisySays: 'This is the most famous Italian word ever!',
          speakWord: 'ciao'
        },
        // 2 - Listen-pick: buongiorno
        {
          type: 'listen-pick',
          prompt: 'Listen! What word do you hear?',
          speakWord: 'buongiorno',
          correctAnswer: 'buongiorno',
          options: ['buongiorno', 'buonanotte', 'buonasera', 'arrivederci']
        },
        // 3 - Matching: hello & goodbye words
        {
          type: 'matching',
          prompt: 'Match the Italian greetings to their English meanings!',
          pairs: [
            { left: 'ciao', right: 'hello / bye' },
            { left: 'buongiorno', right: 'good morning' },
            { left: 'buonanotte', right: 'goodnight' },
            { left: 'arrivederci', right: 'goodbye' }
          ]
        },
        // 4 - Multiple choice: buonanotte
        {
          type: 'multiple-choice',
          prompt: 'The Loud kids are going to bed. What do they say? What is "goodnight" in Italian?',
          correctAnswer: 'buonanotte',
          options: ['buonanotte', 'buongiorno', 'ciao', 'buonasera'],
          daisySays: 'Think about nighttime... notte means night!',
          speakWord: 'buonanotte'
        },
        // 5 - Fill-blank: arrivederci
        {
          type: 'fill-blank',
          prompt: 'Lincoln is leaving for school. Fill in the blank!',
          correctAnswer: 'arrivederci',
          sentence: 'Lincoln waves and says: "____!"',
          hint: 'It means "goodbye" - starts with A!'
        },
        // 6 - Listen-pick: buonasera
        {
          type: 'listen-pick',
          prompt: 'The Louds sit down for dinner. Listen - what does Lincoln say?',
          speakWord: 'buonasera',
          correctAnswer: 'buonasera',
          options: ['buonasera', 'buongiorno', 'buonanotte', 'ciao']
        },
        // 7 - Multiple choice: ciao also means bye
        {
          type: 'multiple-choice',
          prompt: 'Fun fact! "Ciao" can mean BOTH hello AND goodbye! What does "ciao" mean?',
          correctAnswer: 'hello / bye',
          options: ['hello / bye', 'good morning', 'goodnight', 'please'],
          daisySays: 'Ciao is super special - it works for coming AND going!',
          speakWord: 'ciao'
        },
        // 8 - Fill-blank: buongiorno
        {
          type: 'fill-blank',
          prompt: 'The sun is up and everyone is waking up! Fill in the greeting!',
          correctAnswer: 'buongiorno',
          sentence: 'Dad says: "____! Time for breakfast!"',
          hint: '"Good morning" - buon means good, giorno means day!'
        }
      ]
    },

    // =============================================
    // LESSON 2: Greeting Phrases (vocabIndices 5-8)
    // =============================================
    {
      id: 'saluti-2',
      title: 'Greeting Phrases',
      vocabIndices: [5, 6, 7, 8],
      phraseIndices: [0, 1, 2, 3, 4],
      exercises: [
        // 1 - Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'Lincoln sees Clyde at school and says "Ciao, come stai?" What does that mean?',
          correctAnswer: 'Hi, how are you?',
          options: ['Hi, how are you?', 'Good morning, Mum!', 'No, thank you', 'Yes, please'],
          daisySays: 'This is how best friends greet each other!',
          speakWord: 'Ciao, come stai'
        },
        // 2 - Multiple choice: phrase translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "Good morning, Mum!" in Italian?',
          correctAnswer: 'Buongiorno, Mamma!',
          options: ['Buongiorno, Mamma!', 'Ciao, come stai?', 'Grazie mille', 'No, grazie'],
          daisySays: 'All the Loud kids say this when Mum comes downstairs!',
          speakWord: 'Buongiorno, Mamma'
        },
        // 3 - Listen-pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'Lori does NOT want Lincoln\'s help! Listen - what does she say?',
          speakWord: 'No, grazie',
          correctAnswer: 'No, grazie',
          options: ['No, grazie', 'S\u00EC, per favore', 'Ciao, come stai?', 'Grazie mille']
        },
        // 4 - Listen-pick: hear a phrase
        {
          type: 'listen-pick',
          prompt: 'Dad offers Lola a cookie. Listen to what she says!',
          speakWord: 'S\u00EC, per favore',
          correctAnswer: 'S\u00EC, per favore',
          options: ['S\u00EC, per favore', 'No, grazie', 'Grazie mille', 'Buongiorno, Mamma!']
        },
        // 5 - Translate to Italian: grazie
        {
          type: 'translate-to-italian',
          prompt: 'How do you say this in Italian?',
          english: 'thank you',
          correctAnswer: 'grazie',
          options: ['grazie', 'prego', 'scusa', 'ciao'],
          _trackedWord: 'grazie'
        },
        // 6 - Fill-blank: single word missing from a phrase
        {
          type: 'fill-blank',
          prompt: 'Lincoln is SO grateful for his sisters\' help. Fill in the missing word!',
          correctAnswer: 'mille',
          sentence: 'Lincoln says: "Grazie ____!"',
          hint: 'It means "a lot" or "a thousand" - starts with M!'
        },
        // 7 - Say it: buongiorno
        {
          type: 'say-it',
          prompt: 'Can you say this word?',
          italian: 'buongiorno',
          correctAnswer: 'buongiorno',
          daisySays: 'Say good morning like the Loud House kids!'
        },
        // 8 - Fill-blank: single word missing from a phrase
        {
          type: 'fill-blank',
          prompt: 'The Loud kids greet Mum in the morning. Fill in the missing word!',
          correctAnswer: 'Buongiorno',
          sentence: '____, Mamma!',
          hint: 'It means "good morning" - starts with B!'
        },
        // 7 - Matching: Italian phrases to English
        {
          type: 'matching',
          prompt: 'Match these Loud House greeting phrases!',
          pairs: [
            { left: 'Ciao, come stai?', right: 'Hi, how are you?' },
            { left: 'S\u00EC, per favore', right: 'Yes, please' },
            { left: 'No, grazie', right: 'No, thank you' },
            { left: 'Grazie mille', right: 'Thanks a lot' }
          ]
        },
        // 8 - Matching: more phrase pairs
        {
          type: 'matching',
          prompt: 'Match the rest of the greeting phrases! You\'re doing great!',
          pairs: [
            { left: 'Buongiorno, Mamma!', right: 'Good morning, Mum!' },
            { left: 'per favore', right: 'please' },
            { left: 'grazie', right: 'thank you' },
            { left: 's\u00EC', right: 'yes' }
          ]
        }
      ]
    },

    // =============================================
    // LESSON 3: Greeting Sentences! (vocabIndices 0-11 mixed)
    // =============================================
    {
      id: 'saluti-3',
      title: 'Greeting Sentences!',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      phraseIndices: [5, 6, 7, 8, 9],
      exercises: [
        // 1 - Conversation order: Lincoln & Clyde greeting sequence
        {
          type: 'conversation-order',
          prompt: 'Put Lincoln and Clyde\'s morning greeting in order!',
          scenario: 'Lincoln and Clyde meet at school and have a chat!',
          correctOrder: [
            'Ciao!',
            'Buongiorno, come stai?',
            'Sto bene, grazie!',
            'Come stai oggi?',
            'Bene! Arrivederci!'
          ]
        },
        // 2 - Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'Clyde says "Buongiorno, come stai?" to Lincoln. What does it mean?',
          correctAnswer: 'Good morning, how are you?',
          options: ['Good morning, how are you?', 'Hello and goodbye!', 'I\'m fine, thank you!', 'How are you today?'],
          daisySays: 'Clyde always greets Lincoln like this at school!',
          speakWord: 'Buongiorno, come stai'
        },
        // 3 - Multiple choice: sentence translation
        {
          type: 'multiple-choice',
          prompt: 'How do you say "I\'m fine, thank you!" in Italian?',
          correctAnswer: 'Sto bene, grazie!',
          options: ['Sto bene, grazie!', 'Scusa, per favore', 'Ciao e arrivederci!', 'Come stai oggi?'],
          daisySays: 'Lincoln always replies this way when Clyde asks how he is!',
          speakWord: 'Sto bene, grazie'
        },
        // 4 - Listen-comprehend: understanding greeting response
        {
          type: 'listen-comprehend',
          sentence: 'Sto bene, grazie!',
          question: 'How is the speaker feeling?',
          correctAnswer: 'Fine',
          options: ['Fine', 'Hungry', 'Tired', 'Sad'],
          daisySays: 'Listen to how they answer!'
        },
        // 5 - Listen-pick: hear a sentence
        {
          type: 'listen-pick',
          prompt: 'Lincoln squeezes past his sisters in the hallway! Listen to what he says!',
          speakWord: 'Scusa, per favore',
          correctAnswer: 'Scusa, per favore',
          options: ['Scusa, per favore', 'Sto bene, grazie!', 'Come stai oggi?', 'Ciao e arrivederci!']
        },
        // 6 - Sentence-build: building "I'm fine, thank you"
        {
          type: 'sentence-build',
          prompt: 'Build: "I\'m fine, thank you"',
          correctOrder: ['Sto', 'bene', 'grazie'],
          hint: 'I\'m fine, thank you',
          daisySays: 'Put these greeting words in order!'
        },
        // 7 - Fill-blank: single word in sentence context
        {
          type: 'fill-blank',
          prompt: 'Lincoln replies to Clyde\'s greeting. Fill in the missing word!',
          correctAnswer: 'bene',
          sentence: 'Sto ____, grazie!',
          hint: 'It means "fine" or "well" - starts with B!'
        },
        // 6 - Fill-blank: single word in sentence context
        {
          type: 'fill-blank',
          prompt: 'Clyde wants to know how Lincoln is TODAY. Fill in the missing word!',
          correctAnswer: 'oggi',
          sentence: 'Come stai ____?',
          hint: 'It means "today" - starts with O!'
        },
        // 7 - Matching: sentence pairs
        {
          type: 'matching',
          prompt: 'Match these Italian sentences to their English meanings!',
          pairs: [
            { left: 'Buongiorno, come stai?', right: 'Good morning, how are you?' },
            { left: 'Sto bene, grazie!', right: 'I\'m fine, thank you!' },
            { left: 'Scusa, per favore', right: 'Excuse me, please' },
            { left: 'Come stai oggi?', right: 'How are you today?' }
          ]
        },
        // 8 - Matching: more sentence pairs + review
        {
          type: 'matching',
          prompt: 'Final match! You are a Loud House Italian superstar!',
          pairs: [
            { left: 'Ciao e arrivederci!', right: 'Hello and goodbye!' },
            { left: 'scusa', right: 'sorry / excuse me' },
            { left: 'come stai?', right: 'how are you?' },
            { left: 'arrivederci', right: 'goodbye' }
          ]
        }
      ]
    }
  ]
};
