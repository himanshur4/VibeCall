import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.route.js"
import userRoutes from "./src/routes/user.route.js"
import chatRoutes from "./src/routes/chat.route.js"
import { connectDB } from "./src/lib/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: ["http://localhost:5173", "https://vibe-call.vercel.app"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    exposedHeaders: ['*', 'Authorization'],
    maxAge: 86400
}));

// Security headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-csrf-token');
    next();
});

app.use(express.json());
app.use(cookieParser());

// Health check route
app.get('/',(_,res)=>{
    res.json({ status: 'API is working' });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();