import createExpressApp from "./services/ExpressApp.js";
import connectToDatabase from "./services/Database.js";

const startServer = async () => {

 await connectToDatabase();
 
 const app = createExpressApp();
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 });
};

startServer();
