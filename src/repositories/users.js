import connection from '../database';

export async function checkEmailIsRepeated(email) {
  const repeatedEmail = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
  return !!repeatedEmail.rows.length;
}

export async function createNewuser({ name, email, passwordHash }) {
  await connection.query(
    `INSERT INTO users
        (name, email, token)
        VALUES ($1, $2, $3)`,
    [name, email, passwordHash],
  );
}
