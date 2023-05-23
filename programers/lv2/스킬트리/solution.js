function solution(skill, skill_trees) {
  const skillObj = {};
  [...skill].forEach((v, i) => {
    skillObj[v] = i + 1;
  });
  function check(st) {
    let tech = 1;
    for (let i = 0; i < st.length; i++) {
      if (!skillObj[st[i]]) continue;
      if (skillObj[st[i]] === tech) tech++;
      else return false;
    }
    return true;
  }
  return skill_trees.filter((st) => check(st)).length;
}
