# Ollama Proxy Gateway

A simple Fastify-based proxy server for Windows that forwards HTTP requests to a local Ollama instance (running on 127.0.0.1:11434). Designed for easy integration and remote access, with support for environment variables and basic automated tests.

## Features
- Forwards any HTTP request to Ollama
- Works on Windows Server (no Docker or Linux required)
- Easy to debug with VS Code launch configurations
- Environment variables via `.env`
- Basic test example with Mocha

## Quick Start
1. Clone or copy the project to your server.
2. Install dependencies:
   ```
   npm install
   ```
3. Configure `.env` (default values are provided):
   ```
   OLLAMA_URL=http://127.0.0.1:11434
   PORT=8080
   HOST=0.0.0.0
   ```
4. Start the proxy server:
   ```
   node index.js
   ```
5. Run tests:
   ```
   npm test
   ```
6. Debug in VS Code using the provided launch configurations.

## Project Structure
```
src/
  controllers/
  routes/
  services/
tests/
index.js
.env
.vscode/launch.json
```

## What I think about the project
This solution is practical, minimal, and robust for Windows environments. It avoids the complexity of Docker or Linux, leverages Node.js for flexibility, and is easy to maintain and extend. The proxy approach is reliable for remote access to Ollama, and the project is well-structured for future improvements (auth, logging, etc.).

**You should not encounter any major issues with launching or debugging. If Ollama is running and the ports are open, everything should work as expected.**

If you need more features or run into any problems, just ask!
