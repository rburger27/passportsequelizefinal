
module.exports = function(sequelize, Sequelize) {

	var post = sequelize.define('post', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
      authorID: {type: Sequelize.INTEGER},
      message: {type: Sequelize.STRING(140)},
      timeStamp: {type: Sequelize.DATE}

});

	return post;

}