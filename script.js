var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function announceResult(result) {
    const synth = window.speechSynthesis || window.webkitSpeechSynthesis;
    const utterance = new SpeechSynthesisUtterance(result);
    synth.speak(utterance);
    
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
        announceResult("It's a tie!");
        updateResultText("It's a tie!");
    } else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                announceResult("You win!");
                updateResultText("You win!");
            } else if (opponent == "paper") {
                opponentScore += 1;
                announceResult("Opponent wins!");
                updateResultText("Opponent wins!");
            }
        } else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
                announceResult("You win!");
                updateResultText("You win!");
            } else if (opponent == "rock") {
                opponentScore += 1;
                announceResult("Opponent wins!");
                updateResultText("Opponent wins!");
            }
        } else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
                announceResult("You win!");
                updateResultText("You win!");
            } else if (opponent == "scissors") {
                opponentScore += 1;
                announceResult("Opponent wins!");
                updateResultText("Opponent wins!");
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}

function updateResultText(result) {
    document.getElementById("result-text").innerText = result;
}
