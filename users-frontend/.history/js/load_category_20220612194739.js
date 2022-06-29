let clicked=(e)=>{
  headers["Authorization"]="Bearer "+localStorage.getItem("token");
    let category_name=e.innerText
    url="http://127.0.0.1:8000/api/v1/user/get_items"
    url+="?"
    axios({
        method: 'GET',
        url:url ,
        data:data,
        headers:headers,
    }).then(function (json) {
        console.log(json)
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
