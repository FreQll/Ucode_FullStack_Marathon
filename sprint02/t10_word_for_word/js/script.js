function addWords(obj, wrds) {
    const words = obj.words;
    let arr = superTrimToArray(words);
    let words_to_add = superTrimToArray(wrds);
    
    for (let i = 0; i < words_to_add.length; i++) {
        arr.push(words_to_add[i]);
    }
    deleteRepeatedElements(arr);
    let result = arr.toString();
    result = result.replaceAll(",", " ");
    obj.words = result;
    
    return obj;
}

function removeWords(obj, wrds) {
    let arr_to_delete = superTrimToArray(wrds);
    let arr_words = superTrimToArray(obj.words);

    for (let i = 0; i < arr_to_delete.length; i++) {
        for (let j = 0; j < arr_words.length; j++) {
            if (arr_to_delete[i] == arr_words[j]) {
                arr_words.splice(j, 1);
            }
        }
    }
    deleteRepeatedElements(arr_words);
    let result = arr_words.toString();
    result = result.replaceAll(",", " ");
    obj.words = result;
    
    return obj;
}

function changeWords(obj, oldWrds, newWrds) {
    let arr_old = superTrimToArray(oldWrds);
    let arr_new = superTrimToArray(newWrds);
    let arr_words = superTrimToArray(obj.words);

    for (let i = 0; i < arr_old.length; i++) {
        let index = arr_words.indexOf(arr_old[i]);
        if (index == -1) {
            arr_old.splice(i, 1);
        }
    }
    for (let i = 0; i < arr_words.length; i++) {
        if (arr_words[i] == arr_old[0]) {
            arr_words.splice(i, arr_old.length);
        }
    }

    for (let i = 0; i < arr_new.length; i++) {
        arr_words.push(arr_new[i]);
    }

    deleteRepeatedElements(arr_words);
    let result = arr_words.toString();
    result = result.replaceAll(",", " ");
    obj.words = result;
    
    return obj;
}

function deleteRepeatedElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
}

function superTrimToArray(word) {
    const trim_word = word.replaceAll('  ', ' ');
    let arr = trim_word.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "") {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// const obj= {words: 'newspapers newspapers  books magazines'};

// console.log(obj); // {words: "newspapers newspapers  books magazines"}
// addWords(obj, 'radio newspapers');
// console.log(obj); // {words: "newspapers books magazines radio"}
// removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}
// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}