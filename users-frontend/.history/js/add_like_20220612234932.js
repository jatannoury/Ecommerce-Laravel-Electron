function get_id(name){
    let items=localStorage.getItem("items")
    items=JSON.parse(items)
    for (let i=0;i<items.length;i++){
        if(items[i]["name"]==name)return items[i]["id"]
    }
}
let add_like=(e)=>{
    
    e.parentElement.className="fas fa-star star"
    e.parentElement.firstElementChild.remove()
    headers={}
    headers["Authorization"]="Bearer "+localStorage.getItem("token");
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/user/profile" ,
        headers:headers,
    }).then(function (json) {
        console.log(json.data["id"])
        let name=e.parentElement.parentElement.firstElementChild.firstElementChild
    item_id=get_id(name.innerText)
        data=new FormData();
        data.append("user_id",json.data["id"])
        data.append("item_id",item_id)
        axios({
            method: 'POST',
            url:"http://127.0.0.1:8000/api/v1/user/register" ,
            data:data,
        }).then(function (json) {
            console.log(json)
        })
    })
}
