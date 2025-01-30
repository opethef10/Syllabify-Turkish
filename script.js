const inputArea = document.getElementById('t1');
const outputArea = document.getElementById('t2');
const languageSelector = document.getElementById('language')

// Event listeners for input
function setupInputListeners() {
    inputArea.addEventListener('keyup', function () {
        outputArea.value = syllabifySentence(this.value);
    });
}

function setupLanguageChangeListener() {
    languageSelector.addEventListener('change', changeLanguage);
}

// Event listener for clear button
function setupClearButton() {
    const clearBtn = document.getElementById('clearBtn');

    clearBtn.addEventListener('click', function () {
        inputArea.value = '';
        outputArea.value = '';
    });
}

// In language.js or script.js
function getPreferredLanguage(fallback = 'en') {
    // Check both navigator.languages (for modern browsers) and navigator.language
    const languages = navigator.languages || [navigator.language || navigator.userLanguage];

    // Check for Turkish variants first
    const turkishVariants = ['tr', 'tr-TR', 'tr-CY'];
    for (const lang of languages) {
        if (turkishVariants.includes(lang.toLowerCase())) {
            return 'tr';
        }
    }

    // Fallback to English if no Turkish detected
    return fallback;
}

window.onload = function () {
    // Set language based on user preference
    languageSelector.value = getPreferredLanguage();
    changeLanguage();

    // Initialize event listeners
    setupInputListeners();
    setupClearButton();
    setupLanguageChangeListener();
};
