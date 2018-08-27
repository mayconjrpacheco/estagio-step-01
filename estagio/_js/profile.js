var profile = localStorage.getItem("users");
var query = location.search.slice(4);
var data = ([] = JSON.parse(profile));
console.log(data[query]);

var title = [
  "Hi, My name is",
  "My email adress is",
  "My birthday is",
  "My adress is",
  "My phone number is",
  "My password is"
];

var card = document.createElement("img");
var h3 = document.createElement("h3");
var t = document.createTextNode(title[0]);
var t2 = document.createTextNode(data[query].name.first);
var h1 = document.createElement("h1");
h3.appendChild(t);
h1.appendChild(t2);

card.src = data[query].picture.large;
document.getElementById("picture-circle").appendChild(card);
document.getElementById("info").appendChild(h3);
document.getElementById("info").appendChild(h1);

function changeInfo(dataUser) {
  switch (dataUser) {
    case "name":
      t.nodeValue = title[0];
      t2.nodeValue = data[query].name.first;
      break;
    case "email":
      t.nodeValue = title[1];
      t2.nodeValue = data[query].email;
      break;
    case "birth":
      t.nodeValue = title[2];
      t2.nodeValue = data[query].date;
      break;
    case "adress":
      t.nodeValue = title[3];
      t2.nodeValue = data[query].location.street;
      break;
    case "phone":
      t.nodeValue = title[4];
      t2.nodeValue = data[query].phone;
      break;

    case "password":
      t.nodeValue = title[5];
      t2.nodeValue = data[query].login.password;
      break;
  }
}
