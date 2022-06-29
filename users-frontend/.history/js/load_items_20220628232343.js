let items = JSON.parse(localStorage.getItem("items"));
console.log(items);
let main = document.getElementById("box_c");
console.log(items);
document.getElementById("title").innerHTML = localStorage.getItem("cat_name");
document.getElementById("title").style["font-size"] = "500%";
document.getElementById("title").style["font-weight"] = "700";
let likes = JSON.parse(localStorage.getItem("likes"));
console.log(likes);
function searchForLike(likes,id){
    for(let i=0;i<likes.length;i++){
       if (likes[i][id]==id){
        return "fas fa-star star"
       }
    }
    return "far fa-star star"
}
Object.keys(items).forEach((key) => {
let state=
  console.log(items[key]["name"]);
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
                            <i class="far fa-star star" onclick=add_like(this)></i>
                        </div>
                        
                    </div>
                </div>
    
               `;
  main.appendChild(x);
});
