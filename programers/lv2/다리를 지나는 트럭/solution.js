function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let [qHead, bHead] = [0, 0];
  let cur_weight = 0;
  while (qHead < truck_weights.length || bHead < truck_weights.length) {
    if (
      truck_weights[bHead] + cur_weight <= weight &&
      bHead - qHead < bridge_length
    ) {
      cur_weight += truck_weights[bHead];
      truck_weights[bHead] = [truck_weights[bHead], answer + bridge_length];
      answer++;
      bHead++;
    } else if (qHead < bHead) {
      let [w, t] = truck_weights[qHead];
      answer = Math.max(t, answer);
      cur_weight -= w;
      qHead++;
    }
  }
  return answer + 1;
}
