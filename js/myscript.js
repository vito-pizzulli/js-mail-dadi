let playerNumber = Math.floor((Math.random() * 6) + 1);
let computerNumber = Math.floor((Math.random() * 6) + 1);
console.log("Il numero del tuo dado è " + playerNumber);
console.log("Il numero del dado dell'avversario è " + computerNumber);

if (playerNumber == computerNumber) {
    console.log("E' un pareggio!");
} else if (playerNumber > computerNumber) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}