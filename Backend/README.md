# Backend API Documentation

## Table of Contents

- [Users Endpoints](#users-endpoints)
  - [/users/register](#usersregister-endpoint)
  - [/users/login](#userslogin-endpoint)
  - [/users/profile](#usersprofile-endpoint)
  - [/users/logout](#userslogout-endpoint)
- [Captains Endpoints](#captains-endpoints)
  - [/captains/register](#captainsregister-endpoint)
  - [/captains/login](#captainslogin-endpoint)
  - [/captains/profile](#captainsprofile-endpoint)
  - [/captains/logout](#captainslogout-endpoint)

---

## Users Endpoints

### /users/register Endpoint

#### Description

Registers a new user by creating a user account with the provided information.

#### HTTP Method

POST

#### Request Body

The request body should be in JSON format and include the following fields:

- **fullname (object):**
  - **firstname (string, required):** User's first name (minimum 3 characters).
  - **lastname (string, optional):** User's last name (minimum 3 characters).
- **email (string, required):** User's email address (must be a valid email).
- **password (string, required):** User's password (minimum 6 characters).

#### Example Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "******",
    "token": "<JWT Token>"
  }
}
```

### /users/login Endpoint

#### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

#### HTTP Method

POST

#### Request Body

The request body should be in JSON format and include the following fields:

- **email (string, required):** User's email address (must be a valid email).
- **password (string, required):** User's password (minimum 6 characters).

#### Example Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "******",
    "token": "<JWT Token>"
  }
}
```

### /users/profile Endpoint

#### Description

Retrieves the profile information of the currently authenticated user.

#### HTTP Method

GET

#### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

#### Example Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### /users/logout Endpoint

#### Description

Logs out the current user and blacklists the token provided in the cookie or headers.

#### HTTP Method

GET

#### Authentication

Requires a valid JWT token in the Authorization header or cookie.

#### Example Response

```json
{
  "message": "Logout successfully."
}
```

---

## Captains Endpoints

### /captains/register Endpoint

#### Description

Registers a new captain by creating a captain account with the provided information.

#### HTTP Method

POST

#### Request Body

The request body should be in JSON format and include the following fields:

- **fullname (object):**
  - **firstname (string, required):** Captain's first name (minimum 3 characters).
  - **lastname (string, optional):** Captain's last name.
- **email (string, required):** Captain's email address (must be a valid email).
- **password (string, required):** Captain's password (minimum 6 characters).
- **vehicle (object):**
  - **color (string, required):** Vehicle color (minimum 3 characters).
  - **plate (string, required):** Vehicle plate number (minimum 3 characters).
  - **capacity (number, required):** Vehicle passenger capacity (minimum 1).
  - **vehicleType (string, required):** Type of vehicle (must be 'car', 'motorcycle', or 'auto').

#### Example Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "******",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "token": "<JWT Token>"
  }
}
```

### /captains/login Endpoint

#### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

#### HTTP Method

POST

#### Request Body

The request body should be in JSON format and include the following fields:

- **email (string, required):** Captain's email address (must be a valid email).
- **password (string, required):** Captain's password (minimum 6 characters).

#### Example Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "******",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "token": "<JWT Token>"
  }
}
```

### /captains/profile Endpoint

#### Description

Retrieves the profile information of the currently authenticated captain.

#### HTTP Method

GET

#### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

#### Example Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### /captains/logout Endpoint

#### Description

Logs out the current captain and blacklists the token provided in the cookie or headers.

#### HTTP Method

GET

#### Authentication

Requires a valid JWT token in the Authorization header or cookie.

#### Example Response

```json
{
  "message": "Logout successfully."
}
```
