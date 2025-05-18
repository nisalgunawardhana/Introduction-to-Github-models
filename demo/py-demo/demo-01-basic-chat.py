# Demo 01: Basic Chat Completion with GitHub Models (Python)
# This script sends a simple chat prompt to a model and prints the response.
# Instructions:
# 1. Set your GitHub token in your environment: export GITHUB_TOKEN='your_token_here'
# 2. Install the SDK: pip install azure-ai-inference
# 3. Run: python demo-01-basic-chat.py

import os
from azure.ai.inference import ChatCompletions

client = ChatCompletions(
    model="openai/gpt-4",
    credential=os.environ["GITHUB_TOKEN"]
)

response = client.create(
    messages=[{"role": "user", "content": "Hello, GitHub Models!"}],
    temperature=0.7
)
print("Model reply:", response.choices[0].message.content)
