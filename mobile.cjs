const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace text-[clamp...] with slightly smaller text-[clamp...] for Hero and everywhere else just add w-full to buttons if not present
  
  // Make buttons full width on mobile
  // Match buttons that have px- py- like rounded
  content = content.replace(/(className="[^"]*?\bpx-\d+\b[^"]*?)"/g, (match, prefix) => {
    // Only apply to buttons/a tags containing flex or inline-flex generally or specifically if we look for <button or <a
    return match; // too broad
  });

  fs.writeFileSync(filePath, content);
}

const dir = path.join(__dirname, 'src/components/sections');
// We can manually write a better regex or manually edit Hero and Nav and Contact.
