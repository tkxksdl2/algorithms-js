## [코딩테스트 연습 다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

---

처음에 트럭의 순서가 미리 정해져있다는 사실을 빼먹어서 의도치 않게 한참 고생했다.

이 문제를 하나의 배열에서 index만으로 해결하기 위해서는 두 개의 index가 필요하다. 하나는 다음으로 진입할 트럭의 index인 bHead, 하나는 다음으로 탈출할 트럭의 index인 qHead이다. 현재 시간은 answer에 저장되어있다.

우선 순서대로 bHead를 증가시켜가며 하나씩 트럭을 진입시킨다. 이때 진입한 트럭은 트럭 무게와 함께 트럭이 탈출할 시간도 기록한다. 트럭이 탈출할 시간은 현재시간 + 다리의 길이이다. 트럭이 진입할 때 마다 현재 시간을 +1 시켜준다.

어느 시점에서 더이상 트럭을 진입시킬 수 없다면, (다리의 무게 초과 혹은 다리의 길이만큼 트럭이 꽉 참) qHead를 증가시켜가며 하나 씩 트럭을 탈출시킨다. 이 때 현재 시간을 탈출할 트럭에 저장되있는 탈출 시간으로 갱신시킨다. 이 때문에 한 트럭의 무게가 매우 커서 다리에 빈 공간이 매우 많더라도 시간을 일일히 1씩 증가시킬 필요가 없이 점프가 가능하다.

그런데 어떤 경우에는 트럭이 진입할 때 +1되는 시간보다 탈출할 트럭에 기록된 시간이 더 작아 시간이 일치하지 않는 경우가 생기는 것을 확인했다. 이 경우를 방지하기 위해 탈출 시간을 갱신할 때 현재 answer와 탈출시간 쪽 더 큰 것으로 갱신하도록 하니 해결되었다.
