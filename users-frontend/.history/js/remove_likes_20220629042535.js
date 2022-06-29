function get_id(name) {
  let items = localStorage.getItem("items");
  items = JSON.parse(items);
  let id;
  Object.keys(items).forEach((key) => {
    if (items[key]["name"] == name) {
      id = items[key]["id"];
    }
  });
  console.log(id);
  return id;
}

let remove_like = (e) => {
  let name = e.parentElement.parentElement.firstElementChild.firstElementChild;
  let item_id = get_id(name.innerText);
  console.log(item_id);
  e.parentElement.className = "far fa-star star";
  e.parentElement.firstElementChild.remove();
  let headers = {};
  headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  axios({
    method: "POST",
    url: "http://127.0.0.1:8000/api/v1/user/profile",
    headers: headers,
  }).then(function (json) {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/v1/user/remove_like?user_id=${
        json.data["id"]
      }&cat_id=${localStorage.getItem("category_id")}&item_id=${item_id}`,
      headers: headers,
    }).then(function (json) {
      console.log(json.data.likes);
      localStorage.setItem("likes", JSON.stringify(json.data.likes));
      
    });
  });
};
