document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_email=document.getElementById("c_email")
    let password=document.getElementById("password")
    data={}
    axios({
        method: 'GET',
        url: 'http://localhost/dbex/get_users.php',
    }).then(function (json) {
        console.log(json)
    })

})