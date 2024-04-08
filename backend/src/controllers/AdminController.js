import express from "express"
import Jobs from "../models/JobPostModel.js"


export const CreateJob = async (req, res) => {
 const {
  company,
  title,
  location,
  minExperience,
  pay
 } = req.body

 // Create jobID
 const jobId = Math.floor(100000 + Math.random() * 900000);



 const CreateJob = await Jobs.create({
  company: company,
  title: title,
  location: location,
  minExperience : minExperience,
  pay: pay,
  jobId: jobId,
  applicants: []
 })

 return res.json(CreateJob)
}

export const GetAllJobs = async (req, res) =>{
 const jobs = await Jobs.find()

 if(jobs !== null){
  return res.json(jobs)
 }

 return res.json({ message: "Jobs data not available" });
}

// FIND ONE JOB

export const GetOneJob = async (req, res) =>{
 const jobId = req.params.id;

 const job = await Jobs.findById(jobId)

 if(job !== null){
  return res.json(job)
 }

 return res.json({ message: "Job data npt available"})
} 

// FIND ALL APPLICANTS ON A JOB
export const JobApplicants = async (req, res) => {
 try {
  const jobId = req.params.jobId;

  const job = await Jobs.findById(jobId).populate("applicants");

  if (!job) {
   return res.status(404).json({ message: "Job does not exist" });
  }

  const applicants = job.applicants.map(applicant => ({
   firstname: applicant.firstname,
   lastname: applicant.lastname,
   email: applicant.email,
   yearsofExperience: applicant.yearsofExperience,
   age: applicant.age,
   number: applicant.number
  }));

  return res.json(applicants);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};

export const UpdateApplicationStatus = async(req, res) =>{
 const jobId = req.params.id;

 const job = await Jobs.findById(jobId)

 const jobApplication = job.applicants

}