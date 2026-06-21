import express from "express"; 
import cors from "cors"
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js";


dotenv.config();

const app = express(); 
app.use(cors())

app.use(express.json());

const PORT = process.env.PORT || 3000

app.use("/api/users" , userRoute )

app.listen(PORT , ()=>{
    console.log(`server is running on port number 3000${PORT}`);
    
}) 