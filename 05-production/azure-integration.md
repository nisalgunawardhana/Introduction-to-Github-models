<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/05-production/azure-integration.md -->
# Azure AI Integration

## Setup Process
1. **Create Azure Resource**:
   - AI Studio > New deployment
   - Select model and region

2. **Get Credentials**:
   - API key
   - Endpoint URL

3. **Configure SDK**:
```python
from azure.ai.inference import ChatCompletions

client = ChatCompletions(
    model="gpt-4",
    credential=os.environ["AZURE_KEY"],
    endpoint="https://your-resource.openai.azure.com"
)
```

## Key Differences
- Authentication: API keys instead of GitHub token
- Endpoints: Azure-specific URLs
- Content Filters: Configurable in Azure
- Management: Azure portal interface

## Migration Tips
- Test with both endpoints
- Compare outputs
- Monitor performance
- Adjust parameters as needed

## Advanced Features
- Custom content filters
- Deployment scaling
- Usage analytics
- Private networking

> **Tip:** Azure regularly adds new models and features. Check the [Marketplace](https://github.com/marketplace/models) and Azure AI Studio for the latest options and integrations.
