// Basic Authentication
// Part of the course on "REST API Design Development & Management"
// http://www.acloudfan.com

var     express = require('express')
var     basicauth = require(__dirname + '/basicauth')


// Express app setup
var app = express();
var router = express.Router();

// This is the passport middlewae function that get called first
var  auth = basicauth.auth
// Setup the route with basic authentication
router.get('/private',auth,function(req, res){
    res.send('Access granted to private resource!!!')
});

app.use(router);

app.listen(3000);

console.log('Listening on 3000')
