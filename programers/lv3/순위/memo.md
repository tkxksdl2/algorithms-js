## [순위](https://school.programmers.co.kr/learn/courses/30/lessons/49191)

---

그래프 관련 문제. 그래프의 간선은 오직 승-패 정보만을 가지고 있다.

어떤 사람의 순위를 알 수 있다는 것은, 그 사람과 다른 나머지 모두와의 승패관계를 알 수 있다는 것을 말한다.

하지만 직접적으로 그 사람과 나머지 사람과의 승패를 알 수 없는 경우에는 그 사이에 있는 제3자와의 관계를 조회해서 승패를 알아내야 한다.

때문에 이 문제에는 플로이드 와샬 알고리즘을 적용할 수 있다. 플로이드 와샬 알고리즘이 바로 어떤 노드와 목표 노드, 중간노드 사이의 관계를 구하는 알고리즘이기 때문이다.

보통의 플로이드 와샬 알고리즘은 A -> C 의 비용과 (A -> B) + (B -> C) 비용을 비교한다. 하지만 이 문제는 간선이 오직 승-패 정보만을 가지고 있다. 여기서 A 가 B 에게 이길 경우 A -> B = 1이고, 반대로 졌을 경우는 A -> B = -1이다.

여기서 플로이드 와샬 알고리즘으로 간선을 갱신하는 경우는 다음과 같다. A -> B = 1 && B -> C = 1 일 때 A -> C = 1

반대로 A -> B = -1 && B -> C = -1 일 때 A -> C = -1

즉 연속적인 승리 혹은 패배 관계가 발생한다면 직접적으로 A -> C 의 관계를 갱신할 수 있다. 이렇게 함으로 모든 노드에서 O(1)로 다른 모든 노드와의 승패관계를 조회할 수 있다.

따라서 어떤 노드에서 이렇게 얻은 승패관계 (-1 혹은 1)의 정보량이 정확히 n-1개라면 그 노드의 순위를 정확히 안다고 할 수 있다.
