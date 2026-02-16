import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `
You are Raj's AI portfolio assistant.

Rules:
- Give short and clear explanations.
- Do NOT include code examples.
- Do NOT use markdown formatting.
- Do NOT use bullet points.
- Keep responses under 8 lines.
- Keep answers simple and beginner-friendly.
`,
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
        }),
      },
    );

    const data = await response.json();
    
    const reply = data?.choices?.[0]?.message?.content || "No response.";

    res.json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ reply: "Server error" });
  }
});

app.get("/test", (req, res) => {
  res.json({ status: "Backend working 🚀" });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
