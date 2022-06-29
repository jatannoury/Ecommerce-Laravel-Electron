let item_name=document.getElementById("item_name")
let category_name=document.getElementById("Category_name")
let price=document.getElementById("price")
let pic=document.getElementById("picture")
document.getElementById("submit").addEventListener("click",function(){
    let path=pic.files[0]["path"].split('Image')[0]
    data=new FormData();
    data.append("category_name",cat_name.value)
    data.append("image",path)
    data.append("name",item_name)
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/admin/add_category" ,
        data:data,
    }).then(function (json) {
        console.log(json)
        window.location.href="../index.html"

    })

    
})