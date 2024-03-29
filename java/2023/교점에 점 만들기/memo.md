## [교점에 점 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/87377)

---

문제 자체는 어렵지 않고 심지어 식까지 내어주지만 java에 익숙치 않아서 고전했던 문제.

주어진 식에 따라 직선을 조합해서 교첨을 찾는다. 교점이 생기지 않는다면 넘어간다. 교점이 생길 때 마다 교점 y,x 의 최대, 최소를 저장해서 전체 범위를 만들어낸다.

찾아낸 범위만큼 '.'로 가득찬 배열을 만든다. 그리고 저장된 교점을 교점 범위의 상대적 위치로 변환한 후 그 위치를 '\*'로 만든다. 이후 row들을 하나의 String으로 만들어 다시 저장한다. 이 때 주의할 점은 별 구역의 상->하 방향으로 배열의 앞->뒤로 위치해야 한다. 보통 2차원 배열이 반대로 구성된 것을 생각하면 착각할만하다.

이렇게 간단한 문제이지만 java를 이용함으로 굉장히 고전했던 부분은 바로 자료형의 차이 때문이었다. 이 문제는 계산으로 교점이 생성되므로, 상대적 위치로 바꾸기 전 교점은 굉장히 크거나 굉장히 작은 값일 수 있다. 때문에 몇몇 케이스에서 이 교점이 int 자료형 범위를 벗어나는 경우가 있었다.

이를 해결하기 위해 인덱싱을 하기 전 대부분의 계산에서 long 타입을 설정해주었다. 마지막에 상대적 배열에 자리잡을 때에만 int로 형변환을 해주었고, 문제가 해결되었다.
