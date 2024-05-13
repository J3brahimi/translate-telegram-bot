const express = require("express");
const { sendMessage } = require("./controller/lib/Telegram");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.post("/telegram-webhook", async (req, res) => {
  const message = req.body.message;
  sendMessage(message, "I can do everything");
  // res.send("Hello post!");
});
app.get("/", async (req, res) => {
  res.send("Hello get!");
});

app.get("/bot", async (req, res) => {
  res.send("Hello bot!");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
