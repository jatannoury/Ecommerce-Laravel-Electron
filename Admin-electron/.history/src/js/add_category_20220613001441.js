let cat_name=document.getElementById("cat_name")
let pic=document.getElementById("pictures")

document.getElementById("submit").addEventListener("click",function(){
    let path=pic.files[0]["path"].split('Image')[0]
    console.log(path)
    console.log(cat_name.value)
    
})