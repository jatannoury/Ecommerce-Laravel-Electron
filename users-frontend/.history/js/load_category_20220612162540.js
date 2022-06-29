let select=document.getElementsByClassName("boxx")
for (let i=0;i<select.length;i++){
    select[i].addEventListener("click",function(){
        console.log(select[i])
    })
}
console.log(select)
