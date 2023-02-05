const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('users', {
    id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(30),
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use'
      },
      validate: {
        isEmail: {
          msg: 'Please provide a valid email'
        },
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "false",
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive', 'banned', 'deleted'),
      defaultValue: "active",
    },
    isAdmin: {
      type: DataTypes.STRING,
      defaultValue: "false",
    }
  }, {
    timestamps: false
  });
};