let a = prompt("nhap a");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

rl.question('Nhập vào một số nguyên dương: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
        console.log('Vui lòng nhập một số nguyên dương hợp lệ.');
    } else {
        const factorial = calculateFactorial(number);
        console.log(`Giai thừa của ${number} là: ${factorial}`);
    }

    rl.close();
});
