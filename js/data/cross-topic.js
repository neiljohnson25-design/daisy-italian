/* ============================================
   Cross-Topic Exercise Templates
   Combines vocabulary from different completed topics
   ============================================ */

window.CROSS_TOPIC_TEMPLATES = [
  {
    requires: ['colori', 'animali'],
    phrases: [
      { italian: 'il gatto nero', english: 'the black cat', emoji: '🐱' },
      { italian: 'il cane bianco', english: 'the white dog', emoji: '🐕' },
      { italian: 'il cavallo marrone', english: 'the brown horse', emoji: '🐴' },
      { italian: 'l\'uccello blu', english: 'the blue bird', emoji: '🐦' },
      { italian: 'il pesce rosso', english: 'the red fish', emoji: '🐠' },
      { italian: 'la farfalla gialla', english: 'the yellow butterfly', emoji: '🦋' }
    ]
  },
  {
    requires: ['colori', 'cibo'],
    phrases: [
      { italian: 'la mela rossa', english: 'the red apple', emoji: '🍎' },
      { italian: 'la banana gialla', english: 'the yellow banana', emoji: '🍌' },
      { italian: 'il gelato rosa', english: 'the pink ice cream', emoji: '🍦' },
      { italian: 'la pizza arancione', english: 'the orange pizza', emoji: '🍕' },
      { italian: 'l\'uva viola', english: 'the purple grape', emoji: '🍇' }
    ]
  },
  {
    requires: ['numeri', 'animali'],
    phrases: [
      { italian: 'tre gatti', english: 'three cats', emoji: '🐱' },
      { italian: 'due cani', english: 'two dogs', emoji: '🐕' },
      { italian: 'cinque pesci', english: 'five fish', emoji: '🐠' },
      { italian: 'quattro uccelli', english: 'four birds', emoji: '🐦' }
    ]
  },
  {
    requires: ['numeri', 'cibo'],
    phrases: [
      { italian: 'due pizze', english: 'two pizzas', emoji: '🍕' },
      { italian: 'tre gelati', english: 'three ice creams', emoji: '🍦' },
      { italian: 'cinque mele', english: 'five apples', emoji: '🍎' },
      { italian: 'quattro biscotti', english: 'four biscuits', emoji: '🍪' }
    ]
  },
  {
    requires: ['famiglia', 'cibo'],
    phrases: [
      { italian: 'la mamma cucina', english: 'mum cooks', emoji: '👩‍🍳' },
      { italian: 'il papà mangia', english: 'dad eats', emoji: '🍽️' },
      { italian: 'la nonna fa il dolce', english: 'grandma makes cake', emoji: '🎂' },
      { italian: 'il nonno beve il caffè', english: 'grandpa drinks coffee', emoji: '☕' }
    ]
  },
  {
    requires: ['corpo', 'colori'],
    phrases: [
      { italian: 'gli occhi blu', english: 'blue eyes', emoji: '👀' },
      { italian: 'i capelli neri', english: 'black hair', emoji: '💇' },
      { italian: 'le mani rosse', english: 'red hands', emoji: '🤚' },
      { italian: 'il naso rosa', english: 'pink nose', emoji: '👃' }
    ]
  },
  {
    requires: ['saluti', 'famiglia'],
    phrases: [
      { italian: 'buongiorno mamma', english: 'good morning mum', emoji: '👋' },
      { italian: 'buonanotte papà', english: 'goodnight dad', emoji: '🌙' },
      { italian: 'ciao nonna', english: 'hi grandma', emoji: '😊' },
      { italian: 'arrivederci nonno', english: 'goodbye grandpa', emoji: '👋' }
    ]
  },

  // ---- Advanced Cross-Topic Templates ----

  {
    requires: ['vestiti', 'stagioni'],
    phrases: [
      { italian: 'il cappello per il sole', english: 'the hat for the sun', emoji: '🎩' },
      { italian: 'la giacca per l\'inverno', english: 'the jacket for winter', emoji: '🧥' },
      { italian: 'il costume per l\'estate', english: 'the swimsuit for summer', emoji: '👙' },
      { italian: 'la sciarpa per il freddo', english: 'the scarf for the cold', emoji: '🧣' },
      { italian: 'i guanti per la neve', english: 'the gloves for the snow', emoji: '🧤' }
    ]
  },
  {
    requires: ['emozioni', 'famiglia'],
    phrases: [
      { italian: 'la mamma è felice', english: 'mum is happy', emoji: '😊' },
      { italian: 'il papà è stanco', english: 'dad is tired', emoji: '😴' },
      { italian: 'la nonna è gentile', english: 'grandma is kind', emoji: '🥰' },
      { italian: 'il fratello è arrabbiato', english: 'the brother is angry', emoji: '😠' },
      { italian: 'la sorella è contenta', english: 'the sister is pleased', emoji: '😄' }
    ]
  },
  {
    requires: ['verbi', 'cibo'],
    phrases: [
      { italian: 'mangiare la pizza', english: 'to eat the pizza', emoji: '🍕' },
      { italian: 'bere il latte', english: 'to drink the milk', emoji: '🥛' },
      { italian: 'voglio il gelato', english: 'I want the ice cream', emoji: '🍦' },
      { italian: 'mi piace il cioccolato', english: 'I like chocolate', emoji: '🍫' },
      { italian: 'mangiare la mela', english: 'to eat the apple', emoji: '🍎' }
    ]
  },
  {
    requires: ['trasporti', 'colori'],
    phrases: [
      { italian: 'la macchina rossa', english: 'the red car', emoji: '🚗' },
      { italian: 'l\'autobus giallo', english: 'the yellow bus', emoji: '🚌' },
      { italian: 'la bicicletta verde', english: 'the green bicycle', emoji: '🚲' },
      { italian: 'il treno blu', english: 'the blue train', emoji: '🚂' },
      { italian: 'il razzo arancione', english: 'the orange rocket', emoji: '🚀' }
    ]
  },
  {
    requires: ['a-scuola', 'emozioni'],
    phrases: [
      { italian: 'sono felice a scuola', english: 'I am happy at school', emoji: '😊' },
      { italian: 'la maestra è gentile', english: 'the teacher is kind', emoji: '🥰' },
      { italian: 'il mio amico è contento', english: 'my friend is pleased', emoji: '😄' },
      { italian: 'sono eccitato per la scuola', english: 'I am excited for school', emoji: '🤩' },
      { italian: 'sono stanco dopo la scuola', english: 'I am tired after school', emoji: '😴' }
    ]
  },
  {
    requires: ['allo-zoo', 'numeri'],
    phrases: [
      { italian: 'due giraffe', english: 'two giraffes', emoji: '🦒' },
      { italian: 'tre pinguini', english: 'three penguins', emoji: '🐧' },
      { italian: 'cinque scimmie', english: 'five monkeys', emoji: '🐒' },
      { italian: 'quattro delfini', english: 'four dolphins', emoji: '🐬' },
      { italian: 'sei tartarughe', english: 'six turtles', emoji: '🐢' }
    ]
  }
];
