'option explicit'
const expressUser = require('express');
const apiUser = expressUser.Router();
const user_controller = require('../controllers/user.controller');
const authUser = require('../middleware/auth.middleware');
apiUser.get('/', authUser, user_controller.getUsers)
module.exports = apiUser;