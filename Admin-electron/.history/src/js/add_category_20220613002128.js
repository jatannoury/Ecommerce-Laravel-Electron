let cat_name=document.getElementById("cat_name")
let pic=document.getElementById("pictures")

document.getElementById("submit").addEventListener("click",function(){
    let path=pic.files[0]["path"].split('Image')[0]
    console.log(path)
    console.log(cat_name.value)
    data=new FormData();
    data.append("name",)
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/admin/add_category" ,
        
    }).then(function (json) {
        localStorage.clear();
        localStorage.setItem("token",json.data["access_token"])
        window.location.href="../html/Categories.html"

    })
    
})