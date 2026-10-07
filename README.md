# 👨‍💼 Employee Management Portal

> **A Full-Stack Employee Management Web Application built using React.js, Spring Boot, and MySQL.**

---

## 🌟 About the Project

**Employee Management Portal** is a full-stack web application developed to manage employee information in an organized and efficient way.

The application provides a user-friendly interface to **Add, View, Update, and Delete** employee details.

Employee information is stored in a **MySQL database**, while the **Spring Boot backend** handles business logic and REST APIs. The React.js frontend communicates with the backend through REST APIs.

---

## ✨ Features

* ➕ Add new employee details
* 👀 View employee information
* ✏️ Update existing employee details
* 🗑️ Delete employee records
* 💾 Store employee data in MySQL
* 🔄 Perform CRUD operations using REST APIs
* 🔗 Frontend–Backend API integration
* 🖥️ User-friendly web interface
* ⚙️ Run backend using Spring Boot embedded server

---

# 🛠️ Technologies Used

## 🎨 Frontend

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| ⚛️ React.js   | User Interface            |
| 🟨 JavaScript | Frontend Logic            |
| 🌐 HTML       | Page Structure            |
| 🎨 CSS        | Styling                   |
| ⚡ Vite        | Frontend Development Tool |

## ☕ Backend

| Technology          | Purpose                        |
| ------------------- | ------------------------------ |
| ☕ Java              | Programming Language           |
| 🌱 Spring Boot      | Backend Framework              |
| 🌐 Spring MVC       | Web Layer                      |
| 🗃️ Spring Data JPA | Database Operations            |
| 🔗 REST APIs        | Frontend–Backend Communication |

## 🗄️ Database

**MySQL** — Used to store and manage employee information.

## 🔧 Tools

* Eclipse IDE
* Visual Studio Code
* Postman
* Git
* GitHub

---

# 🏗️ Application Architecture

The application follows a **layered architecture** to manage employee data.

### 🎨 Frontend

The React.js frontend provides the user interface and sends requests to the backend using REST APIs.

### 📦 Entity

The Entity represents employee information and maps the Java object to the corresponding database table.

### 🗃️ Repository

The Repository communicates with the MySQL database using Spring Data JPA and performs database operations.

### ⚙️ Service

The Service layer handles the business logic between the Controller and Repository layers.

### 🌐 Controller

The Controller handles client requests, maps REST API endpoints, and returns the required responses.

---

# 🔄 CRUD Operations

| Operation     | Description                          |
| ------------- | ------------------------------------ |
| 🟢 **Create** | Add a new employee                   |
| 🔵 **Read**   | View employee details                |
| 🟡 **Update** | Modify existing employee information |
| 🔴 **Delete** | Remove employee records              |

---

# 🔗 Application Flow

```text
┌──────────────────────┐
│   React.js Frontend  │
└──────────┬───────────┘
           │
           │ REST APIs
           ↓
┌──────────────────────┐
│ Spring Boot          │
│ Controller           │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Service Layer        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Repository Layer     │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│    MySQL Database    │
└──────────────────────┘
```

---

# 🗄️ Database

The application uses **MySQL** to store employee information.

Database connection details are configured in the:

```text
application.properties
```

**Spring Data JPA** is used to perform database operations between the Spring Boot application and MySQL.

---

# 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pravallikaaa22/employee-management-portal.git
```

### 2️⃣ Configure MySQL

Create/configure your MySQL database and update the database details in:

```text
application.properties
```

### 3️⃣ Start MySQL

Make sure your MySQL server is running.

### 4️⃣ Run the Backend

Open the Spring Boot project in **Eclipse** and run the main Spring Boot application.

### 5️⃣ Start the Frontend

Navigate to the frontend directory:

```bash
cd employee-frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

### 6️⃣ Open the Application

Open the URL provided by Vite in your browser.

---

# 📁 Project Structure

```text
employee-management-portal/
│
├── 📂 springbootworkspace/
│   ├── 📂 src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │
│   └── pom.xml
│
├── 📂 employee-frontend/
│   ├── 📂 src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🎯 Project Objective

The main objective of this project is to gain practical experience in:

* ☕ Java
* 🌱 Spring Boot
* 🔗 REST APIs
* ⚛️ React.js
* 🗄️ MySQL
* 🗃️ Spring Data JPA
* 🔄 CRUD Operations
* 🔌 Frontend–Backend Integration

This project demonstrates how a **React.js frontend**, **Spring Boot backend**, and **MySQL database** work together to build a complete web application.

---

# 👩‍💻 Author

### **Pravallika**

🔗 **GitHub:** [@Pravallikaaa22](https://github.com/Pravallikaaa22)

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub!
