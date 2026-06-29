const { addHistory } = require("../reviews/history");

async function publishGooglePost(post) {

  try {

    /*
      TODO

      Google Business Profile API

      Create Local Post

      Publish Here
    */

    console.log("Publishing Google Post...");

    console.log(post);

    addHistory({

      type: "GOOGLE_POST",

      title: post.title,

      success: true

    });

    return {

      success: true,

      published: true,

      message: "Post queued successfully."

    };

  } catch (err) {

    return {

      success: false,

      error: err.message

    };

  }

}

module.exports = {
  publishGooglePost
};

