router.get("/debug-client", (req, res) => {
  res.json({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecretLength: process.env.GOOGLE_CLIENT_SECRET
      ? process.env.GOOGLE_CLIENT_SECRET.length
      : 0
  });
});
