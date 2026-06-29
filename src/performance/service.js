async function getPerformanceInsights() {

  /*
    TODO

    Google Business Profile Performance API

    Fetch:

    - Search Views
    - Maps Views
    - Website Clicks
    - Calls
    - Direction Requests
    */

  return {

    success: true,

    metrics: {

      searchViews: 0,

      mapsViews: 0,

      websiteClicks: 0,

      phoneCalls: 0,

      directionRequests: 0

    }

  };

}

module.exports = {
  getPerformanceInsights
};

