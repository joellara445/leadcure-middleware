'option explicit'
const expressUser = require('express');
const apiUser = expressUser.Router();
const user_controller = require('../controllers/user.controller');
const noauthUser = require('../middleware/noauth.middleware');
apiUser.get('/', user_controller.getUsers)
module.exports = apiUser;