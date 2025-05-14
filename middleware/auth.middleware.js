import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorised:No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: "Unauthorized: Token has expired" });
  }
  console.error("JWT verification failed:", err);
  res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
