'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    queryInterface.renameColumn('Uploads', 'id_user', 'id_author');
  },

  down: (queryInterface, Sequelize) => {

    queryInterface.renameColumn('Uploads', 'id_author', 'id_user');
  }
};
