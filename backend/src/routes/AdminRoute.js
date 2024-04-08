import express from "express"
import { CreateJob, GetAllJobs, GetOneJob, JobApplicants } from "../controllers/AdminController.js";

const router = express.Router();

router.post("/postjob", CreateJob)
router.get("/jobs", GetAllJobs)
router.get("/jobs/:jobId", GetOneJob)
router.get("/:jobId/applicants", JobApplicants)
router.patch("/jobs/:jobId/update")

export default router
