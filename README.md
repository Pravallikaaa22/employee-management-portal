#Employee Management Portal

About the Project

Employee Management Portal is a full-stack web application developed to manage employee information in an organized and efficient way.

The application provides a user-friendly interface to add, view, update, and delete employee details. The employee information is stored in a MySQL database, while the Spring Boot backend handles the application logic and REST APIs. The frontend communicates with the backend through these REST APIs.

Features

- Add new employee details
- View employee information
- Update existing employee details
- Delete employee records
- Store employee data in MySQL
- Perform CRUD operations through REST APIs
- Connect frontend with backend APIs
- Manage employee data through a web interface
- Run the backend using the Spring Boot embedded server

Technologies Used

Frontend

- React.js
- JavaScript
- HTML
- CSS
- Vite

Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- REST APIs

Database

- MySQL

Tools

- Eclipse IDE
- VS Code
- Postman
- Git & GitHub

How the Application Works

The application follows a layered architecture for handling employee data.

Frontend
The React.js frontend provides the user interface and communicates with the backend using REST API requests.

Entity
Represents employee information and maps the Java object to the corresponding database table.

Repository
Communicates with the MySQL database using Spring Data JPA and performs database operations.

Service
Handles the business logic between the controller and repository layers.

Controller
Handles client requests, maps REST API endpoints, and returns the required responses.

CRUD Operations

- Create – Add a new employee
- Read – View employee details
- Update – Modify existing employee information
- Delete – Remove employee records

Application Flow

React.js Frontend
        ↓
     REST APIs
        ↓
Spring Boot Controller
        ↓
   Service Layer
        ↓
 Repository Layer
        ↓
   MySQL Database

Database

MySQL is used to store employee information.

The database connection details are configured in the "application.properties" file. Spring Data JPA is used to perform database operations between the Spring Boot application and MySQL.

How to Run

1. Clone or open the project in Eclipse and VS Code.
2. Configure the MySQL database.
3. Update the database details in "application.properties".
4. Start the MySQL server.
5. Run the Spring Boot backend application.
6. Navigate to the frontend project.
7. Install the required dependencies using "npm install".
8. Start the frontend using "npm run dev".
9. Open the application using the URL provided by Vite.

Project Objective

The main objective of this project is to gain practical experience in Java, Spring Boot, REST APIs, React.js, MySQL database connectivity, Spring Data JPA, CRUD operations, and frontend-backend integration.

Author

Pravallika
GitHub: @Pravallikaaa22
