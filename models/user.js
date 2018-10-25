'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        wakatime_api_key: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        id_upload: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_role: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        id_google: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: true,
        underscored: true
    });
    User.associate = function(models) {
        // associations can be defined here
    };

    return User;
};