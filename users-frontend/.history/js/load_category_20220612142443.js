let headers= {};
headers["Authorization"]="Bearer "+localStorage.getItem("token");

axios({
    method: 'GET',
    url: "http://127.0.0.1:8000/api/v1/user/get_categories",
    headers:headers,
}).then(function (json) {
   json=json.data

    
   while(json){
        node=document.getElementById("row").cloneNode(true)
        for (let i=0;i<3;i++){
            curr_node=node.getElementsByTagName("div")[i].textContent=json[i]["name"];
            node.getElementsByTagName("div")[i].style["font-size"]="200%"
            node.getElementsByTagName("div")[i].style["font-weight"]="700"
            node.getElementsByTagName("div")[i].id="foo"
        }
        document.getElementById("main_container").appendChild(node)
        json.splice(0,3)
    }
   })
   

