## [124 나라의 숫자](https://school.programmers.co.kr/learn/courses/30/lessons/12899)

---

언뜻 보면 3진법 숫자로 보이지만, 일반적인 3진법과는 다르게 0이 존재하지 않고 각각의 자릿수에 모든 순번이 영향을 끼친다.

예를들어 첫 번째 자릿수는 1번째 순번부터 시작하여 1이 증가할 때 마다 1, 2, 4 로 변화한다.

두 번째 자릿수는 4번째 숫자에서부터 생기며, 3이 증가할 때 마다 1, 2, 4 순서대로 변화한다.

즉 n번째 자릿수는 3 ** (n-1) 번 째 숫자 이후부터 3 ** (n-1)번 마다 변화한다.

이러한 특성을 이용해 124 숫자를 첫 번째 자릿수부터 구할 수 있다. 첫 번째 자릿수는 3 ** 0 = 1 부터 3 ** 0 = 1 마다 변화하므로, 전체 숫자를 3으로 나눈 나머지가 해당 자릿수의 순번이다. 이 때, 나머지가 1, 2, 0 일때 해당하는 숫자는 각각 1, 2, 4 이다.

다음 자릿수를 계산하기 위해서는 해당 자릿수가 존재하지 않는 순번을 지워줘야 한다. 2 번째 자릿수는 3 \*\* 1 = 3 번째 숫자 이후부터 나타나므로 n에서 해당 순번을 빼주어야 한다.

따라서 n -= 3 이 되고 이는 4번째 숫자부터 확인하겠다는 의미와 같다. 여기서 두 번째 자릿수는 3 \*\* 1 = 3 번 마다 변화하므로 Math.ceil(n/3)을 하면 두 번째 자릿수 숫자가 몇 번 변했는지 알 수 있다. 이 변한 횟수를 다시 3으로 나눈 나머지로 두 번째 자릿수 숫자를 구한다.

이를 반복하면, (해당 자릿수에 숫자가 나온 순번) 부터 (해당 자릿수의 숫자가 변화한 횟수)를 알 수 있으며, 이에 따라 각 자릿수에 숫자를 할당하면 된다.
