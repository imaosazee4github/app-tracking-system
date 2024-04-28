// server/middleware/multerSetup.js
import multer from "multer";

//Multer Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 10, // 5 MB limit
    },
});

export default upload;