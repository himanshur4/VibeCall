import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js"
import userRoutes from "./src/routes/user.route.js"
import chatRoutes from "./src/routes/chat.route.js"
import { connectDB } from "./src/lib/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: ["http://localhost:5173",process.env.FRONTEND_URL].filter(Boolean),
    credentials: true,//allow frontend to send cookies
    
}));
app.use(express.json());
app.use(cookieParser());
app.get('/',(_,res)=>{
    res.send('API working');
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})