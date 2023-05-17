/* Gioco dei dadi */
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

/* Mail */
const mailList = [
    "cloud.strife@gmail.com",
    "tifa.lockhart@outlook.com",
    "aerith.gainsborough@gmail.com"
]

const button = document.querySelector('button');

button.addEventListener('click',
    function() {
        let access = false;
        const userMail = document.getElementById('userMail').value;

        for (let i = 0; i < mailList.length; i++) {
            if (userMail === mailList[i]) {
                access = true;
            }
        }

        if (access === true) {
            document.getElementById("output").innerHTML = "Accesso consentito";
        } else {
            document.getElementById("output").innerHTML = "Accesso negato";
        }
    }
)