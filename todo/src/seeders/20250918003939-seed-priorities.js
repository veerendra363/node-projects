'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('priorities', [
      {
        name: 'Low',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Medium',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'High',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('priorities', null, {});
  }
};
