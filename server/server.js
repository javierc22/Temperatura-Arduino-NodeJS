// ----------------- SERVIDOR --------------------- //
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

// Inicializando servidor y socketIO
const app = express();
const server = http.createServer(app);
const io = SocketIO.listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function() {
  console.log('server listening on port', 3000);
});

server.on('error',function(){
  console.log('err');
});

// ----------------- COMUNICACION SERIAL --------------------- //
const Serialport = require('serialport');

// Obtener cada lectura en una línea nueva
const Readline = Serialport.parsers.Readline;

// Inicializar puerto serial
const port = new Serialport("/dev/ttyACM0", {
  baudRate: 9600
});

// Inicializar lectura
const parser = port.pipe(new Readline( {delimeter: '\r\n'} ));

// Cuando conexíon de puerto serie esté abierta
parser.on('open', function() {
  console.log('connection is open');
});

// Cuando conexión está recibiendo datos
parser.on('data', function(data) {
  let temp = parseInt(data, 10) + " °C";
  console.log(temp);
  io.emit('temp', data.toString());
  // console.log(typeof data); => String
});

// Cuando conexión tenga un error
parser.on('error', function() {
  console.log(err);
});