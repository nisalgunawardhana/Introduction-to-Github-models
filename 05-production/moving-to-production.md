<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/05-production/moving-to-production.md -->
# Moving to Production

## When to Transition
- Exceeding free tier limits
- Need for reliability guarantees
- Higher throughput requirements
- Sensitive data handling

## Azure Integration Steps
1. **Create Azure Account**:
   - portal.azure.com
   - Set up billing

2. **Access Azure AI Studio**:
   - Create new resource
   - Select desired models

3. **Update Configuration**:
   - Replace GitHub token with Azure key
   - Update endpoint if needed

4. **Adjust Parameters**:
   - Review Azure-specific options
   - Configure content filters

## Code Changes
Minimal changes required:

```python
# Before (GitHub)
client = ChatCompletions(
    model="openai/gpt-4",
    credential=os.environ["GITHUB_TOKEN"]
)

# After (Azure)
client = ChatCompletions(
    model="gpt-4",
    credential=os.environ["AZURE_KEY"],
    endpoint="your_azure_endpoint"
)
```

## Benefits
- Higher rate limits
- Service guarantees
- Advanced features
- Enterprise support

## Production Readiness Checklist
- Review model card for production support and SLAs
- Test with production data and prompts
- Monitor rate limits and error handling
- Set up logging and monitoring
- Stay updated on new models and features in the Marketplace
