## [여행 경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)

---

일종의 그래프 문제이나 유의할 점은 간선이 단방향이고, 간선의 이용 횟수에 제한이 있다는점이다.

문제가 애매하게 작성되어서 언뜻 착각하기 쉽지만 티켓이란건 기본적으로 일회용이기 때문에 티켓당 한 번만 사용할 수 있고, 추가로 같은 티켓이 여러 장 존재할 수 있다. 그말인 즉 하나의 경로의 이용 횟수에는 제한이 있다고 해석할 수 있다.

시작지점인 "ICN"에서부터 모든 티켓을 사용할 수 있는지를 묻고 있다. 때문에 dfs를 돌아가며 경로를 하나씩 넣어가며, 티켓 수와 동일한 경로 길이가 되면 답을 return한다. 과정 중에 경로를 사용할 때 마다 그 경로의 사용 횟수가 줄고, 0이라면 경로를 사용할 수 없다.

문제는 추가로 조건에 부합하는 경로라도 사전순으로 가장 빠른 것을 요구하고 있다. 이 때 여러 답을 뽑은 다음 정렬하는 방법도 있겠지만, tickets를 미리 도착지 오름차순으로 정렬해놓는다면, 이것을 경로로 만들 때도 작은 순 부터 들어가고, dfs에도서 작은 순부터 들어가므로 자연스레 처음 생성된 답이 사전순으로 가장 빠른 답이된다.
