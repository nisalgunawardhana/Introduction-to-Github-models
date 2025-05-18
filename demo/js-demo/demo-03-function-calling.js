// Demo 03: Function Calling Example
// Run: npm run demo-03

const ModelClient = require("@azure-rest/ai-inference").default;
const { isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

async function main() {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));
  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Call the function to add 2 and 3." }
      ],
      functions: [
        {
          name: "add",
          description: "Add two numbers",
          parameters: {
            type: "object",
            properties: {
              a: { type: "number" },
              b: { type: "number" }
            },
            required: ["a", "b"]
          }
        }
      ],
      temperature: 0.7,
      model: model
    }
  });
  if (isUnexpected(response)) throw response.body.error;
  console.log("Function call result:", response.body.choices[0].message.function_call);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
