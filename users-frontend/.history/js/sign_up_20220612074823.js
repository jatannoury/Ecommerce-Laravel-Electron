document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname").value
    let email=document.getElementById("email").innerText
    let c_email=document.getElementById("c_email").textContent
    let password=document.getElementById("password").value
    console.log(fname.value,email,c_email,password)

})