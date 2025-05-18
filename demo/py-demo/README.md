# Python Demos

This folder contains Python demo scripts for using GitHub Models. Each demo includes step-by-step instructions in the comments.

## Instructions

1. **Set your GitHub token as an environment variable with models:read permissions.**
   - On macOS/Linux (bash/zsh):
     ```sh
     export GITHUB_TOKEN="<your-github-token-goes-here>"
     ```
   - On Windows (Powershell):
     ```powershell
     $Env:GITHUB_TOKEN="<your-github-token-goes-here>"
     ```
   - On Windows (Command Prompt):
     ```cmd
     set GITHUB_TOKEN=<your-github-token-goes-here>
     ```

2. **Install dependencies**
   ```sh
   pip install azure-ai-inference
   ```

3. **Run a demo**
   ```sh
   python demo-01-basic-chat.py
   ```

> See each file for usage instructions.

## Demos
- **demo-01-basic-chat.py**: Basic chat completion


