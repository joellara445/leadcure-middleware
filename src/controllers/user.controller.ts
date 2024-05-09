'option explicit';

const userService = require('../services/user.service');
const logUser = require('../services/logging.service');

async function getUsers(req, res) {
    try {
        const response = await userService.getUsers();
        return res.status(200).json(response);
    } catch (e) {
        logUser.error(
            'Error ' + e.toString() + ' at ' + 'function getUsers in user.controller'
        );
        return res.status(500).json(e);
    }
}

async function updateUser(req, res) {
    try {
        const response = await userService.updateUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        logUser.error(
            'Error ' + e.toString() + ' at ' + 'function updateUser in user.controller'
        );
        return res.status(500).json(e);
    }
}


module.exports = {
    getUsers,
    updateUser
};