var arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var heading1 = document.querySelector(".img1").setAttribute("src",arr[randomNumber1]);
var heading2 = document.querySelector(".img2").setAttribute("src",arr[randomNumber2]);
if(randomNumber1 > randomNumber2)
{
  var head = document.querySelector("h1").innerHTML="🎇Congratulations!!! Player 1 wins!";
}
else if(randomNumber1 < randomNumber2)
{
  var head = document.querySelector("h1").innerHTML="Congratulations!!! Player 2 wins!🎇";
}
else{
  var head = document.querySelector("h1").innerHTML="Draw!";
}
