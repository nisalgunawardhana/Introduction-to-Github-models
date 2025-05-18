// Demo 06: Text Generation with an Open-Source Model (Node.js)
// This script calls an open-source model (e.g., Mistral) for text generation.
// Instructions:
// 1. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
// 2. Install the SDK: npm install azure-ai-inference
// 3. Run: node demo-06-open-source-llama.js

const { ChatCompletions } = require('azure-ai-inference');

const client = new ChatCompletions({
  model: 'mistral/mistral-large',
  credential: process.env.GITHUB_TOKEN
});

(async () => {
  const response = await client.create({
    messages: [{ role: 'user', content: 'Write a short story about a robot learning to paint.' }],
    temperature: 0.7
  });
  console.log('Mistral reply:', response.choices[0].message.content);
})();
