let headers = {};
headers["Authorization"] = "Bearer " + localStorage.getItem("token");
axios({
  method: "POST",
  url: "http://127.0.0.1:8000/api/v1/user/profile",
  headers: headers,
}).then(function (json) {
  axios({
    method: "POST",
    url: `http://127.0.0.1:8000/api/v1/user/get_likes?user_id=${json.data["id"]}`,
    headers: headers,
  }).then(function (json) {
    console.log(L)
    localStorage.setItem("likes", JSON.stringify(json.data.likes));
  });
});
