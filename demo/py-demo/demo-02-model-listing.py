# Demo 02: List Available Models from GitHub Models Marketplace (Python)
# This script lists all available models, their providers, and capabilities.
# Instructions:
# 1. Set your GitHub token in your environment: export GITHUB_TOKEN='your_token_here'
# 2. Install the SDK: pip install azure-ai-inference
# 3. Run: python demo-02-model-listing.py

from azure.ai.inference import list_models

models = list_models()
print("Available models:")
for m in models:
    print(f"- {m['name']} (Provider: {m['provider']}, Capabilities: {m['capabilities']})")
