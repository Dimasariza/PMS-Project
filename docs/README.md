# API Docs

## Beware
Always put `'Content-Type': 'application/json'` in the header
```js
const credentials = {
    username: "superadmin",
    password: "user1234"
}

const do = async() => {
    const f = await fetch("http://localhost:9000/api/v1/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Dont forget, or else you will get 422 errors
        body: JSON.stringify(credentials)
    })

    const data = await f.json()

    console.log(data);
}

do()
```

## Authentication
Route for Authentication (Login and Logout)

### Login

Login Happy Path

Request
```json
{
    "username": "superadmin",
    "password": "user1234"
}
```

Response
```json
{
    "statusCode": 200,
    "message": "Authenticated",
    "data": {
        "id": 16,
        "username": "superadmin",
        "fullname": "LeBron Juara NBA 2K23",
        "email": "admin@gmail.com",
        "workPlace": "office",
        "status": true,
        "document": "some_document.pdf",
        "createdAt": "2023-04-19 13:16:33",
        "updatedAt": "2023-04-19 13:16:33",
        "department": {
            "id": 5,
            "name": "Christina Bednar",
            "code": "FJ",
            "workPlace": "483 Gay Ramp\nEast Lewisbury, ID 58497-0843"
        },
        "title": {
            "id": 4,
            "name": "Admin",
            "access": {
                "stock": true,
                "users": true,
                "jobList": true,
                "shipList": true,
                "dataSheet": true,
                "department": true,
                "shipDetails": true
            },
            "createdAt": "2023-04-19 13:16:31"
        },
        "token": "8|ljEZbRymxcgYsi6vDYt7m1SRHdXwFfFkQ0dsBwgr"
    }
}
```
<br>

Login With Empty Credentials

Request
```json
{}
```

Response
```json
{
    "statusCode": 422,
    "message": "Bad input",
    "errors": {
        "username": "The username field is required.",
        "password": "The password field is required."
    }
}
```
<br>

Login Without Username

Request
```json
{
    "password": "user1234"
}
```

Response
```json
{
    "statusCode": 422,
    "message": "Bad input",
    "errors": {
        "username": "The username field is required."
    }
}
```
<br>

Login Without Password

Request
```json
{
    "username": "superadmin"
}
```

Response
```json
{
    "statusCode": 422,
    "message": "Bad input",
    "errors": {
        "password": "The password field is required."
    }
}
```
<br>

Login With Wrong Credentials

Request
```json
{
    "username": "superadmin",
    "password": "user1234510284y9813tr"
}
```

Response
```json
{
    "statusCode": 400,
    "message": "Bad credentials"
}
```

### Logout

Logout Happy Path

Request Headers

| Key            | Value                                             |
| -------------  | ------------------------------------------------- |
| Authorization  | Bearer 8|ljEZbRymxcgYsi6vDYt7m1SRHdXwFfFkQ0dsBwgr |


Response
```json
{
    "statusCode": 200,
    "message": "Logout success"
}
```
<br>

Logout With Same Token

Request Headers

| Key            | Value                                             |
| -------------  | ------------------------------------------------- |
| Authorization  | "Bearer 8\|ljEZbRymxcgYsi6vDYt7m1SRHdXwFfFkQ0dsBwgr" |


Response
```json
{
    "statusCode": 400,
    "message": "Invalid credentials"
}
```
<br>

Logout With Empty Token

Request Headers

| Key            | Value                                             |
| -------------  | ------------------------------------------------- |
| Bearer  |  |

Response

```json
{
    "statusCode": 400,
    "message": "Bad credentials"
}
```
<br>

Logout With Unknown Token

Request Headers

| Key            | Value                                             |
| -------------  | ------------------------------------------------- |
| Authorization  | Bearer 128378292879481265932894739285793285792359 |

Response

```json
{
    "statusCode": 400,
    "message": "Invalid credentials"
}
```