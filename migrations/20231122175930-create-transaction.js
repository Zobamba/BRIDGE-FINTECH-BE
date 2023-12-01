'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recipientEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipientFullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      IBAN: {
        type: Sequelize.STRING,
        allowNull: false
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true
      },
      txnReference: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sessionId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      txnStatus: {
        type: Sequelize.STRING,
        status: {
          type: Sequelize.ENUM('Pending', 'Completed', 'Failed'),
          allowNull: false,
          defaultValue: 'Pending',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};