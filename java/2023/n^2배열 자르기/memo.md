## [n^2 배열 자르기](https://school.programmers.co.kr/learn/courses/30/lessons/87390)

---

규칙을 찾는 간단한 문제. 문제의 index 제한사항이 매우 크므로 실제 배열을 구현하는것은 불가능하다.

1차원 배열의 index i가 주어졌을 때, 그 index가 2차원에서 몇행 몇열이 되는지는 간단하다. 2차원 정방형 배열의 크기 n일 때 행은 i / n, 열은 i % n이다.

문제의 규칙에 따르면 row 번 째 행의 값 중에서 row 번 째 까지의 값은 row+1 이다. 즉 0부터 시작해서 2번째 행이라면, 그 행에서 0~2번째 값 까지는 전부 3이다. 그 이후 값은 n까지 순차적으로 올라간다.

따라서 열의 값 col이 row 이하라면 그 위치의 값은 row + 1이며 row 보다 크다면 col + 1 이 된다. 더 단순화하면 row+1 과 col+1 중에 더 큰 값이 선택된다고 할 수 있다.
