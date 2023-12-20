function ucFirst(str) {
  if (str.indexOf(" ") !== -1) {
    return false;
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
