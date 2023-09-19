'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cuenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cuenta.belongsTo(models.anticipo,{
        foreignKey:'id_anticipo',
        as:'anticipo'
      })

      cuenta.belongsTo(models.confir_anticipo,{
        foreignKey:'id_confir_anticipo',
        as:'id_confir_anticipo'
      })
    }
  }
  cuenta.init({
    nombre_banco: DataTypes.STRING,
    id_anticipo: DataTypes.INTEGER,
    id_confir_anticipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cuenta',
  });
  return cuenta;
};