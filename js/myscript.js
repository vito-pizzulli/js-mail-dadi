/* Mail */
const mailList = [
    "cloud.strife@gmail.com",
    "tifa.lockhart@outlook.com",
    "aerith.gainsborough@gmail.com"
]

const mailCheck = document.querySelector('div.mail-check');
const mailCheckButton = document.querySelector('button.mail-check-button');
const diceGame = document.querySelector("div.dice-game");

mailCheckButton.addEventListener('click',
    function() {
        let access = false;
        const userMail = document.getElementById('userMail').value;

        for (let i = 0; i < mailList.length; i++) {
            if (userMail === mailList[i]) {
                access = true;
            }
        }

        if (access === true) {
            mailCheck.classList.add('d-none');
            diceGame.classList.remove('d-none');
            diceGame.classList.add('d-block');
        } else {
            document.getElementById("mail-output").innerHTML = "Accesso negato";
        }
    }
)

const diceRollButton = document.querySelector('button.dice-roll-button');
const matchBox = document.querySelector("div.match-box");
let matchNumber = 0;

/* Gioco dei dadi */
diceRollButton.addEventListener('click',
    function() {
        matchNumber++;
        let matchNumberOutput = document.createElement('h3');
        matchNumberOutput.append ("Partita numero" + " " + matchNumber);
        matchBox.append(matchNumberOutput);
        const playerNumber = Math.floor((Math.random() * 6) + 1);
        const computerNumber = Math.floor((Math.random() * 6) + 1);
        let playerNumberOutput = document.createElement('p');
        let computerNumberOutput = document.createElement('p');
        playerNumberOutput.append("Il numero del tuo dado è" + " " + playerNumber + ".");
        computerNumberOutput.append("Il numero del dado del tuo avversario è" + " " + computerNumber + ".");
        matchBox.append(playerNumberOutput);
        matchBox.append(computerNumberOutput);
        let gameResults = document.createElement('p');
        matchBox.append(gameResults);

        if (playerNumber == computerNumber) {
            gameResults.append("E' un pareggio!");
        } else if (playerNumber > computerNumber) {
            gameResults.append("Hai vinto!");
        } else {
            gameResults.append("Hai perso!");
        }
    }
)