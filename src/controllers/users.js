import * as userService from '../services/users';

//
export async function register(req, res) {
  try {
    const { error, value } = await userService.validadeNewUser(req.body);
    console.log({ error, value });
    if (error) {
      console.log('status401');
      return res.sendStatus(401);
    }
    const emailIsRepeated = await userService.checkEmail(value.email);
    if (emailIsRepeated) {
      console.log('status409');
      return res.sendStatus(409);
    }
    await userService.register(value);
    console.log('status201');
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    console.log('status500');
    return res.sendStatus(500);
  }
}

export async function login(req, res) {
  try {
    await userService.login();
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}
