const mongoose = require('mongoose')
const SurveyQuestionBankModel = require("./Models/SurveyQuestion");
const surveyquestiondata = require("./surveyquestiondata");


mongoose.connect('mongodb+srv://rai:parmilarai@cluster0.xygaeln.mongodb.net/Survey?appName=Cluster0').then(()=>{
    console.log('connect bhayo hai db sanga')
}).catch((err)=>{
    console.log('err ayo hai err xai' ,err.message)
})
SurveyQuestionBankModel.insertMany(surveyquestiondata).then(()=>{
    console.log("data saved")
}).catch((err)=>{
    console.log(err.message)
})