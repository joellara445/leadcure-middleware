'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');
import "reflect-metadata"
import express from 'express';
const bodyParser = require('body-parser');
const app = express();
const auth_api = require('../api/auth.api');
const user_api = require('../api/user.api');
const leads_api = require('../api/leads.api');


const cors = require('cors');
const createApp = () => {
  let credentials = {};


  app.use(cors());



  app.use(
    bodyParser.urlencoded({
      limit: '10mb',
      extended: false,
    })
  );
  app.use(
    bodyParser.json({
      limit: '10mb',
    })
  );
  app.use('/api/v1/auth', auth_api);
  app.use('/api/v1/user', user_api);
  app.use('/api/v1/leads', leads_api);

  app.get('/', function (req, res, next) {
    res.status(200).json({
      message: 'Bienvenido a Leadscure middleware',
    });
  });

  app.get('*', function (req, res, next) {
    let err = new Error('Page Not Found');
    //err.statusCode = 404;
    next(err);
  });

  app.use(function (err: any, req: any, res: any, next: any) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });


  return app;
};

module.exports = createApp;