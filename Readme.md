# Node.js MySQL Authentication and Authorization System - Microservice Architecture

This project is a Auth System built using Node.js and MySQL, following a microservice architecture. It consists of multiple microservices such as authentication, API gateway.

## Microservices

1. Authentication Service

   - Responsible for user authentication and authorization.
   - Manages user accounts, login, and registration.
   - Generates and verifies JSON Web Tokens (JWT) for secure API access.

2. API Gateway

   - Serves as the entry point for external requests to the system.
   - Provides a unified API interface for clients to communicate with various microservices.
   - Performs request validation, rate limiting, and routing to the appropriate microservice.

# Welcome to Auth Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=<Any specified port>`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```{"development": {
    "username": "root",
    "password": "<Any password>",
    "database": "Auth_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequalize db:create`

- Then execute `npx sequelize db:migrate`

## API Endpoints

- **SignUP**

  ```
  POST /authservice/signup
  IN REQUESTBODY EMAIL: email , PASSWORD: password
  ```

  Perform signup

  Response:

  ```json
  [
    "data": {
        "id": 18,
        "email": "l@gmail.com",
        "password": "$2b$10$e6JjTKhvIjQKHtnsl.v1t.e7mPr9uoeGFmvZsIMEeC1XK6cTDIAWy",
        "updatedAt": "2024-12-10T13:02:41.011Z",
        "createdAt": "2024-12-10T13:02:41.011Z"
    },
  ]
  ```

- **Delete user by Email**

  ```
  DELETE /delete
  IN REQBODY EMAIL: email
  ```

  DELETE a user by email.

  Response:

  ```json
  {
    "message": "Successfully delete User",
    "success": true,
    "data": 1,
    "err": {}
  }
  ```

- **Signin User**

  ```
  POST /authservice/signin
  ```

  Sigin User by Email and Password.

 

  Response:

  ```json
  {
    "message": "Failed to Signup",
    "success": false,
    "data": {},
    "err": "Email is not present"
}
  ```

## Database

The Auth Service interacts with the MySQL database to store User information. The necessary database tables and their structure can be found in the `database` folder.

Ensure that you have set up the database connection details correctly in the configuration file of the Auth Service.


## Setup and Configuration

To set up and run the Auth Service, follow these steps:

1. Install Node.js and MySQL if they are not already installed.

2. Clone the repository:

   ```
   git clone https://github.com/your-username/AuthService.git
   ```

3. Install the dependencies:

   ```
   cd authService
   npm install
   ```

4. Set up the MySQL database by creating the required tables. Refer to the SQL scripts in the `database` folder for table creation.

5. Configure the database connection details in the configuration file (`config.js`) of the Auth  Service.


7. Start the Auth Service:

   ```
   npm start
   ```



## Contributing

Contributions to the Auth Service are welcome. If you find any issues or want to add new features, please open an issue or submit a pull request. Ensure that your code follows the established coding style and is well-documented.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to acknowledge the following resources and libraries that contributed to the development of the Auth Service:

- Node.js: https://nodejs.org/
- MySQL: https://www.mysql.com/
- Other dependencies mentioned in the `package.json` file.
