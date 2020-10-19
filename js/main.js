//variabili globali
var nome;
var cognome;
var colore;
var numero = "19";

// chiedere all'utente il proprio nome
nome = prompt("scrivi il tuo nome");
console.log(nome);


// chiedere all'utente il proprio cognome
cognome = prompt("scrivi il tuo cognome");
console.log(cognome);

// chiedere all'utente il suo colore preferito
colore = prompt("scrivi il tuo colore preferito");
console.log(colore);

//risultato finale pw
document.getElementById("pwgen").innerHTML = "la password generata per te è la seguente: " + nome + cognome + colore + numero;
