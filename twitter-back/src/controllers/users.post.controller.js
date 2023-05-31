const express = require("express");
const Post = require("../models/Post");
const multer  = require('multer');


const upload = multer({ dest: 'imagens/' })

const router = express.Router({mergeParams: true});

router.post("", upload.single('imagem'), async (req, res) => {
    const { conteudo } = req.body;
    const post = await Post.create({
        conteudo: conteudo,
        caminhoImagem: `http://localhost:3000/${req.file.path}`,
        curtidas: 0,
        userId: req.userLogado._id
    });

    res.send(post);
});

router.get("", async (req, res) => {
    if(req.params.id == "me") {
        req.params.id = req.userLogado._id;
    }
    const posts = await Post.find({
        userId: req.params.id
    });

    res.send(posts);
});

module.exports = router;