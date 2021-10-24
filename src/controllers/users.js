import * as userService from '../services/users';

export async function register(req, res) {
  const { error, value } = await userService.validadeNewUser(req.body);
  console.log({ error, value });
  if (error) {
    return res.sendStatus(422);
  }
  const emailIsRepeated = await userService.checkEmail(value.email);
  if (emailIsRepeated) {
    return res.sendStatus(409);
  }
  await userService.register(value);
  console.log('status201');
  return res.sendStatus(201);
}

export async function login(req, res) {
  const { email, password } = req.body;
  const validadeLoginInfo = userService.validadeUserLogin({ email, password });
  const { error, value } = validadeLoginInfo;
  if (error) {
    return res.sendStatus(422);
  }
  const success = await userService.login(value);
  console.log(success);
  if (success) {
    return res.status(200).send(success);
  }
  return res.sendStatus(401);
}
