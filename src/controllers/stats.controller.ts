'option explicit';

const StatsService = require('../services/stats.service');

async function stats(req, res) {
    try {
        const response = await StatsService.getData(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }
}

module.exports = {
    stats
}