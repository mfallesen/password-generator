console.log("Hi there!")


var charsAllowed = "";
// alt var charsAllowed = includeCriteria();
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var userPass = "";









function passGen() {
    var passLen = prompt("Please Enter the Desired Password Length in Numbers between 8 and 128");

    // ask User for Upper,Lower,Number, and Symbols in password

    // clear textarea of existing text(if any)
    passClear();
    
    
    
    
    
    
    for (var i = 0; i < passLen; i++) {
        userPass += charsAllowed.charAt(Math.floor(Math.random() * charsAllowed.length));
     }
     document.getElementById("genPassField").value = userPass;







    };


    function includeCriteria() {
        var includeUpper = confirm("Include Uppercase characters?");
        if (includeUpper === true) {
            charsAllowed 
        }
        var includeLower = confirm("Include Lowercase characters?");
        var includeNumbers = confirm("Include Number characters?");
        var includeSpecial = confirm("Include Special characters?");
    };















function passClear() {
    userPass= "";
    console.log("working?")
};