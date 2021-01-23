const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
} //Constant variables for all p1
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
} //Constant variables for all p2

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
//Constant variables declared 
let winningScore = 3;
let isGameOver = false;
//Let variables declared

function updateScores(player, opponent) {
    //Function for updating score
    if (!isGameOver) {
        player.score += 1;
        //Not game over, keep adding to players' score
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            //If player is winner, colors change for winner and loser, game is over
        }
        player.display.textContent = player.score;
        //display equals player score
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
    //On click update p1 
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
    //On click update p2
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
    //When there is winner, game resets
})

resetButton.addEventListener('click', reset)
//Resets game on click of button reset
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    //Resets game when one has reached the target score
}
