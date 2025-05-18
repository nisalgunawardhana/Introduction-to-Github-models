// Demo 02: Code Analysis Example
// Run: npm run demo-02

const ModelClient = require("@azure-rest/ai-inference").default;
const { isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");
const fs = require("fs");

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

async function main() {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));
  const code = fs.readFileSync("../py-demo/demo-01-basic-chat.py", "utf-8");
  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role: "system", content: "You are a code analysis assistant. Analyze the following Python code and summarize what it does." },
        { role: "user", content: code }
      ],
      model: model
    }
  });
  if (isUnexpected(response)) throw response.body.error;
  console.log("Code analysis:", response.body.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
