let items = JSON.parse(localStorage.getItem("items"));
console.log(items);
let main = document.getElementById("box_c");
console.log(items);
document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";

{"0":{"id":1,"name":"Red Beans","price":0.25,"category_id":1,"image":"C:\\Users\\Joseph Tannoury\\Desktop\\Ecommerce-project\\users-frontend\\assets\\GROCERIES.jpg","remember_token":null,"created_at":"2022-06-12T22:10:34.000000Z","updated_at":"2022-06-12T22:10:34.000000Z"},"3":{"id":5,"name":"Blue Beans","price":0.29,"category_id":1,"image":"C:\\Users\\Joseph Tannoury\\Desktop\\Ecommerce-project\\users-frontend\\assets\\GROCERIES.jpg","remember_token":null,"created_at":"2022-06-28T18:14:04.000000Z","updated_at":"2022-06-28T18:14:04.000000Z"}}{
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
