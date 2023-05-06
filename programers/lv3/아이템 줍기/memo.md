## [아이템 줍기](https://school.programmers.co.kr/learn/courses/30/lessons/87694/solution_groups?language=javascript&type=my)

---

문제를 풀기 위해서는 먼저 사각형의 테두리 중 외곽선이 되는것이 무엇인지를 정의해야만 한다.

나는 처음에 이를 해결하기 위해서 특정 위치에서 출발하여 어떤 경로를 통해 다시 처음 위치로 돌아왔을 때, 그 길이가 최고가 되는 길이가 외곽선일 것이라고 생각했다. 그러나 실제로 시도해보니 특정 배치에서는 내부 선을 잘 이용하면 외곽선보다 길이가 긴 것을 확인했다.

따라서 이를 좀 더 간단히 생각하여, 외곽선은 다른 어떤 사각형의 내부에 포함되지 않는 선으로 정의했다. 이 문제에서 사각형의 테두리끼리는 직교할 수는 있지만 평행하게 겹치지는 않으므로 사각형의 테두리 내에 존재하는 선분 y1x1 -> y2x2 가 존재할 때, 선분의 양끝점 모두 다른 사각형의 내부에 존재하지 않는다면 이 선분은 외곽선이라고 할 수 있다. 이를 쉽게 검증하기 위해 선분이 특정 사각형 내에 있는지를 확인하는 inIn 함수를 정의했다.

```javascript
function isIn(y1, x1, y2, x2, rec) {
  const [rx1, ry1, rx2, ry2] = rec;
  return (
    ry1 <= y1 &&
    y1 <= ry2 &&
    ry1 <= y2 &&
    y2 <= ry2 &&
    rx1 <= x1 &&
    x1 <= rx2 &&
    rx1 <= x2 &&
    x2 <= rx2
  );
}
```

이 함수를 이용해서 특정 선분이 다른 사각형 내부에 있지 않다면 선분을 저장하고, 아니라면 저장하지 않는 함수 getOutline을 정의했다. lines는 모든 지점에서 가능한 경로를 저장한 배열이다. 이 함수는 선분이 포함된 사각형을 제외한 나머지 사각형의 내부에 선분의 양끝이 모두 들어가는지를 확인하고, lines를 갱신한다.

```javascript
function getOutline(y1, x1, y2, x2, selfI) {
  let isValid = true;
  for (let i = 0; i < rectangle.length; i++) {
    if (i === selfI) continue;
    isValid = isValid && !isIn(y1, x1, y2, x2, rectangle[i]);
  }
  if (isValid) {
    lines[y1][x1].push([y2, x2]);
    lines[y2][x2].push([y1, x1]);
  }
}
```

이 함수들을 이용해 사각형들의 한 변을 길이 1로 분할해 가며 해당 선분들에서 getOutline를 실행했다. 이로서 모든 외곽선이 lines에 저장되고, 이 외곽선은 이후 시작 지점에서 목표 지점으로 도달하는 dfs를 위한 경로가 된다.

```javascript
const lines = new Array(51)
  .fill(0)
  .map(() => new Array(51).fill(0).map(() => new Array()));
for (let k = 0; k < rectangle.length; k++) {
  const [x1, y1, x2, y2] = rectangle[k];
  for (let i = 1; x1 + i <= x2; i++) {
    getOutline(y1, x1 + i, y1, x1 + i - 1, k);
    getOutline(y2, x1 + i, y2, x1 + i - 1, k);
  }
  for (let i = 1; y1 + i <= y2; i++) {
    getOutline(y1 + i, x1, y1 + i - 1, x1, k);
    getOutline(y1 + i, x2, y1 + i - 1, x2, k);
  }
}
```

마지막으로 getCnt 재귀함수를 이용해 dfs를 돌아주었다. 경로는 시계, 반시계방향 둘 뿐이기에 큰 부담이 되지는 않으며 이 경로 중 cnt값이 가장 작은 것이 정답이 된다.
