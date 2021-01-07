const dropDownMenu = document.querySelector('#dropdown');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const reset = document.querySelector('#reset');

const value = () => {
    return dropDownMenu.value;
}

function stopAll() {
    player1.disabled = true;
    player2.disabled = true;
}

player1.addEventListener('click', () => {
    let currNum1 = parseInt(score1.textContent);
    let total = value();
    currNum1++;
    score1.textContent = (currNum1.toString());
    if (total == currNum1) {
        score1.style.color = 'green';
        score2.style.color = 'red';
        stopAll();
    }

})

player2.addEventListener('click', () => {
    let currNum2 = parseInt(score2.textContent);
    currNum2++;
    let total = value();
    score2.textContent = (currNum2.toString());
    if (total == currNum2) {
        score2.style.color = 'green';
        score1.style.color = 'red';
        stopAll();
    }
})

reset.addEventListener('click', () => {
    score1.textContent = "0";
    score2.textContent = "0";
    player1.disabled = false;
    player2.disabled = false;
    score2.style.color = 'black';
    score1.style.color = 'black';

})








