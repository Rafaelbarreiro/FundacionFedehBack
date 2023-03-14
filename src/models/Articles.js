const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('articles',{
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true
          }, 
        title:{
            type: DataTypes.STRING
        },
        subtitle:{
            type: DataTypes.STRING
        },
        img:{
            type: DataTypes.STRING
        },
        detail:{
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        imgdetail:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    })
}