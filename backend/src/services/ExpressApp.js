import express from "express";
import path from "path";
import cors from 'cors';
import ApplicantRoute from "../routes/ApplicantRoute.js"
import AdminRoute from "../routes/AdminRoute.js"
import bodyParser from "body-parser";
import fileUploadRoutes from "../routes/fileUploadRoute.js";



const createExpressApp = () => {
    const app = express();
    app.use(express.json());

    app.use(bodyParser.json({ limit: "30mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
    // Middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
        cors({         
            origin: ["http://localhost:5173", "http://localhost:3000"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true,
        })
    );


    // Use new URL() to get the directory name
    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    app.use("/files", express.static(path.join(__dirname, "files")));

    // Define your routes and middleware here
    app.use("/applicant", ApplicantRoute)
    app.use("/admin", AdminRoute)
    app.use("/fileupload", fileUploadRoutes); // sample
    return app;
};

export default createExpressApp;
