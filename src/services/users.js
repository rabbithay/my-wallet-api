import Joi from 'joi';
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';

import * as userRepository from '../repositories/users';

export function validadeNewUser(body) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: Joi.ref('password'),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}

export async function checkEmail({ email }) {
  return userRepository.checkEmailIsRepeated(email);
}

export function hash(password) {
  const passwordHash = bcrypt.hashSync(password, 13);
  return passwordHash;
}

export async function register({ name, email, password }) {
  const passwordHash = hash(password);
  await userRepository.createNewuser({ name, email, passwordHash });
}

export function validadeUserLogin(body) {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}

export async function login({ email, password }) {
  const user = await userRepository.checkEmail(email);
  if (!user) return false;

  const { id, token, name } = user;
  if (!(bcrypt.compareSync(password, token))) return false;

  await userRepository.login(id, uuid.v4());
  return {
    token,
    user: { id, email, name },
  };
}
