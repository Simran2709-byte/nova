import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const generateRoadmap = async (goal) => {
const prompt = `
You are NOVA AI.

Create a professional learning roadmap for: ${goal}

Return in this exact format:

🚀 Career Overview

📚 Skills To Learn

🗓 Learning Timeline

💻 Projects To Build

🎯 Career Tips

📖 Free Learning Resources

Make it detailed, beginner-friendly and visually structured.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

export async function askNova(question) {
  const result = await model.generateContent(`
You are NOVA AI.

You are an expert career mentor and learning coach.

Answer clearly and practically:

${question}
`);

  return result.response.text();
}