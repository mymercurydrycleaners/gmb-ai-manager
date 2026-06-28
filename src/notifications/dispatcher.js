const EVENTS = require("./events");
const { sendWhatsApp } = require("./whatsapp");

async function dispatch(event, payload = {}) {

  switch (event) {

    case EVENTS.NEW_REVIEW:

      return sendWhatsApp(
        `⭐ New Review Received\n${payload.customer || ""}`
      );

    case EVENTS.AI_REPLY_SENT:

      return sendWhatsApp(
        `🤖 AI replied successfully.`
      );

    case EVENTS.POST_PUBLISHED:

      return sendWhatsApp(
        `📢 Google Post Published`
      );

    case EVENTS.SEO_ALERT:

      return sendWhatsApp(
        `📈 SEO Score: ${payload.score}`
      );

    case EVENTS.DAILY_REPORT:

      return sendWhatsApp(
        `📊 Daily Report Ready`
      );

    default:

      return sendWhatsApp(
        "Unknown Event"
      );

  }

}

module.exports = {
  dispatch
};
