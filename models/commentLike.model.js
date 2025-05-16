import { DataTypes} from "sequelize";

const commentLikeModel = (sequelize) => {
  const CommentLike = sequelize.define(
    "CommentLike",
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
      comment_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
     
      },
    },
    {
      underscored: true,
      indexes: [
    {
      fields: ['user_id'],
      name: 'index_blogs_on_user_id'
    },
    {
      fields: ['created_at'],
      name: 'index_blogs_on_created_at'
    }
  ]
    }
  );

  return CommentLike;
};

export default commentLikeModel;
