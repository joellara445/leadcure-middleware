'use strict';

const createApp = require('./server/server');
const config = require('./config/config.ts');
const hostname = process.env.HOST || '0.0.0.0';
const app = createApp();
const PORT = process.env.PORT || 3000;
console.log('Conexión a la base de datos establecida...');
app.listen(PORT, hostname, () => {
  console.log(`API REST corriendo en http://${hostname}:3000/`);
});