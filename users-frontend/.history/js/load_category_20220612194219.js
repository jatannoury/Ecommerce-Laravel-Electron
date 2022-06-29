let clicked=(e)=>{
  headers["Authorization"]="Bearer "+localStorage.getItem("token");
    let chosen_category=e.innerText
    console.log(chosen_category)
    data=new FormData();
    data.append("category_name",chosen_category)
    axios({
        method: 'GET',
        url:"http://127.0.0.1:8000/api/v1/user/get_items" ,
        data:data,
        headers:headers,
    }).then(function (json) {
        console.log(Response)
    }).catch(function (error) {
        if (error.response) {
              console.log(error.response.status);
              console.log(error.response.headers);
        } else if (error.request) {

          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
}})

}
