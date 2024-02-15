var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice2');
var elComeOut = document.getElementById('roll');

elComeOut.onclick = function () { rollDice(); };

function rollDice() {

    var diceOne = dicegenerator(6)
    var diceTwo = dicegenerator(6)

    console.log(diceOne + ' ' + diceTwo);

    for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (var k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
        }
    }
    setTimeout(rollDice(), 1000);
}

function dicegenerator(numSides){
    let result = Math.floor((Math.random() * numSides) + 1);
    return result
}
