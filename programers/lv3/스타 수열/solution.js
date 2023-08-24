function solution(a) {
  var answer = 0;
  if (a.length < 2) return 0;

  const map = {};
  a.forEach((n, i) => {
    if (!map[n]) {
      if (i > 0 && a[i - 1] !== n) map[n] = { cnt: 2, bi: i, back: true };
      else if (i < a.length - 1 && a[i + 1] !== n)
        map[n] = { cnt: 2, bi: i, back: false };
      else map[n] = { cnt: 0 };
    } else {
      if (i - map[n]["bi"] > 2) {
        map[n]["cnt"] += 2;
        map[n]["back"] = true;
      } else if (i - map[n]["bi"] === 2) {
        if (map[n]["back"]) {
          map[n]["cnt"] += 2;
        } else if (i < a.length - 1 && a[i + 1] !== n) {
          map[n]["cnt"] += 2;
          map[n]["back"] = false;
        }
      } else if (i < a.length - 1 && a[i + 1] !== n) {
        map[n]["cnt"] += 2;
        map[n]["back"] = false;
      }
    }
    map[n]["bi"] = i;
    answer = Math.max(map[n]["cnt"], answer);
  });
  return answer;
}
