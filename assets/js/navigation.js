// Shared Navigation for Personal Finance Calculators

function initNavigation() {
  // Create navigation HTML
  const navHTML = `
    <nav id="global-nav" class="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white transform -translate-x-full transition-transform duration-300 ease-in-out z-50 shadow-2xl">
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold">Finance Tools</h2>
          <button id="close-nav" class="text-white hover:text-gray-300 text-2xl">&times;</button>
        </div>
        
        <ul class="space-y-4">
          <li>
            <a href="index.html" class="nav-link flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-all">
              <span class="text-2xl">🏠</span>
              <span class="font-medium">Budget Calculator</span>
            </a>
          </li>
          <li>
            <a href="student-loans.html" class="nav-link flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-all">
              <span class="text-2xl">🎓</span>
              <span class="font-medium">Student Loan Payoff</span>
            </a>
          </li>
          <li class="pt-4 border-t border-slate-700">
            <span class="text-xs text-gray-400 uppercase tracking-wider">Coming Soon</span>
          </li>
          <li>
            <div class="flex items-center gap-3 p-3 rounded-lg text-gray-500 cursor-not-allowed">
              <span class="text-2xl">📊</span>
              <span class="font-medium">Investment Calculator</span>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-3 p-3 rounded-lg text-gray-500 cursor-not-allowed">
              <span class="text-2xl">💰</span>
              <span class="font-medium">Retirement Planner</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div id="nav-overlay" class="fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>

    <button id="hamburger-btn" class="fixed top-4 left-4 z-30 bg-white rounded-lg shadow-lg p-3 hover:bg-gray-50 transition-all">
      <svg class="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  `;

  // Insert navigation at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Get elements
  const nav = document.getElementById('global-nav');
  const overlay = document.getElementById('nav-overlay');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-nav');

  // Open navigation
  function openNav() {
    nav.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }

  // Close navigation
  function closeNav() {
    nav.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }

  // Event listeners
  hamburgerBtn.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  // Highlight current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('bg-slate-700', 'border-l-4', 'border-blue-400');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}
