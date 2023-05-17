/* Mail */
const mailList = [
    "cloud.strife@gmail.com",
    "tifa.lockhart@outlook.com",
    "aerith.gainsborough@gmail.com"
]

const mailCheck = document.querySelector('div.mail-check-section');
const mailCheckButton = document.querySelector('button.mail-check-button');
const diceGame = document.querySelector("div.dice-game-section");

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
const matchBox = document.querySelector("div.match-section");
let matchNumber = 0;
let winResults = 0;
let loseResults = 0;
let tieResults = 0;

/* Gioco dei dadi */
diceRollButton.addEventListener('click',
    function() {
        matchNumber++;
        let matchNumberOutput = document.createElement('h3');
        matchNumberOutput.append ("Partita #" + " " + matchNumber);
        matchBox.append(matchNumberOutput);
        const playerNumber = Math.floor((Math.random() * 6) + 1);
        const computerNumber = Math.floor((Math.random() * 6) + 1);
        let playerNumberOutput = document.createElement('p');
        let computerNumberOutput = document.createElement('p');
        playerNumberOutput.append("Il numero del tuo dado è" + " " + playerNumber + ".");
        computerNumberOutput.append("Il numero del dado avversario è" + " " + computerNumber + ".");
        matchBox.append(playerNumberOutput);
        matchBox.append(computerNumberOutput);
        let gameResults = document.createElement('p');
        matchBox.append(gameResults);

        if (playerNumber == computerNumber) {
            gameResults.append("E' un pareggio!");
            tieResults++;
        } else if (playerNumber > computerNumber) {
            gameResults.append("Hai vinto!");
            winResults++;
        } else {
            gameResults.append("Hai perso!");
            loseResults++;
        }

        let globalResults = document.createElement('p');
        matchBox.append(globalResults);
        globalResults.append("Classifica - Vittorie: " + winResults + ". " + "Sconfitte: " + loseResults + ". " + "Pareggi: " + tieResults+ ".");
    }
)