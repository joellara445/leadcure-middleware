'option explicit';
const express = require('express');
const api = express.Router();
const leads_controller = require('../controllers/leads.controller');
api.post('/', leads_controller.clean);
module.exports = api;