var query = location.search.slice(1);

getUserData();


function getUserData() {
    
    $.ajax({
        url: 'https://randomuser.me/api/?nat=br&results=20',
        dataType: 'json',
        success: function(data) {
            renderUserList(data.results);
        }
    });
    
}


    function renderUserList(listUserData) {

        console.log(listUserData);

        $('<ul>', {
            id: 'list'
        }).appendTo('#clients-list');
        var templateItem = '';
        for (var i = 0; i < listUserData.length; i++) {
            
            templateItem += '<div class="clients-menu">';
            templateItem += '<div class="clients-box">';
            templateItem += '<div class="container">';
            templateItem += '<div class="item basis-auto"><img src='+ listUserData[i].picture.thumbnail+'></div>';
            templateItem += '<div class="item basis-auto" id="name"><a href="profile.html? '+ listUserData[i].name.first +' ">'+ listUserData[i].name.first +'</a></div>';
            templateItem += '<div class="item basis-auto">'+ listUserData[i].email +'</div>';
            templateItem += '<div class="item basis-auto">'+ listUserData[i].phone +'</div>';
            templateItem += '<div class="item basis-auto" id="local">'+ listUserData[i].location.city +' - '+ listUserData[i].location.state + '</div>';
            templateItem += '<div class="item basis-auto ic">'
            templateItem += '<i class="fas fa-trash icons"></i>'
            templateItem += '<i class="fas fa-check icons"></i>'
            templateItem += '<i class="fas fa-th-list icons"></i>'
            templateItem += '</div></div></div></div>';
            $("<li>" + templateItem + "</li>").appendTo('#list');
        }
    }






