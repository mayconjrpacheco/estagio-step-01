function renderUserList(listUserData) {
  console.log(listUserData);
  /*var ul = document.createElement("ul");
    ul.id = "ul";
    var li = document.createElement("li");
    li.id = "li";
    document.getElementById("clients-list").appendChild(ul);
    document.getElementById("ul").appendChild(li);*/
  var template = "<ul>";
  template += "<li>";
  for (let i = 0; i < 10; i++) {
    template += '<div class="clients-menu">';
    template += '<div class="clients-box">';
    template += '<div class="container">';
    template += "</div>";
    template += "</div>";
    template += "</div>";
  }
  template += "</li>";
  template += "</ul>";

  document.body.innerHTML += template;
}
