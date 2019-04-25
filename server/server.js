const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const prodPath = path.join(__dirname, "..", "prod");

app.use(express.static(prodPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(prodPath, "index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
