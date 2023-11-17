package java.방금그곡;
import java.util.regex.*;

class Solution {
    public String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        int maxPlayTime = 0;
        Pattern pattern = Pattern.compile(m + "(?!#)");

        for (String music : musicinfos){
            String[] info = music.split(",");
            int playtime = intTime(info[1]) - intTime(info[0]);

            String melody = info[3];
            StringBuilder fullMelody = new StringBuilder();
            
            int end = playtime;
            for (int i = 0; i < end; i++) {
                int index = i % melody.length();
                fullMelody.append(melody.charAt(index));
                if (index + 1 < melody.length() && melody.charAt(index+1) == '#'){
                    fullMelody.append('#');
                    i++; end++;
                }
            }

            if (pattern.matcher(fullMelody).find() && playtime > maxPlayTime){
                maxPlayTime = playtime;
                answer = info[2];
            }
        }

        return answer;
    }

    int intTime(String time) {
        String[] times = time.split(":");
        return Integer.parseInt(times[0]) * 60 + Integer.parseInt(times[1]);
    }
}