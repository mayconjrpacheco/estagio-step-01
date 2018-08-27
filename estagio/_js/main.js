var dataUsers = localStorage.getItem("users");
var names = [];

if (!dataUsers) {
  getUserData();
} else {
  dataUsersJson = [] = JSON.parse(dataUsers);
  renderUserList(dataUsersJson);
}

function getUserData() {
  $.ajax({
    url: "https://randomuser.me/api/?results=25&nat=br&format=json",
    dataType: "json",
    success: function(data) {
      //armazenando localstorage
      localStorage.setItem("users", JSON.stringify(data.results));
      var objetoSalvo = localStorage.getItem("users");
      var usersJson = JSON.parse(objetoSalvo);
      renderUserList(usersJson);
    }
  });
}

function renderUserList(listUserData) {
  var i2 = 0;
  lista = [] = listUserData;
  console.log("objeto recebido:", lista);
  var template = "<ul id='list'>";
  template += "<li>";
  for (let i = 0; i < lista.length; i++) {
    i2++;
    lista[i].id.value = i
    template += '<div class="clients-menu">';
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
      lista[i].id.value +
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
  console.log(id)
  //logica deletar json
  var refreshedList = JSON.parse(localStorage.getItem("users"));
  console.log('recuperado para deletar',refreshedList)
  if(refreshedList.id.value.match(id)){
    console.log('ok');
  }
 
  /*var dataUsersJson = ([] = JSON.parse(dataUsers));
  console.log(dataUsersJson);
  delete dataUsersJson[id];
  localStorage.setItem("users", JSON.stringify(dataUsersJson));
  renderUserList(dataUsersJson);*/
}

function checkUser(id) {
  var x = document.getElementById(id);
  x.style.color = "#9ac321";
}

function findUser() {
  var usersListcheck = JSON.parse(dataUsers);
  var name = document.getElementById("searchBar").value;
  if (name != "") {
    returnUsers(name, usersListcheck);
  }
}

function returnUsers(name, usersListcheck) {
  for (var i = 0; i < usersListcheck.length; i++) {
    if (usersListcheck[i].name.first.match(name)) {
      names[i] = usersListcheck[i];
    }
  }
  names = cleanList(names);
  names.sort((a, b) => a - b);
  setTimeout(() => {
    localStorage.setItem("usersFilter", JSON.stringify(names));
    resetList();
    var y = localStorage.getItem("usersFilter");
    renderUserList(JSON.parse(y));
  }, 500);
}

function resetList() {
  document.getElementById("list").outerHTML = "";
}

function cleanList(data) {
  return data.filter(n => n);
}

function setList(list){
  localStorage.setItem("users")
}
