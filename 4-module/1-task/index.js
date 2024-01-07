function makeFriendsList(friends) {
  let dom = document.createElement("ul");
  for (let arr of friends) {
    let li = document.createElement("li");
    li.innerHTML = `${arr.firstName} ${arr.lastName}`;
    dom.append(li);
  }
  return dom;
}
