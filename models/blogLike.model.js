import { DataTypes} from "sequelize";

const blogLikeModel = (sequelize) => {
  const BlogLike = sequelize.define(
    "BlogLike",
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
    },
    {
      underscored: true,
    }
  );

  return BlogLike;
};

export default blogLikeModel;
