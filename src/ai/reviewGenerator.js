const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function generateReply(review) {

  const prompt = `
You are the customer support manager of My Mercury Dry Cleaners.

Write a short, warm and professional reply.

Review:
${review}

Reply:
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}

module.exports = {
  generateReply
};
