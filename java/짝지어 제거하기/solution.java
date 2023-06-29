import java.util.Stack;

class Solution
{
    public int solution(String s){   
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (stack.size() == 0 || stack.peek() != c) stack.add(c);
            else stack.pop();
        }

        return stack.size() > 0 ? 0 : 1;
    }
}