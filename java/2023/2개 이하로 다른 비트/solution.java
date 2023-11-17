import java.util.*;
class Solution {
    public long[] solution(long[] numbers) {
        long[] answer = new long[numbers.length];
        int idx = 0;
        for (long number : numbers){
            String bit = Long.toString(number, 2);
            bit = "0" + bit;
            for (int i = bit.length()-1; i>=0; i-- ){
                if (bit.charAt(i) == '0'){
                    StringBuilder sb = new StringBuilder(bit);
                    sb.setCharAt(i, '1');
                    if (i <bit.length()-1){
                        sb.setCharAt(i+1, '0');
                    }
                    bit = sb.toString();
                    
                    break;
                }
            }
            answer[idx++] = Long.parseLong(bit, 2);
        }
        return answer;
    }
}