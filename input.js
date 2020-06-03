const net = require('net');

const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    console.log("this is the w key");
  }
  if (key === '\u0061') {
    console.log("this is the a key");
  } 
  if (key === '\u0073') {
    console.log("this is the s key");
  } 
  if (key === '\u0077') {
    console.log("this is the d key");
  }
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };