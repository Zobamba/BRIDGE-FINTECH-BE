'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountType: {
        type: Sequelize.STRING,
        status: {
          type: Sequelize.ENUM('Personal', 'Business'),
          allowNull: false,
          defaultValue: 'Personal',
        },
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      countryOfResidence: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      homeAddress: {
        type: Sequelize.STRING,
        allowNull: true
      },
      postalCode: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      BVN: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      txnPin: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      dailyTxnLimit: {
        type: Sequelize.INTEGER,
        defaultValue: 5000000,
        allowNull: true
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
    await queryInterface.dropTable('users');
  }
};