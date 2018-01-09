var postController = require('../controllers/postcontroller')

module.exports = function(app) {
   app.post('/post', postController.post);
   app.get('/post', postController.get);
}
