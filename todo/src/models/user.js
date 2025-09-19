'use strict';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.TEXT, allowNull: false }
  }, {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at'
  });

  User.associate = (models) => {
    User.hasMany(models.Todo, { foreignKey: 'user_id' });
  };

  return User;
};
