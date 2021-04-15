// alert("welcome")

console.log("js loaded");
var btnClick = document.getElementById("btn");
var mainDiv = document.querySelector("header div");

// function onbtnclick(){
//     alert("Button Clicked")
// }
//change Bg
function onbtnclick(){
    //mainDiv.style.backgroundColor = "lightcoral"; //static,, single color
    // /alert(Math.random());
    //alert(Math.random() * 255);
    //alert(Math.floor(Math.random() * 255));
    var randomNum = Math.floor(Math.random() * 255);
    //alert(randomNum);
    //mainDiv.style.backgroundColor = "rgb(124,12,145)";
    //mainDiv.style.backgroundColor = "rgb("+ randomNum + "," + randomNum + "," + randomNum+ ")";
    mainDiv.style.backgroundColor = "rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255)+ ")"
    //alert("rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255)+ ")")
}
//btnClick.onclick = onbtnclick; //no parenthesis is needed here warna automatically call hojyga 
btnClick.addEventListener('click',onbtnclick); //no parenthesis is needed here warna automatically call hojyga 