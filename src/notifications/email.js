async function sendEmail(subject, body) {

  console.log("EMAIL");
  console.log(subject);
  console.log(body);

  return {
    success: true
  };

}

module.exports = {
  sendEmail
};

