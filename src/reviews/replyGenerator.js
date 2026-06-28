const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generateReply(review) {

  try {

    const rating = review.starRating || 5;
    const comment = review.comment || "No Comment";

    const prompt = `
You are replying on behalf of My Mercury Dry Cleaners.

Rating: ${rating}

Customer Review:
${comment}

Rules:
- Be polite.
- Maximum 80 words.
- Thank the customer.
- If rating is 1-3 stars then apologize and ask customer to contact the shop.
- If rating is 4-5 stars then appreciate the customer.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    return {
      success: true,
      reply: response.text
    };

  } catch (err) {

    return {
      success: false,
      error: err.message
    };

  }

}

module.exports = {
  generateReply
};
