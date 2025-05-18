// Demo 02: List Available Models from GitHub Models Marketplace (Node.js)
// This script lists all available models, their providers, and capabilities.
// Instructions:
// 1. Set your GitHub token in your environment: export GITHUB_TOKEN='your_token_here'
// 2. Install the SDK: npm install azure-ai-inference
// 3. Run: node demo-02-model-listing.js

const { listModels } = require('azure-ai-inference');

(async () => {
  const models = await listModels();
  console.log('Available models:');
  for (const m of models) {
    console.log(`- ${m.name} (Provider: ${m.provider}, Capabilities: ${m.capabilities})`);
  }
})();
