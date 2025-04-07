// TODO: Extract query from request
// TODO: Search knowledgeBase for a match
// TODO: Return result or 404

import { GoogleGenAI } from "@google/genai"
import dotenv from 'dotenv';
import module from '../data/knowledgeBase.js'

console.log(module.exports)

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: apiKey})

async function search(prompt) {

    
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    return response.text
}
  
console.log(search("Explain how AI works in a few words"));
