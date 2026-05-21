const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      if (file.endsWith('.jsx')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/text-white/g, 'text-[var(--text-main)]');
  content = content.replace(/text-slate-300/g, 'text-[var(--text-light)]');
  content = content.replace(/text-slate-400/g, 'text-[var(--text-muted)]');
  content = content.replace(/bg-\[\#0B0F19\]/g, 'bg-[var(--bg-color)]');
  content = content.replace(/bg-white\/5/g, 'bg-[var(--input-bg)]');
  content = content.replace(/bg-white\/10/g, 'bg-[var(--input-hover)]');
  content = content.replace(/border-white\/10/g, 'border-[var(--input-border)]');
  content = content.replace(/border-white\/5/g, 'border-[var(--input-border)]');
  content = content.replace(/rgba\(11,15,25,0\.7\)/g, 'var(--glass-bg-raw)');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Done replacing classes');
