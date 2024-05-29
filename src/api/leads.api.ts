'option explicit';
let expressapp = require('express');
const apiLeads = expressapp.Router();
const leads_controller = require('../controllers/leads.controller');
const authLeads = require('../middleware/auth.middleware');
apiLeads.post('/', leads_controller.clean);
apiLeads.post('/add', leads_controller.addLead);
apiLeads.get('/', authLeads, leads_controller.getLeads);
module.exports = apiLeads;