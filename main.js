var dataUsers = localStorage.getItem("users");
var names = [];

if (!dataUsers) {
  getUserData();
} else {
  renderUserList(dataUsers);
}

function getUserData() {
  $.ajax({
    url: "https://randomuser.me/api/?results=25&nat=br&format=json",
    dataType: "json",
    success: function(data) {
      //armazenando localstorage
      localStorage.setItem("users", JSON.stringify(data.results));
      var objetoSalvo = localStorage.getItem("users");
      console.log("json armazenado local storage", JSON.parse(objetoSalvo));
      renderUserList(objetoSalvo);
    }
  });
}

function renderUserList(listUserData) {
  usersList = [] = JSON.parse(listUserData);
  /*var ul = document.createElement("ul");
  ul.id = "ul";
  var li = document.createElement("li");
  li.id = "li";
  document.getElementById("clients-list").appendChild(ul);
  document.getElementById("ul").appendChild(li);*/
  var i2 = 0;
  lista = [] = usersList;
  var template = "<ul>";
  template += "<li>";

  for (let i = 0; i < lista.length; i++) {
    i2++;
    template += '<div class="clients-menu" id="' + i + '">';
    template += '<div class="clients-box">';
    template += '<div class="container">';
    template +=
      '<div class="item basis-auto"><img src="' +
      lista[i].picture.thumbnail +
      '">';
    template +=
      '<div class="item basis-auto" id="name"><a href="profile.html? ' +
      i +
      ' ">' +
      lista[i].name.first +
      "</a>";
    template += "<div class='item basis-auto'>" + lista[i].email;
    template += "<div class='item basis-auto'>" + lista[i].phone;
    template +=
      "<div class='item basis-auto' id='local'>" +
      lista[i].location.city +
      " - " +
      lista[i].location.state;
    template += "<div class='item basis-auto ic'>";
    template +=
      "<i class='fas fa-trash icons' onclick='deleteUser(" +
      i +
      ")'></i><i class='fas fa-check icons' id='" +
      i2 +
      "' onclick='checkUser(" +
      i2 +
      ")'></i><a href='profile.html? " +
      i +
      " '><i class='fas fa-th-list icons'></i></a>";
    template += "</div>";
    template += "</div></div></div></div></div></div></div></div>";
  }
  template += "</li>";
  template += "</ul>";
  document.body.innerHTML += template;
}

function deleteUser(id) {
  document.getElementById(id).remove();
  /*var dataUsersJson = ([] = JSON.parse(dataUsers));
  console.log(dataUsersJson);
  delete dataUsersJson[id];
  localStorage.setItem("users", JSON.stringify(dataUsersJson));
  renderUserList(dataUsersJson);*/
  alert("Usuário removido!");
}

function checkUser(id) {
  var x = document.getElementById(id);
  x.style.color = "#9ac321";
}

function findUser() {
  var usersListcheck = JSON.parse(dataUsers);
  var name = document.getElementById("searchBar").value;
  returnUsers(name, usersListcheck);
}

function returnUsers(name, usersListcheck) {
  for (var i = 0; i < usersListcheck.length; i++) {
    if (usersListcheck[i].name.first == name) {
      names = usersListcheck[i];
      console.log("array recuperado: ", names);
    }
  }
}
