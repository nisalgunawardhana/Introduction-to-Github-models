# Demo 04: Image Captioning with a Vision Model (Python)
# This script sends an image to a vision model and prints the generated caption.
# Instructions:
# 1. Place 'sample-image.jpg' in this folder.
# 2. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
# 3. Install the SDK: pip install azure-ai-inference
# 4. Run: python demo-04-image-captioning.py

import os
from azure.ai.inference import VisionCompletions

client = VisionCompletions(
    model="openai/gpt-4-vision-preview",
    credential=os.environ["GITHUB_TOKEN"]
)

with open("sample-image.jpg", "rb") as image_file:
    image_bytes = image_file.read()

response = client.create(
    images=[image_bytes],
    prompt="Describe this image."
)
print("Caption:", response.choices[0].message.content)
