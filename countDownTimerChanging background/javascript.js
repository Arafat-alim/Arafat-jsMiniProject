console.log('JS Loaded');

var countdownElement = document.getElementById('countdown');
//countdownElement.innerHTML = 200;
// console.log(countdownElement.innerHTML);
var initlaiCountdownVal = countdownElement.innerHTML;

//for background
var bgimageElement = document.getElementById('bg-img');
//console.log(bgimageElement.src);

//countdownElement.innerHTML = initlaiCountdownVal - 1; // 9 fix

//loop mein lana hoga
setInterval(function(){
    //forCountDown
    //countdownElement.innerHTML = initlaiCountdownVal -= 1; //this code will continuously moving to negative and down more
    initlaiCountdownVal = initlaiCountdownVal > 0 ? initlaiCountdownVal-1 : 0;
    countdownElement.innerHTML = initlaiCountdownVal;

    //For Background
    var backImgpath = initlaiCountdownVal % 2 === 0 ? "assets/bgImage-1.jpg" : "assets/bgImage-2.jpg"
    bgimageElement.src = backImgpath;

    //mycodeisupdating to infinity times
    console.log("Running Interval");

},1000)





// setInterval(function(){
//     initialcountdown = initialcountdown > 0 ? intialicountVal - 1 : 0;
//     countdownElement.innerHTML = initialcountdown;
// },1000);