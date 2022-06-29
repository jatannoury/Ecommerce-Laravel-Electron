let select=document.querySelector("#foo.boxx")
for (let i=0;i<select.length;i++){
    select[i].addEventListener("click",function(){
        console.log("HI")
    })
}
console.log(select)
