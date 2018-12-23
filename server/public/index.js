const socket = io();

const temperatureDisplay = document.getElementById('temperature');

// Mostrar lectura en consola de navegador
socket.on('temp', function (data) {
  console.log(data);
  temperature.innerHTML = `${data}°C`;
});