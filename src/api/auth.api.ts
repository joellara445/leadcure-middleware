'option explicit'
const expressAuth = require('express');
const apiAuth = expressAuth.Router();
const auth_controller = require('../controllers/auth.controller');
const noauth = require('../middleware/noauth.middleware.ts');
apiAuth.post('/login', noauth, auth_controller.login)
apiAuth.post('/register', auth_controller.register)

module.exports = apiAuth;