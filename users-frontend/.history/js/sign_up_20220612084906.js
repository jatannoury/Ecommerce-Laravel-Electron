document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")
    urk
    
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/user/register',
        data:data
    }).then(function (json) {
        console.log(json)
    })

})