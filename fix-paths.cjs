const fs = require('fs');
const path = require('path');

const exts = new Set(['.html', '.mjs', '.js', '.css']);
let filesChanged = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (exts.has(path.extname(entry.name))) processFile(full);
  }
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix backslash path separators inside "assets\..." references -> forward slashes
  content = content.replace(/assets\\([A-Za-z0-9_\-\\.]+)/g, (m) => m.replace(/\\/g, '/'));
  content = content.replace(/\.\\assets\\/g, './assets/');
  content = content.replace(/\.\/assets\\/g, './assets/');

  // Fix mangled "_amp;" that should just be "_" in filenames
  content = content.replace(/_amp;/g, '_');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    filesChanged++;
  }
}

walk(__dirname);
console.log('Files changed:', filesChanged);
