const playlists = {};  // Object to hold playlists

function switchTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    for (const content of contents) {
        content.classList.remove('active');
    }
    const activeTab = document.getElementById(`${tabName}-tab`);
    activeTab.classList.add('active');


}


let currentTabIndex = 0; // Assuming you have a global variable to keep track of the current tab

function nextTab() {
    currentTabIndex++;
    if (currentTabIndex > 10) { // Reset to the first tab if we've gone past the last one
        currentTabIndex = 0;
    }
    switchTabByIndex(currentTabIndex);
}

function prevTab() {
    currentTabIndex--;
    if (currentTabIndex < 0) { // Loop back to the last tab if we've gone past the first one
        currentTabIndex = 10;
    }
    switchTabByIndex(currentTabIndex);
}

// Extend the existing switchTab function to accept an index
function switchTabByIndex(tabIndex) {
    const tabs = ['nowplaying', 'radio', 'songs', 'liked', 'podcasts', 'artists', 'cable', 'updates', 'games', 'media', 'account'];
    const tabIndicator = document.getElementById('tab-indicator');
    if (tabIndex >= 0 && tabIndex < tabs.length) {
        switchTab(tabs[tabIndex]);
        // Update the tab indicator text
        tabIndicator.textContent = tabs[tabIndex].charAt(0).toUpperCase() + tabs[tabIndex].slice(1); // Capitalize the first letter
    }
}

