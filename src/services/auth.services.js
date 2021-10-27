const logger = require('../config/logger')
const usermodels = require('../models/user_models')
const {ApiError} = require('../payload/ApiErrors')
const status = require('http-status')
const jwt = require('jsonwebtoken')
const login = (email, password) =>{
    // check the error and return
    logger.info (`Authenticating email ${email} and password ${password}`)

    let user =  usermodels.getUserByEmailAndPassword(email , password)
    if(user.length <= 0) {
          throw new ApiError(401,"Email or Password does not match")
    }

    var token = jwt.sign({user},  process.env.JWT_SECRET_KEY, { expiresIn: '30s' });

    return {accesstoken: token}
}

module.exports = {
    login
}