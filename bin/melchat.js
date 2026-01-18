#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Parse CLI arguments
const args = process.argv.slice(2);
const flags = {
  port: 3000,
  open: true,
  help: false
};

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '-p' || arg === '--port') {
    flags.port = parseInt(args[++i], 10) || 3000;
  } else if (arg === '--no-open') {
    flags.open = false;
  } else if (arg === '-h' || arg === '--help') {
    flags.help = true;
  }
}

if (flags.help) {
  console.log(`
  melchat - 100+ AI models in one chat interface

  Usage:
    melchat [options]
    npx melchat [options]

  Options:
    -p, --port <port>   Port to run server on (default: 3000)
    --no-open           Don't auto-open browser
    -h, --help          Show this help message

  Examples:
    melchat                    Start on port 3000 and open browser
    melchat -p 8080            Start on port 8080
    melchat --no-open          Start without opening browser

  More info: https://github.com/melvincarvalho/melchat
`);
  process.exit(0);
}

// Find the dist/index.html file
const distPath = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(distPath)) {
  console.error('Error: dist/index.html not found');
  console.error('Expected at:', distPath);
  process.exit(1);
}

const htmlContent = fs.readFileSync(distPath, 'utf8');

// Create server
const server = http.createServer((req, res) => {
  // Serve index.html for all routes (SPA)
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  res.end(htmlContent);
});

// Start server
server.listen(flags.port, () => {
  const url = `http://localhost:${flags.port}`;

  console.log(`
  ╔═══════════════════════════════════════════════════╗
  ║                                                   ║
  ║   🤖 melchat v0.0.1                               ║
  ║   100+ AI models in one interface                 ║
  ║                                                   ║
  ║   Running at: ${url.padEnd(31)}║
  ║                                                   ║
  ║   Press Ctrl+C to stop                            ║
  ║                                                   ║
  ╚═══════════════════════════════════════════════════╝
`);

  // Auto-open browser
  if (flags.open) {
    const platform = process.platform;
    let cmd;

    if (platform === 'darwin') {
      cmd = `open ${url}`;
    } else if (platform === 'win32') {
      cmd = `start ${url}`;
    } else {
      cmd = `xdg-open ${url}`;
    }

    exec(cmd, (err) => {
      if (err) {
        console.log(`  Open ${url} in your browser\n`);
      }
    });
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n  Shutting down melchat...\n');
  server.close();
  process.exit(0);
});
