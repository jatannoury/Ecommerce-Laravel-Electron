function get_id(name){
    let items=localStorage.getItem("items")
    items=JSON.parse(items)
    for (let i=0;i<items.length;i++){
        if(items[i]["name"]==name)return items[i]["id"]
    }
}
let add_like=(e)=>{
    let name=e.parentElement.parentElement.firstElementChild.firstElementChild
    item_id=get_id(name.innerText)
    e.parentElement.className="fas fa-star star"
    e.parentElement.firstElementChild.remove()
    data=new FormData()
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/user/add_like" ,
        data:data,
    }).then(function (json) {
        console.log(json)
    })
}
