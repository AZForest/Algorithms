package HashTable;

import java.util.HashMap;
import java.util.Map;

public class BullsAndCowsTerse {
    class Solution {
        public String getHint(String secret, String guess) {
            int cows = 0;
            int bulls = 0;
            HashMap<Character, Integer> mapSecret = new HashMap<>();
            HashMap<Character, Integer> mapGuess = new HashMap<>();
            
            for (int i = 0; i < guess.length(); i++) {
                char s = secret.charAt(i);
                char g = guess.charAt(i);
                if (s == g) {
                    bulls++;
                } else {
                    mapSecret.put(s, mapSecret.getOrDefault(s, 0) + 1);
                    mapGuess.put(g, mapGuess.getOrDefault(g, 0) + 1);
                } 
            }
            
            for (Map.Entry<Character, Integer> entry : mapGuess.entrySet()) {
                char key = entry.getKey();
                if (mapSecret.containsKey(key)) {
                    cows += Math.min(mapSecret.get(key), mapGuess.get(key));
                }
            }
            return bulls + "A" + cows + "B";
        }
    }
}
