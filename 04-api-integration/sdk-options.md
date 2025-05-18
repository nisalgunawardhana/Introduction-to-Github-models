<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/04-api-integration/sdk-options.md -->
# SDK Options

## Azure AI Inference SDK
- Unified interface for all models in the GitHub Models Marketplace
- Easy model switching (OpenAI, Anthropic, Mistral, and more)
- Python and JavaScript available
- Supports advanced features: streaming, function calling, system prompts

```python
from azure.ai.inference import ChatCompletions

client = ChatCompletions(
    model="openai/gpt-4",
    credential=os.environ["GITHUB_TOKEN"]
)

response = client.create(
    messages=[{"role": "user", "content": "Hello!"}],
    temperature=0.7
)
print(response.choices[0].message.content)
```

## Provider-Specific SDKs
- **OpenAI SDK**: For OpenAI models (GPT-3.5, GPT-4, DALL·E, Whisper)
- **Anthropic SDK**: For Claude models
- **Mistral SDK**: For Mistral models
- **Cohere SDK**: For Cohere models
- Others as available in the [GitHub Models Marketplace](https://github.com/marketplace?type=actions&query=models)

## Marketplace Model Catalog
- Browse and compare models in the [GitHub Models Marketplace](https://github.com/marketplace?type=actions&query=models)
- Filter by provider, capability (chat, code, vision, embeddings), and pricing
- View model documentation and usage examples

## Language Support
- **Python** (most comprehensive)
- **JavaScript/Node.js**
- **REST API** (any language)
- **CLI** (via `gh models` extension)

## Choosing an SDK
- **Azure SDK**: Best for flexibility and multi-provider support
- **Provider SDK**: For provider-specific features or latest model support
- **REST**: When SDKs aren't available or for custom integrations
- **CLI**: For quick testing and scripting

## Installation

```bash
# Azure SDK (recommended for most users)
pip install azure-ai-inference

# OpenAI SDK (for OpenAI models)
pip install openai

# Anthropic SDK (for Claude models)
pip install anthropic

# Mistral SDK (for Mistral models)
pip install mistralai

# Cohere SDK (for Cohere models)
pip install cohere
```

## Example: Listing Available Models

```python
from azure.ai.inference import list_models

models = list_models()
for m in models:
    print(m["name"], m["provider"], m["capabilities"])
```

> **Tip:** New SDKs and CLI tools are released frequently. Check the [Marketplace](https://github.com/marketplace/models) for updates and new provider support.
> **Tip:** Always check the [GitHub Models Marketplace](https://github.com/marketplace?type=actions&query=models) for the latest models and SDK updates.
