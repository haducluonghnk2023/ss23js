for(let i=0; i<=100;i++) {
    console.log(i);
    if(i%15 == 0) {
        console.log("FizzBuuzz");
    }else if(i%5 == 0) {
        console.log("Buzz");
    }else if(i%3 == 0) {
        console.log("Fizz");
    }else{
        console.log("khong chia het cho so nao ca");
    }
}