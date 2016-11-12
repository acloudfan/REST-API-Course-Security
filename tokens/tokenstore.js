// Validates the token passed by the caller
// {tone:tok, expires:timestamp}
var  tokens = [];

module.exports = {
    add: function(token, payload) {
        tokens[token] = payload
    },

    isValid: function(token){
        if (tokens[token] === undefined) return false;

        if(tokens[token].exp <= new Date()){
            var ndx = tokens.indexOf(token)
            tokens.splice(ndx,1)
            return false
        } else {
            return true
        }
    }
}