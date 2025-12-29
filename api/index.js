import express from 'express'
import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://kinza:kinzamongodb@mern-blog.x5lxdib.mongodb.net/?appName=mern-blog').then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Error connecting to MongoDB', err)
})
const app = express();
app.listen(3000,()=>{
    console.log('Server started at port 3000 !!!.')
})