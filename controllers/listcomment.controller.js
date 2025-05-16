import {sequelize, Comment,User } from "../models/index.js";

export const listComment=async(req,res)=>{
  try{
    const blog_id=req.params.id;
    const comments=await Comment.findAll({where:{blog_id},
      attributes:["comment",[
                sequelize.literal(`
            (SELECT COUNT(*) 
             FROM comment_likes 
             WHERE comment_likes.comment_id = Comment.id)
          `),
                "likes",
              ],],
    include: [{ model: User, attributes: ["name"] }]});
    res.json(comments);
  }catch(err){
      console.error("error fetching blogs",err)
  }
};