import express from "express";
import { getPosts } from "../controllers/posts.js";
const router = express.Router();

//http://localhost:3000/posts
//GET POST DELETE UPDATE PATCH

router.get("/", getPosts);

export default router;
