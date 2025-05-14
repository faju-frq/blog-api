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
    }
  );

  return CommentLike;
};

export default commentLikeModel;
