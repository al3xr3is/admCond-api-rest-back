'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
 
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
 
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
 
      senha: {
        allowNull: false,
        type: Sequelize.STRING,
      },
 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
 
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW
      },
      id_empreendimento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Empreendimentos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios')
  }
};
