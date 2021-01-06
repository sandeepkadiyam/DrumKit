//Function that plays sound based on the character it recieves as a input.
function makeSound(character) {
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(clickedButtonInnerHtml);
  }
}

// Making Sound based on the button/mouse clicks.
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var clickedButtonInnerHtml = this.innerHTML;
    makeSound(clickedButtonInnerHtml);
    buttonAnimation(clickedButtonInnerHtml);
  });
}

//Making Sound based on the Keyboard presses.
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Animating the buttons when got pressed.

function buttonAnimation(character) {
  var activeButton = document.querySelector("." + character);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  // document.addEventListener("keyup", function() {activeButton.classList.remove("pressed");});
}
