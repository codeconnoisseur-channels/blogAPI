"use strict";
const { v4: uuidV4 } = require("uuid");
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("postTables", [
      {
        id: uuidV4(),
        email: "John@gmail",
        description: "Welcome to my new blog",
        author: "Channels",
        title: "Tech Series",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("PostTables", null, {});
  },
};
