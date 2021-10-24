import express from 'express';
import 'express-async-errors';
import cors from 'cors';

// import * as transationController from './controllers/transations.js';
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

app.get('/home', () => {
  // transations screen
});

app.post('/income', () => {
  // new income screen
});

app.post('/expense', () => {
  // new expense screen
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log({ error, request, response });
  return response.sendStatus(500);
});

export default app;
