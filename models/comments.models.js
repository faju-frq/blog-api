import { DataTypes, Model } from "sequelize";

const commentModel = (sequelize) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      
      },
      blog_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
     
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      likes: {
        type: DataTypes.BIGINT.UNSIGNED,
        defaultValue: 0,
      },
    },
    {
      underscored: true,
    }
  );

  return Comment;
};

export default commentModel;
