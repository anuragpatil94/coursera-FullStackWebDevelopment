var target;
var finished = false;
var guesses = 0;
var colorList;
var guess_color_text;

function do_game() {
    colorList = ["blue", "cyan", "gold", "green", "magenta", "orange", "red", "white", "yellow", "khaki", "whitesmoke"];
    colorList = colorList.sort();
    console.log(colorList);
    target = Math.floor(Math.random() * colorList.length);
    alert("The answer is: " + colorList[target]);
    while (!finished) {
        guess_color_text = prompt("I am thinking of one of these colors:\n\nblue, cyan, gold, green, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
        guesses++;
        finished = check_guess();
    }
}

function check_guess() {
    if (colorList.indexOf(guess_color_text) < 0) {
        alert("Sorry, I didn't recognize your color. Please try again!");
        return false;
    }
    if (guess_color_text > colorList[target]) {
        alert("Sorry, your guess is incorrect\n\nHint: your guess is alphabetically higher than mine.\n\nPlease try again.");
        return false;
    }
    if (guess_color_text < colorList[target]) {
        alert("Sorry, your guess is incorrect\n\nHint: your guess is alphabetically lower than mine.\n\nPlease try again.");
        return false;
    }
    if (guess_color_text == colorList[target]) {
        myBody = document.getElementsByTagName("body")[0];
        myBody.style.background = colorList[target];
        alert("Congratulations! you guessed the color!\n\nIt took you " + guesses + " guesses to finish the game!\n\nyou can see the color in background");
        return true;
    }
}