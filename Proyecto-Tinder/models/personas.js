'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      personas.belongsTo(models.cuenta,{
        foreignKey:'id_cuenta',
        as:'cuenta'
      })

      personas.belongsTo(models.habilidades,{
        foreignKey:'id_habilidad',
        as:'habilidad'
      })
    }
  }
  personas.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    celular: DataTypes.STRING,
    id_cuenta: DataTypes.INTEGER,
    id_habilidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'personas',
  });
  return personas;
};