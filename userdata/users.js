var users = [
    { id: 1, name: "john", email: "john@mail.com", password: "john123" },
    { id: 2, name: "sarah", email: "sarah@mail.com", password: "sarah123" }
];


var checkCredentials = function (username, password) {
    // Check if username/password are good

    var user = users.find(function (u) {
        return u.name === username && u.password === password;
    });

    if (user) return true
    else return false

}

exports.checkCredentials = checkCredentials;