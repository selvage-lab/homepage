const { spawn } = require('child_process');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function prerender() {
  console.log('Starting preview server...');
  // Force port 4173
  const server = spawn('npm', ['run', 'preview', '--', '--port', '4173']);
  
  let isReady = false;

  server.stdout.on('data', data => {
    const output = data.toString();
    console.log(output);
    if (output.includes('http://localhost:4173') || output.includes('ready in')) {
      isReady = true;
    }
  });
  
  server.stderr.on('data', data => console.error(data.toString()));

  // Wait until server is ready (max 10 seconds)
  for (let i = 0; i < 20; i++) {
    if (isReady) break;
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('\nLaunching playwright...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:4173 ...');
  // Wait until network is fully idle (all assets/API calls finished)
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  
  // Wait extra 1 second to ensure any client-side animations or delayed rendering settles
  await new Promise(r => setTimeout(r, 1000));
  
  const html = await page.content();
  
  const distPath = path.resolve(process.cwd(), 'dist/index.html');
  fs.writeFileSync(distPath, html);
  
  console.log('Prerender complete. Saved rendered HTML to dist/index.html');
  
  await browser.close();
  server.kill();
  process.exit(0);
}

prerender().catch(err => {
  console.error(err);
  process.kill(server.pid);
  process.exit(1);
});
