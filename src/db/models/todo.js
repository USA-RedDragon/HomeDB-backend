/* eslint-disable new-cap */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('todo', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        notes: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'todo',
    });
};
