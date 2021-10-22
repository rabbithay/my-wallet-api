import Joi from "joi";

export async function validadeNewUser(body){
	try{
		const schema = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().required(),
			password: Joi.string().required()
		});
		const {error} = schema.validate(body);
		return error;
	}catch(e){
		console.log(e);
	}
}
export async function register() {
	try {
		//
	} catch(e){
		console.log(e);
	}
}

export async function login() {
	try{
		//
	}catch(e){
		console.log(e);
	}
}
