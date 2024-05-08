'use strict';

async function no_auth(req, res, next) {

    try {

        next();
    } catch (error) {
        console.log('Error verifying token:', error);
        return res
            .status(403)
            .send({ success: false, message: 'No tienes autorización' });
    }
}

module.exports = no_auth;
