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
        window.location.href="../"

    }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
        alert("Wrong email or password")
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
}})
})