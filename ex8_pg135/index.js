var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice2');
var elComeOut = document.getElementById('roll');

elComeOut.onclick = function () { rollDice(); };

function rollDice() {
    var numSidesInput = prompt("Enter the number of sides for the dice:");
    var numSides = parseInt(numSidesInput);

    if (isNaN(numSides) || numSides <= 0) {
        console.log("Invalid input. Please enter a positive number for the number of sides.");
        return; // Stop execution if input is invalid
    }

    var diceOne = dicegenerator(numSides);
    var diceTwo = dicegenerator(numSides);

    console.log(diceOne + ' ' + diceTwo);

    for (var i = 1; i <= numSides; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
            elDiceOne.classList.add('show-' + i);
        }
    }

    for (var k = 1; k <= numSides; k++) {
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k) {
            elDiceTwo.classList.add('show-' + k);
        }
    }
}

function dicegenerator(numSides){
    let result = Math.floor((Math.random() * numSides) + 1);
    return result;
}
