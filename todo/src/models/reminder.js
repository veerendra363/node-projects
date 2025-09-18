'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reminder = sequelize.define('Reminder', {
    remind_at: { type: DataTypes.DATE, allowNull: false },
    sent: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    tableName: 'reminders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at'
  });

  Reminder.associate = (models) => {
    Reminder.belongsTo(models.Todo, { foreignKey: 'todo_id' });
  };

  return Reminder;
};