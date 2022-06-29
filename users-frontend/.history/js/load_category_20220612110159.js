axios({
    method: 'GET',
    url: "http://127.0.0.1:8000/api/v1/user/get_categories",
    // headers:header,
}).then(function (json) {
    console.log(json.data)
})
