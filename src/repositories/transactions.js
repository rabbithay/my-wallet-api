import connection from '../database/database';

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

export async function createTransaction({
  value, description,
  type, userId,
}) {
  await connection.query(
    `INSERT INTO transactions
    (value, description, type, "userId", date)
    VALUES ($1, $2, $3, $4, now())`,
    [value * 100, description, type, userId],
  );
}
