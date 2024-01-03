function getMinMax(str) {
  let arr = str
    .split(" ")
    .filter((str) => +str)
    .map((str) => +str)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

  let last = arr.length - 1;
  let max = arr[last];
  let min = arr[0];

  return { min, max };
}
