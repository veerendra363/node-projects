'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reminders', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      todo_id: {
        type: Sequelize.INTEGER,
        references: { model: 'todos', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      remind_at: { type: Sequelize.DATE, allowNull: false },
      sent: { type: Sequelize.BOOLEAN, defaultValue: false },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      deleted_at: { type: Sequelize.DATE, allowNull: true }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('reminders');
  }
};