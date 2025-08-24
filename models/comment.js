"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const { v4: uuidv4 } = require("uuid");
  comment.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: uuidv4 },
      postId: { type: DataTypes.UUID, references: "postTable", key: "id" },
      comment: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
