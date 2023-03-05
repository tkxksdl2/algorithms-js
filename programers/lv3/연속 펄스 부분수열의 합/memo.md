## [연속 펄스 부분 수열의 합](https://school.programmers.co.kr/learn/courses/30/lessons/161988)

---

먼저 두 가지 경우의 펄스 수열을 만든다. 각각 홀수열이 -1인 경우, 짝수열이 -1인 경우이다.

이제 두 가지 경우의 펄스 수열에서 최대가 되는 구간을 구하면 된다. 최대가 되는 구간을 구하려면 인덱스 0에서부터 값을 누적해나가면서 누적값이 가장 큰 위치의 누적값에서 누적값이 가장 작은 위치의 누적값을 빼준다. 즉 누적수열에서 누적합이 가장 큰 부분에서 누적합이 가장 작은 부분까지를 잘라주면 해당 구간의 총합이 가장 크다.

유의할 점은 minSum의 경우 최초값이 0이어야 한다. 이는 부분수열이 잘라지지 않을 수도 있기 때문이다. 즉 최대가 될 부분수열 구간이 인덱스 0에서부터 시작할 경우, 부분수열은 좌측에서 잘리지 않는다.

그런데 이런 의문이 들 수 있다. 최소가 되는 위치가 최대가 되는 위치보다 더 우측에 있다면 어떻게 되는가?
이는 반대의 경우의 펄스 수열을 확인함으로 해결된다.

예를 들어, purseA에서 maxSum과 minSum이 각각 8, -2 라고 한다면, purseB에서 모든 값과 누적값은 purseA의 반대가 되므로 maxSum과 minSum은 2, -8 이며 그 위치도 반대이다. 때문에 만약 max와 min의 위치가 반대가 되어서 max-min이 마이너스인 구간을 가지더라도, 내부의 값들은 반대 펄스 수열의 값의 마이너스가 되므로, 두 경우 모두 결과값은 10으로 똑같다. 그러므로 실제 maxSum의 위치와 minSum의 위치가 어디든 상관 없이 가장 큰 경우의 구간합을 구할 수가 있다.

그렇다면 사실 purseA와 purseB로 두 가지의 펄수 수열을 만들 필요도 없는 것이다. 어떤 수열을 고르든 최대 누적합에서 최소 누적합을 빼는 것은 그 구간의 누적합이 가장 큰 경우의 결과를 만들어낸다. 따라서 아래와 같이 코드를 간략화 할 수도 있다.

```javascript
function solution(sequence) {
  let answer = -Infinity;
  let maxSum = 0;
  let minSum = 0;
  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    i % 2 === 1 ? (sum += sequence[i]) : (sum -= sequence[i]);
    maxSum = Math.max(maxSum, sum);
    minSum = Math.min(minSum, sum);
  }
  answer = Math.max(maxSum - minSum, answer);
  return answer;
}
```
