const {
  businessInfo
} = require("./services");

async function getLocations(account) {

  try {

    const response =
      await businessInfo.accounts.locations.list({

        parent: account

      });

    return {

      success: true,

      locations:
        response.data.locations || []

    };

  } catch (err) {

    return {

      success: false,

      error: err.message

    };

  }

}

module.exports = {
  getLocations
};

