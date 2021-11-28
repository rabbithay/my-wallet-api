# GratiBox

## Documentation

<br/>

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

<br>

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

<br>

### `POST /logout`

#### Request

    headers: {
      Authorization: Bearer token
    }

    body: {}

#### Response

    in case of success: status 200

<br>

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

<br>

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
