const mongoose = require('mongoose')
const SurveyQuestionBankModel = require("./Models/SurveyQuestion");
const dataSurvey = require('./surveyquestiondata');





mongoose.connect('mongodb+srv://rai:parmilarai@cluster0.xygaeln.mongodb.net/newSurvey?appName=Cluster0').then(()=>{
    console.log('connect bhayo hai db sanga')
}).catch((err)=>{
    console.log('err ayo hai err xai' ,err.message)
})
SurveyQuestionBankModel.insertMany(dataSurvey).then(()=>{
    console.log("data saved")
}).catch((err)=>{
    console.log(err.message)
})