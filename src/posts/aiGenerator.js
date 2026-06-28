const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generatePost(category = "tips") {

  try {

    const prompt = `
Create a professional Google Business Profile post.

Business:
My Mercury Dry Cleaners

Category:
${category}

Rules:

- Title under 8 words.
- Caption under 150 words.
- Professional tone.
- Mention premium garment care.
- Mention customer trust.
- Include CTA.
- Do NOT use markdown.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    return {
      success: true,
      category,
      content: response.text
    };

  } catch (err) {

    return {
      success: false,
      error: err.message
    };

  }

}

module.exports = {
  generatePost
};
