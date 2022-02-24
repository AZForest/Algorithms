/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    /*let recurse = (n) => {
        if (n <= 1) {
            return 1;
        }   
        return recurse(n - 1) + recurse(n - 2);
    }
    return recurse(n)*/
    function maintain(n, hash) {
        console.log(n, hash)
        hash = hash || {};
        if (hash[n]) return hash[n];
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 2;
        
        let val = 0;
        val += maintain(n - 1, hash);
        val += maintain(n - 2, hash);
        hash[n] = val;
        return val;
    }
    return maintain(n);
};