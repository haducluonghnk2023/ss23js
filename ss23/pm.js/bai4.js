let a = parseFloat(prompt("nhap a(a>0)"));

let b = parseFloat(prompt("nhap b(b>0)"));
for (let i = 1; i <=a; i++) {
    console.log(i);
    if (i%b == 0 ){
        console.log(i + "chia het cho " + b);
    }else {
        console.log("khong hop le");
    }
}