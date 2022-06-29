console.log(localStorage.getItem("items"))
document.getElementById("title").innerHTML=localStorage.getItem("cat_name")
document.getElementById("title").style["font-size"]="500%"
document.getElementById("title").style["font-weight"]="700"
let x=document.getElementById("box_c");
.innerHTML=`
        <div class="row">
            <div class="box-2">
                <img src="../assets/Groceries.jpg" />
                <div class="informations">
                    <div>
                        <h3>Name</h3>
                        <h6>50$</h6>
                    </div>
                    <div>
                        <i class="far fa-star star"></i>
                    </div>
                    
                </div>
            </div>

            <div class="box-2">
                <img src="../assets/Groceries.jpg" />
                <div class="informations">
                    <div>
                        <h3>Name</h3>
                        <h6>50$</h6>
                    </div>
                    <div>
                        <i class="far fa-star star"></i>
                    </div>

                </div>
            </div>

            <div class="box-2">
                <img src="../assets/Groceries.jpg" />
                <div class="informations">
                    <div>
                        <h3>Name</h3>
                        <h6>50$</h6>
                    </div>
                    <div>
                        <i class="fas fa-star star"></i>
                    </div>

                </div>
            </div>
        </div>`