"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("likes", "likeCount");
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("likes", "likeCount", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
