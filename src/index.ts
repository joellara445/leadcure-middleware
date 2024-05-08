'use strict';

const createApp = require('./server/server');
const config = require('./config/config.ts');
const hostname = 'localhost';
const app = createApp();

console.log('Conexión a la base de datos establecida...');
app.listen(3000, hostname, () => {
  console.log(`API REST corriendo en http://${hostname}:3000/`);
});