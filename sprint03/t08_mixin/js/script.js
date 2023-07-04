import { houseBlueprint, HouseBuilder } from "./houseBuilder.js";

let houseMixin = {
  wordReplace(original, replace) {
    original = original.trim();
    replace = replace.trim();
    let arr = this.description.split(" ");
    arr[arr.indexOf(original)] = replace;
    let result = arr.join(" ");
    this.description = result;
  },

  wordDelete(word) {
    word = word.trim();
    let arr = this.description.split(" ");
    arr.splice(arr.indexOf(word), 1);
    let result = arr.join(" ");
    this.description = result;
  },

  wordInsertAfter(wordBefore, wordToInsert) {
    wordBefore = wordBefore.trim();
    wordToInsert = wordToInsert.trim();
    let arr = this.description.split(" ");
    arr.splice(arr.indexOf(wordBefore) + 1, 0, wordToInsert);
    let result = arr.join(" ");
    this.description = result;
  },

  wordEncrypt() {
    let output = "";
    for (let i = 0; i < this.description.length; i++) {
      const c = this.description.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        output += String.fromCharCode(((c - 65 + 13) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        output += String.fromCharCode(((c - 97 + 13) % 26) + 97);
      } else {
        output += this.description.charAt(i);
      }
    }
    this.description = output;
    return output;
  },

  wordDecrypt() {
    this.description = this.wordEncrypt();
  }
};

// const house = new HouseBuilder(
//   "88 Crescent Avenue",
//   "Spacious town house with wood flooring, 2-car garage, and a back patio.",
//   "J. Smith",
//   110,
//   5
// );

// Object.assign(house, houseMixin);

// console.log(house.getDaysToBuild());
// // 220
// console.log(house.description);
// // Spacious town house with wood flooring, 2-car garage, and a back patio.

// house.wordReplace("wood", "tile");
// console.log(house.description);
// // Spacious town house with tile flooring, 2-car garage, and a back patio.

// house.wordDelete("town ");
// console.log(house.description);
// // Spacious house with tile flooring, 2-car garage, and a back patio.

// house.wordInsertAfter("with", "marble");
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.

// house.wordEncrypt();
// console.log(house.description);
// // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.

// house.wordDecrypt();
// console.log(house.description);
// // Spacious house with marble tile flooring, 2-car garage, and a back patio.
