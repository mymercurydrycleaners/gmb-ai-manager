const {
  accountManagement
} = require("./services");

async function getAccounts() {

  try {

    const response =
      await accountManagement.accounts.list();

    return {
      success: true,
      accounts: response.data.accounts || []
    };

  } catch (err) {

    return {
      success: false,
      error: err.message
    };

  }

}

module.exports = {
  getAccounts
};

