let logger = require('../config/logger');
let status = require('http-status');
let {ApiResponses} = require('../payload/ApiResponses')
let {authServices} = require('../services/index')


exports.login = (req,res) =>{
    let email = req.body.email
    let password =  req.body.password

    let loginResponse = authServices.login(email, password);
    // res.status(status.OK).send(loginResponse)
    // check the error and return

res.status(status.OK).send(new ApiResponses(status.OK,'Login succesfully', loginResponse))

}

exports.register = (req,res) =>{

    state = status.OK
    res.status(status.OK).send(new ApiResponses(state , 'Registered'))

    
}