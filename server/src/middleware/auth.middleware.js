import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("Cookies received:", req.cookies); // Debug cookies
        console.log("JWT Token:", token); // Debug token

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log("Decoded token:", decoded); // Debug decoded token

            const user = await User.findById(decoded.userId).select("-password");
            if (!user) {
                return res.status(401).json({ message: "Unauthorized - User not found" });
            }

            req.user = user;
            next();
        } catch (jwtError) {
            console.log("JWT Verification Error:", jwtError);
            return res.status(401).json({ 
                message: "Unauthorized - Invalid token",
                error: process.env.NODE_ENV === 'development' ? jwtError.message : undefined
            });
        }
    } catch (error) {
        console.log("Error in protectRoute middleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};