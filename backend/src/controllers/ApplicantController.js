import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import express, { application } from "express";
import Applicant from "../models/ApplicantModel.js";
import bcrypt from "bcrypt"
import multer from "multer";
import jwt from "jsonwebtoken"
import { GenerateSignature, ValidatePassword } from "../../utility/PasswordUtility.js";
import Jobs from "../models/JobPostModel.js";
import cloudinary from "../../utility/cloudinaryConfig.js";
import fs from "fs";




export const ApplicantSignUp = async (req, res) => {

  try {
    const {
      firstname,
      lastname,
      email,
      password,
      yearsofExperience,
      location,
      number,
    } = req.body;

    // check if email already exists in DB
    const existingApp = await Applicant.findOne({ email: email });

    if (existingApp) {
      return res.status(403).json({ msg: "Applicant already exists", existingApp })
    } else {

      const salt = await bcrypt.genSalt()
      const passwordHash = await bcrypt.hash(password, salt)

      const newApplicant = await Applicant.create({
        firstname,
        lastname,
        email,
        password: passwordHash,
        yearsofExperience,
        location,
        salt: salt,
        number
      })

      res.status(201).json(newApplicant)
    }



  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


// LOGIN

export const ApplicantLogin = async (req, res) => {
  const { email, password } = req.body;

  const applicant = await Applicant.findOne({ email: email });

  if (applicant !== null) {
    const validation = await ValidatePassword(password,
      applicant.password,
      applicant.salt);

    if (validation) {
      // Generate the signature
      const signature = GenerateSignature({
        _id: applicant._id,
        email: applicant.email,
      });
      // send result to client
      return res.status(201).json({
        firstname: applicant.firstname,
        lastname: applicant.lastname,
        signature: signature,
        verified: applicant.verified,
        email: applicant.email
      });
    }
  }

  return res.status(404).json({ message: "Invalid email or password" });
}






// CV UPLOAD
// Multer disk storage configuration
// const fileStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "files");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g, "-") + "_" + file.originalname
//     );
//   },
// });

// Multer middleware for handling file uploads
// const upload = multer({ storage: fileStorage }).single("cv");

// const uploadDirectory = 'files';

// export const UploadCv = async (req, res) => {
//   const user = req.user;


//   try {

//     if (user) {
//       const applicant = await Applicant.findById(user._id)

//       if (applicant !== null) {

//         // Handle file upload
//         upload(req, res, async (err) => {
//           if (err) {
//             return res.status(400).json({ error: "Error uploading file" });
//           }

//           if (!req.file) {
//             return res.status(400).json({ error: "No file uploaded" });
//           }

//           // If file uploaded successfully, add it to applicant's CV
//           applicant.cv = req.file.filename;

//           // Save the applicant with the updated CV
//           const result = await applicant.save();

//           return res.json(result);
//         });
//       }

//       // If Applicant is null or undefined, return an error
//       if (!applicant) {
//         return res.status(404).json({ error: "Applicant not found" });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }


// APPLY FOR JOBS

// Multer disk storage configuration
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '_' + file.originalname
    );
  },
});


// Multer middleware for handling file uploads
// const upload = multer({ storage: fileStorage }).single('cv');

const upload = multer({
  storage: fileStorage,
  limits: {
    fileSize: 1024 * 1024 * 10, // 5 MB limit
  },
}).single("cv");


// export const UploadCv = async (req, res) => {
//   const user = req.user;

//   try {
//     if (!user) {
//       return res.status(401).json({ error: 'User not authenticated' });
//     }

//     const applicant = await Applicant.findById(user._id);

//     if (!applicant) {
//       return res.status(404).json({ error: 'Applicant not found' });
//     }

//     // Handle file upload
//     upload(req, res, async (err) => {
//       if (err) {
//         return res.status(400).json({ error: 'Error uploading file' });
//       }

//       if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//       }

//       // If file uploaded successfully, add it to applicant's CV
//       applicant.cv = req.file.filename;

//       // Save the applicant with the updated CV
//       const result = await applicant.save();

//       return res.json(result);
//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// };


export const uploadFile = async (req, res, next) => {

  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const applicant = await Applicant.findById(user._id);

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }


    // Check if the file was provided
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('Uploading to Cloudinary...');
    // Upload file to Cloudinary
    const cloudinaryUploadResponse = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto"
    });

    console.log("Your file is uploaded on Cloudinary ", cloudinaryUploadResponse.url);

      // If file uploaded successfully, add it to applicant's CV
    applicant.cv = cloudinaryUploadResponse.url;

    const result = await applicant.save()

    // Send response back to the client
    res.status(200).json({ url: cloudinaryUploadResponse.url, result: result });
  } catch (error) {
    console.error(error);
    fs.unlinkSync(req.file.path);
    // Send error response back to the client
    res.status(500).json({ message: 'An error occurred during file upload' });
  }
};



export const Apply = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const applicant = await Applicant.findById(user._id);

    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    const jobId = req.params.jobId;
    const job = await Jobs.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    // Push the user's ID to the job's applicants array
    job.applicants.push(user._id);
    const savedJob = await job.save();

    // Add the job to the applicant's activeJobsStage
    applicant.activeJobsStage.push({ job: jobId });
    const savedApplicant = await applicant.save();

    return res.json({ job: savedJob, applicant: savedApplicant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// GET APPLICANT JOBS
export const GetActiveJobs = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const applicant = await Applicant.findById(user._id).populate('activeJobsStage.job');

    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }

    const activeJobs = applicant.activeJobsStage.map(job => ({
      job: {
        _id: job.job._id,
        company: job.job.company,
        title: job.job.title,
        location: job.job.location,
        minExperience: job.job.minExperience,
        pay: job.job.pay,
        // Add other fields as needed
      },
      stage: job.stage
    }));

    return res.json(activeJobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const GetSingleJob = async (req, res) =>{
  const jobId = req.params.jobId;

  const job = await Jobs.findById(jobId)

  if (job !== null) {
    return res.status(200).json(job)
  }

  return res.json({ message: "Job data not available" })
}