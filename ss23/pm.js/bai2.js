function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * tinhGiaiThua(n - 1);
    }
}
let soNguyen = parseInt(prompt("Nhập một số nguyên dương:"));
if (!isNaN(soNguyen) && soNguyen >= 0) {
    let ketQua = tinhGiaiThua(soNguyen);
    console.log(`Giai thừa của ${soNguyen} là: ${ketQua}`);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
