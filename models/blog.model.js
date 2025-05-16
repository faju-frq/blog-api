import { DataTypes } from "sequelize";

const blogModel = (sequelize) => {
  const Blog = sequelize.define(
    "Blog",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      heading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  return Blog;
};

export default blogModel;
