/// CODE TO CREATE A PASSWORD GENERATOR

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["@", "#", "%", "&", "*", "^", "?"];

// const randomise = () => {
//   let name = [];
//   for (i = 0; i <= 6; i++) {
//     letterNum = Math.floor(Math.random() * alphabets.length);
//     name.push(alphabets[letterNum]);
//   }
//   for (i = 0; i <= 2; i++) {
//     let symbolsNum = Math.floor(Math.random() * symbols.length);
//     name.push(symbols[symbolsNum]);
//   }
//   for (i = 0; i <= 3; i++) {
//     let numberNum = Math.floor(Math.random() * numbers.length);
//     name.push(numbers[numberNum]);
//   }

//   newName = name.reverse().reverse().reverse().join("");
//   console.log(newName);
// };

// randomise();

const button = document.querySelector("#generate");
const textarea = document.querySelector("textarea");
const copy = document.querySelector(".copy");

button.addEventListener("click", () => {
  let name = [];
  for (i = 0; i <= 1; i++) {
    letterNum = Math.floor(Math.random() * alphabets.length);
    name.push(alphabets[letterNum]);
  }
  for (i = 0; i <= 2; i++) {
    let numberNum = Math.floor(Math.random() * numbers.length);
    name.push(numbers[numberNum]);
  }
  for (i = 0; i <= 2; i++) {
    letterNum = Math.floor(Math.random() * alphabets.length);
    name.push(alphabets[letterNum]);
  }
  for (i = 0; i <= 1; i++) {
    let symbolsNum = Math.floor(Math.random() * symbols.length);
    name.push(symbols[symbolsNum]);
  }
  for (i = 0; i <= 1; i++) {
    let numberNum = Math.floor(Math.random() * numbers.length);
    name.push(numbers[numberNum]);
  }
  for (i = 0; i <= 1; i++) {
    let symbolsNum = Math.floor(Math.random() * symbols.length);
    name.push(symbols[symbolsNum]);
  }

  newName = name.join("");
  textarea.innerText = newName;
});

textarea.addEventListener("input", () => {
  textarea.innerText = "";
  alert("Do not write on the text bar\nPlease reload the page");
});

copy.addEventListener("click", () => {
  textarea.select();
  document.execCommand("Copy");
  copy.innerText = "Copied!";
});
