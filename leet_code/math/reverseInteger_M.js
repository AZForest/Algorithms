var reverse = function(x) {
    let negative = x < 0;
    let rangeMin = - (2 ** 31);
    let rangeMax = 2 ** 31 - 1;
    x = x.toString();
    let xSplit = x.split("");
    let result = "";
    xSplit.forEach(letter => {
        result = letter + result;
;    })
    result = parseInt(result);
    if (result > rangeMin && result < rangeMax) {
        if (!negative) return result;
        else return -result;
    } else {
        return 0;
    }
};