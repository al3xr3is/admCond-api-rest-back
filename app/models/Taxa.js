'use strict';
module.exports = (sequelize, DataTypes) => {
  const Taxa = sequelize.define('Taxas', {
    tipo: DataTypes.STRING,
    valor: DataTypes.FLOAT(10, 2),
    descricao: DataTypes.STRING,    
  }, {});
  Taxa.associate = function(models) {
    
  };
  return Taxa;
};