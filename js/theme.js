// Use requestIdleCallback for non-critical operations
const initTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        console.error('Error: No se encontró el elemento con ID "theme-toggle"');
        return;
    }

    // Función para aplicar el tema
    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.classList.toggle('dark-mode', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Verificar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Verificar tema guardado
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    // Aplicar tema inicial
    applyTheme(shouldBeDark);

    // Escuchar clicks en el botón
    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        applyTheme(isDark);
    });

    // Hacer visible el botón
    themeToggle.style.visibility = 'visible';
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
} 