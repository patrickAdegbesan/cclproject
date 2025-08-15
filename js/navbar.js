// navbar.js
// Responsive navbar toggle supporting two patterns:
// 1) Existing markup: <span class="menu">...</span> + .top-nav ul
// 2) Optional markup: .nav-toggle button + .nav-menu container
$(function () {
  function toggleMobileMenu() {
    $('.top-nav ul').toggleClass('show');
  }

  // Pattern 1: .menu element (with keyboard support)
  $(document).on('click', '.menu', function (e) {
    e.preventDefault();
    toggleMobileMenu();
  });
  $(document).on('keydown', '.menu', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  });

  // Close menu after link click on small screens
  $(document).on('click', '.top-nav ul a', function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.top-nav ul').removeClass('show');
    }
  });

  // Pattern 2: Optional .nav-toggle / .nav-menu support
  $(document).on('click', '.nav-toggle', function (e) {
    e.preventDefault();
    $('.nav-menu').toggleClass('active');
  });
});
