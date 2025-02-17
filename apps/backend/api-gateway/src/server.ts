import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use("/api/auth", createProxyMiddleware({ target: "http://localhost:5001", changeOrigin: true }));
// app.use("/api/projects", createProxyMiddleware({ target: "http://project-service:5002", changeOrigin: true }));
// app.use("/api/ratings", createProxyMiddleware({ target: "http://rating-service:5003", changeOrigin: true }));

app.listen(8080, () => console.log("API Gateway running on port 8080"));
