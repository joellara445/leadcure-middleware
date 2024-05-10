'use strict';

import { Constants } from "../common/utils/constants";
const jwt = require('jsonwebtoken')

async function auth_middleware(req, res, next) {
    let token: string = req.headers['authorization'];
    token = token.replace(/^Bearer\s+/, "");
    console.log(token);
    if (!token) return res.status(401).json('Unauthorize user')

    try {
        const decoded = jwt.verify(token, Constants.jsonToken);
        console.log(decoded);
        req.user = decoded
        next()

    } catch (e) {
        console.log("Error: ", e.toString());
        res.status(400).json('Token not valid')
    }
}

module.exports = auth_middleware;
