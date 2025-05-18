<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/04-api-integration/local-setup.md -->
# Local Development Setup

## Prerequisites
- Python 3.7+
- Git (optional)
- Code editor

## Steps
1. **Create Personal Access Token**:
   - Settings > Developer settings > Tokens
   - Add `models:read` permission

2. **Set Environment Variable**:
```bash
export GITHUB_TOKEN='your_token_here'
```

## Install SDK:
```bash
pip install azure-ai-inference
```

## Create Test File:
```python
import os
from azure.ai.inference import ChatCompletions

client = ChatCompletions(
    model="openai/gpt-4",
    credential=os.environ["GITHUB_TOKEN"]
)

response = client.create(
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

## Run Your Script:
```bash
python test.py
```

> **Tip:** Keep your SDKs up-to-date and check the [Marketplace](https://github.com/marketplace/models) for new models and features.

## Troubleshooting
- Verify token permissions
- Check rate limits
- Confirm SDK version
