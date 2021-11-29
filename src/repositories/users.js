import connection from '../database/database';

export async function getEmailById(email) {
  const repeatedEmail = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
  return repeatedEmail.rows[0];
}

export async function createNewuser({ name, email, passwordHash }) {
  await connection.query(
    `INSERT INTO users
        (name, email, password)
        VALUES ($1, $2, $3)`,
    [name, email, passwordHash],
  );
}

export async function login({ userId, token }) {
  await connection.query(
    `INSERT INTO sessions
    ("userId", token)
    VALUES ($1, $2)`,
    [userId, token],
  );
}

export async function logout(token) {
  await connection.query(
    `DELETE FROM sessions
    WHERE token = $1`,
    [token],
  );
}
