
for (let i = 1; i <= 100; i++) {
    let temp = 0;

    if (i === 1) {
        continue;
    }

    for (let j = 2; j <= i - 1; j++) {
        if (i % j === 0) {
            temp += 1;
        }
    }

    if (temp === 0) {
        console.log(i);
    }
}