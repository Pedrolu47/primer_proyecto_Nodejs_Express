const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir contenido estático desde la carpeta 'public'
app.use(express.static('public'));

// Rutas para manejar diferentes solicitudes HTTP
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/datos', (req, res) => {
  res.send('Solicitud POST recibida');
});

app.put('/datos', (req, res) => {
  res.send('Solicitud PUT recibida');
});

app.delete('/datos', (req, res) => {
  res.send('Solicitud DELETE recibida');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
