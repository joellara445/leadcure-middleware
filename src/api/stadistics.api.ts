'option explicit'
const expresStats = require('express');
const apiStats = expresStats.Router();
const stats_controller = require('../controllers/stats.controller');
const noauthstat = require('../middleware/noauth.middleware.ts');
apiStats.post('/stats', noauthstat, stats_controller.stats)

module.exports = apiAuth;