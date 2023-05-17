const express = require("express");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");
const cors = require("cors")

const userRouter = require("./controllers/user.controller");
const postRouter = require("./controllers/post.controller");
const authMiddleWare = require("./middlewares/auth.middleware");

const setup = async () => {
    try {
        const mongod = await MongoMemoryServer.create();
        await mongoose.connect(`${mongod.getUri()}twitter`);

        const app = express();
        app.use(express.json());

        app.use(cors());
        
        app.get("/", (req, res) => {
            res.send("Servidor funfando!");
        });

        app.use("/users", userRouter);
        app.use("/users/:id/posts", authMiddleWare, postRouter);

        app.listen(3000, () => {
            console.log("Server listenning in: http://localhost:3000");
        })
    } catch(e){
        console.log("Deu ruim", e);
    }
}

setup();