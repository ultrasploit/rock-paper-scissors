const body = document.querySelector('body');
const themeModeButton = document.querySelector('.__theme_toggle');

function get_current_theme() {
    return localStorage.getItem('current-theme');

}

function setTheme(theme) {
    theme === 'dark' ? body.classList.add('__dark_mode') : body.classList.remove('__dark_mode');
    themeModeButton.setAttribute('current-theme', theme);
    localStorage.setItem('current-theme', theme);
}

setTheme(get_current_theme());

themeModeButton.addEventListener('click', (e) => {
    let current_theme = themeModeButton.getAttribute('current-theme');
    let theme;

    current_theme === 'dark' ? theme = 'light' : theme = 'dark';
    setTheme(theme);
});