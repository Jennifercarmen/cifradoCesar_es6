/*
 * Cifrado cesar
	Funcion que descifra mensaje según el algoritmo del cifrado cesar
*/
window.onload = () => {
  $('.modal').modal();
  let phrase = document.getElementById('input_phrase').value;
  let inputphrase = document.getElementById('input_phrase');
  let phraseEncrypt = document.getElementById('encrypt');
  let btndescipher = document.getElementById('descipher');
  // valida que la frase no tenga numeros
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
      btndescipher.removeAttribute('disabled');
    } else {
      desactiveButton();
    }
  };
  let desactiveButton = () => {
    btndescipher.setAttribute('disabled', 'disabled');
  };

  // Desencripta mensaje según algoritmo del cifrado cesar

  let descipher = () => {
    let phraseArray = phrase.split('');
    let descippherphraseArray = [];
    // inicia un ciclo para desencriptar cada letra del phraseArray

    for (let i = 0; i < phraseArray.length; i++) {
      // aplica los metodos para hallar la posicion y letra encriptada

      let positionAscii = phraseArray[i].charCodeAt();
      if (positionAscii >= 65 && positionAscii <= 90) {
        let positiondecryptLetter = ((positionAscii - 13 - 33) % 26 + 65);
        let decrypt = String.fromCharCode(positiondecryptLetter);
        descippherphraseArray.push(decrypt);
      } else if (positionAscii >= 97 && positionAscii <= 122) {
        let positiondecryptLetter = ((positionAscii - 45 - 33) % 26 + 97);
        let decrypt = String.fromCharCode(positiondecryptLetter);
        descippherphraseArray.push(decrypt);
      } else if (positionAscii === 32) {
        descippherphraseArray.push(' ');
      }
    }
    phraseEncrypt.innerHTML = '';
    let textphrase = document.createTextNode(`: ${descippherphraseArray.join('')}`);      
    phraseEncrypt.appendChild(textphrase); 
  };

  btndescipher.addEventListener('click', descipher);
  inputphrase.addEventListener('keyup', activeButton);
};