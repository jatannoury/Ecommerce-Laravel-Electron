let add_like=(e)=>{
    console.log(e.parentElement.parentElement.firstElementChild)
    e.parentElement.className="fas fa-star star"
    e.parentElement.firstElementChild.remove()
    
    // axios({
    //     method: 'POST',
    //     url:"http://127.0.0.1:8000/api/v1/user/add_like" ,
    //     data:data,
    // }).then(function (json) {
    //     console.log(json)
    // })
}
