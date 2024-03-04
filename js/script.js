// Generare una password (nomecognomecolorepreferito23)

// RACCOLTA DATI
//Ci serve: nome utene, cognome, colore preferito

//Chiedere il nome all'utente
const userName = prompt('What\'s your name?');
console.log(userName);

//Chiedere il cognome all'utente
const userSurname = prompt('What\'s your surname?');
console.log(userSurname);

//Chiedere il colore preferito all'utente
const userFavCol = prompt('What\'s your favourite colour?');
console.log(userFavCol);

//Chiedere un numero all'utente
const userNumber = prompt('Chose a number between 1 and 100');
console.log(userNumber);

// DATA STORAGE TEMPORANEO
// Inserire il nome utente nell'html
document.getElementById('userNameDisplay').innerHTML = userName;

// Inserire il cognome utente nell'html
document.getElementById('userSurnameDisplay').innerHTML = userSurname;

// Inserire il colore preferito dell'utente nell'html
document.getElementById('userFavColDisplay').innerHTML = userFavCol;

// Inserire il numero scelto dall'utente nell'html
document.getElementById('userNumberDisplay').innerHTML = userNumber;

// Convertire la stringa in numero
let userNumberAsNumeric = parseInt(userNumber);
console.log(userNumberAsNumeric);

// Eseguire la somma
let sum = userNumberAsNumeric + 23;
console.log(sum);

// LOGICA
// Generare la password con i dati forniti dall'utente
let userPsw = userName + userSurname + userFavCol + sum;
console.log(userPsw);

// OUTPUT
// Inserire la password dell'utente nell'html
document.getElementById('userPswDisplay').innerHTML = userPsw;

