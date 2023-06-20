import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
    public String[] solution(String[] files) {
        Arrays.sort(files, (s1, s2) -> {
            String[] g1 = getHeadNumber(s1);
            String[] g2 = getHeadNumber(s2);
            
            String D1 = g1[0].toLowerCase();
            String D2 = g2[0].toLowerCase();
            
            if (!D1.equals(D2)){
               return D1.compareTo(D2); 
            }
            
            int d1 = Integer.parseInt(g1[1]);
            int d2 = Integer.parseInt(g2[1]);
            return d1-d2;
        });
        return files;
    }
    
    String[] getHeadNumber(String s) {
        Pattern pattern = Pattern.compile("^(.\\D*)(\\d{1,5})");
        Matcher matcher = pattern.matcher(s);
        String[] res = new String[2];
        if (matcher.find()){
            res[0] = matcher.group(1);
            res[1] = matcher.group(2);
        }
        return res;
    }
}