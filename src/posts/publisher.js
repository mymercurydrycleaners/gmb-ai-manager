async function publishPost(post) {

  console.log("==================================");
  console.log("Google Business Post");
  console.log("==================================");

  console.log(post.title);
  console.log(post.body);

  console.log("==================================");

  return {
    success: true,
    message: "Post Ready",
    post
  };

}

module.exports = {
  publishPost
};
