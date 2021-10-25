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
  const type = (req.url).replace('/', '');
  if (!(type === 'income') || !(type === 'expense')) return res.sendStatus(404);

  const token = transactionService.checkToken(req.headers.authorization);
  if (!token) return res.sendStatus(405);

  const session = await transactionService.checkSessionIsAuthorized(token);
  if (!session) return res.sendStatus(401);

  const { error, body } = transactionService.validateNewTransaction(req.body, type);
  if (error) return res.sendStatus(422);

  const { value, description } = body;

  //  value | description |    date    |  type   | userId

  return res.sendStatus(201);
}
