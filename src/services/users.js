import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import * as userRepository from '../repositories/users';
import * as schema from '../schemas/userSchemas';

export function validateNewUser({
  name, email, password, repeatPassword,
}) {
  const invalidUserInfo = schema.validalidateNewUserInfo({
    name, email, password, repeatPassword,
  });
  return !!invalidUserInfo;
}

function hash(password) {
  return bcrypt.hashSync(password, 13);
}

function checkPasswordsMatch({ password, hashedPassword }) {
  const passwordsMatch = bcrypt.compareSync(password, hashedPassword);
  return passwordsMatch;
}

function generateToken() {
  const token = uuid();
  return token;
}

export async function checkEmail(email) {
  const emailIsRepeated = await userRepository.getEmailById(email);
  return emailIsRepeated;
}

export async function register({ name, email, password }) {
  const passwordHash = hash(password);
  await userRepository.createNewuser({ name, email, passwordHash });
}

export function validateUserLogin({ password, email }) {
  const invalidLoginInfo = schema.validateLoginInfo({
    email, password,
  });
  return !!invalidLoginInfo;
}

export async function login({ email, password }) {
  const user = await userRepository.getEmailById(email);
  if (!user) return false;

  const { id, name } = user;
  const hashedPassword = user.password;
  const passwordIsCorrect = checkPasswordsMatch({ password, hashedPassword });
  if (!passwordIsCorrect) return false;

  const token = generateToken();
  await userRepository.login({ userId: id, token });
  return {
    token, id, email, name,
  };
}

export async function logout(token) {
  await userRepository.logout(token);
}
