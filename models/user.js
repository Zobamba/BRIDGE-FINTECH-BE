'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.beneficiaries);
      user.hasMany(models.transaction);
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    accountType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    surname: DataTypes.STRING,
    country: DataTypes.STRING,
    countryOfResidence: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    city: DataTypes.STRING,
    homeAddress: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    BVN: DataTypes.INTEGER,
    txnPin: DataTypes.INTEGER,
    dailyTxnLimit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};