
// Drop down menu pour version mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropMenuButton = document.querySelector('.dropmenuimg');
    const dropdownMenu = document.querySelector('.dropdownmenu');
    
    dropMenuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!dropMenuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


    //Dark mode
        document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.getElementById('dark-mode-toggle');
            const body = document.body;
            const darkModeIcon = "images/darkmode.svg";
            const lightModeIcon = "images/lightmode.svg";
            const darkMode = "dark-mode";
        
            function updateButtonIcon() {
                const img = toggleButton.querySelector('img');
                if (body.classList.contains(darkMode)) {
                    img.src = lightModeIcon;
                    img.alt = "Mode clair";
                } else {
                    img.src = darkModeIcon;
                    img.alt = "Mode sombre";
                }
            }
        
            toggleButton.addEventListener('click', () => {
                body.classList.toggle(darkMode);
                if (body.classList.contains(darkMode)) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
                updateButtonIcon();
            });
        
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add(darkMode);
            }
            updateButtonIcon();
        });
        
        
        