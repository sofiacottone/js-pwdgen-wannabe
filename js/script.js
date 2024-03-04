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

// DATA STORAGE TEMPORANEO
// Inserire il nome utente nell'html
document.getElementById('userNameDisplay').innerHTML = userName;

// Inserire il cognome utente nell'html
document.getElementById('userSurnameDisplay').innerHTML = userSurname;

// Inserire il colore preferito dell'utente nell'html
document.getElementById('userFavColDisplay').innerHTML = userFavCol;

// LOGICA
// Generare la password con i dati forniti dall'utente
let userPsw = userName + userSurname + userFavCol + '23';
console.log(userPsw);

// OUTPUT
// Inserire la password dell'utente nell'html
document.getElementById('userPswDisplay').innerHTML = userPsw;

