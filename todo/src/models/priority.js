'use strict';

module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define('Priority', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, {
    tableName: 'priorities',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at'
  });

  Priority.associate = (models) => {
    Priority.hasMany(models.Todo, { foreignKey: 'priority_id' });
  };

  return Priority;
};