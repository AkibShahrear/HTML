//Detecting Button Press
var head = document.querySelectorAll(".drum");
for (var i = 0; i < head.length; i++) {
  head[i].addEventListener("click",
    function() {
      var buttonInnerHtml = this.innerHTML;
      buttonAnimation(buttonInnerHtml);
      make_sound(buttonInnerHtml);
    });
}

//Detecting Keyboard press
document.addEventListener("keydown", function(event) {
  make_sound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
 var active_button = document.querySelector("."+key);
 active_button.classList.add("pressed");
 setTimeout(function(){
   active_button.classList.remove("pressed");
 },100);
}

function make_sound(ky) {

  switch (ky) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:

  }
}
