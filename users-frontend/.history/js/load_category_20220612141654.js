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
//    document.getElementById("row").remove()
   let i=0;
   console.log(json)
   while(json){
        for(let i=0;i)
    }
   })
   

