var users = [
    {id: 1, name: "john", email: "john@mail.com", password: "john123"},
    {id: 2, name: "sarah", email: "sarah@mail.com", password: "sarah123"}
];

var  checkCredentials = function(username, password){
    for(var i=0; i < users.length ; i++ ){
        if(username === users[i].name){
            return (password === users[i].password)
        }
    }
    return false
}

exports.checkCredentials = checkCredentials;