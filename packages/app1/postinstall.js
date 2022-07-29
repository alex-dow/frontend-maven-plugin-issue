const fs = require('fs');
const path = require('path');

const postinstalldir = path.join(__dirname, 'postinstall');

console.log('-------------------------------------------------------------------------------');
console.log('APP 1 - POST INSTALLATION SCRIPT');
console.log('-------------------------------------------------------------------------------');

if (!fs.existsSync(postinstalldir)) {
    fs.mkdirSync(postinstalldir, { recursive: true });
}

fs.writeFileSync(path.join(postinstalldir, 'postinstall.txt'), new Date().toLocaleString());

console.log('Done');