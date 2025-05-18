// Demo 03: Compare Two Models' Responses (Node.js)
// This script sends the same prompt to two different models and prints both responses for comparison.
// Instructions:
// 1. Set your GitHub token in your environment: export GITHUB_TOKEN='your_token_here'
// 2. Install the SDK: npm install azure-ai-inference
// 3. Run: node demo-03-compare-models.js

const { ChatCompletions } = require('azure-ai-inference');

const prompt = 'Explain the difference between AI and machine learning.';
const models = [
  { id: 'openai/gpt-4', name: 'OpenAI GPT-4' },
  { id: 'anthropic/claude-2', name: 'Anthropic Claude-2' }
];

(async () => {
  for (const model of models) {
    const client = new ChatCompletions({
      model: model.id,
      credential: process.env.GITHUB_TOKEN
    });
    const response = await client.create({
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });
    console.log(`\n${model.name} reply:`);
    console.log(response.choices[0].message.content);
  }
})();
