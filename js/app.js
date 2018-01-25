/*
 * Cifrado cesar
	Funcion que cifra mensaje según el algoritmo del cifrado cesar
*/
let cipher = () => {
  // Valida que el usuario no ingrese un campo vacío o que contenga números	
  do {		
    let phrase = prompt('Ingrese la frase a encriptar (Solo letras)').toUpperCase();
  } while (phrase === '' || !validatePhrase(phrase));
  var phraseArray = phrase.split('');
  var encryptedPhrasephraseArray = [];
  // Inicia ciclo para pasar letra por letra a encriptar
	
  for (var i = 0; i < phraseArray.length; i++) {		
    var positionAscii = phraseArray[i].charCodeAt();
    var positionEncryptedLetter = ((positionAscii - 65 + 33) % 26 + 65);
    var encryptedLetter = String.fromCharCode(positionEncryptedLetter);
    encryptedPhrasephraseArray.push(encryptedLetter);
  }
  alert('La frase se encripto a ' + encryptedPhrasephraseArray.join(''));}

// Desencripta mensaje según algoritmo del cifrado cesar

let descipher = () => {

  do {
    var phrase = prompt('Ingrese la frase a desencriptar (Solo letras)').toUpperCase();
  } while (phrase === '' || !validatePhrase(phrase));// convertir la frase en un phraseArray
  var phraseArray = phrase.split('');
  var encryptedPhrasephraseArray = [];
  // inicia un ciclo para desencriptar cada letra del phraseArray
	
  for (var i = 0; i < phraseArray.length; i++) {
    // aplica los metodos para hallar la posicion y letra encriptada
		
    var positionAscii = phraseArray[i].charCodeAt();
    var positionEncryptedLetter = ((positionAscii - 13 - 33) % 26 + 65);
    var decrypt = String.fromCharCode(positionEncryptedLetter);
    encryptedPhrasephraseArray.push(decrypt);
  }
	
  var decrypt = alert('La frase desencriptada es ' + encryptedPhrasephraseArray.join(''));
}
// valida que la frase no tenga numeros

let validatePhrase = phrase => {
  var numbers = '0123456789';
  for (i = 0; i < phrase.length; i++) {
    if (numbers.indexOf(phrase[i]) !== -1) {
      return false;
    }
  }
  return true;
}
// Funcion que contiene la funcion a ejecutar si el usuario desea cifrar o descifrar una frase

let menu = option => {
  (option === 1) ? cipher() : (option === 2) ? descipher() : (option === 3) ? alert('HASTA PRONTO') : alert('No existe esa opcion');
} 
do {
  var strMenu = 'BIENVENIDO AL CIFRADO CESAR \n **Escriba 1 para cifrar una frase \n **Escriba 2 para descifrar una frase \n **Escriba 3 para salir';	
  var option = parseInt(prompt(strMenu));
	
  menu(option);
} while (option !== 3 && option !== NaN);
