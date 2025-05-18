<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/06-workflow-integration/github-actions.md -->
# GitHub Actions Integration

> **Note:** You can automate model comparisons and CI workflows using Marketplace models. Always check the model card for workflow integration tips and supported endpoints.

## Basic Workflow
```yaml
name: Model Test
on: [workflow_dispatch]
permissions:
  models: read
jobs:
  test-model:
    runs-on: ubuntu-latest
    steps:
      - name: Call Model
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          curl -X POST \
            -H "Authorization: Bearer $GITHUB_TOKEN" \
            -H "Content-Type: application/json" \
            -d '{"model":"openai/gpt-4","messages":[{"role":"user","content":"Hello"}]}' \
            https://models.github.ai/inference/chat/completions
```

## Use Cases
- Automated documentation
- Code review assistance
- Content generation
- Data processing

## Security Notes
- Token automatically provided
- Limited to repository permissions
- Outputs can be saved as artifacts

## Advanced Patterns
- Model comparison workflows
- Scheduled model testing
- Output validation steps
