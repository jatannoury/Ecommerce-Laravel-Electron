document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_email=document.getElementById("c_password")
    let password=document.getElementById("password")
    data={"name":fname,"email":email,}
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/user/register',
    }).then(function (json) {
        console.log(json)
    })

})