import java.util.Arrays;

class Solution {
    int answer = 0;

    public int solution(int n) {    
        boolean[][] plate = new boolean[n][n];
        for (boolean[] row : plate) Arrays.fill(row, false);

        dfs(plate,0,n);

        return answer;   
    }

    void dfs(boolean[][] plate, int y, int n){
        if (y >= n){
            answer++;
            return;
        }

        for(int x = 0; x < n; x++){
            if (isValid(plate, y, x)){
                plate[y][x] = true;
                dfs(plate, y+1, n);
                plate[y][x] = false;
            }
        }
    }

    boolean isValid(boolean[][] plate, int y, int x) {
        int[] dy = {1, -1, 0, 0, -1, -1, 1, 1};
        int[] dx = {0, 0, -1, 1, -1, 1, -1, 1};
        int n = plate.length;

        for (int i = 0; i<8; i++){
            int cy = y + dy[i];
            int cx = x + dx[i];
            while(0 <= cy && cy < n && 0<= cx && cx < n){
                if (plate[cy][cx]) return false;
                cy += dy[i];
                cx += dx[i];
            }
        }
        return true;
    }
}