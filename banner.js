function loadBanner() {
    fetch('banner.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initializeBanner();
            applyThemeFromURL();
            updateLinks();
        })
        .catch(error => console.error('Error loading banner:', error));
}

function initializeBanner() {
    const toggleBanner = document.getElementById('toggleBanner');
    const bannerContainer = document.getElementById('bannerContainer');
    console.log("Banner script loaded!");

    if (toggleBanner && bannerContainer) {
        toggleBanner.addEventListener('click', function() {
            bannerContainer.classList.toggle('hidden');
            console.log("Banner toggled!");
        });
    } else {
        console.error("Banner elements not found!");
    }
}

function setTheme(theme) {
    document.body.className = theme + '-theme';
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('t', theme);
    window.history.pushState({}, '', newUrl);
    updateLinks();
}

function applyThemeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('t');
    if (theme) {
        setTheme(theme);
    }
}

function updateLinks() {
    const currentTheme = new URLSearchParams(window.location.search).get('t');
    if (!currentTheme) return;

    const links = [
        { id: 'homeLink', path: 'index.html' },
        { id: 'tempoClickerLink', path: 'tempo_clicker.html' }
    ];

    links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            const url = new URL(link.path, window.location.origin);
            url.searchParams.set('t', currentTheme);
            element.href = url.toString();
        }
    });
}

// Load banner when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadBanner);