var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var userPass = "";
// Called by button "onclick" attributte. Generates a randomized password from a user generated list of characters.
function passGen() {
    var passLen = document.getElementById("numUserChar").innerHTML;
    // Generate user Character Set to use in password generation
    var charsAllowed = includeCriteria();
    // clear textarea of existing text(if any)
    passClear();
    // Generate the password
    for (var i = 0; i < passLen; i++) {
        userPass += charsAllowed.charAt(Math.floor(Math.random() * charsAllowed.length));
     }
     //prints Generated Password to Screen. 
     document.getElementById("genPassField").value = userPass;
};
// builds character set to use when randomizing password and validates that user has selected at least one input. 
function includeCriteria() {
    var charsRequested = "";    
    if (document.getElementById("upperCase").checked === false && document.getElementById("lowerCase").checked === false && document.getElementById("nums").checked === false && document.getElementById("specChar").checked === false) {
        alert("You must choose at least one character set!");
    } else {
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
    }   
};
// Clears Text Area. Called by passGen();
function passClear() {
    userPass = "";
};
//slider code largely copied from https://www.w3schools.com/howto/howto_js_rangeslider.asp
var slider = document.getElementById("rangeSlide");
var output = document.getElementById("numUserChar");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}