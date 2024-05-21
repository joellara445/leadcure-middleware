'option explicit';
let expressrules = require('express');
const apiLeadRules = expressrules.Router();
const leadrules_controller = require('../controllers/leadrules.controller');
const authLeadRules = require('../middleware/auth.middleware');
apiLeads.post('/add', authLeads, leadrules_controller.addLeadRule);
apiLeads.get('/', authLeads, leads_controller.getLeadRules);
module.exports = apiLeadRules;