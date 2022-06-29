let category_name=document.getElementsByClassName("box-1")
header= "Bearer "+ localStorage.getItem("token")
for (let i=0; i<category_name.length;i++){
    category_name[i].addEventListener("click",function(){
        category_name=category_name[i].lastElementChild.firstElementChild.innerHTML;
        axios({
            method: 'GET',
            url: 'http://localhost/dbex/get_users.php',
            headers:get_categories
        }).then(function (json) {
            console.log(json)
        })
    })
}
