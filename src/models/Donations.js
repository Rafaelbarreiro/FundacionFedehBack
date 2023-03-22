const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('donations', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
          },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}