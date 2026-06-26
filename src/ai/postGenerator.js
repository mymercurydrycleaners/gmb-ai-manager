const {askGemini}=require("./gemini");

const {

postPrompt

}=require("./promptTemplates");

async function generatePost(topic){

return await askGemini(

postPrompt(topic)

);

}

module.exports={

generatePost

};
