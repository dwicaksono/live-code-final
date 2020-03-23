'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Report extends Model { }
  Report.init({
    report: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "cannot be empty" },
        notEmpty: { args: true, msg: "cannot be empty" }
      }
    },
    UserId: DataTypes.INTEGER,
    CountryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "cannot be empty" },
        notEmpty: { args: true, msg: "cannot be empty" }
      }
    }
  }, { sequelize })
  // const Report = sequelize.define('Report', {
  //   report: DataTypes.INTEGER,
  //   UserId: DataTypes.INTEGER,
  //   CountryId: DataTypes.INTEGER
  // }, {});
  Report.associate = function (models) {
    // associations can be defined here
    Report.belongsTo(models.User)
    Report.belongsTo(models.Country)
  };
  return Report;
};