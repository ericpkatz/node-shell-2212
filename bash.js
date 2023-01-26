const ls = require('./ls');
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
    done(__dirname);
  }
  else if(cmd === 'date'){
    done(new Date().toString());
  }
  else if(cmd === 'ls'){
    ls(done);
  }
  else {
    done(`${cmd} is NOT a valid command in Joe`);
  }

});