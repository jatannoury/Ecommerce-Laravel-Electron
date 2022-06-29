document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")
    let url="http://127.0.0.1:8000/api/v1/user/register"
    data=new FormData;
    data.append("name",fname.value)
    data.append("email",email.value)
    data.append("password",password.value)
    data.append("c_pass",c_pass.value)
    data.append("user_type",0)
    console.log(url)
    // axios({
    //     method: 'POST',
    //     url: url,
    //     data:data
    // }).then(function (json) {
    //     console.log(json)
    // })

})