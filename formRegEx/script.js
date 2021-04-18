//console.log('HelloWorld')
var inputUsername = document.getElementById("username");
var para = document.getElementById("paraText")
inputUsername.addEventListener("input", function (e) {
    var pattern = /^[\w]{6,8}$/;
    var currentVal = e.target.value;
    var valid = pattern.test(currentVal);

    if (valid) {
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }

})
