var longestPalindrome = function(s) {
    const subStrings = [];
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
    }
    
};