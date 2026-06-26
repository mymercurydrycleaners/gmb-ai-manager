const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: true,
      app: "GMB AI Manager",
      status: "Running",
      version: "1.0.0",
      message: "Welcome to GMB AI Manager 🚀"
    })
  );
});

server.listen(PORT, () => {
  console.log(`✅ GMB AI Manager is running on port ${PORT}`);
});
