import { text } from 'express';
import joi, { number } from 'joi';
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

export function validateNewTransaction(body) {
  const schema = joi.object({
    value: number().required(),
    description: string().required(),
  });
  const { error, value } = schema.validate(body);
  return { error, value };
}
