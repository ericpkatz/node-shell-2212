const ls = require('./ls');
const pwd = require('./pwd');
const date = require('./date');
const cat = require('./cat');
//Output a prompt
process.stdout.write('prompt > ');

const done = (str) => {
  process.stdout.write(str);
  process.stdout.write('\nprompt > ');
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    pwd(done);
  }
  else if(cmd === 'date'){
    date(done);
  }
  else if(cmd.startsWith('cat')){
    const file = cmd.split(' ')[1];
    cat(done, file);
  }
  else if(cmd === 'ls'){
    ls(done);
  }
  else {
    done(`${cmd} is NOT a valid command in Joe`);
  }

});