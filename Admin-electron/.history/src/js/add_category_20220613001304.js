let cat_name=document.getElementById("cat_name")
let pic=document.getElementById("pictures")
path=pic.files[0]["path"].split('Image')[0]
document.getElementById("submit").addEventListener("click",function(){
    
    console.log(path)
    
})