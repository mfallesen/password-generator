console.log("Hi there!")

// make this accept an argument
function passGen() {
    alert("Button Works!");
};

var charsAllowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@%!$";
var passLen = 10;
var userPass = "";


for (var i = 0; i < passLen; i++) {
   userPass += charsAllowed.charAt(Math.floor(Math.random() * charsAllowed.length));
}
console.log(userPass);