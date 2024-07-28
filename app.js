function encriptarTexto() {
    var inputText = document.getElementById("input-text").value;
    var encryptedText = "";

    for (var i = 0; i < inputText.length; i++) {
        var char = inputText[i];
        switch (char) {
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'a':
                encryptedText += 'ai';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += char;
                break;
        }
    }

    document.getElementById("output-text").value = encryptedText;
}

function desencriptarTexto() {
    var encryptedText = document.getElementById("input-text").value;
    var decryptedText = encryptedText.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById("output-text").value = decryptedText;
}