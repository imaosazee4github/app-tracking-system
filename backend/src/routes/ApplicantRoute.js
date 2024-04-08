import express from "express";
import { ApplicantLogin, ApplicantSignUp, Apply, GetActiveJobs, UploadCv } from "../controllers/ApplicantController.js";
import multer from "multer";
import { Authenticate } from "../middleware/CommonAuth.js";


const router = express.Router();

const fileStorage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, "files");
 },
 filename: function (req, file, cb) {
  cb(
   null,
   new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
  );
 },
});

const fileUpload = multer({ storage: fileStorage }).single("files");

router.post("/signup", ApplicantSignUp)
router.post("/login", ApplicantLogin)

// Authenticate
// router.use(Authenticate);

router.patch("/cv-upload", Authenticate, UploadCv);
router.patch("/apply/:jobId", Authenticate, Apply)
router.get("/myactiveapplications", Authenticate, GetActiveJobs)

export default router
