require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const surveyRoute = require('./Routes/SurveyRoute')
const adminRoute = require('./Routes/AdminRoute')
const userRoute = require('./Routes/UserRoutes')
const app = express();
const cors = require('cors');
const { Check } = require('./Middleware/Checkauth');
const cookieParser = require('cookie-parser');
const userModel = require('./Models/UserModel');

app.use(cookieParser());

app.set("trust proxy", 1);

// Middleware - must be before routes
app.use(
  cors({

    origin: ["https://survey.kantipurride.com",'http://localhost:5173','https://www.techsurveynepal.com','https://techsurveynepal.com','https://survey-one-green.vercel.app','https://bhaktapur.techsurveynepal.com','https://chitwan3.techsurveynepal.com',"https://chitwanfrontend-git-main-sandeshrais-projects.vercel.app","https://kathmandusurvey.vercel.app","https://kathmandu-3-frotnend.vercel.app","https://kathmandu-3-frotnend.vercel.app"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://kathamandusurvey:rai@cluster0.xygaeln.mongodb.net/Kathamandu-4?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/survey", surveyRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use('/api/content',require('./Routes/ContentRoute'))

app.get("/api/check", Check, async (req, res) => {
const user = await userModel.findById(req.id).select("-password");
  if (!user) {
    return res.status(400).json({ message: "User not Found" });
  }
  if (user) {
    res.status(200).json(user);
  }
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
