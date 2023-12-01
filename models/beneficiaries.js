'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beneficiaries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association 
      beneficiaries.belongsTo(models.user);
    }
  }
  beneficiaries.init({
    userId: DataTypes.INTEGER,
    countryCurrency: DataTypes.STRING,
    IBAN: DataTypes.STRING,
    swiftCode: DataTypes.STRING,
    fullName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'beneficiaries',
  });
  return beneficiaries;
};