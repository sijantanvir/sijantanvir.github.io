// Set default theme to light if no user preference exists
(function() {
  if (!localStorage.getItem('day_night')) {
    localStorage.setItem('day_night', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();