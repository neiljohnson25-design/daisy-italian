/* ============================================
   Daisy's Italian Adventure - App Entry Point
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialise global app object
  window.app = {
    state: new StateManager(),
    speech: new ItalianSpeech(),
    audio: new AudioManager(),
    daisy: null,
    router: null
  };

  // Update star counter in header
  function updateStarCounter() {
    const countEl = document.getElementById('star-count');
    if (countEl) {
      countEl.textContent = window.app.state.getTotalStars();
    }
  }

  // Set up header back button
  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.history.back();
    });
  }

  // Make updateStarCounter available globally
  window.app.updateStarCounter = updateStarCounter;

  // Define routes
  var routes = [
    { path: '/', handler: renderHomeScreen },
    { path: '/topics', handler: renderTopicsScreen },
    { path: '/lesson/:topicId/:lessonId', handler: renderLessonScreen },
    { path: '/exercise/:topicId/:lessonId', handler: renderExerciseScreen },
    { path: '/results/:topicId/:lessonId', handler: renderResultsScreen },
    { path: '/progress', handler: renderProgressScreen },
    { path: '/parent', handler: renderParentScreen },
    { path: '/say-to-mummy/:topicId', handler: renderSayToMummyScreen },
    { path: '/rewards', handler: renderRewardsScreen },
    { path: '/daily', handler: renderDailyScreen },
    { path: '/speed-round/:topicId', handler: renderSpeedRoundScreen }
  ];

  // Initialise router and resolve current route
  window.app.router = new Router(routes);
  window.app.router.resolve();

  // Update star counter
  updateStarCounter();
});
