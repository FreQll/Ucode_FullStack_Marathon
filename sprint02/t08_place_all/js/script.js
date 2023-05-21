function sortEvenOdd(arr) {
    arr.sort(sortByEven);

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0 && arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0 && arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

function sortByEven(num) {
    if (num % 2 == 0) return -1;
    if (num % 2 != 0) return 1;
    else 1;
}

// const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
// sortEvenOdd(arr); 
// console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]Sprint 02 |Half Marathon Full Stack> 21
