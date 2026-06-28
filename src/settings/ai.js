const aiSettings = {

  model: "gemini-2.5-flash",

  autoReply: true,

  autoPosts: true,

  maxReplyLength: 80,

  tone: "Professional"

};

function getAISettings() {
  return aiSettings;
}

module.exports = {
  getAISettings
};

