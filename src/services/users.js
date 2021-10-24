import Joi from 'joi';
import bcrypt from 'bcrypt';

import * as userRepository from '../repositories/users';

export async function validadeNewUser(body) {
  try {
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
    console.log({ error, value });
    return { error, value };
  } catch (e) {
    return console.log(e);
  }
}

export async function checkEmail({ email }) {
  try {
    return await userRepository.checkEmailIsRepeated(email);
  } catch (e) {
    return console.log(e);
  }
}

export async function hash(password) {
  const passwordHash = await bcrypt.hashSync(password, 13);
  return passwordHash;
}

export async function register({ name, email, password }) {
  try {
    const passwordHash = hash(password);
    await userRepository.createNewuser({ name, email, passwordHash });
  } catch (e) {
    console.log(e);
  }
}
