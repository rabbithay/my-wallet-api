import './setup';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import * as transactionController from './controllers/transactions';
import * as userController from './controllers/users';

const app = express();
app.use(cors());
app.use(express.json());

app.post(
  '/register',
  userController.register,
);

app.post(
  '/login',
  userController.login,
);

app.post(
  '/logout',
  userController.logout,
);

app.get(
  '/home',
  transactionController.getAll,
);

app.post(
  '/income',
  transactionController.newTransaction,
);

app.post(
  '/expense',
  transactionController.newTransaction,
);

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log({ error, request, response });
  return response.sendStatus(500);
});

export default app;
