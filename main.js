/*
Roadmap:
1) Definisco una variabile firstName e associo il nome(testo) ottenuto tramite prompt
2) Definisco una variabile lastName e associo il cognome(testo) ottenuto tramite prompt
3) Definisco una variabile favouriteColor e associo il colore(testo) ottenuto tramite prompt
4) Definisco una variabile randomNumber e associo un numero casuale da 1 a 100
5) Definisco una variabile passwordGenereted e associo un valore ottenuto dalla concatenazione delle variabili: firstName + lastName + favouriteColor + randomNumber
6) Stampo passwordGenereted in console e nella pagina web
*/

// Definisco una variabile e 
const passwordElement = document.getElementById('password');

// Chiedo le informazioni necessarie tramite prompt
const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColor = prompt('Inserisci il tuo colore preferito');

// Genero un numbero primo casuale da 0 a 100
const randomNumber = Math.floor(Math.random() * 101)

// Concateno le variabili per ottenere la password "sicura"
const passwordGenereted = firstName + lastName + favouriteColor + randomNumber

// Visualizzo in console quello che ho ottenuto
console.log('Il tuo nome è:', firstName);
console.log('Il tuo cognome è:', lastName);
console.log('Il tuo colore preferito è:', favouriteColor);
console.log('Il numero casuale è:', randomNumber);
console.log('La tua password è:', passwordGenereted);

// Stampo all'interno dell'html la variabile ottenuta
passwordElement.innerHTML += passwordGenereted;
