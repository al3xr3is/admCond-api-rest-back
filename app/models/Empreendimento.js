'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empreendimento = sequelize.define('Empreendimentos', {
    nome: DataTypes.STRING,
    bloco: DataTypes.STRING,
    apartamento: DataTypes.STRING,
    
  }, {});
  Empreendimento.associate = function(models) {
    Empreendimento.hasOne(models.Usuarios, {foreignKey: 'id_empreendimento'})
  };
  return Empreendimento;
};