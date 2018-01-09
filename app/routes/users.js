var userController = require('../controllers/usercontroller')

module.exports = function(app) {
   app.get('/users', userController.getUsers)
}