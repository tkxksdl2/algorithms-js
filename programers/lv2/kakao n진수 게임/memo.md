## [2018 KAKAO n진수 게임](https://school.programmers.co.kr/learn/courses/30/lessons/17687)

---

입력변수가 많아 복잡해보이지만 간단히 만들 수 있는 문제이다.

사람들은 숫자를 n진수 변환한 뒤 앞숫자부터 하나 씩 말한다. 이때 각각의 숫자를 따로 생각하면 복잡해지지만 숫자를 한꺼번에 생각하면 간단하다. i번째 나오는 숫자는 n진수 변환한 문자를 뒤쪽으로 쭉 이어붙였을 때 i-1 번째에 존재한다.

따라서 숫자를 이어붙일 문자열 sNum을 선언하고, 앞으로 나올 숫자를 하나씩 변환하여 뒤에 이어붙인다. 참조해야 할 숫자의 위치가 아직 sNum에 존재하지 않는다면 존재할 때 까지 이어붙인다.

여기서 참조해야 할 위치는 튜브가 말해야 하는 숫자의 위치로, 처음에는 p-1이고 그 후로부터는 m 만큼 증가한다. 이에 따라 튜브가 t번 숫자를 말할 동안 올바른 숫자의 위치를 참조하고, 숫자의 위치가 존재하지 않는다면 다음 수를 문자열 뒤에 이어붙이면 된다.
