import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { APP_SECRET } from "../src/config/index.js"



export const GeneratePassword = async (password, salt) => {
 return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async (
 enteredPassword,
 savedPassword,
 salt
) => {
 return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};

export const GenerateSignature = (payload) => {
 return jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "1d" });
};

export const ValidateSignature = async (req) => {
 const signature = req.get("Authorization");

 if (signature) {
  const payload = (await jwt.verify(
   signature.split(" ")[1],
   process.env.APP_SECRET
  ));

  req.user = payload;

  return true;
 }

 return false;
};
