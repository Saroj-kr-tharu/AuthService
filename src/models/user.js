'use strict';

const bcrypt = require('bcrypt');
const { salt } = require('../config/serverConfig');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsToMany(models.Roles, {
        through: 'UserRoles'
      })
      
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 500],
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },


  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {



    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    console.log(user);

  })
  return User;
};