<!-- filepath: /Users/nisalgunawardhana/Desktop/Introduction to Github models/06-workflow-integration/cli-extension.md -->
# CLI Extension Guide

> **Tip:** Use the CLI to quickly discover, test, and compare new models from the Marketplace. Run `gh models list` to see what's available.

## Installation
```bash
gh extension install github/gh-models
```

## Basic Usage

### Chat Mode:
```bash
gh models run
```

### Single Prompt:
```bash
gh models run gpt-4 "Explain quantum computing"
```

### Pipe Input:
```bash
cat document.txt | gh models run gpt-4 "Summarize this"
```

## Key Features
- Interactive chat sessions
- Model selection menu
- Output formatting options
- Context from stdin

## Advanced Options
- --temperature: Set creativity
- --max-tokens: Limit length
- --raw: Unformatted output
- --model: Specify model

## Examples

```bash
# Compare two models
gh models run gpt-4 "Hello" > gpt4.txt
gh models run claude-2 "Hello" > claude.txt
diff gpt4.txt claude.txt

# Generate code
gh models run gpt-4 "Write Python code for quicksort"
```
