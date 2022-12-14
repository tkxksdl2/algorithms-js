## [유사 칸토어 비트열](https://school.programmers.co.kr/learn/courses/30/lessons/118668)

---

비트열에 관한 문제. 인덱싱에서 실수가 있어서 과하게 오래 걸린것이 아쉽다.

이 비트열은 5개 단위로 증가하며, 11011이 기본형태이다. 즉 다섯 개 부분으로 나뉘어져 있으며 이중 1인 네 부분이 똑같은 방법으로 늘어나고, 0인부분은 0으로만 5개가 채워진다.

만약 최대 n인 20의 비트열을 직접 만들면 5\*\*20 자릿수의 숫자가 나오므로 직접 구현하는것은 비효율적이다. 따라서 나는 비트열을 역으로 분할해가는 로직을 만들었고, 전체 5 부분 중 가운데 0 부분을 제하고 나머지 부분을 자체로 분할해가며 최종적으로 1점씩을 추가하여 답을 구했다.

추가로 다른 사람의 풀이 중 매우 효율적이고 재미있는 코드를 발견해 기록한다.

```javascript
function solution(n, l, r) {
  let answer = 0;
  for (let i = l - 1; i <= r - 1; i++) {
    if (!i.toString(5).match("2")) answer += 1;
  }
  return answer;
}
```

이 비트열을 무한히 이어나갔을 때 각 자릿수를 보면 다음과 같다.

    11011
    1101111011000001101111011
    ...

즉 어느 단위든 5개로 나뉘어져 있고, 이중 (0부터 시작해서) 2 번째 단위에는 항상 0이 있다. 여기서 모든 인덱스를 5진수로 표현하면 이렇게 나온다.

    0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, ...

놀랍게도 5진수 인덱스에 2가 포함된 모든 비트열 위치에는 항상 0이 있다. 5진수 인덱스의 어느 자릿수에든 2가 있으면 이는 비트열 규칙에서 0이 나타나는 자리가 되는 것이다. 이는 5진수에서 2가 나타나는 규칙이 위 비트열에서 0이 나타나는 규칙과 정확히 일치하기 때문이다.
