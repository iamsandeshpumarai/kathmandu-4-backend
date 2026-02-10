const SurveyQuestionBankModel = require("../Models/SurveyQuestion")




const CreateSurveyQuestion = async(req,res)=>{

  try{
     await SurveyQuestionBankModel.create({
...req.body
    })
    res.status(200).json({message:"Survey Created Successfully"})
  }
  catch(err){
    console.log(err)
    res.status(200).json({message:err.message})
  }
}


const getSurveylist = async(req,res)=>{
    try{
    const data = await SurveyQuestionBankModel.find({}).select('_id isActive Topic').lean()
    res.status(200).json({data:data})
    }
    catch(err){
        console.log(err)
 res.status(500).json({message:"Internal Server Error"})
    }
}

const changeStatus = async (req, res) => {
  const { id } = req.params

  try {
    const survey = await SurveyQuestionBankModel.findById(id)

    if (!survey) {
      return res.status(404).json({ message: "Survey not found" })
    }

    survey.isActive = !survey.isActive
    await survey.save()

    res.status(200).json({
      message: "Status toggled successfully",
      data: survey
    })
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}


const getSurveyQuestionBank = async(req,res)=>{
    try{
        const surveyData = await SurveyQuestionBankModel.find({isActive:true}).lean()
     
        res.status(200).json({message:"survey question data fetched" ,data:surveyData})
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
}

const deleteSurveyQuestion = async(req,res)=>{
  const {id} = req.params

  try{
  

   await SurveyQuestionBankModel.findByIdAndDelete(id)
  res.status(200).json("message:Survey Deleted")
  }
  catch(err){
    console.log(err.message)
  }
}

const updateTopic = async (req, res) => {
  const { id } = req.params;
  const { Topic } = req.body;

  // 1. Validation: Don't hit the DB if the input is empty
  if (!Topic || Topic.trim() === "") {
    return res.status(400).json({ 
      success: false, 
      message: "Topic title is required" 
    });
  }

  try {
    // 2. { new: true } returns the document AFTER the update
    // 3. runValidators ensures the new Topic meets Schema requirements
    const updatedSurvey = await SurveyQuestionBankModel.findByIdAndUpdate(
      id,
      { Topic: Topic },
      { new: true, runValidators: true }
    );

    // 4. Check if the ID actually existed
    if (!updatedSurvey) {
      return res.status(404).json({ 
        success: false, 
        message: "Survey not found" 
      });
    }

    // 5. Always send a success response back to the client
    res.status(200).json({
      success: true,
      message: "Topic updated successfully",
      data: updatedSurvey
    });

  } catch (err) {
    // 6. Professional error logging (use a logger like 'winston' in real apps)
    console.error(`Update Error: ${err.message}`);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error" 
    });
  }
};

module.exports = {getSurveyQuestionBank,getSurveylist,changeStatus,deleteSurveyQuestion,updateTopic,CreateSurveyQuestion}