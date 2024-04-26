'option explicit'
const expressAuth = require('express');
const apiAuth = expressAuth.Router();
const auth_controller = require('../controllers/auth.controller');
const noauth = require('../middlewares/noauth.middleware.js');
apiAuth.post('/login', noauth, auth_controller.login)
apiAuth.put('/register', noauth, auth_controller.register)

module.exports = apiAuth;