/* Mail Login */
const mailList = [
    "mario@mushroom.com",
    "luigi@fireflower.com",
    "peach@toadstool.com"
]

const mailCheck = document.querySelector('div.mail-check-section');
const mailCheckButton = document.querySelector('button.mail-check-button');
const diceGame = document.querySelector("div.dice-game-section");

/* Button "Verifica" Click Event */
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
            alert("La mail " + userMail + " da te inserita è autorizzata. Accesso consentito!");
            mailCheck.classList.add('d-none');
            diceGame.classList.remove('d-none');
            diceGame.classList.add('d-block');
        } else {
            document.getElementById("mail-output").innerHTML = "Accesso negato!";
        }
    }
)

const diceRollButton = document.querySelector('button.dice-roll-button');
const matchBox = document.querySelector("div.match-section");
let matchNumber = 0;
let winResults = 0;
let loseResults = 0;
let tieResults = 0;

/* Dice Game */
/* Button "Nuova Partita" Click Event */
diceRollButton.addEventListener('click',
    function() {
        matchBox.innerHTML = " ";
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

        /* Current Match Results Output */
        if (playerNumber == computerNumber) {
            gameResults.append("Pareggio!");
            gameResults.classList.add('text-tie');
            tieResults++;
        } else if (playerNumber > computerNumber) {
            gameResults.append("Hai vinto!");
            gameResults.classList.add('text-win');
            winResults++;
        } else {
            gameResults.append("Hai perso!");
            gameResults.classList.add('text-lose');
            loseResults++;
        }

        /* Global Results Output */
        let globalResults = document.createElement('p');
        matchBox.append(globalResults);
        globalResults.classList.add("text-results")
        globalResults.append("Classifica - Vittorie: " + winResults + ". " + "Sconfitte: " + loseResults + ". " + "Pareggi: " + tieResults+ ".");
    }
)