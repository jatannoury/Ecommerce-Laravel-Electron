document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")
    let url="http://127.0.0.1:8000/api/v1/user/register"
    url+="?name="+fname
    url+=
    
    axios({
        method: 'POST',
        url: url,
        data:data
    }).then(function (json) {
        console.log(json)
    })

})