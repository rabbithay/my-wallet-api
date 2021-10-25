import connection from '../database';

export async function selectSession(token) {
  const session = await connection.query(
    `SELECT * FROM sessions       
    WHERE sessions.token = $1`,
    [token],
  );
  return session.rows[0];
}

export async function selectTransactions(userId) {
  const transactionsList = await connection.query(
    `SELECT * FROM transactions
    WHERE "userId" = $1`,
    [userId],
  );
  return transactionsList.rows;
}
