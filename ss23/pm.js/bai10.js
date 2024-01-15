function tamGiacPhai(a) {
    let b = '';
    for (let i = 1; i <= a; i++) {
        b += '*'.repeat(i) + '\n';
    }console.log(b);
}
function main(){
    const a = parseInt(prompt("nhap a"));
    console.log("\nTam giác vuông:");
    tamGiacPhai(a);
}
main();