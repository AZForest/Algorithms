//Return every possible substring

//'Banana Boat.'
function stringSlicer(S) {
    let hash = {};
    S = S.toLowerCase();
    S = S.slice(0, S.length - 1);
    let arr = S.split(" ");
    arr.forEach(word => {
        let firstPointer = 0;
        let secondPointer = 0;
        while (firstPointer < word.length && secondPointer < word.length) {
            let sub;
            if (firstPointer === secondPointer) {
                sub = word.slice(firstPointer, firstPointer + 1);
            } else {
                sub = word.slice(firstPointer, secondPointer + 1);
            }
            if (hash[sub]) {
                let count = hash[sub];
                count++;
                hash[sub] = count;
            } else {
                hash[sub] = 1;
            }
            secondPointer++;
            if (secondPointer === word.length) {
                firstPointer++;
                secondPointer = firstPointer;
            }
        }
    })

    let entries = Object.entries(hash);
    let sortedEntries = entries.sort((a, b) => {
        if (b[1] > a[1]) return 1;
        if (b[1] < a[1]) return -1;

        if (b[0] > a[0]) return -1;
        if (b[0] < a[0]) return 1;
        return 0;
    });
    let result = "";
    sortedEntries.forEach(entry => {
        result += `${entry[1]}: ${entry[0]} \n`;

    })
    return result;
}

console.log(stringSlicer('Banana Boat.'));

function looper(S) {
    let hash = {};
    S = S.toLowerCase();
    S = S.slice(0, S.length - 1);
    let arr = S.split(" ");
    arr.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            for (let j = i; j < word.length; j++) {
                let sub;
                if (j === 0) {
                    sub = word.slice(i, i + 1); 
                } else {
                    sub = word.slice(i, j + 1);
                }
                if (hash[sub]) {
                    let count = hash[sub];
                    count++;
                    hash[sub] = count;
                } else {
                    hash[sub] = 1;
                }
            }
        }
    })
    console.log(Object.entries(hash).forEach(line => console.log(line)));
}

//console.log(looper('Banana Boat.'))