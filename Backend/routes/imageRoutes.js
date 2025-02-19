import express from "express";
import multer from "multer";
import { uploadImage, getAllImages } from "../controllers/imageController.js";

const router = express.Router();

// Multer Storage Setup (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("image"), uploadImage);
router.get("/images", getAllImages);

export default router;
