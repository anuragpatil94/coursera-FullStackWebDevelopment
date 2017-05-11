var numberOfFaces = 5;
var theleftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var level = document.getElementById("level");
var score = 0;

function generateFaces() {
    level_number = document.createTextNode("Level " + score);
    level.appendChild(level_number)
    for (i = 0; i < numberOfFaces; i++) {
        //LEFT SIDE
        var image = document.createElement("img");
        image.setAttribute('src', 'smile.png');
        image.style.height = 75 + 'px';
        image.style.width = 75 + 'px';
        var randomLeft = Math.random() * 400;
        var randomTop = Math.random() * 400;
        image.style.left = randomLeft + 'px';
        image.style.top = randomTop + 'px';
        theleftSide.appendChild(image);
        //RIGHT SIDE
        var leftSideImages = theleftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);

    }
    theleftSide.lastChild.onclick = function() {
        event.stopPropagation();
        while (theleftSide.firstChild) {
            theleftSide.removeChild(theleftSide.firstChild);
        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
        level.removeChild(level.firstChild);
        numberOfFaces += 5;
        score++;
        generateFaces();

    }
    theBody.onclick = function gameOver() {
        while (theleftSide.firstChild) {
            theleftSide.removeChild(theleftSide.firstChild);
        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
        alert("Game Over!" + "\n" + "Your Score is: " + score);
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;

    };

}