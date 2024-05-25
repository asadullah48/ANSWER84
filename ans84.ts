// Q 84
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
  }
  console.log(
    replaceJavaScriptWithTypeScript(
      "I am learning JavaScript and JavaScript is awesome!"
    )
  );
  // Example: Changing a programming language name in a sentence
  // Outputs: "I love TypeScript and TypeScript is awesome!"
  // Every "JavaScript" in the sentence is changed to "TypeScript".