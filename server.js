import express from "express"; 
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js";


const app = express(); 
app.use(cors())

app.use(express.json()); 


app.use("/api/users" , userRoute )

app.listen(3000 , ()=>{
    console.log("server is running on port number 3000");
    
}) 