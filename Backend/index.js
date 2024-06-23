import express from "express";
import {PORT,mongodbURL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/books.js";
import BookRoutes from './Routes/BookRoutes.js';
import cors from 'cors';
import axios from 'axios'
const app=express();
app.use(express.json());
app.use(cors());
app.get("/", (req,res) =>{
    console.log(req);
    return res.status(234).send("HI");
});
app.use('/books',BookRoutes);


mongoose
    .connect(mongodbURL)
    .then(() =>{
        console.log('App connected to database');
        app.listen(PORT,()=>{
            console.log(`App is listening to port:${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(error);
    })