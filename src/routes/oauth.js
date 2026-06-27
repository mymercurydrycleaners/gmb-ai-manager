router.get("/login", (req, res) => {
  res.json({
    clientId: process.env.GOOGLE_CLIENT_ID,
    secretLength: process.env.GOOGLE_CLIENT_SECRET?.length,
    redirectUri: "https://gmb-ai-manager.onrender.com/oauth/callback"
  });
});
