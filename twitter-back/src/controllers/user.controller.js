const express = require("express");
const sha256 = require("crypto-js/sha256");
const Base64 = require("crypto-js/enc-base64");
const User = require("../models/User");
const jwt = require('jsonwebtoken')
const secret = "UH@3vs,MEd,3lqLDQkb')[}J";
const userRouter = express.Router();

userRouter.post("/sign-up", async (req, res) => {
  let {
    nome,
    apelido,
    email,
    password
  } = req.body;
  password = Base64.stringify(sha256(password));
  let user = await User.create({nome, apelido, email, password});
  user.password = "";
  res.send(user);
});

userRouter.post("/sign-in", async (req, res) => {
    let {
        email,
        password
    } = req.body;
    password = Base64.stringify(sha256(password));
    console.log("password: ", password);
    const userLogado = await User.findOne({email, password});
    if(userLogado) {
        const token = jwt.sign({
            email: userLogado.email, 
            id: userLogado._id
        }, secret);
        return res.send({token: token});
    }
    res.status(401).send({error: "Email ou senha inválido"});
});

module.exports = userRouter;