import mongoose, { Schema, Document, Model } from "mongoose";


interface ApplicantDoc extends Document {
  email: string;
  password: string;
  salt: string;
  firstname: string;
  lastname: string;
  country: string;
  address: string;
  previousEmployment: string;
  phone: number;
  age: number;
  yearsExperience: number;
  // applications: [PostingsDocs];
  cv: string;
}

const ApplicantSchema = new Schema({
  email: {type: String, required: true},
  password: { type: String, required: true },
  salt: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  previousEmployment: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  yearsExperience: { type: Number, required: true },
  // applications: [{ type: Schema.Types.ObjectId, ref: "postings"}];
  cv: { type: String, required: true }
})