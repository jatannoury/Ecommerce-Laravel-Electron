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
   document.getElementById("row").remove()
   let i=0;
   while(json){
        i++;
        if (json.length>=2 && i/2==1){
            if (document.getElementById("main_container"))document.getElementById("main_container").appendChild(node);
            else{document.getElementById("foo").appendChild(node);}
            json.splice(0,)
            console.log(json)
            i=0
        }

        curr_node=node.getElementsByTagName("div")[i].textContent=json[i]["name"];
        node.getElementsByTagName("div")[i].style["font-size"]="200%"
        node.getElementsByTagName("div")[i].style["font-weight"]="700"
        node.getElementsByTagName("div")[i].id="foo"
    }
   })
   
