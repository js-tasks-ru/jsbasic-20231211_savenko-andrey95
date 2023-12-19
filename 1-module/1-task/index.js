function factorial(n) {
  for (let i = n - 1; i >= 1; --i) {
    n *= i;
  }
  if (n == 0) {
    n = 1;
  } else if (n == 1) {
    n = 1;
  }
  return n;
}
