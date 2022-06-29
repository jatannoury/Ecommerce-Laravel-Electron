let select=document.querySelector("#fooboxx")
for (let i=0;i<select.length;i++){
    select[i].addEventListener("click",function(){
        console.log("HI")
    })
}
console.log(select)
