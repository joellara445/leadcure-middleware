'option explicit';
let expressapp = require('express');
const apiLeads = expressapp.Router();
const leads_controller = require('../controllers/leads.controller');
const authLeads = require('../middleware/auth.middleware');
apiLeads.post('/', authLeads, leads_controller.clean);
module.exports = apiLeads;