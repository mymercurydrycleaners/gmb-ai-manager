const { getBusinessSettings } = require("./business");
const { getAISettings } = require("./ai");
const { getSystemSettings } = require("./system");

function getSettings() {

  return {

    success: true,

    business: getBusinessSettings(),

    ai: getAISettings(),

    system: getSystemSettings()

  };

}

module.exports = {
  getSettings
};

