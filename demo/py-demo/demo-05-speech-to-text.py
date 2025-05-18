# Demo 05: Speech-to-Text with an Audio Model (Python)
# This script sends an audio file to a speech-to-text model and prints the transcribed text.
# Instructions:
# 1. Place 'sample-audio.mp3' in this folder.
# 2. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
# 3. Install the SDK: pip install azure-ai-inference
# 4. Run: python demo-05-speech-to-text.py

import os
from azure.ai.inference import AudioTranscriptions

client = AudioTranscriptions(
    model="openai/whisper-large-v3",
    credential=os.environ["GITHUB_TOKEN"]
)

with open("sample-audio.mp3", "rb") as audio_file:
    audio_bytes = audio_file.read()

response = client.create(
    audio=audio_bytes
)
print("Transcription:", response.text)
