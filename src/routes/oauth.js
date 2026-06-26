router.get("/login", (req, res) => {

  console.log("CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
  console.log("CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "FOUND" : "MISSING");

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/business.manage"
    ]
  });

  console.log(url);

  res.redirect(url);
});
