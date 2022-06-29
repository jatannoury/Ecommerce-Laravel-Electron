let headers = {};
headers["Authorization"] = "Bearer " + localStorage.getItem("token");
axios({
  method: "POST",
  url: "http://127.0.0.1:8000/api/v1/user/profile",
  headers: headers,
}).then(function (json) {
  axios({
    method: "POST",
    url: `http://127.0.0.1:8000/api/v1/user/get_likes?user_id=${json.data["id"]}&cat_id=${localStorage.getItem("category_id")}`,
    headers: headers,
  }).then(function (json) {
    console.log(json.data.likes);
    localStorage.setItem("likes", JSON.stringify(json.data.likes));
  });
});

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
Object.keys(items).forEach((key) => {
  let state = searchForLike(likes, items[key]["id"]);
  console.log(state);
  const x = document.createElement("div");
  x.id = "box";
  if (state) {
    x.innerHTML = `
           
                <div class="box-2">
                    <img src="../assets/Groceries.jpg" />
                    <div class="informations">
                        <div>
                            <h3>${items[key]["name"]}</h3>
                            <h6>${items[key]["price"]}$</h6>
                        </div>
                        <div>
                            <i class="fas fa-star star" ></i>
                        </div>
                        
                    </div>
                </div>
    
               `;
  } else {
    x.innerHTML = `
           
                <div class="box-2">
                    <img src="../assets/Groceries.jpg" />
                    <div class="informations">
                        <div>
                            <h3>${items[key]["name"]}</h3>
                            <h6>${items[key]["price"]}$</h6>
                        </div>
                        <div>
                            <i class="far fa-star star" onclick=add_like(this) ></i>
                        </div>
                        
                    </div>
                </div>
    
               `;
  }
  main.appendChild(x);
});
