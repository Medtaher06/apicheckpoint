import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import usersRoute from "./Routes/usersRoute";
const app = express()
// MIDDLEWARES 
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// ROUTES 
app.use('/users', usersRoute)

const mongoUrl ="mongodb+srv://taher:NO0cwwJCvqDy6A3p@cluster0.vmbkp.mongodb.net/myThirdDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUrl).then(() =>{

    console.log('database connected successfully');
    app.listen(8000,(req,res) => {
        console.log('server running on port 8000')
        
    })

} )
.catch(err =>{
    console.error('Database connection error'+ err.message);
})
app.get("/",(req,res)=>{
    res.send('hello')
})


















