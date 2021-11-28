# 💸 My Wallet API

## 🔍 About

<p>
  This is the back-end repository of My Wallet, a web application for financial control
</p>

<br>

## 🏛️ Front-end repository

<p align="center"><a href="https://github.com/rabbithay/my-wallet" target='_blank'>My Wallet APP</a></p>

<br>

## 🛰️ Deployment

<p align="center"><a href="https://github.com/rabbithay/my-wallet" target='_blank'>My Wallet</a></p>

<br>

## 🚂 How to run

### Pre-requisites: <a style='color:inherit' href="https://git-scm.com">Git</a> and <a style='color:inherit' href="https://nodejs.org/en/">Node.js</a>

<br>

```bash
# Clone this repository
$ git clone <https://github.com/rabbithay/my-wallet-api>

# Access the project folder cmd/terminal
$ cd my-wallet-api

# Install the dependencies
$ npm install

# Create a file of environment variables at the root of the project
$ touch .env

# Set the database port and link as environment variable according to the ".env.example" file

# Run the app
$ npm start

# The server will automatically start

# Run the tests
$ npm test
```

<br>

## 📜 Documentation

### `POST /register`

#### Request

    body: {
        "name": "Marina",
        "email": "marinasena@gmail.com",
        "password": "De1primeira!",
        "repeatPassword": "De1primeira!"
    }

#### Response

    in case of invalid params: status 422

    in case of repeated e-mail: status 409

    in case of success: status 201


### `POST /login`

#### Request

    body: {
        email: marinasena@gmail.com,
        password: De1primeira!
    }

#### Response

    in case of invalid params: status 422

    in case of incorrect e-mail and/or password: 401

    in case of success: status 200

        data: {
            "id": 1,
            "name": "Marina",
            "email": "marinasena@gmail.com",
            "token": "ad52a74s3f54a32d",
        }


### `POST /logout`

#### Request

    headers: {
      Authorization: Bearer token
    }

    body: {}

#### Response

    in case of success: status 200


### `GET /home`

#### Request

    headers: {
      Authorization: Bearer token,
    }

#### Response

    in case of empty token: status 405

    in case of unauthorized session: 401

    in case of success: status 200
        body: {
            id: 1,
            value: 5000 //in cents
            description: "pizza"
            date: 2021-11-26,
            type: "expense",            
            userId: 1
        }


### `POST /income or /expense`

#### Request

    headers: {
      Authorization: Bearer token,
    }

    body: {
        value: 500000, //in cents
        description: "salario",
        type: "income", //only allows "income" or "expense"
        userId: 1,
    }

#### Response

    in case of invalid url: status 404 //only allows "income" or "expense"

    in case of empty token: status 405

    in case of unauthorized session: 401

    in case of invalid body: status 422

    in case of success: status 201


<br>

## 🧮 Tech Stack


<p align="center">
    <img alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img alt="postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img alt="jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
<img alt="expressjs" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img alt="heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
<img alt="eslinter" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>

</p>

<br>

---

<br>

<p align='center'>
  <img src="https://avatars.githubusercontent.com/u/80849707?v=4" width="100px;" style="border-radius: 50%;"/>
  <br><br>
  Made by Thay <br><br>
  <a href="https://www.linkedin.com/in/thayan%C3%A1-coelho/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://github.com/rabbithay"><img src="https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

<br><br>

