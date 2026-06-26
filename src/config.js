require("dotenv").config();

module.exports = {

PORT: process.env.PORT || 3000,

GEMINI_API_KEY: process.env.GEMINI_API_KEY,

GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,

GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,

GOOGLE_ACCOUNT_ID: process.env.GOOGLE_ACCOUNT_ID,

GOOGLE_LOCATION_ID: process.env.GOOGLE_LOCATION_ID

};
