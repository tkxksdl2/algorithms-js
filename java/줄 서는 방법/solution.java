import java.util.*;
class Solution {
    int gN;
    long gK;
    long curK = 0;
    
    public int[] solution(int n, long k) {
        gK = k; gN = n;
        int[] answer = new int[n];
        boolean[] used = new boolean[n+1];
        Arrays.fill(used, false);
        
        dfs(answer, used, 0);
        return answer;
    }
    
    void dfs(int[] answer, boolean[] used, int depth){
        if (depth == gN) return;
        
        long skip = factorial(gN - depth -  1);
        for (int i=1; i<= gN; i++){
            if (used[i]) continue;
            if (gK > skip + curK){
                curK += skip;
                continue;
            }
            
            answer[depth] = i;
            used[i] = true;
            dfs(answer, used, depth+1);
        }
    }
    long factorial(int n){
        return n <= 1 ? 1 : n * factorial(n-1);
    }
}