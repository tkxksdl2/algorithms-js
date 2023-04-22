//최대공약수
function gcd(n1, n2) {
  return n1 % n2 ? gcd(n2, n1 % n2) : n2;
}

//최소공배수
function lcm(n1, n2) {
  return (n1 * n2) / gcd(n1, n2);
}
