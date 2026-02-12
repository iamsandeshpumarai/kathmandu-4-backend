const mongoose = require('mongoose');

// Use your actual string from Atlas here
const dbURI = "mongodb+srv://rai:parmilarai@cluster0.xygaeln.mongodb.net/newSurvey?appName=Cluster0";

mongoose.connect(dbURI)
  .then(() => console.log("✅ MongoDB Connected! Now UserModel.find() will work."))
  .catch(err => console.log("❌ Connection Error:", err));