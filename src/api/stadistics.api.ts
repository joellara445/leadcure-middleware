'option explicit'
const expresStats = require('express');
const apiStats = expresStats.Router();
const stats_controller = require('../controllers/stats.controller');
const authstat = require('../middleware/auth.middleware.ts');
apiStats.post('/stats', authstat, stats_controller.stats)
module.exports = apiAuth;