const darkThemeButton = document.querySelector('.dark-Theme');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

darkThemeButton.addEventListener('click', function() {
  sidebar.classList.toggle('dark');
  mainContent.classList.toggle('dark');

  if (darkThemeButton.textContent === 'Dark Theme') {
    darkThemeButton.textContent = 'Light Theme';
    darkThemeButton.classList.add('light-Theme-button');
  } else {
    darkThemeButton.textContent = 'Dark Theme';
    darkThemeButton.classList.remove('light-Theme-button')
  }
});


const cancelButton = document.querySelector('.cancel-button');
const noteTextarea = document.querySelector('#note');
const saveButton = document.querySelector('.save-button');

cancelButton.addEventListener('click', function() {
    noteTextarea.classList.add('hidden');
    saveButton.classList.add('hidden');
    cancelButton.classList.add('hidden');
});


