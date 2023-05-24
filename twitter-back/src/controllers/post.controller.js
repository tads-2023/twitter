const express = require("express");
const Post = require("../models/Post");
const Following = require("../models/Following");
const authMiddleWare = require("../middlewares/auth.middleware");

const postRouter = express.Router();

postRouter.get("", authMiddleWare, async (req, res) => {
    const posts = await Post.find({});
    let followedIds = await Following.find({
        followerId: req.userLogado._id
    })
    followedIds = followedIds.map((e) => {
        return e.followedId.toString();
    });

    const postsParced = posts.map((post) => {
        return {
            conteudo: post.conteudo,
            userId: post.userId,
            _id: post._id,
            following: followedIds.includes(post.userId.toString()) 
        }
    });

    res.send(postsParced);
})

module.exports = postRouter;