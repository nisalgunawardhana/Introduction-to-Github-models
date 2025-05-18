// Demo 01: Basic Chat Completion with GitHub Models (Node.js)
// This script sends a simple chat prompt to a model and prints the response.

// Step-by-step guide to create and run this Node.js project:
// 1. Initialize a new Node.js project:
//    Open your terminal and run:
//      npm init -y
// 2. Install the required SDK:
//      npm install azure-ai-inference
// 3. Set your GitHub token in your environment (replace YOUR_TOKEN_HERE):
//      export GITHUB_TOKEN='YOUR_TOKEN_HERE'
// 4. Save this script as demo-01-basic-chat.js
// 5. Run the script:
//      node demo-01-basic-chat.js

const { ChatCompletions } = require('azure-ai-inference');

const client = new ChatCompletions({
  model: 'openai/gpt-4',
  credential: process.env.GITHUB_TOKEN
});

(async () => {
  const response = await client.create({
    messages: [{ role: 'user', content: 'Hello, GitHub Models!' }],
    temperature: 0.7
  });
  console.log('Model reply:', response.choices[0].message.content);
})();
