let clicked=(e)=>{
    let chosen_category=e.innerText
    data=new FormData();
    data.append("category_name",chosen_category)
    axios({
        method: 'POST',
        url:"http://127.0.0.1:8000/api/v1/user/get_items" ,
        data:data,
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
