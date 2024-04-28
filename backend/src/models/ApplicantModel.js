import mongoose from "mongoose"

const ApplicantSchema = new mongoose.Schema(
 {
  firstname: {
   type: 'String',
   required: true,
   min: 2,
   max: 50
  },
  lastname: {
   type: 'String',
   required: true,
   min: 2,
   max: 50
  },
  email: {
   type: 'String',
   required: true,
   max: 50,
   unique: true
  },
  password: {
   type: 'String',
   required: true,
   min: 50,
  },
  cv: {
   type: 'String',
   default: "",
  },
  yearsofExperience: {
   type: Number,
   required: true
  },
  activeJobsStage: [{
   job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'jobs'
   },
   stage: {
    type: String,
    enum: ['Applied', 'Interview', 'Offered', 'Rejected'], // Define possible stages
    default: 'Applied'
   }
  }],
  salt: { type: String, required: true },
  location: String,
  number: Number,
 },
 { timestamps: true }
)

const Applicant = mongoose.model('applicant', ApplicantSchema)

export default Applicant