import mongoose from "mongoose"

const AdminSchema = new mongoose.Schema(
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
  salt: { type: String, required: true },
 },
 { timestamps: true }
)

const Admin = mongoose.model('admin', AdminSchema)

export default Admin