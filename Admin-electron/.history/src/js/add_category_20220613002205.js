let cat_name=document.getElementById("cat_name")
let pic=document.getElementById("pictures")

document.getElementById("submit").addEventListener("click",function(){
    let path=pic.files[0]["path"].split('Image')[0]
    data=new FormData();
    data.append("name",cat_name.value)
    data.append("image",pat)
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/admin/add_category" ,
        data:data,
    }).then(function (json) {
        console.log(json)

    })
    
})