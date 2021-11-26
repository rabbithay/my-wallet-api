import * as userService from '../services/users';

export async function register(req, res) {
  const { error, value } = userService.validateNewUser(req.body);
  if (error) return res.sendStatus(422);

  const { email } = value;
  const emailIsRepeated = await userService.checkEmail(email);
  if (emailIsRepeated) return res.sendStatus(409);

  await userService.register(value);
  return res.sendStatus(201);
}

export async function login(req, res) {
  const { email, password } = req.body;
  const validadeLoginInfo = userService.validateUserLogin({ email, password });
  const { error, value } = validadeLoginInfo;
  if (error) return res.sendStatus(422);

  const success = await userService.login(value);
  if (!success) return res.sendStatus(401);

  return res.status(200).send(success);
}

export async function logout(req, res) {
  const { token } = req.body;
  await userService.logout(token);
  return res.sendStatus(200);
}
