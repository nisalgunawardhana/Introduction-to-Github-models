<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/05-production/rate-limits.md -->
# Rate Limits Overview

> **Note:** Rate limits may vary by provider and model. Always check the model card in the Marketplace for the most accurate and up-to-date information.

## Free Tier Limits
| Tier       | Req/Min | Req/Day | Tokens/Req | Concurrent |
|------------|---------|---------|------------|------------|
| Low        | 15      | 150     | 8k/4k      | 5          |
| High       | 10      | 50      | 8k/4k      | 2          |
| Embedding  | 15      | 150     | 64k        | 5          |

## Checking Limits
1. Response headers:
   - `x-ratelimit-limit`
   - `x-ratelimit-remaining`
   - `x-ratelimit-reset`

2. Playground indicators
   - Visual warnings
   - Rate limit messages

## Handling Limits
- Implement retry logic
- Add delays between requests
- Monitor usage
- Consider batching requests

## Exceeding Limits
- 429 status code
- Wait for reset period
- Upgrade to Azure for higher limits
