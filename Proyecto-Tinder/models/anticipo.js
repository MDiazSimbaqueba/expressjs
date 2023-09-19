'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anticipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      anticipo.belongsTo(models.clientes,{
        foreignKey:'id_cliente',
        as:'cliente'
      })
    }
  }
  anticipo.init({
    valor_anticipo: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'anticipo',
  });
  return anticipo;
};