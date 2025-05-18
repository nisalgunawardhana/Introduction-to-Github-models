// Demo 04: Error Correction Example
// Run: npm run demo-04

const ModelClient = require("@azure-rest/ai-inference").default;
const { isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");
const fs = require("fs");

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

async function main() {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));
  const code = `def add(a, b):\nreturn a + b\nprint(add(2))`;
  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role: "system", content: "You are a code assistant. Find and correct errors in the following Python code." },
        { role: "user", content: code }
      ],
      model: model
    }
  });
  if (isUnexpected(response)) throw response.body.error;
  console.log("Error correction suggestion:\n", response.body.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
