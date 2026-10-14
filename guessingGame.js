let secret = Math.floor(Math.random() * 100) + 1;

function playerGuess() {
    let guess = Number(document.getElementById("guess1").value);
    let helpLabel = document.getElementById("helplabel");

    if (guess === secret) {
        helpLabel.innerText = "Correct!";
    } else if (guess < secret) {
        helpLabel.innerText = "Too low!";
    } else if (guess > secret) {
        helpLabel.innerText = "Too high!";
    }
}
