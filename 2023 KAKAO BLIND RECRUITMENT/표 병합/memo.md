## [표 병합](https://school.programmers.co.kr/learn/courses/30/lessons/150366)

---

로직 자체는 크게 어렵지 않지만 구현할 코드 줄수가 많아 착실하게 써야하는 문제이다. 나는 merge를 parents와 child로 구성했는데, 실제 값은 root가 되는 parents cell만 가지고 있고, 나머지 cell들은 이 값을 참조하는 것으로 구현을 했다.

어떤 cell들을 merge 하거나 unmerge할 때, 그 cell들이 이미 merge되어있어 실제 값을 가지고 있지 않을 경우가 있었다. 이것을 일일히 구현하자니 코드 수가 많이 길어져서, findRoot()라는 메서드를 작성하니 줄수를 많이 절약할 수 있었다.

코드 줄수가 길어지다 보니 집중력도 떨어지고 아무래도 잔실수도 많이 하게 되었다. 참조 인덱스 c1 하나를 r2로 잘못써서 몇 시간정도 고생한것같다..
