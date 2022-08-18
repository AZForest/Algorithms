import java.util.HashMap;

public class RomanToInt {
    class Solution {
        public int romanToInt(String s) {
            String[] a = s.split("");
            HashMap<String, Integer> precedence = new HashMap<>();
            precedence.put("I", 1);
            precedence.put("V", 5);
            precedence.put("X", 10);
            precedence.put("L", 50);
            precedence.put("C", 100);
            precedence.put("D", 500);
            precedence.put("M", 1000);
            
            int result = 0;
            int i = 0;
            while (i < s.length()) {
                if (!(i + 1 >= s.length()) && 
                   (precedence.get(a[i]) - precedence.get(a[i + 1]) < 0)) {
                    int base = precedence.get(a[i + 1]);
                    int minus = precedence.get(a[i]);
                    int baseMinus = base - minus;
                    result += baseMinus;
                    i += 2;
                } else {
                    result += precedence.get(a[i]);
                    i++;
                }
            }
            return result;
        }
    }
}
