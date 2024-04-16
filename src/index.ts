'use strict';

const createApp = require('./server/server.ts');
const config = require('./config/config.ts');
const hostname = '127.0.0.1';
const app = createApp();

    console.log('Conexión a la base de datos establecida...');
    app.listen(3000, hostname, () => {
      console.log(`API REST corriendo en http://${hostname}:${config.port}/`);
    });