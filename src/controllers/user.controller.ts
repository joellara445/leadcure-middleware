'option explicit';

const userService = require('../services/user.service');

async function getUsers(req, res) {
    try {
        const response = await userService.getUsers();
        return res.status(200).json(response);
    } catch (e) {
        console.log("Error " + e.toString());
        return res.status(500).json(e);
    }
}

module.exports = {
    login,
};