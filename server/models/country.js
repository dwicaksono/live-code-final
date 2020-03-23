'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Country extends Model { }
  Country.init(
    {
      name: DataTypes.STRING,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER
    },
    {
      sequelize
    }
  );
  Country.associate = function (models) {
    // associations can be defined here
    Country.hasMany(models.Report);
  };
  return Country;
};
