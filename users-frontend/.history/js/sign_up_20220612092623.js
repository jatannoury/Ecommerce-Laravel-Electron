document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")

    console.log(fname.value)
    console.log(email.value)
    console.log(c_pass.value)
    console.log(password.value)
    data=new FormData();
    data.append("name",fname.value)
    data.append("email",email.value)
    data.append("password",password.value)
    data.append("password_confirmation",c_pass.value)
    data.append("user_type",0)

    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/user/register" ,
        data:data,
    }).then(function (json) {
        console.log(json.request)
        console.log("HI")
    }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          
        if (error.response.data.email[0]){alert(error.response.data.email[0]);
        else if(error.response.data.password[0])alert(error.response.data.password[0])
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
}})
    

})