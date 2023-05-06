import java.util.*;

class Solution {
    public String[] solution(int[][] line) {
        List<long[]> points = new ArrayList<long[]>();
        long x1, x2, y1, y2;
        x1 = y1 = y2 = x2 = 0;
        for(int i=0; i<line.length-1; i++){
            for(int j=i+1; j<line.length; j++){
                double a = line[i][0]; double b = line[i][1]; double e = line[i][2];
                double c = line[j][0]; double d = line[j][1]; double f = line[j][2];
                if (a*d - b*c == 0) continue;
                double x = (b*f - e*d)/ (a*d - b*c);
                double y = (e*c - a*f)/ (a*d - b*c);
                if (x%1 == 0.0 && y%1 == 0.0 ){
                    long xi = (long)x; long yi = (long) y;
                    if (points.size() == 0){
                        x1 = x2 = xi;
                        y1 = y2 = yi;
                    }else{
                    x1 = Math.min(x1, xi); x2 = Math.max(x2, xi);
                    y1 = Math.min(y1, yi); y2 = Math.max(y2, yi);
                    }
                    long[] point = {xi, yi};
                    points.add(point);
                }
            }
        }
        char[][] chrArr = new char[(int)(y2-y1+1)][(int)(x2-x1+1)];
        for (char[] arr : chrArr) Arrays.fill(arr, '.');
        for (long [] point : points) chrArr[(int)(point[1]-y1)][(int)(point[0]-x1)] = '*';
        String[] answer = new String[chrArr.length];
        for (int i=0; i<answer.length; i++) answer[i] = new String(chrArr[chrArr.length-1-i]);

        return answer;
    }
}