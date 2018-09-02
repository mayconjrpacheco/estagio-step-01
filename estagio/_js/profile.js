var profile = [];
var url = location.search.slice(4);
var card, h3 , t, t2, h1
var formatedDate = "";


var title = [
  "Hi, My name is",
  "My email adress is",
  "My birthday is",
  "My adress is",
  "My phone number is",
  "My password is"
];



getProfile();





function getProfile() { 
  $.ajax({
    url: "https://randomuser.me/api/?nat=br&format=json",
    dataType: "json",
    success: function(data) {
      profile = data.results
      renderUserProfile(profile);
    }
  });
}

function renderUserProfile(profileData){

  card = document.createElement("img");
  h3 = document.createElement("h3");
  t = document.createTextNode(title[0]);
  t2 = document.createTextNode(captalize(profileData[0].name.first));
  h1 = document.createElement("h1");
  h3.appendChild(t);
  h1.appendChild(t2);
  
  card.src = profileData[0].picture.large;
  document.getElementById("picture-circle").appendChild(card);
  document.getElementById("info").appendChild(h3);
  document.getElementById("info").appendChild(h1);
}

function backToList(){
  var numberUsers = localStorage.getItem('number')
  window.location.href = 'index.html?' + numberUsers
}

function changeInfo(dataUser){
  switch (dataUser) {
    case 'name':
    t.nodeValue = title[0];
    t2.nodeValue = captalize(profile[0].name.first)
    break;
    case 'email':
    t.nodeValue = title[1];
    t2.nodeValue = profile[0].email
    break;
    case 'birth':
    t.nodeValue = title[2];
    formatDate(profile[0].dob.date)
    t2.nodeValue = formatedDate
    break;
    case 'adress':
    t.nodeValue = title[3];
    t2.nodeValue = profile[0].location.street
    break;
    case 'phone':
    t.nodeValue = title[4];
    t2.nodeValue = profile[0].cell
    break;
    case 'password':
    t.nodeValue = title[5];
    t2.nodeValue = profile[0].login.salt

    break;
    
    default:
    break;
  }
}

function formatDate(date){
    formatedDate = date.slice(0,10)
    return formatedDate
}



function captalize(word){
  var halfWord = word.substring(1, word.lenght);
  var firstLetter = word.substring(0,1)
  var firstLetterUp = firstLetter.toUpperCase()
  firstLetterUp += halfWord
  return firstLetterUp
}
