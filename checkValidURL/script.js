//console.log("Checking URL ... ")
var inputBox = document.getElementById("inputURL")
var para = document.getElementById("paratext")
inputBox.addEventListener("input", function (e) {
    var currentInput = e.target.value;
    var pattern = /^www\.[\w]+\.(co|com|org|in)$/g;
    var valid = pattern.test(currentInput);

    if (valid) {
        para.innerHTML = "Whoopiee!!! Its a Proper Website "
    } else {
        para.innerHTML = "Oop! Something Error!! or Wrong URL"
    }

})