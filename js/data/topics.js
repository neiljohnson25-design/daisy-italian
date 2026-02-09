/* ============================================
   Topic Definitions
   ============================================ */

window.TOPICS = [
  {
    id: 'colori',
    titleIT: 'Colori',
    titleEN: 'Colours',
    icon: '🎨',
    theme: 'kpop-demon-hunters',
    themeColor: '#FF2D95',
    description: 'Learn the colours in Italian!',
    daisySays: 'The K-Pop Demon Hunters use colourful powers! Let\'s learn them!'
  },
  {
    id: 'saluti',
    titleIT: 'Saluti',
    titleEN: 'Greetings',
    icon: '👋',
    theme: 'loud-house',
    themeColor: '#FF6B35',
    description: 'Say hello and be polite in Italian!',
    daisySays: 'In the Loud House, everyone is always saying hello! Let\'s learn how in Italian!'
  },
  {
    id: 'animali',
    titleIT: 'Animali',
    titleEN: 'Animals',
    icon: '🐱',
    theme: 'disney-princesses',
    themeColor: '#FF69B4',
    description: 'Learn animal names in Italian!',
    daisySays: 'Every Disney princess has an animal friend! Let\'s learn their names in Italian!'
  },
  {
    id: 'cibo',
    titleIT: 'Cibo',
    titleEN: 'Food',
    icon: '🍕',
    theme: 'sam-and-cat',
    themeColor: '#E91E8C',
    description: 'Learn food words in Italian!',
    daisySays: 'Sam and Cat love food! Let\'s learn yummy Italian food words!'
  },
  {
    id: 'famiglia',
    titleIT: 'Famiglia',
    titleEN: 'Family',
    icon: '👨‍👩‍👧',
    theme: 'loud-house',
    themeColor: '#4ECDC4',
    description: 'Learn family words in Italian!',
    daisySays: 'The Loud House has the biggest family! Let\'s learn family words in Italian!'
  },
  {
    id: 'numeri',
    titleIT: 'Numeri',
    titleEN: 'Numbers',
    icon: '🔢',
    theme: 'kpop-demon-hunters',
    themeColor: '#7C3AED',
    description: 'Count to 20 and do maths in Italian!',
    daisySays: 'The demon hunters count their missions! Let\'s count in Italian!'
  },
  {
    id: 'giorni-mesi',
    titleIT: 'Giorni e Mesi',
    titleEN: 'Days & Months',
    icon: '📅',
    theme: 'disney-princesses',
    themeColor: '#87CEEB',
    description: 'Learn days and months in Italian!',
    daisySays: 'Every princess story has a special day! Let\'s learn the days and months!'
  },
  {
    id: 'corpo',
    titleIT: 'Corpo',
    titleEN: 'Body',
    icon: '🤸',
    theme: 'kpop-demon-hunters',
    themeColor: '#00F5FF',
    description: 'Learn body parts in Italian!',
    daisySays: 'Time for demon hunter training! Let\'s learn body parts in Italian!'
  },
  {
    id: 'conversazioni',
    titleIT: 'Conversazioni',
    titleEN: 'Talking',
    icon: '💬',
    theme: 'sam-and-cat',
    themeColor: '#FFC93C',
    description: 'Learn to talk with your Italian family!',
    daisySays: 'Sam and Cat are always chatting! Let\'s learn to talk in Italian!'
  }
];

// Helper to find a topic by ID
window.getTopicById = function(id) {
  return window.TOPICS.find(function(t) { return t.id === id; }) || null;
};
