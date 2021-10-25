import connection from '../database';

export async function checkEmailIsRepeated(email) {
  const repeatedEmail = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
  return !!repeatedEmail.rows.length;
}

export async function createNewuser({ name, email, passwordHash }) {
  await connection.query(
    `INSERT INTO users
        (name, email, password)
        VALUES ($1, $2, $3)`,
    [name, email, passwordHash],
  );
}

export async function checkEmail(email) {
  const user = await connection.query(`
    SELECT * FROM users
    WHERE email = $1
  `,
  [email]);
  return user.rows[0];
}

export async function login(userId, token) {
  await connection.query(
    `INSERT INTO sessions
    ("userId", token)
    VALUES ($1, $2)`,
    [userId, token],
  );
}
