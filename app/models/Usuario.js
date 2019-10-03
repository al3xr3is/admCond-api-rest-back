'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuarios', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    id_empreendimento: DataTypes.INTEGER,
    
  }, {});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Empreendimentos, {foreignKey: 'id_empreendimento'})    
  };
  return Usuario;
};