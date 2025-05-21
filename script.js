document.querySelector('.menu-toggle').addEventListener('click', () => {
  const menu = document.querySelector('.mobile-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('increase-font').addEventListener('click', () => {
  document.body.style.fontSize = '18px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
  document.body.style.fontSize = '14px';
});
