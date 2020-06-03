const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => console.log('Successfully connected to the game server'))
  
  conn.on('connect', () => {
    conn.write('Name: RAW')
  })
  conn.on('data', (message) => {
    console.log('message from Server :>> ', message);
  }) 
  return conn;
}

module.exports = {connect};