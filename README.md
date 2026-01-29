# melchat

> **100+ AI models. One command. Zero backend.**

```bash
npx melchat
```

That's it. Open your browser and start chatting with GPT-4, Claude, Gemini, Llama, Qwen, DeepSeek, and 100+ more models.

---

## Why melchat?

| Feature | melchat | Others |
|---------|---------|--------|
| Models supported | **100+** | 1-5 |
| File size | **69KB** | 10MB+ |
| Backend required | **No** | Usually |
| Install time | **3 seconds** | Minutes |
| Free models | **Yes** | Rarely |

## Quick Start

```bash
# Run instantly (no install needed)
npx melchat

# Or install globally
npm install -g melchat
melchat
```

## Supported Models

### Free Tier (No API key needed via OpenRouter)
- Gemma 2 9B
- Llama 3.1 8B
- Phi-3 Medium
- Qwen 2 7B
- MiMo V2

### Frontier Models
- **OpenAI**: GPT-4o, GPT-4 Turbo, GPT-3.5
- **Anthropic**: Claude 3.5 Sonnet, Claude 3 Opus
- **Google**: Gemini Pro, Gemini Flash
- **Meta**: Llama 3.3 70B, Llama 3.1 405B
- **DeepSeek**: V3, R1
- **Qwen**: 2.5 72B, QwQ 32B

### Image & Video Generation
- Flux.1 (text-to-image)
- Kling 2.6 Pro (text-to-video)
- Z-Image Turbo (fal.ai)

### Local Models
- Ollama endpoints
- RunPod
- vLLM
- Any OpenAI-compatible API

## Features

- **Streaming responses** - Real-time token streaming
- **Conversation history** - Saved locally in browser
- **Token counter** - Track usage and costs
- **Code highlighting** - Syntax highlighting for 100+ languages
- **Mobile responsive** - Works on any device
- **Export chats** - Markdown, JSON, or plain text
- **System prompts** - Customize AI behavior
- **Multi-language UI** - EN, DE, FR, CS, UK, RU

## CLI Options

```bash
melchat [options]

Options:
  -p, --port <port>   Port to run on (default: 3000)
  --no-open           Don't auto-open browser
  -h, --help          Show help
```

## Configuration

1. Get a free API key from [OpenRouter](https://openrouter.ai/)
2. Run `npx melchat`
3. Click the gear icon and paste your key
4. Start chatting!

For local models, enter your endpoint URL (e.g., `http://localhost:11434/v1` for Ollama).

## Deploy Anywhere

melchat is a single HTML file. Deploy it anywhere:

```bash
# GitHub Pages (already configured)
# Netlify (drag & drop)
# Vercel (one click)
# Any static host
```

Or just open `dist/index.html` directly in your browser.

## Tech Stack

- Vanilla JavaScript (no framework)
- Zero runtime dependencies
- marked.js for Markdown
- highlight.js for code

## Contributing

PRs welcome! This is a single-file app at `dist/index.html`.

```bash
git clone https://github.com/melvincarvalho/melchat
cd melchat
npx melchat
```

## License

AGPL-3.0

---

**Star this repo** if you find it useful!

[GitHub](https://github.com/melvincarvalho/melchat) | [Issues](https://github.com/melvincarvalho/melchat/issues) | [OpenRouter](https://openrouter.ai/)
