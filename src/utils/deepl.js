// src/utils/deepl.js
import * as deepl from "deepl-node";

export async function translateText(text, targetLang = "ko") {
  const apiKey = import.meta.env.DEEPL_API_KEY;

  const translator = new deepl.Translator(apiKey);

  try {
    const response = await translator.translateText(text, null, targetLang);

    // console.log("response: ", response);

    return response.text;
  } catch (error) {
    console.error("Error during translation:", error);
    throw new Error("Translation failed");
  }
}
