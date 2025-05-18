# API Basics

## Access Methods
1. **Via SDK** (Recommended):
   - Azure AI Inference SDK
   - Provider-specific SDKs

2. **Direct REST API**:
   - Raw HTTP requests
   - Lower-level control

## Authentication
- GitHub personal access token
- Required scope: `models:read`
- Pass in Authorization header

## Endpoints
- Base URL: `https://models.github.ai/inference`
- Model-specific endpoints:
  - `/chat/completions`
  - `/embeddings`
  - etc.

## Discovering Endpoints and Capabilities
- Visit the [GitHub Models Marketplace](https://github.com/marketplace/models) to view available models, their endpoints, and supported features (e.g., chat, code, vision, embeddings).
- Each model card provides API documentation, example requests, and details on supported parameters.

## Request Format
```json
{
  "model": "model-name",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant"},
    {"role": "user", "content": "Your prompt here"}
  ],
  "parameters": {
    "temperature": 0.7,
    "max_tokens": 150
  }
}
```

## Response Handling

- **Check status codes**: Ensure the HTTP response status is `200 OK` for successful requests.
- **Parse JSON response**: Extract relevant fields such as `choices`, `usage`, or `error` from the JSON body.
- **Handle rate limit headers**: Monitor headers like `X-RateLimit-Remaining` and `Retry-After` to manage request limits and avoid throttling.