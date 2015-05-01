var profile = require("./profile.js")
var users = process.argv.slice(2)

users.forEach(profile.get)
 
// profile.get("gregwright2")
// profile.get("chalkers")