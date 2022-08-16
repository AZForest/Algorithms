class Solution {
    public boolean isValid(String s) {
        if (s.length() == 1) return false;
        Stack<String> stack = new Stack<String>();
        String[] arr = s.split("");
        for (String c : arr) {
            if (checkIfLeft(c)) {
                stack.push(c);
            } else {
                if (stack.empty()) return false;
                String top = stack.pop();
                if (!top.equals(getLeft(c))) return false;
            }
        };
        return stack.empty();
    }
    
    public boolean checkIfLeft(String s) {
        return s.equals("(") || s.equals("{") || s.equals("[");
    }
    
    public String getLeft(String s) {
        String result = "";
        switch (s) {
            case ")": 
                result = "(";
                break;
            case "}":
                result = "{";
                break;
            case "]":
                result = "[";
                break;
            default:
                result = "unknown";
                break;
        };
        return result;
    }
}