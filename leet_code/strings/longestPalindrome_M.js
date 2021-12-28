var longestPalindrome = function(s) {
    let result = s[0];
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 0; j < s.length; j++) {
            let sub = s.substring(i, j + 1);
            if (sub.length % 2 === 0) {
                if (evenTester(sub)) {
                    if (sub.length > result.length) {
                        result = sub;
                    }
                }
            } else {
                if (oddTester(sub)) {
                    if (sub.length > result.length) {
                        result = sub;
                    }
                }
            }
        }
    }
    return result;
}

function evenTester(string) {
    let mid = (string.length / 2) - 1;
    let midPlusOne = mid + 1;
    while (mid >= 0) {
        if (string[mid] !== string[midPlusOne]) {
            return false;
        }
        mid--;
        midPlusOne++;
    }
    return true;
}

function oddTester(string) {
    if (string.length === 1) return true;
    let mid = Math.floor(string.length / 2);
    let midMinus = mid - 1;
    let midPlus = mid + 1;
    while (midMinus >= 0) {
        if(string[midMinus] !== string[midPlus]) {
            return false;
        }
        midMinus--;
        midPlus++;
    }
    return true;

    /*const subStrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1 ; j < s.length + 1; j++) {
            subStrings.push(s.slice(i, j));
        }
    }
    //console.log(subStrings);
    let palindromes = [];
    subStrings.forEach(subString => {
        if (subString.length === 1) {
            palindromes.push(subString);
        } else if (subString.length === 2) {
            if (subString[0] === subString[1]) {
                palindromes.push(subString);
            }
        } else {
            let odd = subString.length % 2 !== 0;
            let stack = [];
            let isPalindrome = true;
            let mid;
            //console.log(subString, odd);
            if (odd) {
                mid = Math.floor(subString.length / 2);
                for (let i = 0; i < mid; i++) {
                    stack.push(subString[i]);
                }
                for (let j = mid + 1; j < subString.length; j++) {
                    let top = stack.pop();
                    if (top !== subString[j]) {
                        isPalindrome = false;
                        break;
                    }
                }
                if (isPalindrome) {
                    palindromes.push(subString);
                }
            } else {
                mid = subString.length / 2;
                for (let i = 0; i < mid; i++) {
                    stack.push(subString[i]);
                }
                for (let j = mid; j < subString.length; j++) {
                    let top = stack.pop();
                    if (top !== subString[j]) {
                        isPalindrome = false;
                        break;
                    }
                }
                if (isPalindrome) {
                    palindromes.push(subString);
                }
            }        
        }
    })
    //console.log(palindromes);
    if (palindromes.length > 1) {
        let max = palindromes[0];
        for (let i = 0; i < palindromes.length; i++) {
            if (palindromes[i].length > max.length) {
                max = palindromes[i];
            }
        }
        return max;
    } else {
        return palindromes[0];
    }*/
    
};