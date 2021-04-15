// console.log("helloWorld")

document.body.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    // if(keycode === 65)
    // {
    //     document.getElementById('audio-A').play();
    // }
    switch(keycode){
        case 65:
            document.getElementById('audio-A').play();
            break;
        case 83:
            document.getElementById('audio-S').play();
            break;
        case 68:
            document.getElementById('audio-D').play();
            break;
        case 70:
            document.getElementById('audio-F').play();
            break;
        case 71:
            document.getElementById('audio-G').play();
            break;
        case 72:
            document.getElementById('audio-H').play();
            break;
        case 74:
            document.getElementById('audio-J').play();
            break;
        case 75:
            document.getElementById('audio-K').play();
            break;
        case 76:
            document.getElementById('audio-L').play();
            break;
    }


})