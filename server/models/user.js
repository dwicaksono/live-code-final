'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model { }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "cannot be empty" },
        notEmpty: { args: true, msg: "cannot be empty" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "cannot be empty" },
        notEmpty: { args: true, msg: "cannot be empty" }
      }
    }
  }, { sequelize })
  // const User = sequelize.define('User', {
  //   username: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Report)
  };
  return User;
};