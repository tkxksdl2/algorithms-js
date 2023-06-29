package java.배달;
import java.util.*;

class Solution {
    public int solution(int N, int[][] road, int K) {
        int answer = 0;
        int blocked = 500001;
        int[][] dist = new int[N+1][N+1];
        for(int i = 0; i<dist.length; i++){
            Arrays.fill(dist[i], blocked);
        }
        dist[1][1] = 0;

        for(int[] r : road){
            if(dist[r[0]][r[1]] > r[2]) dist[r[0]][r[1]] = r[2];
            if(dist[r[1]][r[0]] > r[2]) dist[r[1]][r[0]] = r[2];
        }

        boolean visited[] = new boolean[N+1];
        Arrays.fill(visited, false);
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1);
        visited[1] = true;

        while(queue.size() > 0){
            int i = queue.poll();
            for (int j = 1; j <= N; j++){
                if(dist[1][j] > dist[1][i] + dist[i][j])
                    dist[1][j] = dist[1][i] + dist[i][j];
            }

            int cur = 0; int minVal = blocked;
            for (int k = 2; k<=N; k++){
                if (dist[1][k] < minVal && !visited[k]){
                    cur = k;
                    minVal = dist[1][k];
                }
            }
            if (cur > 0) {
                queue.add(cur);
                visited[cur] = true;
            }
        }

        for(int i = 1; i <= N; i++){
            if (dist[1][i] <= K) answer++;
        }
        return answer;
    }
}