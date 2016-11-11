// Basic Authentication
var     express = require('express')
var     passport= require('passport')
// This the strategy for basic authentication
var     BasicStrategy = require('passport-http').BasicStrategy

// Set up the basic strategy for passport
passport.use(new BasicStrategy(function(username,password,done){
    // This is the function that gets called for all protected resource
    if(username === 'user' && password === 'pass')
        done(null, true)
    else   
        done(null,false)
}));

// Express app setup
var app = express();
var router = express.Router();

// This is the passport middlewae function tha get called first
var auth  = passport.authenticate('basic',{session:false})
router.get('/private',auth,function(req, res){
    res.send('Access granted to private resource!!!')
});

app.use(router);

app.listen(3000);

console.log('Listening on 3000')