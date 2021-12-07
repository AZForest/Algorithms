const validParantheses = (expression) => {
    if (expression.length === 0) return true;
    let stack = new Stack();
    for (let z = 0; z < expression.length; z++) {
        if (expression[z] === "(") stack.push(expression[z]);
        if (expression[z] === ")") {
           if (stack.top === null) return false;
           stack.pop();
        }
    }
    if (stack.top) return false;
    else return true;
}

export default validParantheses;