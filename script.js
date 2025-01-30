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

// Initial setup
window.onload = function () {
    // Set default language
    languageSelector.value = 'en';
    changeLanguage();

    // Initialize event listeners
    setupInputListeners();
    setupClearButton();
    setupLanguageChangeListener();
};
