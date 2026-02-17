const mongoose = require('mongoose')
const SurveyQuestionBankModel = require('./Models/SurveyQuestion')
const dataSurvey = require('./surveyquestiondata')
const userModel = require('./Models/UserModel')

mongoose.connect("mongodb+srv://kathamandusurvey:rai@cluster0.xygaeln.mongodb.net/KathmanduSurvey?appName=Cluster0").then(()=>{
    console.log('connected to the db')
}).catch((err)=>{
    console.log(err.message)
})

 SurveyQuestionBankModel.insertMany(dataSurvey).then(()=>{
    console.log("data saved bhayo")
}).catch((err)=>{
    console.log(err.message ,'is the messge')
})

userModel.create({
username:"admin",
email:"admin123@gmail.com",
password:"admin123",
role:['admin']

}).then(()=>{
    console.log("adminsaved bhayo")
})