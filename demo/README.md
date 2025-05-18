# Demo Folder Overview

This folder contains example projects for using GitHub Models with both JavaScript (Node.js) and Python. Each subfolder includes ready-to-run demo scripts and step-by-step instructions.

## Contents
- **js-demo/**: JavaScript (Node.js) demos using the Azure AI Inference SDK
- **py-demo/**: Python demos using the Azure AI Inference SDK

---

## How to Get a GitHub Token (Developer Key)

To use these demos, you need a GitHub personal access token with the `models:read` permission.

### Steps to create a token:
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"** (classic or fine-grained)
3. Give your token a name and select an expiration date
4. Under **"Select scopes"**, check `models:read`
5. Click **"Generate token"** and copy the token (you won't be able to see it again)

### Video Walkthrough

[![How to Get a GitHub Token](../Images/demo_token_video.mov)](Images/demo_token_video.mov)

Watch this short video for a step-by-step guide on generating your GitHub personal access token.

**Keep your token secure and do not share it publicly.**

---

## General Setup Steps

1. Clone or download this repository
2. Open your terminal and navigate to the `demo` folder
3. Choose your language (js-demo or py-demo) and follow the instructions in the respective README file

---

## Quick Start for JavaScript (Node.js)
- See `js-demo/README.md` for details
- Set your token in your terminal:
  ```sh
  export GITHUB_TOKEN="<your-github-token-goes-here>"
  ```
- Install dependencies:
  ```sh
  cd js-demo
  npm install
  ```
- Run a demo:
  ```sh
  npm run demo-01
  ```

## Quick Start for Python
- See `py-demo/README.md` for details
- Set your token in your terminal:
  ```sh
  export GITHUB_TOKEN="<your-github-token-goes-here>"
  ```
- Install dependencies:
  ```sh
  cd py-demo
  pip install azure-ai-inference
  ```
- Run a demo:
  ```sh
  python demo-01-basic-chat.py
  ```

---

For more information, see the README files in each subfolder.
