console.log("Hi there!")



// alt var charsAllowed = includeCriteria();
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var userPass = "";









function passGen() {
    var passLen = prompt("Please Enter the Desired Password Length in Numbers between 8 and 128");

    // ask User for Upper,Lower,Number, and Symbols in password
    var charsAllowed = includeCriteria();
    console.log(charsAllowed)
    // clear textarea of existing text(if any)
    passClear();
    
    
    
    
    
    
    // for (var i = 0; i < passLen; i++) {
    //     userPass += charsAllowed.charAt(Math.floor(Math.random() * charsAllowed.length));
    //  }
    //  document.getElementById("genPassField").value = userPass;







    };


    function includeCriteria() {
        
        var charsRequested = "";
        
        if (document.getElementById("upperCase").checked) {
            charsRequested += uppercase;
        }
        if (document.getElementById("lowerCase").checked) {
            charsRequested += lowercase;
        }
        if (document.getElementById("nums").checked) {
            charsRequested += numbers;
        }
        if (document.getElementById("specChar").checked) {
            charsRequested += symbols;
        }
        return charsRequested;
    };















function passClear() {
    userPass= "";
    console.log("working?")
};