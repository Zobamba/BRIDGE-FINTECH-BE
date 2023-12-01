'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user);
    }
  }
  transaction.init({
    userId: DataTypes.INTEGER,
    recipientEmail: DataTypes.STRING,
    recipientFullName: DataTypes.STRING,
    IBAN: DataTypes.STRING,
    remark: DataTypes.STRING,
    txnReference: DataTypes.STRING,
    sessionId: DataTypes.STRING,
    txnStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};