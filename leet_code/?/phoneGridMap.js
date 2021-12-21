function phoneGridMap() {
    let n = 0;
    let j = 2;
    let map = {};
    while (n < 26) {
        if (j === 7 || j === 9) {
            map[j] = [String.fromCharCode(97 + n), 
                    String.fromCharCode(97 + n + 1),
                    String.fromCharCode(97 + n + 2),
                    String.fromCharCode(97 + n + 3)];
            n+=4;
        } else {
            map[j] = [String.fromCharCode(97 + n), 
                  String.fromCharCode(97 + n + 1),
                  String.fromCharCode(97 + n + 2)];
            n+=3;
        }
        j++;
    }
    console.log(map);
    return map;
}
let map = phoneGridMap();
console.log(map);
