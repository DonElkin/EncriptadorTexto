function encryptText() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('resultText').value = encryptedText;
}

function decryptText() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedText = caesarCipher(text, -shift);
    document.getElementById('resultText').value = decryptedText;
}

function caesarCipher(text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    shift = shift % 26;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();
        
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char);
            index = (index + shift + 26) % 26;  // +26 to ensure positive index
            char = alphabet[index];
            if (isUpperCase) char = char.toUpperCase();
        }

        result += char;
    }

    return result;
}
