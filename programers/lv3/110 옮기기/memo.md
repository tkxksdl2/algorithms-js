## [110 옮기기](https://school.programmers.co.kr/learn/courses/30/lessons/77886)

---

스택을 활용하는 문제. 규칙을 잘 파악하는것이 중요하다.

110이라는 숫자 배열 특성상 110이 존재하지 않는 문자열의 어떤 위치에 110을 추가해도 그 양옆에 새로운 110이 생길 수 없다. 또한 110을 어떤 식으로 삽입하던지 110110..형태로 변형할 수 있다.

다음과 같은 숫자에 110을 추가해보자.

    100 -> 100110

위 숫자에서 가장 작은 숫자를 만들려면 가장 끝에 추가하면 된다. 여기서 이상한 위치에 110을 추가한다고 치자.

    100 -> 1001[110]10
    -> 100[110]110

110을 추가함에 따라 다른 숫자와 연계되어 새로운 110이 생기지 않았다. 또한 의도적으로 이상한 위치에 삽입해도 규칙에 따라 자동적으로 110110..형태로 정렬되는것을 알 수 있다.

따라서 일단 존재하는 문자열에서 모든 110을 제거한 후 남은 문자열의 최적 위치에 모든 110을 몰아주는 것으로 문제를 풀 수 있다.

---

그런데 문자열에서 110을 제거할 때 다음과 같이 연속적으로 110이 나타날 수 있다.

    11[110]10 -> 1[110]

문자열 전체를 순회하며 반복적으로 110을 제거한다면 시간초과가 나올 것이다. 다행히 110이라는 문자열은 끝이 항상 0으로 끝나고, 그 이전 두 값만 확인하면 되기 때문에 스택을 만들고 값을 추가해가며 0을 추가할 때 마다 이전 두 값을 확인해주면 가능한 모든 110을 제거할 수 있다.

이렇게 제거가 끝난 후 문자열은 대체로 이러한 모습이 된다.

    10100011111 혹은 10000 혹은 11111111

가능한 모든 110을 제거했기 때문에 문자열의 시작은 0 혹은 10으로 시작하며, 둘 이상의 연속된 1이 존재한다면 항상 끝에 존재한다. 이 연속된 1 이후엔 어떤 0도 존재하지 않는다. 0이 존재했다면 110을 제거할 때 이미 제거되었을 것이다.

이 문자열에 제거된 만큼의 110을 추가해주면 된다. 110은 000보다는 크고 111 보다는 작으므로 저 위치에서 0의 무리와 1의 무리 사이, 즉 뒤에서부터 처음으로 0이 나오는 위치, 0이 없다면 처음 위치에 모든 110을 삽입해주면 된다.
