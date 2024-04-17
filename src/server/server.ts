'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');
import "reflect-metadata"
import express from 'express';
const bodyParser = require('body-parser');
const app = express();


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

  app.use(function (err:any, req:any, res:any, next:any) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });



  return app;
};

module.exports = createApp;