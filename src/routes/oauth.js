router.get("/callback", async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    res.json({
      success: true,
      tokens
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});
