import express from "express";
import path from "path";
import ApplicantRoute from "../routes/ApplicantRoute.js"
import AdminRoute from "../routes/AdminRoute.js"



const createExpressApp = () => {
 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 // Use new URL() to get the directory name
 const __dirname = path.dirname(new URL(import.meta.url).pathname);

 app.use("/files", express.static(path.join(__dirname, "files")));

 // Define your routes and middleware here
 app.use("/applicant", ApplicantRoute )
 app.use("/admin", AdminRoute)

 return app;
};

export default createExpressApp;
