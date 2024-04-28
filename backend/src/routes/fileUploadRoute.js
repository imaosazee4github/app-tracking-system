import express  from "express";
const router = express.Router();
import upload  from "../middleware/multerSetup.js";
import { uploadFile } from "../controllers/fileUploadController.js";

//File upload route
router.post("/fileupload", upload.single("file"), uploadFile);

export default router
