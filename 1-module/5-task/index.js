function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1);
    str = str + "…";
    return str;
  }
  return str;
}
