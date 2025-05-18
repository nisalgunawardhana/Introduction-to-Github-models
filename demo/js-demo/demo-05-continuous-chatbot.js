// Demo 05: Continuous Chatbot Example
// Run: npm run demo-05

const readline = require("readline");
const ModelClient = require("@azure-rest/ai-inference").default;
const { isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

async function chat() {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  let messages = [
    { role: "system", content: "You are a helpful assistant." }
  ];
  console.log("Welcome to the Continuous Chatbot! Type your message and press Enter. Type 'exit' to quit.");
  async function ask() {
    rl.question("You: ", async (input) => {
      if (input.trim().toLowerCase() === 'exit') {
        console.log("Exiting chat. Goodbye!");
        rl.close();
        return;
      }
      messages.push({ role: "user", content: input });
      const response = await client.path("/chat/completions").post({
        body: { messages, model }
      });
      if (isUnexpected(response)) throw response.body.error;
      const reply = response.body.choices[0].message.content;
      console.log("Bot:", reply);
      messages.push({ role: "assistant", content: reply });
      ask();
    });
  }
  ask();
}

chat().catch((err) => {
  console.error("The sample encountered an error:", err);
});
