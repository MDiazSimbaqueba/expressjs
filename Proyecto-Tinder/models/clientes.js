'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  clientes.init({
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    telefono: DataTypes.STRING,
    id_cotizacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};