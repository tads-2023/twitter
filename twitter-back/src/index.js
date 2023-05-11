const express = require("express");
const {MongoMemoryServer} = require("mongodb-memory-server");
const mongoose = require("mongoose");

const userRouter = require("./controllers/user.controller");

const setup = async () => {
    try {
        const mongod = await MongoMemoryServer.create();
        await mongoose.connect(`${mongod.getUri()}twitter`);

        const app = express();
        app.use(express.json());
        
        app.get("/", (req, res) => {
            res.send("Servidor funfando!");
        });

        app.use("/users", userRouter);

        app.listen(3000, () => {
            console.log("Server listenning in: http://localhost:3000");
        })
    } catch(e){
        console.log("Deu ruim", e);
    }
}

setup();