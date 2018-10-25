'use strict';


const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + './../config/config.json')[env];
let db        = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        let model_name = model.name.charAt(0).toUpperCase() + model.name.slice(1);
        db[model_name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.Assignment.belongsTo(db.Module, { foreignKey: 'id_module' });
// db.Module.hasMany(db.Assignment, { foreignKey: 'id_module' });
//
// db.Group.belongsToMany(db.User, { through: 'UsersGroups', foreignKey: 'id_user'  });
// db.User.belongsToMany(db.Group, { through: 'UsersGroups', foreignKey: 'id_group'  });
//
// db.Lecture.belongsTo(db.Module, { foreignKey: 'id_module' });
// db.Module.hasMany(db.Lecture, { foreignKey: 'id_module' });
// db.Lecture.belongsTo(db.Group, { foreignKey: 'id_group' });
// db.Group.hasMany(db.Lecture, { foreignKey: 'id_group' });
// db.Lecture.belongsTo(db.Upload, { foreignKey: 'id_upload' });
// db.Upload.hasMany(db.Lecture, { foreignKey: 'id_upload' });
//
// db.Module.belongsTo(db.Group, { foreignKey: 'id_group' });
// db.Group.hasMany(db.Module, { foreignKey: 'id_group' });
// db.Module.belongsTo(db.ModuleCategory, { foreignKey: 'id_category' });
// db.ModuleCategory.hasMany(db.Module, { foreignKey: 'id_category' });
//
// db.Submission.belongsTo(db.User, { foreignKey: 'id_student' });
// db.User.hasMany(db.Submission, { foreignKey: 'id_student' });
// db.Submission.belongsTo(db.Assignment, { foreignKey: 'id_assignment' });
// db.Assignment.hasMany(db.Submission, { foreignKey: 'id_assignment' });
//
// db.SubmissionMessage.belongsTo(db.Submission, { foreignKey: 'id_submission' });
// db.Submission.hasMany(db.SubmissionMessage, { foreignKey: 'id_submission' });
// db.SubmissionMessage.belongsTo(db.Upload, { foreignKey: 'id_upload' });
// db.Upload.hasMany(db.SubmissionMessage, { foreignKey: 'id_upload' });
// db.SubmissionMessage.belongsTo(db.User, { foreignKey: 'id_author' });
// db.User.hasMany(db.SubmissionMessage, { foreignKey: 'id_author' });
//
// db.Upload.belongsTo(db.User, { foreignKey: 'id_author' });
// db.User.hasMany(db.Upload, { foreignKey: 'id_author' });
//
// // db.Upload.belongsTo(db.User, { as: 'ProfileImage', foreignKey: 'id_upload' });
// db.User.belongsTo(db.Upload, { as: 'ProfileImage', foreignKey: 'id_upload' });

module.exports = db;
