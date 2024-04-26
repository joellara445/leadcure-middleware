'option explicit';
let expressapp = require('express');
const apiLeads = expressapp.Router();
const leads_controller = require('../controllers/leads.controller');
const noauthLeads = require('../middlewares/noauth.middleware.js');
apiLeads.post('/', leads_controller.clean);
module.exports = apiLeads;