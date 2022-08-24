package HashTable;

import java.util.HashMap;
import java.util.Map;

public class BullsAndCows {
    class Solution {
        public String getHint(String secret, String guess) {
            HashMap<String, Integer> result = new HashMap<>();
            result.put("A", 0);
            result.put("B", 0);
            HashMap<String, Integer> tracker = new HashMap<>();
            StringBuilder sec = new StringBuilder(secret);
            StringBuilder gue = new StringBuilder(guess);
            for (int i = 0; i < secret.length(); i++) {
                if (secret.substring(i, i + 1).equals(guess.substring(i, i + 1))) {
                    track(result, "A");
                    gue.setCharAt(i, 'X');
                } else {
                    track(tracker, secret.substring(i, i + 1));
                }
            }
            findBs(sec, gue, result, tracker);  
            return format(result);
        }
        
        
        public void track(HashMap<String, Integer> hash, String key) {
            if (hash.containsKey(key)) {
                int v = hash.get(key);
                v++;
                hash.put(key, v);
            } else {
                hash.put(key, 1);
            }
        }
        
        public void findBs(StringBuilder secret, StringBuilder guess, HashMap<String, Integer> result, HashMap<String, Integer> tracker) {
            String[] arr = guess.toString().split("");
            for (String key : arr) {
                if (tracker.containsKey(key)) {
                    int count = tracker.get(key);
                    count--;
                    if (count == 0) {
                        tracker.remove(key);
                    } else {
                        tracker.put(key, count);
                    }
                    int bCount = result.get("B");
                    bCount++;
                    result.put("B", bCount);
                }
            }
        }
        
        public String format(HashMap<String, Integer> result) {
            StringBuilder sb = new StringBuilder();
            for (Map.Entry<String, Integer> entry : result.entrySet()) {
                sb.append(entry.getValue());
                sb.append(entry.getKey());
            }
            return sb.toString();
        }
        
        public void printHash(HashMap<String, Integer> hash) {
            for (Map.Entry<String, Integer> entry : hash.entrySet()) {
                System.out.println(entry);
            }
        }
    }
}
