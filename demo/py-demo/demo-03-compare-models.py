# Demo 03: Compare Two Models' Responses (Python)
# This script sends the same prompt to two different models and prints both responses for comparison.
# Instructions:
# 1. Set your GitHub token in your environment: export GITHUB_TOKEN='your_token_here'
# 2. Install the SDK: pip install azure-ai-inference
# 3. Run: python demo-03-compare-models.py

import os
from azure.ai.inference import ChatCompletions

prompt = "Explain the difference between AI and machine learning."
models = [
    ("openai/gpt-4", "OpenAI GPT-4"),
    ("anthropic/claude-2", "Anthropic Claude-2")
]

for model_id, model_name in models:
    client = ChatCompletions(
        model=model_id,
        credential=os.environ["GITHUB_TOKEN"]
    )
    response = client.create(
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    print(f"\n{model_name} reply:")
    print(response.choices[0].message.content)
