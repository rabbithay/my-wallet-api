import * as userService from '../services/users';

export async function register(req, res) {
  const {
    name, email, password, repeatPassword,
  } = req.body;
  const bodyIsInvalid = userService.validateNewUser({
    name, email, password, repeatPassword,
  });
  if (bodyIsInvalid) return res.sendStatus(422);

  const emailIsRepeated = await userService.checkEmail(email);
  if (emailIsRepeated) return res.sendStatus(409);

  await userService.register({
    name, email, password,
  });
  return res.sendStatus(201);
}

export async function login(req, res) {
  const { email, password } = req.body;
  const bodyIsInvalid = userService.validateUserLogin({ email, password });
  if (bodyIsInvalid) return res.sendStatus(422);

  const newSessionInfo = await userService.login({ email, password });
  if (!newSessionInfo) return res.sendStatus(401);

  return res.status(200).send(newSessionInfo);
}

export async function logout(req, res) {
  const { token } = req.body;
  await userService.logout(token);
  return res.sendStatus(200);
}
