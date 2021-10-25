import * as transactionService from '../services/transactions';

export async function getAll(req, res) {
  const token = transactionService.checkToken(req.headers.authorization);
  if (!token) return res.sendStatus(405);

  const session = await transactionService.checkSessionIsAuthorized(token);
  if (!session) return res.sendStatus(401);

  const { userId } = session;
  const transactionsList = await transactionService.getAll(userId);
  return res.status(200).send(transactionsList);
}

export async function newTransaction(req, res) {
  const type = transactionService.urlIsValid(req.url);
  if (!type) return res.sendStatus(404);

  const token = transactionService.checkToken(req.headers.authorization);
  if (!token) return res.sendStatus(405);

  const session = await transactionService.checkSessionIsAuthorized(token);
  if (!session) return res.sendStatus(401);

  const { error, value } = transactionService.validateNewTransaction(req.body);
  if (error) return res.sendStatus(422);

  const info = {
    value: value.value,
    description: value.description,
    type,
    userId: session.userId,
  };
  await transactionService.addNewTransaction(info);
  return res.sendStatus(201);
}
