'option explicit';

const leadsService = require('../services/leads.service');
async function clean(req: any, res: any) {

    try {
        let leadResponse = await leadsService.cleanContent(req.body);
        return res.status(200).json(leadResponse);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }

}

module.exports = {
    clean
};