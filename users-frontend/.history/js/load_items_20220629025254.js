let items = JSON.parse(localStorage.getItem("items"));
console.log(items);
let main = document.getElementById("box_c");
console.log(items[0]['id']);
document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";
let likes = JSON.parse(localStorage.getItem("likes"));
console.log(likes);
function getInfo(like, items) {
  Object.keys(items).forEach((key) => {
    console.log(items[key]["id"]);
    if (items[key]["id"] == like.id) {
      like.name = items[key]["name"];
      like.price = items[key]["price"];
      console.log(like);
    }
  });
}

Object.keys(likes).forEach((key) => {
  console.log(likes[key]);
  getInfo(likes[key], items);
  console.log(likes[key]);

  const x = document.createElement("div");
  x.id = "box";
  x.innerHTML = `
           
                <div class="box-2">
                    <img src="../assets/Groceries.jpg" />
                    <div class="informations">
                        <div>
                            <h3>${likes[key]["name"]}</h3>
                            <h6>${likes[key]["price"]}$</h6>
                        </div>
                        <div>
                            <i class="fas fa-star star" ></i>
                        </div>
                        
                    </div>
                </div>
    
               `;

  main.appendChild(x);
});
