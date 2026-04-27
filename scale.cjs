const fs = require('fs');
const path = require('path');

function scaleFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Scale arbitrary px values text-[16px] -> text-[11px]
  content = content.replace(/text-\[(\d+)px\]/g, (match, p1) => {
    return `text-[${Math.round(parseInt(p1) * 0.7)}px]`;
  });

  // Scale leading-[XXpx]
  content = content.replace(/leading-\[(\d+)px\]/g, (match, p1) => {
    return `leading-[${Math.round(parseInt(p1) * 0.7)}px]`;
  });

  // Scale padding px-[XXpx], py-[XXpx], p-[XXpx], max-w-[XXpx]
  content = content.replace(/(px|py|p|mx|my|m|gap|top|bottom|left|right|max-w|w|h)-\[(\d+)px\]/g, (match, p1, p2) => {
    return `${p1}-[${Math.round(parseInt(p2) * 0.7)}px]`;
  });

  // Scale tailwind spacing (e.g., p-8 -> p-6, gap-12 -> gap-8)
  const scaleSpacing = (match, prefix, val) => {
    const v = parseInt(val);
    if (!isNaN(v) && v > 1) {
      return `${prefix}-${Math.max(1, Math.round(v * 0.7))}`;
    }
    return match;
  };

  content = content.replace(/\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|top|bottom|left|right|w|h)-(\d+)\b/g, scaleSpacing);
  
  // Scale text-4xl -> text-2xl
  const textScaleMap = {
    'text-7xl': 'text-5xl',
    'text-6xl': 'text-4xl',
    'text-5xl': 'text-3xl',
    'text-4xl': 'text-2xl',
    'text-3xl': 'text-xl',
    'text-2xl': 'text-lg',
    'text-xl': 'text-base',
    'text-lg': 'text-sm',
    'text-base': 'text-[11px]',
    'text-sm': 'text-[10px]',
    'text-xs': 'text-[9px]',
  };
  
  for (const [key, val] of Object.entries(textScaleMap)) {
    content = content.replace(new RegExp(`\\b${key}\\b`, 'g'), val);
  }

  fs.writeFileSync(filePath, content);
}

const dir = path.join(__dirname, 'src/components/sections');
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    scaleFile(path.join(dir, file));
  }
});
scaleFile(path.join(__dirname, 'src/components/layout/InteractionElements.tsx'));
