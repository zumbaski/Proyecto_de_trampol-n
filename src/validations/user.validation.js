const Joi = require('joi');

const user = {
    body: Joi.object().keys({
      firstName: Joi.string().required(),  
      email: Joi.string().required().email(),
      lastName: Joi.string().required(),
      middleName: Joi.string().required(),
      gender: Joi.string().required(),
      dOB: Joi.date().required(),
      phoneNumber: Joi.string().required(),
      occupation: Joi.string(),
    }),
  };
  module.exports = {
    user,
  };