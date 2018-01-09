const db = require('../models');

var exports = module.exports = {}

exports.getUsers = function(req,res){

   db.user.findAll().then(users => res.json(users))

}