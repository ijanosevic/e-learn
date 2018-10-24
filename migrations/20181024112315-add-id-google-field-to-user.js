'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface
            .addColumn(
                'Users',
                'id_google',
                {
                    type: Sequelize.STRING,
                    allowNull: true
                }
            )
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface
            .removeColumn(
                'Users',
                'id_google'
            )
    }
};
