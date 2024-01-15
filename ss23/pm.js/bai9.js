function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}
function main(){
    let n = parseInt(prompt("Nhập vào một số nguyên dương:"));
      let fibSequence = fibonacciSequence(n);
                console.log("Dãy Fibonacci nhỏ hơn", n, "là:");
                console.log(fibSequence);
}
main();