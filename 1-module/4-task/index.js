function checkSpam(str) {
  str = str.toLowerCase();
  let targetX = "xxx";
  let targetBet = "1xbet";

  let pos = -1;
  while ((pos = str.indexOf(targetX, pos + 1)) != -1) {
    return true;
  }
  while ((pos = str.indexOf(targetBet, pos + 1)) != -1) {
    return true;
  }
  return false;
}
