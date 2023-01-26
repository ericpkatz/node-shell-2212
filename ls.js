const fs = require('fs');

module.exports = (done)=> {
  fs.readdir(__dirname, (err, files)=> {
    done(files.join('\n'));
  });
};