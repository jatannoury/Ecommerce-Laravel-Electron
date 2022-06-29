let headers= {};
headers["Authorization"]="Bearer "+localStorage.getItem("token");

axios({
    method: 'GET',
    url: "http://127.0.0.1:8000/api/v1/user/get_categories",
    headers:headers,
}).then(function (json) {
   json=json.data
   console.log(json[1]["name"])
   node=document.getElementById("row").cloneNode(true)
  
   for (let i=0;i<json.length;i++){
        if (json.length>=2 && i/2==1){
            document.getElementById("main_container").appendChild(node);
        }

        curr_node=node.getElementsByTagName("div")[i].textContent=json[i]["name"];
        node.getElementsByTagName("div")[i].style.font-size=15
    }
   })
   

