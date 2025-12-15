import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMenuDescription = async (itemName: string, category: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, appetizing, 1-sentence description for a restaurant menu item named "${itemName}" in the category "${category}". Keep it under 15 words. No quotes.`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Delicious and freshly prepared.";
  }
};
