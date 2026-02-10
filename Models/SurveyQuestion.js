const mongoose = require('mongoose');

// Option Schema
const OptionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['checkbox','text'],
    required: true
  },
  option: String
});

// Question Schema
const SurveyQuestion = new mongoose.Schema({
  
  Question: { type: String, required: true },
  options: [OptionSchema],
  answer: { type: String, default: "" }
});

// Survey Schema
const SurveyQuestionBank = new mongoose.Schema({
  Topic: { type: String, required: true },
  Subject: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  questions: [SurveyQuestion]
});

const SurveyQuestionBankModel = mongoose.model('SurveyQuestion', SurveyQuestionBank);

module.exports = SurveyQuestionBankModel;
