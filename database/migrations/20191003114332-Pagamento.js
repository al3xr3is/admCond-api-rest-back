'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataemissao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      datavencimento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      datapagamento: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
      statuspagamento: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_taxa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Taxas',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        dafault: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pagamentos');
  }
};
