// Demo 05: Speech-to-Text with an Audio Model (Node.js)
// This script sends an audio file to a speech-to-text model and prints the transcribed text.
// Instructions:
// 1. Place 'sample-audio.mp3' in this folder.
// 2. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
// 3. Install the SDK: npm install azure-ai-inference
// 4. Run: node demo-05-speech-to-text.js

const { AudioTranscriptions } = require('azure-ai-inference');
const fs = require('fs');

const client = new AudioTranscriptions({
  model: 'openai/whisper-large-v3',
  credential: process.env.GITHUB_TOKEN
});

const audio = fs.readFileSync('sample-audio.mp3');

(async () => {
  const response = await client.create({
    audio: audio
  });
  console.log('Transcription:', response.text);
})();
