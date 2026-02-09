/* ============================================
   Hash-based SPA Router
   ============================================ */

window.Router = class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentScreen = null;

    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('popstate', () => this.resolve());
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const appEl = document.getElementById('app');
    const headerEl = document.getElementById('app-header');

    // Try to match routes
    for (const route of this.routes) {
      const match = this.matchRoute(route.path, hash);
      if (match) {
        // Show/hide header (hidden on home screen)
        if (headerEl) {
          headerEl.classList.toggle('hidden', hash === '/' || hash === '');
        }

        // Clear current screen
        appEl.innerHTML = '';
        this.currentScreen = route.path;

        // Call the handler with matched params
        route.handler(appEl, match.params);
        return;
      }
    }

    // Default: go to home
    this.navigate('/');
  }

  matchRoute(pattern, hash) {
    const patternParts = pattern.split('/');
    const hashParts = hash.split('/');

    if (patternParts.length !== hashParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        // Parameter
        params[patternParts[i].slice(1)] = decodeURIComponent(hashParts[i]);
      } else if (patternParts[i] !== hashParts[i]) {
        return null;
      }
    }

    return { params };
  }

  navigate(path) {
    window.location.hash = path;
  }
};
