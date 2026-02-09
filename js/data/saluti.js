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
    // LESSON 2: Being Polite (vocabIndices 5-8)
    // =============================================
    {
      id: 'saluti-2',
      title: 'Being Polite',
      vocabIndices: [5, 6, 7, 8],
      exercises: [
        // 1 - Multiple choice: grazie
        {
          type: 'multiple-choice',
          prompt: 'Lincoln\'s sisters helped him with his homework! He wants to say "thank you." What is that in Italian?',
          correctAnswer: 'grazie',
          options: ['grazie', 'prego', 'scusa', 'ciao'],
          daisySays: 'This is one of the most important words to know!',
          speakWord: 'grazie'
        },
        // 2 - Listen-pick: per favore
        {
          type: 'listen-pick',
          prompt: 'Lola wants a cookie. Listen to what she says politely!',
          speakWord: 'per favore',
          correctAnswer: 'per favore',
          options: ['per favore', 'grazie', 'prego', 'scusa']
        },
        // 3 - Matching: polite words
        {
          type: 'matching',
          prompt: 'Match the polite Italian words to English!',
          pairs: [
            { left: 'per favore', right: 'please' },
            { left: 'grazie', right: 'thank you' },
            { left: 'prego', right: "you're welcome" },
            { left: 's\u00EC', right: 'yes' }
          ]
        },
        // 4 - Multiple choice: prego
        {
          type: 'multiple-choice',
          prompt: 'Leni helps Lincoln pick out an outfit. He says "Grazie!" What does Leni reply?',
          correctAnswer: 'prego',
          options: ['prego', 'grazie', 'per favore', 'ciao'],
          daisySays: 'When someone says thank you, you say this back!',
          speakWord: 'prego'
        },
        // 5 - Fill-blank: grazie
        {
          type: 'fill-blank',
          prompt: 'Luna gives Lincoln a guitar pick. What does he say?',
          correctAnswer: 'grazie',
          sentence: 'Lincoln smiles and says: "____!"',
          hint: 'It means "thank you" - starts with G!'
        },
        // 6 - Multiple choice: yes in Italian
        {
          type: 'multiple-choice',
          prompt: 'Dad asks: "Pizza for dinner?" All 11 kids shout... What is "yes" in Italian?',
          correctAnswer: 's\u00EC',
          options: ['s\u00EC', 'no', 'grazie', 'prego'],
          daisySays: 'The Loud House loves pizza night!',
          speakWord: 's\u00EC'
        },
        // 7 - Listen-pick: prego
        {
          type: 'listen-pick',
          prompt: 'Listen carefully! What word is this?',
          speakWord: 'prego',
          correctAnswer: 'prego',
          options: ['prego', 'per favore', 'grazie', 's\u00EC']
        },
        // 8 - Fill-blank: per favore
        {
          type: 'fill-blank',
          prompt: 'Lola really wants a cookie. She asks politely!',
          correctAnswer: 'per favore',
          sentence: 'Lola says: "Can I have a cookie, ____?"',
          hint: 'The magic word! It means "please" in Italian!'
        }
      ]
    },

    // =============================================
    // LESSON 3: Talking to People (vocabIndices 0-11 mixed)
    // =============================================
    {
      id: 'saluti-3',
      title: 'Talking to People',
      vocabIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      exercises: [
        // 1 - Multiple choice: come stai
        {
          type: 'multiple-choice',
          prompt: 'Clyde meets Lincoln at school. He wants to ask "how are you?" What does he say in Italian?',
          correctAnswer: 'come stai?',
          options: ['come stai?', 'ciao', 'grazie', 'scusa'],
          daisySays: 'This is how you check on your best friend!',
          speakWord: 'come stai'
        },
        // 2 - Listen-pick: scusa
        {
          type: 'listen-pick',
          prompt: 'Lincoln bumps into Lynn in the hallway! Listen to what he says!',
          speakWord: 'scusa',
          correctAnswer: 'scusa',
          options: ['scusa', 'grazie', 'ciao', 'prego']
        },
        // 3 - Matching: big review mix
        {
          type: 'matching',
          prompt: 'Match ALL these Italian words! You know them all!',
          pairs: [
            { left: 'scusa', right: 'sorry / excuse me' },
            { left: 'come stai?', right: 'how are you?' },
            { left: 'no', right: 'no' },
            { left: 'ciao', right: 'hello / bye' }
          ]
        },
        // 4 - Multiple choice: no
        {
          type: 'multiple-choice',
          prompt: 'Lincoln asks Lori: "Can I use your phone?" Lori says NO! What is "no" in Italian?',
          correctAnswer: 'no',
          options: ['no', 's\u00EC', 'scusa', 'prego'],
          daisySays: 'This one is easy - it sounds the same in English!',
          speakWord: 'no'
        },
        // 5 - Fill-blank: scusa
        {
          type: 'fill-blank',
          prompt: 'Lincoln accidentally steps on Lola\'s dress. What does he say?',
          correctAnswer: 'scusa',
          sentence: 'Lincoln says: "Oh! ____!"',
          hint: 'It means "sorry" - starts with S!'
        },
        // 6 - Listen-pick: come stai
        {
          type: 'listen-pick',
          prompt: 'Listen! What is this Italian question?',
          speakWord: 'come stai',
          correctAnswer: 'come stai?',
          options: ['come stai?', 'buongiorno', 'arrivederci', 'per favore']
        },
        // 7 - Matching: full review
        {
          type: 'matching',
          prompt: 'One more big match! You are a Loud House Italian superstar!',
          pairs: [
            { left: 'buongiorno', right: 'good morning' },
            { left: 'grazie', right: 'thank you' },
            { left: 'per favore', right: 'please' },
            { left: 'arrivederci', right: 'goodbye' }
          ]
        },
        // 8 - Fill-blank: come stai
        {
          type: 'fill-blank',
          prompt: 'Clyde sees Lincoln looking sad. He wants to ask how Lincoln is doing!',
          correctAnswer: 'come stai',
          sentence: 'Clyde asks: "Hey Lincoln, ____?"',
          hint: '"How are you?" in Italian - come means how!'
        }
      ]
    }
  ]
};
