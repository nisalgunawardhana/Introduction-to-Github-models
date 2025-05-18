// Demo 04: Image Captioning with a Vision Model (Node.js)
// This script sends an image to a vision model and prints the generated caption.
// Instructions:
// 1. Place 'sample-image.jpg' in this folder.
// 2. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
// 3. Install the SDK: npm install azure-ai-inference
// 4. Run: node demo-04-image-captioning.js

const { VisionCompletions } = require('azure-ai-inference');
const fs = require('fs');

const client = new VisionCompletions({
  model: 'openai/gpt-4-vision-preview',
  credential: process.env.GITHUB_TOKEN
});

const image = fs.readFileSync('sample-image.jpg');

(async () => {
  const response = await client.create({
    images: [image],
    prompt: 'Describe this image.'
  });
  console.log('Caption:', response.choices[0].message.content);
})();
