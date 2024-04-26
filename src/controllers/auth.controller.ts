'option explicit';

const authService = require('../services/auth.service');

async function login(req, res) {
    try {
        const response = await authService.login(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }
}

async function register(req, res) {
    try {
        const response = await authService.register(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }
}

module.exports = {
    login,
    register
};