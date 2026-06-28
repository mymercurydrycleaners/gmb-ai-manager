async function publishPost(post) {

  if (!post) {
    return {
      success: false,
      message: "No post provided."
    };
  }

  console.log("=================================");
  console.log("Mercury Google Post Publisher");
  console.log("=================================");
  console.log("Title :", post.title);
  console.log("Body  :", post.body);
  console.log("=================================");

  return {
    success: true,
    status: "READY",
    message: "Google API Pending",
    post
  };

}

module.exports = {
  publishPost
};
