import java.util.*;

class Solution {
    public List<Integer> solution(String msg) {
        List<Integer> answer = new ArrayList<Integer>();
        Map<String, Integer> passMap = new HashMap<String, Integer>();

        for (int i = 0; i < 26; i++){
            passMap.put(Character.toString((char) (65 + i )), i+1);
        }
        
        int passEnd = 27;
        
        for (int i = 0; i < msg.length(); i++){
            String w = Character.toString(msg.charAt(i));
            while (i+1 < msg.length() && 
                    passMap.containsKey(w + msg.charAt(i+1))){
                w = w + Character.toString(msg.charAt(i+1));
                i += 1;
            }

            if (i+1 < msg.length()){
                passMap.put(w + msg.charAt(i+1), passEnd++);
            }

            answer.add(passMap.get(w));
        }
        
        return answer;
    }
}