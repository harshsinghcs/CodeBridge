function translateCode() {
    const inputCode = document.getElementById('inputCode').value;
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    // Replace 'YOUR_TRANSLATION_API_KEY' with the provided API key
    const apiKey = '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';

    // Make API request to translate the code
    fetch(`https://api.codingtranslator.com/v1/translate?api_key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&code=${encodeURIComponent(inputCode)}`)
        .then(response => response.json())
        .then(data => {
            const outputCode = document.getElementById('outputCode');
            outputCode.value = data.translated_code;
        })
        .catch(error => console.error('Error:', error));
}
