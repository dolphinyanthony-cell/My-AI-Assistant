const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", async (req, res) => {

    let userMessage = req.body.message;

    // Temporary AI response
    let reply = "You asked: " + userMessage + ". My AI model is being connected.";

    res.json({
        reply: reply
    });

});

app.listen(3000, () => {
    console.log("AI Assistant running on port 3000");
});
