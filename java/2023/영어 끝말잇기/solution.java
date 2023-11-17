import java.util.HashSet;
import java.util.Set;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = {0,0};
        char last = words[0].charAt(0);
        Set<String> used = new HashSet<String>();
        
        for (int i = 0; i < words.length; i++){
            String word = words[i];
            if (used.contains(word) || last != word.charAt(0)){
                answer[0] = i % n + 1;
                answer[1] = i / n + 1;
                return answer;
            }
            used.add(word);
            last = word.charAt(word.length()-1);
        }

        return answer;
    }
}