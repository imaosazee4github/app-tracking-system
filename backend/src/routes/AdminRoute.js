import express from "express"
import { AdminLogin, AdminSignUp, CreateJob, GetAllJobs, GetOneJob, JobApplicants, UpdateApplicationStatus } from "../controllers/AdminController.js";
import { Authenticate } from "../middleware/CommonAuth.js";

const router = express.Router();

router.post('/createAdmin', AdminSignUp )
router.post('/login', AdminLogin)
router.post("/postjob",Authenticate, CreateJob)
router.get("/jobs",GetAllJobs)
router.get("/jobs/:jobId",Authenticate, GetOneJob)
router.get("/:jobId/applicants",Authenticate, JobApplicants)
router.patch("/jobs/:jobId/:appId/update",Authenticate, UpdateApplicationStatus)

export default router
