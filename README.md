# Authentication System using React, Tailwind CSS, Node.js, Express, PostgreSQL, Redux, and React Router

## Project Description
## Bitnine Coding Challenge - [ETHIOPIA]  QUESTION 5.A

Welcome to the Bitnine Coding Challenge Authentication System project! This project was developed as a part of the Bitnine coding challenge in Ethiopia. The project showcases a comprehensive authentication system built using cutting-edge technologies. The frontend is developed using `React` and styled with `Tailwind CSS`, offering a seamless user experience. The backend is powered by `Node.js` and `Express`, with data stored in a `PostgreSQL` database. `Redux` is employed for state management, while `React Router` ensures smooth navigation within the application.

## Frontend Preview
![Frontend Preview](https://github.com/habib-gm/bitnine-coding-challenge/blob/master/assets/home.PNG)
![Frontend Preview](https://github.com/habib-gm/bitnine-coding-challenge/blob/master/assets/sign%20up.PNG)
![Frontend Preview](https://github.com/habib-gm/bitnine-coding-challenge/blob/master/assets/login%20page.PNG)
![Frontend Preview](https://github.com/habib-gm/bitnine-coding-challenge/blob/master/assets/forget%20psd.PNG)


## Backend Overview

The backend of the project is built using `Node.js` and `Express`, two powerful tools for creating robust server applications. `PostgreSQL` is used as the database to securely store user information. The backend handles user registration and login.

### Backend Setup

To set up the backend of the project, follow these steps:

1. Clone this repository: `git clone https://github.com/habib-gm/bitnine-coding-challenge`
2. Navigate to the backend directory: `cd bitnine-coding-challenge/server`
3. Install dependencies: `npm install`

#### Backend Dependencies

- bcrypt: ^5.1.1
- body-parser: ^1.20.2
- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- express-validator: ^7.0.1
- jsonwebtoken: ^9.0.1
- pg: ^8.11.3

### Frontend Details

The frontend is developed using `React`, a popular JavaScript library for building user interfaces. It's styled using `Tailwind CSS`, a utility-first CSS framework that makes designing responsive and visually appealing interfaces a breeze. `Redux` is integrated into the frontend to efficiently manage application state, ensuring a smooth flow of data across components. `React Router` is employed to manage the application's routes, enabling seamless navigation between different views.

#### Frontend Setup

To set up the frontend of the project, follow these steps:

1. Clone this repository: `git clone https://github.com/habib-gm/bitnine-coding-challenge`
2. Navigate to the frontend directory: `cd bitnine-coding-challenge/client`
3. Install dependencies: `npm install`

#### Frontend Dependencies

- @mdi/js: ^7.2.96
- @mdi/react: ^1.6.1
- @reduxjs/toolkit: ^1.9.5
- axios: ^1.4.0
- prop-types: ^15.8.1
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.1.2
- react-router-dom: ^6.15.0
- react-toastify: ^9.1.3

## How to Run the Projects

Follow these steps to run both the frontend and backend of the Authentication System:

### Backend Setup

1. Navigate to the backend directory: `cd bitnine-coding-challenge/server`
2. Install dependencies: `npm install`
3. Create a PostgreSQL database named `jwtauth`.
4. Run the following SQL commands to create the necessary `users` table:

`sql
CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_first_name VARCHAR(255) NOT NULL,
  user_last_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_phone VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);`

NOTE: DO NOT FORGET TO CREATE `uuid_generate_v4` POSTGRESS EXTENSION BEFORE EXCUTING THE ABOVE CODE!

4. Set up your PostgreSQL database and configure the connection in the `db.js` file in the project. 
5. Run the backend server: `npm start`

### Frontend Setup

1. Navigate to the frontend directory: `bitnine-coding-challenge/client/bitnine-code-challenge`
2. Install dependencies: `npm install`
3. Run the frontend development server: `npm start`
    -> "Using vite is highly recomanded"

Once both the backend and frontend servers are up and running, you can access the application by opening your browser and visiting `http://localhost:{your port here}`.
