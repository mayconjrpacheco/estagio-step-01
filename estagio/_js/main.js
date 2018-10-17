var usersNumber = localStorage.getItem("number");
var count = 15;
var listDb = [];
var isSet = true;
var filtered = [];
var emailFiltered = [];
var isChecked = false;
var menu = document.getElementById("menu-mobile");
menu.style.display = "none";

if (!usersNumber) {
  setUsersNumber(count);
  getUserData(count);
} else {
  var url = location.search.slice(4);
  if ((url = null)) {
    setUsersNumber(url);
  }
  var n = getUsersNumber();
  getUserData(n);
}

function getUserData(count) {
  $.ajax({
    url: "https://randomuser.me/api/?results=" + count + "&nat=br&format=json",
    dataType: "json"
  })
    .done(function(data) {
      listDb = data.results;
      renderUserList(listDb);
      listernerSearchInput();
    })
    .fail(function() {
      var box = document.createElement("div");
      box.className = "error";
      var txt = document.createElement("h1");
      txt.textContent = "Falha ao carregar lista de clientes, tente novamente.";
      document
        .getElementById("ul-wrapper")
        .appendChild(box)
        .appendChild(txt);
    });
}

function renderUserList(listUserData) {
  var id3 = 0;
  var id2 = 0;
  var template = "<ul id='ul'>";
  template += "<li id='li'>";

  if (isSet) {
    for (let i = 0; i < listUserData.length; i++) {
      id2++;
      id3++;
      listUserData[i].id.value = i;
      template += '<div class="clients-menu" id="box' + id2 + '">';
      template += '<div class="clients-box">';
      template += '<div class="container">';
      template +=
        '<div class="basis-auto img" id="img' +
        id2 +
        '"><img id="picture' +
        id2 +
        '" src="' +
        listUserData[i].picture.thumbnail +
        '"></div>';
      template += '<div class="name-email-phone">'
      template +=
        '<div class="name-email"><div class="item name" id="name"><a href="profile.html? ' +
        count +
        ' ">' +
        listUserData[i].name.first +
        "</a>";
      template += "</div><div class='item  mail'>" + listUserData[i].email;
      template += "</div></div><div class='item  phone'>" + listUserData[i].phone;
      template +=
        "</div><div class='item local' id='local'><span>" +
        listUserData[i].location.city +
        " - " +
        listUserData[i].location.state;
      template += "</span></div></div><div class='ic'>";
      template +=
        "<i class='fas fa-trash icons' onclick='deleteUser(" + id2 + ")'>";
      template +=
        "</i><i class='fas fa-check icons' id='iconCheck" +
        id3 +
        "' onclick='checkUser(" +
        id3 +
        ")'></i><a style='a:visited{color: inherit}; padding-left: 0;' href='profile.html? " +
        i +
        " '><i class='fas fa-th-list icons'></i></a>";
      template += "</div></div></div></div></div></div></div></div>";
    }
  }
  template += "</li>";
  template += "</ul>";
  var x = document.createRange().createContextualFragment(template);
  document.getElementById("ul-wrapper").appendChild(x);
}

function deleteUser(id) {
  loading("img" + id, id);
  setTimeout(function() {
    document.getElementById("box" + id).remove();
  }, 1300);
  count--;
  isSet = false;
  setUsersNumber(count);
  getUserData(url--);
}

function checkUser(id) {
  var x = document.getElementById("iconCheck" + id);
  if (x.style.color === "rgb(154, 195, 33)") {
    x.style.color = "#ababab";
  } else {
    x.style.color = "#9ac321";
  }
}

function listernerSearchInput() {
  var searchInput = document.getElementById("searchBar");
  searchInput.addEventListener("keyup", function(keyup) {
    filtered = listDb.filter(function(res) {
      return res.name.first.match(keyup.target.value.toLowerCase());
    });
    clearList();
    renderUserList(filtered);
  });
}

function setUsersNumber(n) {
  localStorage.setItem("number", n);
}

function getUsersNumber() {
  localStorage.getItem("number");
  return usersNumber;
}

function clearList() {
  document.getElementById("li").remove();
}

function loading(idGif, idImg) {
  var gif = document.createElement("img");
  gif.src = "_imagens/gif-loader.gif";
  gif.id = "gif";
  document.getElementById(idGif).appendChild(gif);
  document.getElementById("picture" + idImg).style.opacity = "0.2";
}

function displayMenu() {
    $('#menu-mobile').slideToggle(500)
}
