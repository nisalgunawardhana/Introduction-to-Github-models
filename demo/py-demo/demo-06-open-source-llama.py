# Demo 06: Text Generation with an Open-Source Model (Python)
# This script calls an open-source model (e.g., Mistral) for text generation.
# Instructions:
# 1. Set your GitHub token: export GITHUB_TOKEN='your_token_here'
# 2. Install the SDK: pip install azure-ai-inference
# 3. Run: python demo-06-open-source-llama.py

import os
from azure.ai.inference import ChatCompletions

client = ChatCompletions(
    model="mistral/mistral-large",
    credential=os.environ["GITHUB_TOKEN"]
)

response = client.create(
    messages=[{"role": "user", "content": "Write a short story about a robot learning to paint."}],
    temperature=0.7
)
print("Mistral reply:", response.choices[0].message.content)
