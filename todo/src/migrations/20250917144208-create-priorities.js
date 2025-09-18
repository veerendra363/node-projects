'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('priorities', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING(20), allowNull: false, unique: true },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      deleted_at: { type: Sequelize.DATE, allowNull: true }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('priorities');
  }
};