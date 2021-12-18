function split(string, separator) {
    let index = string.indexOf(separator);
    if (index === -1) {
        return [string];
    };

    let start = string.substring(0, index);
    let rest = string.substring(index + 1);
    let result = split(rest, separator);

    console.log(result);
    result.unshift(start);
    
    return result;
}

let x = "Be generous in prosperity and thankful in adversity";
split(x, " ");