document.getElementById("Submit").addEventListener("click",function(){
    let fname=document.getElementById("fname")
    let email=document.getElementById("email")
    let c_pass=document.getElementById("c_password")
    let password=document.getElementById("password")
    let url=""
    
    axios({
        method: 'POST',
        url: '',
        data:data
    }).then(function (json) {
        console.log(json)
    })

})