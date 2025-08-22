"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
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
  likes.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true, defaultValue: uuidv4 },
      postId: { type: DataTypes.UUID, references: "postTables", key: "id" },
      likeCount: DataTypes.INTEGER,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};
