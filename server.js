const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let botResponse = "I'm not sure how to respond to that.";

  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    botResponse = "Hey there! How can I help you today?";
  } else if (userMessage.includes("your name")) {
    botResponse = "I'm your chatbot friend! No name needed 😊";
  } else if (userMessage.includes("how are you")) {
    botResponse = "I'm just code, but I'm doing great! How about you?";
  }

  res.json({ reply: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

