var usersNumber = localStorage.getItem("number");
var count = 5;
var listDb = [];
var isSet = true
var filtered = [];


if(!usersNumber){
  setUsersNumber(count)
  getUserData(count);
}else{
  var url = location.search.slice(4);
  if(url = null){
    setUsersNumber(url)
  }
  var n = getUsersNumber()
  getUserData(n)
}

function getUserData(count) {
  $.ajax({
    url: "https://randomuser.me/api/?results=" + count + "&nat=br&format=json",
    dataType: "json",
    success: function(data) {
      listDb = data.results
      renderUserList(listDb);
      listernerSearchInput();
    }
  });
}


function renderUserList(listUserData) {
  var id3 = 0;
  var id2 = 0;
  var template = "<ul id='list'>";
  template += "<li id='lista'>";
  if(isSet){
    for (let i = 0; i < listUserData.length; i++) {
      id2++;
      id3++
      listUserData[i].id.value = i
      template += '<div class="clients-menu" id="'+ id2 + '">';
      template += '<div class="clients-box">';
      template += '<div class="container">';
      template +=
      '<div class="item basis-auto"><img src="' +
      listUserData[i].picture.thumbnail +
      '">';
      template +=
      '<div class="item basis-auto" id="name"><a href="profile.html? '+ count +' ">' +
      listUserData[i].name.first +
      "</a>";
      template += "<div class='item basis-auto'>" + listUserData[i].email;
      template += "<div class='item basis-auto'>" + listUserData[i].phone;
      template +=
      "<div class='item basis-auto' id='local'>" +
      listUserData[i].location.city +
      " - " +
      listUserData[i].location.state;
      template += "<div class='item basis-auto ic'>";
      template +=
      "<i class='fas fa-trash icons' onclick='deleteUser(" +
      id2 +
      ")'></i><i class='fas fa-check icons' id='iconCheck" + id3 +
      "' onclick='checkUser(" + id3 +")'></i><a style='a:visited{color: inherit}' href='profile.html? " +
      i +
      " '><i class='fas fa-th-list icons'></i></a>";
      template += "</div>";
      template += "</div></div></div></div></div></div></div></div>";
    }
  }
  template += "</li>";
  template += "</ul>";
  document.body.innerHTML += template;
}

function deleteUser(id) {
  //logica deletar json
  document.getElementById(id).remove();
  count--;
  isSet = false
  setUsersNumber(count)
  getUserData(url--)
}

function checkUser(id) {
  console.log('id do icone', id)
  var x = document.getElementById("iconCheck"+ id);
  x.style.color = "#9ac321";
}

function listernerSearchInput() {
  var searchInput = document.getElementById('searchBar');
  searchInput.addEventListener('keyup', function(keydown) {
    filtered = listDb.filter(function(res) {
      console.log(keydown.target.value);
      return res.name.first.match(keydown.target.value);
    });

    console.log(filtered);

    setTimeout(function(){
      clearList
      renderUserList(filtered)
    },2000)
    
  });
}

console.log('usuario filtrado' ,filtered)

function setUsersNumber(n){
  localStorage.setItem('number', n)
}

function getUsersNumber(){
  localStorage.getItem('number')
  return usersNumber
}

function clearList(){
  document.getElementById('lista').remove()
}