let email=document.getElementById("email")
let password=document.getElementById("Password")

document.getElementById("submit").addEventListener("click",function(){
    data=new FormData();
    data.append("email",email.value)
    data.append("password",password.value)
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/user/login" ,
        data:data,
    }).then(function (json) {
        console.log("hi")

    }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          
        if (error.response.data.email){alert(error.response.data.email[0])}
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