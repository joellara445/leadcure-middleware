'option explicit';

import { log } from "console";

const StatsService = require('../services/stats.service');
const logStats = require('../services/logging.service');

async function stats(req, res) {
    try {
        const response = await StatsService.getData(req.body);
        return res.status(200).json(response);
    } catch (e) {
        logStats.error('Error ' + e.toString() + ' at ' + 'function stats in stats.controller');
        return res.status(500).json(e);
    }
}

module.exports = {
    stats
}