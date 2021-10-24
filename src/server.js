import app from './app';

process.on('unhandledRejection', (reason, promise) => {
  console.error(`Server exiting due to an unhandled promise rejection: ${promise} and reason ${reason}`);
  throw reason;
});

process.on('uncaughtException', (error) => {
  console.error('Server exiting due to uncaught exception', error);
});

app.listen(4002, () => {
  console.log('Server is listening on port 4002.');
});
