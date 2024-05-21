'option explicit';

const leadsRuleService = require('../services/leadrules.service');
const logLeadRules = require('../services/logging.service');

async function addLeadRule(req: any, res: any) {
    try {
        let leadResponse = await leadsRuleService.addLeadRule(req.body);
        return res.status(200).json(leadResponse);
    } catch (e) {
        logLeads.error('Error ' + e.toString() + ' at ' + 'function addLeadRule in leads.controller');
        return res.status(500).json(e);
    }
}

async function getLeadRules(req: any, res: any) {
    try {
        let leadResponse = await leadsService.getLeadRules();
        return res.status(200).json(leadResponse);
    } catch (e) {
        logLeads.error('Error ' + e.toString() + ' at ' + 'function getLeadRules in leads.controller');
        return res.status(500).json(e);
    }
}

module.exports = {
    addLeadRule,
    getLeadRules
};