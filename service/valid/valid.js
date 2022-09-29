const Joi = require("joi");

const userValid = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name:Joi.string().min(3).max(70).required(),
  token: Joi.string().optional(),
});

const cardValid = Joi.object({
  title: Joi.string().required(),
  difficulty: Joi.string().optional(),
  category:Joi.string().optional(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  type: Joi.string().optional(),
});


module.exports = {
  userValid,
  cardValid,
};