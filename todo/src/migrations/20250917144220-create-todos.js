'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('todos', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING(255), allowNull: false },
      description: { type: Sequelize.TEXT },
      completed: { type: Sequelize.BOOLEAN, defaultValue: false },
      priority_id: {
        type: Sequelize.INTEGER,
        references: { model: 'priorities', key: 'id' },
        onDelete: 'SET NULL',
        allowNull: true
      },
      due_date: { type: Sequelize.DATE },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      deleted_at: { type: Sequelize.DATE, allowNull: true }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('todos');
  }
};
