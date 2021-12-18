//3 ^ 5 === 3 * 3 * 3 * 3 * 3

function power(num, exp) {
    if (exp < 0) throw new Error("exponent should be >= 0");
    if (exp === 0) return 1;
    if (exp === 1) return num;

    return num * power(num, exp - 1);
}
console.log(power(100, 3));