let category_name=document.getElementsByClassName("box-1")
console.log("hey")
for (let i=0; i<category_name.length;i++){
    category_name[i].addEventListener("click",function(){
        console.log(category_name[i])
    })
}