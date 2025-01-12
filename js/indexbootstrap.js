
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Check and apply stored theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.className = savedTheme;
    themeIcon.className = savedTheme === 'light-theme' ? 'bi bi-moon-stars' : 'bi bi-sun';

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.className = 'dark-theme';
            themeIcon.className = 'bi bi-sun'; // Change to sun icon
            localStorage.setItem('theme', 'dark-theme'); // Save theme preference
        } else {
            body.className = 'light-theme';
            themeIcon.className = 'bi bi-moon-stars'; // Change to moon icon
            localStorage.setItem('theme', 'light-theme'); // Save theme preference
        }
    });


    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    sidebarCollapse.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Sidebar'a "active" sınıfını ekle veya kaldır
    });

});    