'option explicit'
const expressUser = require('express');
const apiUser = expressAuth.Router();
const user_controller = require('../controllers/user.controller');
const noauthUser = require('../middleware/noauth.middleware');
/*
apiUser.post('/', noauthUser, user_controller.create)
apiUser.put('/:id', noauthUser, user_controller.update)
*/
apiUser.get('/', noauthUser, user_controller.getUsers)

module.exports = apiUser;