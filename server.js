const app = require("./src/app");
require("dotenv").config();
const http = require("http").createServer(app);
const PORT = process.env.PORT || 4500;

require("./src/config/database");
app.get("/", (req, res) => {
  res.send(`E-Commerce API v.1.0 ${new Date()}`);
});

http.listen(PORT, () => {
  console.log(`App now listening @ PORT ${PORT}`);
});
