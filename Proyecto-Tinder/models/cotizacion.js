'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cotizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cotizacion.belongsTo(models.confir_anticipo,{
        foreignKey:'id_confir_anticipo',
        as:'confir_anticipo'
      })
      
      cotizacion.belongsTo(models.clientes,{
        foreignKey:'id_cliente',
        as:'cliente'
      })

      cotizacion.belongsTo(models.personas,{
        foreignKey:'id_persona',
        as:'persona'
      })
    }
  }
  cotizacion.init({
    horas_trabajo: DataTypes.STRING,
    valor_contrato: DataTypes.INTEGER,
    id_confir_anticipo: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cotizacion',
  });
  return cotizacion;
};