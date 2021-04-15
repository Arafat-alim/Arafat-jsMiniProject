console.log("JS - Loaded");
var countDownElement = document.getElementById('countdown');
var bgimage = document.getElementById("bg-img");
var initialcountdownVal = countDownElement.innerHTML;

var interval = setInterval(function(){
    initialcountdownVal = initialcountdownVal > 0 ? initialcountdownVal-1 : 0;
    countDownElement.innerHTML = initialcountdownVal;
    countDownElement.style.fontSize = initialcountdownVal * 100 + "px";

    bgimage.style.width = initialcountdownVal * 10 + "%";
    console.log(initialcountdownVal * 100 + "px")

    if(initialcountdownVal <= 0){
        clearInterval(interval);
    }
},1000)