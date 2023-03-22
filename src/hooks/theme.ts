const htmlEl = document.documentElement;
const buttonEl = document.getElementById('btn');

buttonEl?.addEventListener('click', () => {
   const currentTheme = htmlEl.getAttribute('data-theme');
   const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

   htmlEl.setAttribute('data-theme', nextTheme);
});
