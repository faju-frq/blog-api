import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

import userModel from "./user.model.js";
import blogModel from "./blog.model.js";
import commentModel from "./comment.model.js";
import blogLikeModel from "./blogLike.model.js";
import commentLikeModel from "./commentLike.model.js";

export const User = userModel(sequelize);
export const Blog = blogModel(sequelize);
export const Comment = commentModel(sequelize);
export const BlogLike = blogLikeModel(sequelize);
export const CommentLike = commentLikeModel(sequelize);

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Blog.belongsTo(User, { foreignKey: "user_id" });

Blog.hasMany(Comment, { foreignKey: "blog_id", onDelete: "CASCADE" });
Comment.belongsTo(Blog, { foreignKey: "blog_id" });

User.hasMany(Comment, { foreignKey: "user_id", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "user_id" });

BlogLike.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(BlogLike, { foreignKey: "user_id" });

BlogLike.belongsTo(Blog, { foreignKey: "blog_id" });
Blog.hasMany(BlogLike, { foreignKey: "blog_id" });

CommentLike.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(CommentLike, { foreignKey: "user_id" });

CommentLike.belongsTo(Comment, { foreignKey: "comment_id" });
Comment.hasMany(CommentLike, { foreignKey: "comment_id" });
