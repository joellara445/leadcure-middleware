'option explicit';

const leadsService = require('../services/leads.service');
const logLeads = require('../services/logging.service');

async function clean(req: any, res: any) {
    try {
        let leadResponse = await leadsService.cleanContent(req.body);
        return res.status(200).json(leadResponse);
    } catch (e) {
        logLeads.error('Error ' + e.toString() + ' at ' + 'function clean in leads.controller');
        return res.status(500).json(e);
    }
}

async function addLead(req: any, res: any) {
    try {
        let leadResponse = await leadsService.cleanContent(req.body);
        let result = await leadsService.addLead(leadResponse);
        return res.status(200).json(result);
    } catch (e) {
        logLeads.error('Error ' + e.toString() + ' at ' + 'function addLead in leads.controller');
        return res.status(500).json(e);
    }
}

async function getLeads(req: any, res: any) {
    try {
        let leadResponse = await leadsService.getLeads();
        return res.status(200).json(leadResponse);
    } catch (e) {
        logLeads.error('Error ' + e.toString() + ' at ' + 'function getLeads in leads.controller');
        return res.status(500).json(e);
    }
}

module.exports = {
    clean,
    addLead,
    getLeads
};