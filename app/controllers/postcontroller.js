
const db = require('../models');

var exports = module.exports = {}

exports.post = function(req,res){
   let data = {
      authorID: req.body.authorID,
      message: req.body.message
   }
	db.post.create(data).then(newPost => res.json(newPost))

}

exports.get = function(req, res){
   const id = req.user.id;
   db.post.find({
      where: {authorID: id}
   }).then(post => res.json(post))
}