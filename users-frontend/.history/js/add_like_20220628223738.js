function get_id(name) {
  let items = localStorage.getItem("items");
  items = JSON.parse(items);
  let id;
  Object.keys(items).forEach((key) => {
    if (items[key]["name"] == name) {
      return items[key]["id"]
    }
    return false;
  });
}
let add_like = (e) => {
  let name = e.parentElement.parentElement.firstElementChild.firstElementChild;
  let item_id = get_id(name.innerText);
  console.log(item_id);
  e.parentElement.className = "fas fa-star star";
  e.parentElement.firstElementChild.remove();
  headers = {};
  headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  axios({
    method: "POST",
    url: "http://127.0.0.1:8000/api/v1/user/profile",
    headers: headers,
  }).then(function (json) {
    console.log(json);
    console.log(json.data["id"]);

    data = new FormData();
    data.append("user_id", json.data["id"]);
    data.append("item_id", item_id);
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/user/add_like",
      data: data,
      headers: headers,
    })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};
