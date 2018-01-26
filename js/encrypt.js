/*
 * Cifrado cesar
	Funcion que cifra mensaje según el algoritmo del cifrado cesar
*/
window.onload = () => {
  $('.modal').modal();
  let btncipher = document.getElementById('cipher');
  let phrase = document.getElementById('input_phrase').value;
  let inputphrase = document.getElementById('input_phrase');
  let phraseEncrypt = document.getElementById('encrypt');
  // Valida que frase no sea vacia, ni contenga números

  let validatePhrase = (iphrase = phrase) => {
    let numbers = '0123456789';
    let validatenumbers;
    let validatelength;

    for (i = 0; i < phrase.length; i++) {
      if ((numbers.indexOf(phrase[i]) !== -1)) {
        validatenumbers = false;
      }
    }
    if (phrase.length < 1) {
      validatelength = false;
    }
    if (validatenumbers === false || validatelength === false) {
      inputphrase.classList.add('invalid');
      return false;
    }
    inputphrase.classList.remove('invalid');
    inputphrase.classList.add('valid');
    return true;
  };

  let activeButton = () => {
    phrase = document.getElementById('input_phrase').value;
    if (validatePhrase()) {
      btncipher.removeAttribute('disabled');
    } else {
      desactiveButton();
    }
  };
  let desactiveButton = () => {
    btncipher.setAttribute('disabled', 'disabled');
  };
  let cipher = () => {
    let phraseArray = phrase.split('');
    let encryptedphraseArray = [];
    // Inicia ciclo para pasar letra por letra a encriptar

    for (let i = 0; i < phraseArray.length; i++) {
      let positionAscii = phraseArray[i].charCodeAt();
      if (positionAscii >= 65 && positionAscii <= 90) {
        let positionEncryptedLetter = ((positionAscii - 65 + 33) % 26 + 65);
        let encryptedLetter = String.fromCharCode(positionEncryptedLetter);
        encryptedphraseArray.push(encryptedLetter);
      } else if (positionAscii >= 97 && positionAscii <= 122) {
        let positionEncryptedLetter = (positionAscii - 97 + 33) % 26 + 97;
        let encryptedLetter = String.fromCharCode(positionEncryptedLetter);
        encryptedphraseArray.push(encryptedLetter);
      } else if (positionAscii === 32) {
        encryptedphraseArray.push(' ');
      }
    }
    phraseEncrypt.innerHTML = '';
    let textphrase = document.createTextNode(`: ${encryptedphraseArray.join('')}`);
    phraseEncrypt.appendChild(textphrase);
  };
  btncipher.addEventListener('click', cipher);
  inputphrase.addEventListener('keyup', activeButton);
};