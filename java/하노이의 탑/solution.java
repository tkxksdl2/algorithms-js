import java.util.*;

class Solution {
    List<int[]> answer = new ArrayList<int[]>();
    public int[][] solution(int n) {
        move(1,3, n);
        return answer.toArray(new int[answer.size()][]);
    }
    void move(int s, int e, int n){
        if (n == 1){
            answer.add(new int[]{s,e});
        } else {
            move(s, 6-s-e, n-1);
            answer.add(new int[]{s,e});
            move(6-s-e, e, n-1);
        }
    } 
}