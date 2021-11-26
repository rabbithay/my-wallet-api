/* eslint-disable no-undef */
import '../src/setup';
import 'jest';
import supertest from 'supertest';
import app from '../src/app';
import connection from '../src/database/database';

beforeEach(async () => {
  const userId = await connection.query("SELECT id FROM users WHERE email = 'bootcamp@respondeai.com'");
  await connection.query('DELETE FROM transactions WHERE "userId" = $1', [userId?.rows[0]?.id]);
  await connection.query('DELETE FROM sessions WHERE "userId" = $1', [userId?.rows[0]?.id]);
  await connection.query("DELETE FROM users WHERE email = 'bootcamp@respondeai.com'");
});

const body = {
  name: 'bootcamp', email: 'bootcamp@respondeai.com', password: 'banana', repeatPassword: 'banana',
};
const {
  name, email, password,
} = body;

describe('POST /register', () => {
  it('returns status 422 for invalid params', async () => {
    const result = await supertest(app).post('/register').send({
      name, email, password: '', repeatPassword: 'lalala',
    });
    expect(result.status).toEqual(422);
  });

  it('returns status 409 for duplicated email', async () => {
    await supertest(app).post('/register').send(body);
    const secondTry = await supertest(app).post('/register').send(body);
    expect(secondTry.status).toEqual(409);
  });

  it('returns status 201 for valid params', async () => {
    const result = await supertest(app).post('/register').send(body);
    expect(result.status).toEqual(201);
  });
});

describe('POST /login', () => {
  it('returns status 422 for invalid params', async () => {
    const result = await supertest(app).post('/login').send({ email, password: '' });
    expect(result.status).toEqual(422);
  });

  it('returns status 401 for unauthorized params', async () => {
    const result = await supertest(app).post('/login').send({ email, password: 'melancia' });
    expect(result.status).toEqual(401);
  });

  it('returns status 200 for valid params', async () => {
    await supertest(app).post('/register').send(body);
    const result = await supertest(app).post('/login').send({ email, password });
    expect(result.status).toEqual(200);
    expect(result.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        id: expect.any(Number),
        email: body.email,
        name: body.name,
      }),
    );
  });
});

afterAll(() => {
  connection.end();
});
