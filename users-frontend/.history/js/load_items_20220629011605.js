let items = JSON.parse(localStorage.getItem("items"));
console.log(items);
let main = document.getElementById("box_c");
console.log(items);
document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";
let likes = JSON.parse(localStorage.getItem("likes"));
console.log(likes);
function searchForLike(likes, id) {
  for (let i = 0; i < likes.length; i++) {
    if (likes[i]["item_id"] == id) {
      return true;
    }
  }
  return false;
}

setTimeout(()=>{

},1000)