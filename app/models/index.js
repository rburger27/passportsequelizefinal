"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize")
, passportLocalSequelize = require('passport-local-sequelize');
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'sqlite',
  storage: '../test.sqlite'
});
var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./user')(sequelize, Sequelize);
db.post = require('./post')(sequelize, Sequelize);

db.post.belongsTo(db.users);
db.users.hasMany(db.post);

module.exports = db;
