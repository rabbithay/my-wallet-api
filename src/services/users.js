import joi from 'joi';
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';

import * as userRepository from '../repositories/users';

export function validateNewUser(body) {
  const schema = joi.object({
    name: joi.string().min(3).max(30)
      .required(),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeatPassword: joi.ref('password'),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}

export async function checkEmail({ email }) {
  return userRepository.checkEmailIsRepeated(email);
}

export function hash(password) {
  return bcrypt.hashSync(password, 13);
}

export async function register({ name, email, password }) {
  const passwordHash = hash(password);
  await userRepository.createNewuser({ name, email, passwordHash });
}

export function validateUserLogin(body) {
  const schema = joi.object({
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}

export async function login({ email, password }) {
  const user = await userRepository.checkEmail(email);
  if (!user) return false;

  const { id, name } = user;
  const hashedPassword = user.password;
  if (!(bcrypt.compareSync(password, hashedPassword))) return false;

  const token = uuid.v4();
  await userRepository.login(id, token);
  return {
    token, id, email, name,
  };
}
