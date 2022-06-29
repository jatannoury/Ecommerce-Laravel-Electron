let headers= {};
headers["Authorization"]="Bearer "+localStorage.getItem("token");

axios({
    method: 'GET',
    url: "http://127.0.0.1:8000/api/v1/user/get_categories",
    headers:headers,
}).then(function (json) {
   json=json.data
   node=document.getElementById("row").cloneNode(true)
   console.log(node)
   for (let i=0;i<json.length)
   
})
