import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db';
import fileRoute from "./routes/file";
import {v2 as cloudinary} from 'cloudinary';

const app = express();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_API_CLOUD,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

connectDB();
app.use("/api/file",fileRoute)
app.get("/goode",(req,res)=>{
    res.status(200).send("good");
})



app.listen(process.env.PORT, ()=> console.log(`server is listning to  PORT ${process.env.PORT}`))