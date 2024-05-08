'option explicit';

const AuthService = require('../services/auth.service');

async function login(req, res) {
    try {
        const response = await AuthService.login(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }
}

async function register(req, res) {
    console.log("register Auth" + JSON.stringify(req.body));
    try {
        const response = await AuthService.register(req.body);
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