'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Submissions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_student: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_assignment: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      graded: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      },
      grade: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Submissions');
  }
};