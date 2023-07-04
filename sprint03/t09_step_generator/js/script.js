function *generator(i, prev_num) {
    let steps = prev_num;
    while (true) {
        yield Number(steps) + Number(i);
    }
}

let prev_num = 1;

for (;;) {
    let num = prompt(`Previous result: ${prev_num}. Enter a new number:`);
    if (isNaN(num) || num <= 0) {
        console.error("Invalid number!");
        break;
    }
    const gen = generator(num, prev_num);
    //console.log(gen.next().value);
    prev_num = gen.next().value;
    if (prev_num >= 10000) {
        prev_num = 1;
    }
}
