// Language translations
const translations = {
    en: {
        title: 'Syllabify Turkish',
        languageLabel: 'Language:',
        sentenceLabel: 'SENTENCE:',
        syllabifiedLabel: 'SYLLABIFIED:',
        clearBtn: 'Clear',
        sentencePlaceholder: 'Please enter a sentence'
    },
    tr: {
        title: 'Türkçe Heceleme',
        languageLabel: 'Dil:',
        sentenceLabel: 'CÜMLE:',
        syllabifiedLabel: 'HECELENMİŞ:',
        clearBtn: 'Temizle',
        sentencePlaceholder: 'Lütfen bir cümle yazınız'
    }
};

// Function to change language
function changeLanguage() {
    const language = document.getElementById('language').value;
    const translation = translations[language];

    // Update title
    document.querySelector('h1').textContent = translation.title;

    // Update language label
    document.querySelector('#language').placeholder = translation.languageLabel;

    // Update labels
    document.getElementById('sentenceLabel').textContent = translation.sentenceLabel;
    document.getElementById('syllabifiedLabel').textContent = translation.syllabifiedLabel;

    // Update button text
    document.getElementById('clearBtn').value = translation.clearBtn;

    // Update placeholders
    document.getElementById('t1').placeholder = translation.sentencePlaceholder;
}

// Function to clear inputs
function clearInputs() {
    document.getElementById('t1').value = '';
    document.getElementById('t2').value = '';
}

// Initial language setup
window.onload = function () {
    // Set default language
    document.getElementById('language').value = 'en';
    changeLanguage();
};
