/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const walkingCatImg = document.querySelector("img");
const walkingCatSrc = walkingCatImg.src;
const dancingCatSrc = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif"
let currentCatPosition = 0;
const step = 10;
const walkingCatImgWidth = walkingCatImg.width;
let hasDance = false;
let walkingInterval;

function catWalk() {
  const pageWidth = document.documentElement.clientWidth;
  const middleScreen = pageWidth / 2;
  const isCatAtMiddleLeft = currentCatPosition >= middleScreen - (walkingCatImgWidth / 2);
  const isCatAtMiddleRight = currentCatPosition <= middleScreen + (walkingCatImgWidth / 2);
  
  walk();

  if (isCatAtMiddleLeft && isCatAtMiddleRight  && !hasDance) {
    hasDance = true;
    catDance();
  }

  if (currentCatPosition >= (pageWidth - walkingCatImgWidth - step)) {
    currentCatPosition = 0;
    hasDance = false;
  }
}

function walk() {
  currentCatPosition += step;
  walkingCatImg.style.left = `${currentCatPosition}px`;
}

function catDance() {
  clearInterval(walkingInterval);
  walkingCatImg.src = dancingCatSrc;    

  setTimeout(() => {
    walkingCatImg.src = walkingCatSrc;
    startWalking();
  }, 5000);  
}

function startWalking() {
  walkingInterval = setInterval(catWalk, 50);
}

window.addEventListener('DOMContentLoaded', startWalking);