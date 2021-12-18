function reverseString(string) {
    if (string.length <= 1) {
        return string;
    }
    return reverseString(string.slice(1)) + string[0];
}
console.log(reverseString("Thinkful"));

function reverse(text) {
    if (text.length === 0) return "";
    if (text.length === 1) return text;
    return "" + text[text.length - 1] + reverse(text.slice(0, text.length - 1))
}