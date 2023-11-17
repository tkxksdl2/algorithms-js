import java.util.Arrays;
class Solution {
    int[] comb;
    int apeechPoint = 0;
    int maxSum = 1;
    public void getComb(int[] costs, int s, int n, int sum, int[] res){
        if (sum >= maxSum){
            res[res.length-1] += n;
            if (comb==null || sum > maxSum){comb = res.clone();}
            else{
                for (int i=10; i>=0; i--){
                    if (res[i] > comb[i]){
                        comb = res.clone();
                        break;
                    }else if (res[i] < comb[i]){
                        break;
                    }
                }
            }
            res[res.length-1] -= n;
            maxSum = sum;
        }
        if (s >= costs.length) {
            return;
        }
        for (int i =s; i<costs.length; i++){
            if (n >= costs[i]){
                res[i] += costs[i];
                int nextSum = costs[i] >1 ? sum + 2*(10 - i) : sum+ 10 - i;
                getComb(costs, i+1, n - costs[i], nextSum,  res);
                res[i] -= costs[i];
            }
        }

    }
    public int[] solution(int n, int[] info) {
        int[] answer = {};
        int[] costs = new int[11];
        for (int i=0; i<info.length;i++){
            if (info[i]>0) apeechPoint+= 10 - i;
            costs[i] = info[i] + 1;
        }
        getComb(costs, 0, n, -apeechPoint, new int[11]);
        if (comb == null) {comb = new int[] {-1};}
        return comb;
    }
}