import cloudinary from "../../utility/cloudinaryConfig.js";
import fs from "fs";

const uploadFile = async (req, res, next) => {
  try {
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
    
    // Send response back to the client
    res.status(200).json({ url: cloudinaryUploadResponse.url });
  } catch (error) {
    console.error(error);
    fs.unlinkSync(req.file.path);
    // Send error response back to the client
    res.status(500).json({ message: 'An error occurred during file upload' });
  }
};

console.log(uploadFile, "uploadfile");

export { uploadFile }; 