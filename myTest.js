const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr.split("");
  let word = "";
  let y = 1;
  let arrArr = [];

  let arrArrArr = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i] + arr[i + 1] === "00") {
      arrArr.push(" ");
    }
    if (arr[i] + arr[i + 1] === "10") {
      arrArr.push(".");
    }
    if (arr[i] + arr[i + 1] === "11") {
      arrArr.push("-");
    }
    if (arr[i] === "*") {
      arrArr.push("+");
    }
    if (arrArr.length === 5) {
      arrArrArr.push(arrArr);
      arrArr = [];
    }
  }

  console.log(arrArrArr);
  for (let i = 0; i < arrArrArr.length; i++) {
    let per = "";

    for (let y = 0; y < arrArrArr[i].length; y++) {
      if (arrArrArr[i][y] !== " ") {
        per += arrArrArr[i][y];
      }
    }
    if (MORSE_TABLE[per]) {
      word += MORSE_TABLE[per];
    }
    if (per === "+++++") {
      word += " ";
    }
  }

  return word;
}
console.log(decode("0010101010**********0000000010"));
