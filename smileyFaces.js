var numberOfFaces = 5;
var theLeftSide =
    document.getElementById("leftSide");
var theRightSide =
    document.getElementById("rightSide");



function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        let top = Math.floor(Math.random() * 401);
        let left = Math.floor(Math.random() * 401);
        let the_image = document.createElement("img");
        the_image.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        the_image.style.top = top + "px";
        the_image.style.left = left + "px";
        theLeftSide.appendChild(the_image);
        leftSideImages = theLeftSide.cloneNode(true);
        leftSideImages.removeChild(leftSideImages.lastChild);
        theRightSide.appendChild(leftSideImages);
    }

    let theBody =
        document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick =
        function nextLevel(event) {
            event.stopPropagation();
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild);
            }
            numberOfFaces += 5;
            generateFaces();
        };
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}