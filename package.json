const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// FREE AI (Hugging Face inference API style)
const MODEL_URL =
  "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium";

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: userMessage
      })
    });

    const data = await response.json();

    let reply =
      data?.generated_text ||
      data?.[0]?.generated_text ||
      "I couldn't generate a response.";

    res.json({ reply });
  } catch (err) {
    res.json({ reply: "Error connecting to AI model." });
  }
});

app.listen(3000, () => {
  console.log("AI Assistant running on port 3000");
});
