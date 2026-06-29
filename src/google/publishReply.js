id="v9f0d1"
async function publishReply(location, review, reply) {

  /*
    Google Business Profile Reply API

    TODO

    POST

    accounts.locations.reviews.reply
  */

  console.log("Publishing Reply");

  console.log(location);

  console.log(review.reviewId);

  console.log(reply);

  return {

    success: true,

    message: "Reply Queued"

  };

}

module.exports = {
  publishReply
};

