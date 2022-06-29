document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")
    data={"name":fname.value,"email":email.value,"password_confirmation":c_pass.value,"password":password.value}
    console.log(data)
    

})