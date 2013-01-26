/**
 * Creates a game, ask the user for his/her username and stores it on the local storage
 */ 
function game_create() {
    if (!sessionStorage.getItem("username")){
        var username =  window.prompt("Tu nombre de usuario:");
        sessionStorage.setItem("username", username);
    }
    var game_name = document.getElementById('game_name');
    var unique_name = username + '.' + game_name.value;
    unique_name.replace(' ','_');
    var game_url = 'http://www.fandom.in/vortice/'+unique_name;
    alert('URL de la partida: ' + game_url); 
    var sharing = new MozActivity({
                name: "share",
                data: {
                    //type: "url", // Possibly text/html in future versions,
                    number: 1,
                    url: game_url
                }
            });
}

/**
 * Append the url from the game_extras input to the game_extra_list ul
 */
function add_url_field() {
    var extra_url = document.getElementById("game_extras");
    var element_li = document.createElement('li');
    element_li.appendChild(document.createTextNode(extra_url.value));
    var url_list = document.getElementById("game_extra_list");
    url_list.appendChild(element_li);
}
