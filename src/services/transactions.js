import joi from 'joi';
import * as transactionRepository from '../repositories/transactions';

export function checkToken(authorization) {
  return authorization?.replace('Bearer ', '');
}

export async function checkSessionIsAuthorized(token) {
  return transactionRepository.selectSession(token);
}

export async function getAll(userId) {
  return transactionRepository.selectTransactions(userId);
}

export function urlIsValid(url) {
  const type = (url).replace('/', '');
  return ((type === 'income') || (type === 'expense')) && type;
}

export function validateNewTransaction(body) {
  const schema = joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}

export async function addNewTransaction(info) {
  return transactionRepository.createTransaction(info);
}
