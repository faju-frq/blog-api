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
      indexes: [
        {
          unique: true,
          fields: ['user_id', 'blog_id'],
          name: 'unique_user_blog_like'
        },
        {
          fields: ['blog_id'],
          name: 'index_blog_likes_on_blog_id'
        }
      ]
    }
  );

  return BlogLike;
};

export default blogLikeModel;
