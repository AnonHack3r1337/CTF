const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

// Check if the user has previously set the dark mode
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}

// Save the user's preference for the dark mode
const saveDarkModePreference = () => {
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
};

window.addEventListener('beforeunload', saveDarkModePreference);
