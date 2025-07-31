// Detectar tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('modo');
    const btn = document.getElementById('darkModeBtn');

    if (temaGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
        if (btn) btn.textContent = '☀️ Modo Claro';
    } else {
        if (btn) btn.textContent = '🌙 Modo Oscuro';
    }
});

// Alternar entre modo claro y oscuro
function toggleDarkMode() {
    const btn = document.getElementById('darkModeBtn');
    const esOscuro = document.body.classList.toggle('dark-mode');

    if (esOscuro) {
        localStorage.setItem('modo', 'oscuro');
        if (btn) btn.textContent = '☀️ Modo Claro';
    } else {
        localStorage.setItem('modo', 'claro');
        if (btn) btn.textContent = '🌙 Modo Oscuro';
    }
}
