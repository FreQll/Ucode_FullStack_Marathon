String.prototype.removeDuplicates = function() {
    let word = this.toString();

    word = word.trim();
    let arr = word.split(' ');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            arr.splice(i, 1);
        }
    }

    const result = arr.join(' ');

    return result;
}

// let str = "Giant Spiders?   What’s next? Giant Snakes?";
// console.log(str);
// // Giant Spiders?   What’s next? Giant Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?
// str = str.removeDuplicates();
// console.log(str);
// // Giant Spiders? What’s next? Snakes?

// str = ". . . . ? . . . . . . . . . . . ";
// console.log(str);
// // . . . . ? . . . . . . . . . . .
// str = str.removeDuplicates();
// console.log(str);
// // . ?