const mongoose = require('mongoose');


const answerSchema = new mongoose.Schema({

  questionText: { type: String, required: true },

  answer: { type: mongoose.Schema.Types.Mixed, default: '' }, 
});


const surveyResponseSchema = new mongoose.Schema({
  surveyKey: { type: String, required: true }, 
  topic: { type: String }, 
  subject: { type: String },
  answers: [answerSchema],
});

const userSurveySchema = new mongoose.Schema({
  submittedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  submittedBy: { 
    type: String,    required: true 
  },
  
  
  name: { type: String, required: true },
  age: { type: String },
  gender: { type: String },
  wardNumber: { type: String },
  address: { type: String },
  date: { type: String },
  time: { type: String },
  currentJob: { type: String },
  familyNumber: { type: String },
  phoneNumber: { type: String },
  caste: { type: String },
  class: { type: String },
  religiousAffiliation: { type: String },
  educationLevel: { type: String },
  residencyStatus: { type: String },


  surveys: [surveyResponseSchema],

}, { timestamps: true });

const UserSurvey = mongoose.model('UserSurvey', userSurveySchema);
module.exports = UserSurvey;