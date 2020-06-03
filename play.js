const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => console.log('Im connected to the server'))

  conn.on('data', (message) => {
    console.log('message from Server :>> ', message);
  }) 
  return conn;
}

console.log('Connecting ...');
connect();