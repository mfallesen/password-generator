console.log("Hi there!")


var charsAllowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@%!$";

var userPass = "";
// make this accept an argument
function passGen() {
    var passLen = prompt("Please Enter the Desired Password Length");
    passClear();
    for (var i = 0; i < passLen; i++) {
        userPass += charsAllowed.charAt(Math.floor(Math.random() * charsAllowed.length));
     }
     document.getElementById("genPassField").value = userPass;
};

function passClear() {
    userPass= "";
    console.log("working?")
};




