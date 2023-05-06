function solution(n, computers) {
  var answer = 0;
  const connected = new Array(n).fill(false);
  for (let node = 0; node < n; node++) {
    if (!connected[node]) {
      answer++;
      bfs(node);
    }
  }
  return answer;

  function bfs(node) {
    const queue = [node];
    for (let i = 0; i < queue.length; i++) {
      let curN = queue[i];
      connected[curN] = true;
      for (let nextN = 0; nextN < n; nextN++) {
        if (curN !== nextN && computers[curN][nextN] && !connected[nextN]) {
          queue.push(nextN);
        }
      }
    }
  }
}
