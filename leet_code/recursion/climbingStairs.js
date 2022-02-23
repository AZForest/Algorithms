/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let recurse = (n) => {
        if (n <= 1) {
            return 1;
        }   
        return recurse(n - 1) + recurse(n - 2);
    }
    return recurse(n)
    /*let hash = {};
    function maintain(n) {
        console.log(n, hash);
        if (hash[n]) return hash[n];
        if (n <= 1) {
            hash[0] = 1;
            hash[1] = 1;
            return 1;
        }
        if (hash[n]) {
            console.log("here");
            hash[n] = hash[n - 1] + hash[n - 2];
        }
        return maintain(n - 1) + maintain(n - 2);
    }
    maintain(n);
    console.log(hash);*/
};