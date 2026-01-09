var numberofButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press With Mouse
for (var i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
} /* This is targeting all from class drum */

function buttonClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


//Detecting Keyboard Clicks
document.addEventListener("keydown",keyClick);

function keyClick(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}


function makeSound(key) {
  console.log (key);

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("You hit " + key);
  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}

//Detecting Music Button Press
const song = new Audio("sounds/whimsical-mood.mp3"); //Only one instance of song
document.querySelector(".music").addEventListener("click", musicClick);

function musicClick() {
  // 2. Check if the song is currently paused
  if (song.paused) {
    song.play();
  } else {
    song.pause();
    song.currentTime = 0; // Reset to start
  }
}
