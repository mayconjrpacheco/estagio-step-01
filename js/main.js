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

  var ii = 0;
  lista = [] = listUserData;
  console.log("objeto recebido: ", lista);
  var template = "<ul id='list'>";
  template += "<li>";

    for (let i = 0; i < lista.length; i++){
      ii++;
      lista[i].id.value = i

      template += "<div class ='container-conteudo'>";
      template += "<div class ='container-listagem'>";
      template += "<div class ='listagem'>";

      template += "<div class ='foto'> <img src'" + lista[i].picture.thumbnail + "'>";
      template += "<div class ='nome'> <a href='profile.html?" + i + "'>" + lista[i].name.first + '</a>';
      template += "<div class ='email'>" + lista[i].email;
      template += "<div class ='contato'>" + lista[i].phone;
      template += "<div class ='cidade'>" + lista[i].location.city + " - " + lista[i].location.state;
      
      template += "<div class ='icones'>";
      template += "<a class ='fas fa-trash' onclick='deleteUser(" + lista[i].id.value +
                  ")'></a> <a class fas fa-list'></a> <a class ='fas fa-check' onclick='checkUser(" + lista[i].id.value +
                  ")'></a>";
    }


  template += "</ul>";
  template += "</li>";
  document.getElementById("test").innerHTML = "Hello World";
  
}