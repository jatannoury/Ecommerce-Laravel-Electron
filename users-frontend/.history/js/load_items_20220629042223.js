let items = JSON.parse(localStorage.getItem("items"));
let main = document.getElementById("box_c");

document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";
let likes = JSON.parse(localStorage.getItem("likes"));
function getInfo(like, items) {
  Object.keys(items).forEach((key) => {
    console.log(items[key]["id"], like.item_id);
    if (items[key]["id"] === like.item_id) {
      console.log(like);
      like.name = items[key]["name"];
      like.price = items[key]["price"];
      console.log(like);
      console.log(items);
      delete items[key];
      console.log(items);
    }
  });
}

Object.keys(likes).forEach((key) => {
  getInfo(likes[key], items);

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
                            <i class="fas fa-star star" onclick={e=>{
                              remove_like(this)}></i>
                              window.location.href="
                            }
                        </div>
                        
                    </div>
                </div>
    
               `;

  main.appendChild(x);
});
Object.keys(items).forEach((key) => {
  const x = document.createElement("div");
  x.id = "box";
  x.innerHTML = `
           
                <div class="box-2">
                    <img src="../assets/Groceries.jpg" />
                    <div class="informations">
                        <div>
                            <h3>${items[key]["name"]}</h3>
                            <h6>${items[key]["price"]}$</h6>
                        </div>
                        <div>
                            <i class="far fa-star star"  onclick=add_like(this)></i>
                        </div>
                        
                    </div>
                </div>
    
               `;

  main.appendChild(x);
});
