import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyC3zRuOwJAoQk7HSgUb68cqkKoAvzONPn8" });

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: msg
  
  });
  
  return response.text;
}

export default main;