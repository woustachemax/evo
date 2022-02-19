//alert("Working?");
var randomNumber1 = Math.floor(Math.random() *6) +1;
var randomDice = "dice" + randomNumber1 + ".png";
var randomDicefin = ("C:\Users\HP\Desktop\Web Dev\Dicee Challenge - Starting Files\images\"" + randomDice);
var imgdice1 = document.querySelectorAll("img")[0];
imgdice1.setAttribute("src", randomDicefin)
