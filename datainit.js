const mongoose = require('mongoose')
const SurveyQuestionBankModel = require('./Models/SurveyQuestion')
const dataSurvey = require('./surveyquestiondata')

mongoose.connect("mongodb+srv://kathamandusurvey:rai@cluster0.xygaeln.mongodb.net/ChitwanSurvey?appName=Cluster0").then(()=>{
    console.log('connected to the db')
}).catch((err)=>{
    console.log(err.message)
})

 SurveyQuestionBankModel.insertMany(dataSurvey).then(()=>{
    console.log("data saved bhayo")
}).catch((err)=>{
    console.log(err.message ,'is the messge')
})
