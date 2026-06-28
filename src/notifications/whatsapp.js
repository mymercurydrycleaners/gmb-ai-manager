async function sendWhatsApp(message) {

  console.log("================================");
  console.log("WhatsApp Notification");
  console.log(message);
  console.log("================================");

  return {
    success: true,
    message
  };

}

module.exports = {
  sendWhatsApp
};

