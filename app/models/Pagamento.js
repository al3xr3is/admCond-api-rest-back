'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('Pagamentos', {
    token: DataTypes.STRING,
    dataemissao: DataTypes.DATE,
    datavencimento: DataTypes.DATE,
    datapagamento: DataTypes.DATE,
    statuspagamento: DataTypes.BOOLEAN,
    id_usuario: DataTypes.INTEGER,
    id_taxa: DataTypes.INTEGER
    
  }, {});
  Pagamento.associate = function(models) {
    Pagamento.belongsTo(models.Usuarios, {foreignKey: 'id_usuario'})
    Pagamento.belongsTo(models.Taxas, {foreignKey: 'id_taxa'})
  };
  return Pagamento;
};