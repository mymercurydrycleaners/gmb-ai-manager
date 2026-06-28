const { generateAnalyticsReport } = require("../analytics/report");
const { getLibraryStatus } = require("../images/manager");
const { getSettings } = require("../settings");

async function getDashboard() {

  const analytics = await generateAnalyticsReport([]);

  const images = getLibraryStatus();

  const settings = getSettings();

  return {

    success: true,

    version: "4.0.0",

    analytics,

    images,

    settings,

    serverTime: new Date().toISOString()

  };

}

module.exports = {
  getDashboard
};

