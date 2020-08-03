let numberOfFaces = 5;
let theLeftSide = document.getElementById("leftSide");
let theRightSide = document.getElementById("rightSide");

function generatefaces() {
   for (let i = 0; i < numberOfFaces; i++) {

      let topPos = Math.floor(Math.random() * 401);
      let leftPos = Math.floor(Math.random() * 401);
      let face = document.createElement("img");

      face.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
      face.style.top = topPos + "px";
      face.style.left = leftPos + "px";
      theLeftSide.appendChild(face);
      leftSideImages = theLeftSide.cloneNode(true);
      leftSideImages.removeChild(leftSideImages.lastChild);
      theRightSide.appendChild(leftSideImages);
   }

   let theBody = document.getElementsByTagName("body")[0];
   theLeftSide.lastChild.onclick = function nextLevel(event) {
      event.stopPropagation();

      while (theLeftSide.firstChild) {
         theLeftSide.removeChild(theLeftSide.firstChild);
      }

      while (theRightSide.firstChild) {
         theRightSide.removeChild(theRightSide.firstChild);
      }
      numberOfFaces += 5;
      generatefaces();
   };

   theBody.onclick = function gameOver() {
      alert("Game Over!");
      theBody.onclick = null;
      theLeftSide.lastChild.onclick = null;
   };
}