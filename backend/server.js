
import express from 'express'
// const app = express();
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
import path from "path"
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages",messageRoutes)
app.use('/api/users',userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

// app.get('/',(req,res)=>{
//     res.send('Server is Ready!')
// })



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})