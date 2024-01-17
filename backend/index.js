import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import connection from "./connection.js";
import routerUser from "./routes/user.js";
import routerProject from "./routes/project.js";


const server = express();

server.use(cors());
server.use(express.json());

console.log('hello');

connection()
.then(data=>{
    console.log("succes");
})
.catch((data)=>{  
    console.log("failer",data);
});
server.use('/user',routerUser);
server.use('/project',routerProject);

console.log("hello2");

server.listen(8000,()=>{
    console.log('Server is running now...')
}) 