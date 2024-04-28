import mongoose, { Schema } from "mongoose"

const JobSchema = new mongoose.Schema(
 {
   company:{
   type: 'string',
   required:true,
   min:2,
   max:50
  },
  title: {
   type: 'String',
   required: true,
   min: 2,
   max: 50
  },
   location: {
   type: 'String', 
   required:true
  },
  minExperience:{
   type:'Number',
   required: true
  },
  pay: {
    type: 'Number',
    required: true
},
  jobId:{
   type:'String',
   required: true
  },
  nature:{
    type:'String',
    required: true
  },
    opening_date:{
      type: "String",
      required: true
  },
    closing_date: {
      type: "String",
      required: true
    },
    skills_required: [
      {
      type: String,
      required: true
      }
    ],
  applicants:[
   {
    type: Schema.Types.ObjectId,
    ref:"applicant"
   }
  ]
 }
)

const Jobs = mongoose.model('jobs', JobSchema)

export default Jobs