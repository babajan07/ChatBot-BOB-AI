import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDdQLEqyTWcbFXMYll_etMAdy-Qto9tNXE" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "What is array",
    config: {
      systemInstruction: `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
      Data structure and Algorithm. You have to solve query of user in simplest way.
      If user ask any question which is not related to Data structure and Algorithm, reply him like this.
      Example: If user ask, How are you
      You will reply: You have to ask me some sensible question, like this message you can reply anything more.
      
      You have to reply him without any explanation if question is not related to Data structure and Algorithm.
      Else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

main();