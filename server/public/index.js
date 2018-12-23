const socket = io();

// Mostrar lectura en consola de navegador
socket.on('temp', function (data) {
  console.log(data);
});