var threeSum = function(nums) {
    const solution = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                let current = [nums[i], nums[j], nums[k]];
                if (i !== j && i !== k && j !== k && nums[i] + nums[j] + nums[k] === 0) { 
                    if (solution.length < 1) {
                        solution.push(current);
                    } else {
                        let contains = false;
                        for (let x = 0; x < solution.length; x++) {
                            if (current[0] === 0 && 
                                current[1] === 0 && 
                                current[2] === 0) {
                                    if (solution[x][0] === 0 &&
                                        solution[x][1] === 0 &&
                                        solution[x][2] === 0) {
                                        contains = true;
                                    }
                            } else {
                                if (solution[x].includes(current[0]) &&                                                       solution[x].includes(current[1]) &&
                                    solution[x].includes(current[2])) {
                                        contains = true;
                                }
                            }
                        }
                        if (!contains) solution.push(current);
                    }          
                }
            }
        }
    }
    return solution;
};