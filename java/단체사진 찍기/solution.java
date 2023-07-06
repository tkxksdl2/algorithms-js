import java.util.*;

class Solution {
    int answer = 0;
    boolean [][][] condition = new boolean[8][8][8];
    public int solution(int n, String[] data) {
        List<Character> charIndex = new ArrayList<Character>(
            Arrays.asList('A', 'C', 'F', 'J', 'M', 'N', 'R', 'T'));
        Arrays.stream(condition).forEach(dim2 -> Arrays.stream(dim2)
            .forEach(dim3 -> Arrays.fill(dim3, true)));

        for (String d : data){
            int a = charIndex.indexOf(d.charAt(0));
            int b = charIndex.indexOf(d.charAt(2));
            char type = d.charAt(3);
            int num = Character.getNumericValue(d.charAt(4));

            boolean[][] targets = new boolean[][] {condition[a][b], condition[b][a]};
            switch (type){
                case '=':
                    for (boolean[] target : targets){
                        for(int i =0; i<target.length; i++){
                            if (i != num) target[i] = false;
                        }
                    }
                    break;
                case '>':
                    for (boolean[] target : targets){
                        for(int i =0; i<target.length; i++){
                            if (i <= num) target[i] = false;
                        }
                    }
                    break;
                case '<':
                    for (boolean[] target : targets){
                        for(int i =0; i<target.length; i++){
                            if (i >= num) target[i] = false;
                        }
                    }
                    break;
            }
            
            boolean status = false;
            for (boolean t : targets[0]) if (t) status = true;
            if(!status) return 0;
        }

        Stack<Integer> q = new Stack<Integer>();
        boolean[] used = new boolean[8];
        Arrays.fill(used, false);
        dfs(q, used, 1);

        return answer;
    }

    void dfs (Stack<Integer> q, boolean[] used, int depth){
        if (depth > 8) {
            answer++;
            return;
        }
        for (int b =0; b < 8; b++){
            if (used[b]) continue;
            boolean isValid = true;
            for (int aIndex = 0; aIndex <q.size(); aIndex++){
                int a = q.get(aIndex);
                int bIndex = q.size();
                int dist = Math.abs(aIndex - bIndex) - 1;
                if (!condition[a][b][dist]){
                    isValid = false;
                    break;
                }
            }
            if (!isValid) continue;
            q.add(b);
            used[b] = true;
            dfs(q, used, depth+1);
            used[b] = false;
            q.pop();
        }
    }
}