let headers= {};
headers["Author"]
console.log(header)
axios({
    method: 'GET',
    url: "http://127.0.0.1:8000/api/v1/user/get_categories",
    headers:token,
}).then(function (json) {
    // json=json.data
    // 
    // let category_name=document.getElementsByClassName("box-1")
    
    // for (let i=0; i<category_name.length;i++){
    // category_name[i].addEventListener("click",function(){
    //     category_name=category_name[i].lastElementChild.firstElementChild.innerHTML;
    //     console.log(category_name)
    // })
// }
console.log(json)

})
