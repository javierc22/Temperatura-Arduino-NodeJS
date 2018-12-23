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
  // console.log(typeof data); => String
});

// Cuando conexión tenga un error
parser.on('error', function() {
  console.log(err);
});