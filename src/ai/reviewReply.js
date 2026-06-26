const {askGemini}=require("./gemini");

const {

reviewPrompt

}=require("./promptTemplates");

async function generateReply(review){

return await askGemini(

reviewPrompt(review)

);

}

module.exports={

generateReply

};
