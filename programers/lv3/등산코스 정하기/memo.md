## [2022 kakao Internship - 등산 코스 정하기](https://school.programmers.co.kr/learn/courses/30/lessons/118669)

---

경로탐색 문제에 여러 부분을 비틀은 문제. 코드는 스스로 짰지만 풀이는 힌트를 구했다.

이 문제를 푸는 데에 중요한 점은 다음과 같다.

1. 만약 올라가는 길이 최적이라면 돌아오는 길에도 그 길을 사용할 수 있으므로 돌아오는 길은 생각할 필요가 없다.

2. 따라서 경로 내에 gate는 반드시 하나, summit도 반드시 하나이다. 이 둘은 시작과 끝에 존재해야만 한다.

3. answer가 될 수 있는 값을 검증하는 것은 경로 내 가장 큰 weight 값 intensity와 summit의 번호이다. 경로의 길이와 출발 지점은 중요하지 않다..

걸림돌이 되었던 부분은 첫 째 경로를 어떻게 초기화할 것인가였다. 노드의 수가 상당히 많기 때문에 경로를 2차원 배열로 저장할 경우 메모리 초과가 일어날 수 있었다.

때문에 존재하는 경로만을 object를 이용해 저장해야만 했다. 거기에 추가로, 이 문제에서 paths는 기본적으로 양쪽 경로이지만, 위의 2번 조건을 생각하면 **모든 노드에서 양쪽일 필요는 없다.**

gate노드에서는 밖으로 나가는 경로만, summit 노드에서는 안으로 들어오는 경로만 생각해도 무방하다. 이를 이용해 나중에 각 경로를 검사 할 때 복잡한 조건문을 사전에 방지할 수 있다.

```javascript
for (let i = 0; i <= n; i++) pathObj[i] = {};
for ([s, e, w] of paths) {
  let [sToE, eToS] = [true, true];
  if (gates.has(s)) eToS = false;
  if (gates.has(e)) sToE = false;
  if (summits.has(s)) sToE = false;
  if (summits.has(e)) eToS = false;

  if (sToE) pathObj[s][e] = +w;
  if (eToS) pathObj[e][s] = +w;
}
```

다음으로 문제가 된 부분은 경로탐색을 할 때 무엇을 기준으로 중복 검사 혹은 가지치기를 할 것인지이다. 이 문제는 시작 지점과 목표 지점이 둘 다 여러 개이기 때문에, 여러 분기에 공통적으로 적용되는 visited 맵을 만들 수가 없었다.

이는 다익스트라 알고리즘을 조건에 맞게 약간 변형하여 해결 가능했다. 본래 다익스트라 알고리즘은 특정 노드에서 노드까지의 최소 비용을 저장하지만, 이 문제의 경우는 노드 \* 노드의 맵을 만드는 것이 메모리상 불가능하기 때문에, 1차원 배열로 각 노드번호를 할당하고 그 노드까지 도달할 때의 최소 intensity를 저장한다. 이것이 가능한 것은 문제에서 출발 gate가 어디인지는 요구하지 않기 때문이다. 결과적으로 어떤 summit에 도달하고 거기까지의 intensity만 반환하면 충분하다.

따라서 경로탐색 BFS를 돌 queue를 만들면서 이 최소 Intensity에 대한 초기화도 진행했다. gate에서의 기본 intensity는 0 이며, 이 값들이 BFS의 시작 값이다.

```javascript
const minIntensity = new Array(n + 1).fill(Infinity);
const queue = [];
for (i of gates) {
  minIntensity[i] = 0;
  queue.push([i, 0]);
}
```

이후는 BFS를 돌며 다음 경로를 탐색한다. 다음 경로로 돌면서 현재 가지고 있는 weight 값을 더 큰값으로 바꾼다. 이 때 바꿔진 이후 값 (즉 현재 경로까지의 최고 weight = intensity) 가
현재 minIntensity의 도착한 위치의 intensity보다 작다면, 지금 상태를 queue에 추가하면서 minIntensity를 갱신한다. 그렇지 않다면 이 경로는 최적이 아닌 경로를 사용했으므로 분기가 중지된다.

그렇게 경로를 돌다가 현재 도착한 곳이 summit들 중 하나라면, answer와 비교해서 answer를 갱신한다. 이 때 Intensity가 작거나, Intensity가 같으면서 summit 번호가 작은 경우가 우선된다.

```javascript
for (qIndex = 0; qIndex < queue.length; qIndex++) {
  const [nodeI, weight] = queue[qIndex];
  for (let [destination, curWeight] of Object.entries(pathObj[nodeI])) {
    // 현재 intensity 갱신
    if (weight > curWeight) curWeight = weight;
    // minIntensity 이용해서 현재 경로가 저장된 값에 비해 효율적인지 판단.
    // 아니라면 아무 분기도 이어지지 않는다.
    if (curWeight < minIntensity[+destination]) {
      minIntensity[+destination] = curWeight;
      // 도착한곳이 summit 이면서, Intensity가 현재 answer보다 작거나, 같으면서 summit 번호가 작다면
      // answer가 갱신된다.
      if (
        summits.has(+destination) &&
        (curWeight < answer[1] ||
          (curWeight === answer[1] && +destination < answer[0]))
      ) {
        answer = [+destination, curWeight];
        // 현재 경로가 효율적이면서, summit이 아니므로, 다음 경로로 추가된다.
      } else queue.push([+destination, curWeight]);
    }
  }
}
return answer;
```
