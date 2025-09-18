'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    due_date: { type: DataTypes.DATE }
  }, {
    tableName: 'todos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at'
  });

  Todo.associate = (models) => {
    Todo.belongsTo(models.User, { foreignKey: 'user_id' });
    Todo.belongsTo(models.Priority, { foreignKey: 'priority_id' });
    Todo.hasMany(models.Reminder, { foreignKey: 'todo_id' });
  };

  return Todo;
};