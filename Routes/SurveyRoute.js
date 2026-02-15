const express = require('express')
const { createSurvey, getSurveyData, deleteSurveyData, getuserSurveyData, getUserSurvey } = require('../Controller/SurveyController')
const { Check, CheckAdmin } = require('../Middleware/Checkauth')
const { getSurveyQuestionBank, getSurveylist, changeStatus, deleteSurveyQuestion, updateTopic, CreateSurveyQuestion, getSurveyQuestion} = require('../Controller/SurveyQuestion')


const Router = express.Router()

Router.post('/createsurvey', Check, createSurvey)
Router.get('/getsurvey/',  getSurveyData)
Router.get('/getusersurveydata',Check, getuserSurveyData)
Router.get('/getusersurvey/:id', getUserSurvey)
Router.delete('/deletesurvey/:id', Check, deleteSurveyData)

Router.get('/getsurveyquestions',getSurveyQuestionBank)
Router.get('/getsurveylist',getSurveylist)
Router.get('/changestatus/:id',changeStatus)
Router.delete('/deletesurveyquestion/:id',deleteSurveyQuestion)
Router.put('/updatetopic/:id',updateTopic)
Router.post('/createsurveyquestion',CreateSurveyQuestion)
Router.get('/getsurveyquestion/:id',getSurveyQuestion)

module.exports = Router