import express from "express"
import Jobs from "../models/JobPostModel.js"
import Applicant from "../models/ApplicantModel.js"


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

 return res.status(200).json(CreateJob)
}

export const GetAllJobs = async (req, res) =>{
 const jobs = await Jobs.find()

 if(jobs !== null){
  return res.status(200).json(jobs)
 }

 return res.json({ message: "Jobs data not available" });
}

// FIND ONE JOB

export const GetOneJob = async (req, res) =>{
 const jobId = req.params.id;

 const job = await Jobs.findById(jobId)

 if(job !== null){
  return res.status(200).json(job)
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
   _id: applicant._id,
   firstname: applicant.firstname,
   lastname: applicant.lastname,
   email: applicant.email,
   yearsofExperience: applicant.yearsofExperience,
   age: applicant.age,
   number: applicant.number,
   activeJobsStage: [applicant.activeJobsStage]
  }));

  return res.status(200).json(applicants);
 } catch (error) {
  return res.status(500).json({ error: error.message });
 }
};

export const UpdateApplicationStatus = async (req, res) => {
 const { action } = req.body;
 const jobId = req.params.jobId;
 const appId = req.params.appId;

 const job = await Jobs.findById(jobId);

 if (!job) {
  return res.status(404).json({ message: "Job does not exist" });
 }

 const applicant = await Applicant.findById(appId)

 if (!applicant) {
  return res.status(404).json({ message: "Applicant does not exist" });
 }

 // Find the index of the job within the activeJobsStage array
 const jobIndex = applicant.activeJobsStage.findIndex(job => job.job.toString() === jobId);

 if (jobIndex === -1) {
  return res.status(404).json({ message: "Job not associated with the applicant" });
 }

 // Update the stage of the job
 applicant.activeJobsStage[jobIndex].stage = action; // Assuming 'action' contains the new stage value

 try {
  await applicant.save();
  return res.status(200).json({ message: "Stage updated successfully", applicant });
 } catch (error) {
  console.error("Error updating stage:", error);
  return res.status(500).json({ message: "Internal server error" });
 }
};


 // const isApplicantInJob = job.applicants.some(applicantId => applicantId.equals(AppId));

 // if (isApplicantInJob) {
 //  // Applicant is associated with the job
 //  // Proceed with your logic here
  
 // } else {
 //  // Applicant is not associated with the job
 //  return res.status(404).json({ message: "Applicant is not associated with the job" });
 // }

 // const JobApplicant = job.applicants.map(applicant => ({
 //  firstname: applicant.firstname,
 //  lastname: applicant.lastname,
 //  email: applicant.email,
 //  yearsofExperience: applicant.yearsofExperience,
 //  age: applicant.age,
 //  number: applicant.number
 // }));