import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

import userModel from "./users.models";
import blogModel from "./blog.models";
import commentModel from "./comments.models";

export const User=userModel(sequelize);
export const Blog=blogModel(sequelize);
export const Comment=commentModel(sequelize);

User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Blog.belongsTo(User, { foreignKey: 'user_id' });

Blog.hasMany(Comment, { foreignKey: 'blog_id', onDelete: 'CASCADE' });
Comment.belongsTo(Blog, { foreignKey: 'blog_id' });

User.hasMany(Comment, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'user_id' });


