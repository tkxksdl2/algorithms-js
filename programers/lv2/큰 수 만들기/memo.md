## [코딩테스트 연습 큰 수 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/42883#qna)

---

숫자의 순서는 정해져있으므로, 스택을 활용해 문제를 풀 수 있다.

숫자를 하나씩 지워가면서 가장 큰 수를 만드려면, 가급적 큰 숫자가 배열의 앞에 위치할 필요가 있다.

그말인 즉 앞에서부터 순회를 돌면서, 특정 숫자가 뒤에 나올숫자보다 작다면, 그 숫자를 지우는게 유리하다는 의미이다.

따라서 스택에 number의 숫자를 하나씩 넣어주면서, 숫자를 넣기 전에 스택의 마지막 숫자가 추가될 숫자보다 작다면, 그렇지 않을 때 까지 스택의 마지막 숫자를 지워준다. 이렇게 k가 전부 소진될때까지 반복한다.

때로는 위 동작을 전부 수행했음에도 k가 소진되지 않은 경우가 생긴다. 이 때 숫자는 내림차순으로 정렬되어있는것과 같은 형태이므로, 남은 k 만큼 숫자의 뒷자리를 지우면 된다.
