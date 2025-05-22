import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticate = (req, res, next) => {
  const token = req.cookies?.token; 

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Unauthorized: Token has expired" });
    }
    console.error("JWT verification failed:", err);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
