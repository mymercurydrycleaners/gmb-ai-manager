const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generateReply(review, rating = 5) {

  const prompt = `
You are the owner of My Mercury Dry Cleaners.

Write a professional reply.

Rating: ${rating}

Customer Review:
${review}

Rules:

- Maximum 60 words.
- Friendly.
- Professional.
- Thank the customer.
- Never use emojis unless appropriate.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });

  return response.text;
}

module.exports = {
  generateReply
};
