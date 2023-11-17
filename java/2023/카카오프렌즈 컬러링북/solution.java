import java.util.*;

class Solution {
    Queue<int[]> q = new LinkedList<int[]>();
    boolean[][] checked;
    int[] answer = {0, 0};
    int[] dy = {-1, 1, 0, 0};
    int[] dx = {0, 0, -1, 1};
    
    public int[] solution(int m, int n, int[][] picture) {
        checked = new boolean[m][n];
        
        for(int y=0; y<m; y++){
            for (int x=0; x<n; x++){
                if (checked[y][x]) continue;
                int[] points = {y,x};
                q.add(points);
                checked[y][x] = true;
                answer[0]++;
                bfs(picture[y][x], m, n, picture);
                
            }
        }
        
        return answer;
    }
    
    void bfs(int color, int m, int n, int[][] picture){
        int size = 1;
        while (q.size() > 0){
            int[] points = q.poll();
            int cy = points[0]; int cx = points[1];
            for(int i = 0; i<4; i++){
                int ny = cy + dy[i];
                int nx = cx + dx[i];
                if (ny >= 0 && ny < m && nx >= 0 && nx < n 
                    && !checked[ny][nx] && picture[ny][nx] == color){
                    int[] nPoints = {ny, nx};
                    checked[ny][nx] = true;
                    size++;
                    q.add(nPoints);
                }
            }
        };
        if (color == 0) answer[0]--;
        else answer[1] = Math.max(answer[1], size);
    }
}