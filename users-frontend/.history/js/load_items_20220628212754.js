let items = localStorage.getItem("items");
let main = document.getElementById("box_c");
console.log(items);
document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";

for (let i = 0; i < items.length; i++) {
  console.log(items);
  const x = document.createElement("div");
  x.id = "box";
  x.innerHTML = `
           
                <div class="box-2">
                    <img src="../assets/Groceries.jpg" />
                    <div class="informations">
                        <div>
                            <h3>${items[i]["name"]}</h3>
                            <h6>${items[i]["price"]}$</h6>
                        </div>
                        <div>
                            <i class="far fa-star star" onclick=add_like(this)></i>
                        </div>
                        
                    </div>
                </div>
    
               `;
  main.appendChild(x);
}
