function loadBanner() {
    fetch('banner.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initializeBanner();
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

// Load banner when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadBanner);