import app from "./app.js";

process.on("unhandledRejection", (reason, promise) => {
	console.error(`Server exiting due to an unhandled promise rejection: ${promise} and reason ${reason}`);
	throw reason;
});

process.on("uncaughtException", (error) => {
	console.error("Server exiting due to uncaught exception", error);
});

app.listen(4000, () => {
	console.log("Server is listening on port 4000.");
});