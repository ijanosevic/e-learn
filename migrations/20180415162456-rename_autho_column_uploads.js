'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    queryInterface.renameColumn('uploads', 'id_user', 'id_author');
  },

  down: (queryInterface, Sequelize) => {

    queryInterface.renameColumn('uploads', 'id_author', 'id_user');
  }
};
