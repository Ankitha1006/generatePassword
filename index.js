const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters = [...letters, ...numbers, ...symbols];

let passwordLength = 15;

let passwordEl = document.getElementById("password-el");
let passwordOneEl = document.getElementById("passwordOne-el");
let btnGenerated = document.getElementById("btn-generated");


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generatePassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter(characters);
    }
    return randomPassword;
}

btnGenerated.addEventListener("click", function() {
    let newPassword = generatePassword();
    passwordEl.textContent = newPassword;
    passwordOneEl.textContent = generatePassword();
});

function copyToClipboard(element) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Password copied to clipboard!");
}

 passwordEl.addEventListener("click", function() {
      copyToClipboard(passwordEl);
});

passwordOneEl.addEventListener("click", function() {
      copyToClipboard(passwordOneEl);
});

console.log("Here is a random password: ", generatePassword());










