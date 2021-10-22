import express from "express";
import cors from "cors";

import * as transationController from "./controllers/transations.js"; 
import * as userController from "./controllers/users";

const app = express();
app.use(cors());
app.use(express.json());

app.post(
	"/register", 
	userController.register
);

app.post("/login", ()=>{
	//login submit
});

app.get("/home", ()=>{
	//transations screen
});

app.post("/income", ()=>{
	//new income screen
});

app.post("/expense", ()=>{
	//new expense screen
});

export default app;