import openai from '../config/openai.js';

export const generateFinancialAdvice = async (query, userContext) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional financial advisor providing personalized advice based on the user's financial situation."
        },
        {
          role: "user",
          content: `User Context: ${JSON.stringify(userContext)}\nQuery: ${query}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate financial advice');
  }
};