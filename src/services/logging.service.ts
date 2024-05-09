const logger = require('pino');

module.exports = logger({
    level: process.env.PINO_LOG_LEVEL || 'info',
    formatters: {
        level: (label) => {
            return { level: label.toUpperCase() };
        },
    },
    timestamp: logger.stdTimeFunctions.isoTime,
},);