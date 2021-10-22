import * as userService from "../services/users"; 

export async function register (req, res) {
	try{
		const error = await userService.validadeNewUser(req.body);
		if (error){
			return res.sendStatus(401);
		}
		return res.sendStatus(201);
	}catch(e){
		console.log(e);
		res.sendStatus(500);
	}
}

export async function login (req, res) {
	try {
		await userService.login();
		return res.sendStatus(200)        ;
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
}