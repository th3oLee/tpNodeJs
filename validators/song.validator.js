const { Joi } = require("express-validation");
/**
 * Song Validator
 */

const SongValidator = {
  validateCreate: {
    body: Joi.object({
      genre: Joi.string().max(75).required(),
      titre: Joi.string().max(75).required(),
      duree: Joi.number().integer().min(0).max(5600).required(),
      auteur: Joi.string().max(250).required(),
    }),
  },
  validateUpdate: {
    params: Joi.object({
      id: Joi.string().guid().required(),
    }),
    body: Joi.object({
      genre: Joi.string().max(75).required(),
      titre: Joi.string().max(75).required(),
      duree: Joi.number().integer().min(0).max(5600).required(),
      auteur: Joi.string().max(250).required(),
    }),
  },
};

module.exports = SongValidator;
