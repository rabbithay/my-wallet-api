import Joi from 'joi';

export function validalidateNewUserInfo(obj) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
    repeatPassword: Joi.ref('password'),
  });

  const validation = schema.validate(obj);
  return validation.error;
}

export function validateLoginInfo(obj) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const validation = schema.validate(obj);
  return validation.error;
}
