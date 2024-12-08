# Library Management System API

This project is a RESTful API developed for the **Ragam'25 Tech Inductions**. It manages books and users in a library system, with optional JWT-based authentication for securing sensitive operations. The API enables CRUD operations for books and user management, making it a versatile backend application.

---

## Objective

To implement a library management system with the following core functionalities:
- Managing books (add, view, update, delete).
- Managing users (register, login, and user CRUD operations).

---

## Features

### **1. Books Management**
- Add, view, update, and delete books.
- Book attributes:
  - `id`: Unique identifier for the book.
  - `title`: Book title.
  - `author`: Name of the author.
  - `published_year`: Year of publication.
  - `genre`: Book genre.
  - `available_copies`: Number of copies available.

### **2. Users Management**
- Register, view, and manage users.
- User attributes:
  - `id`: Unique identifier for the user.
  - `name`: Full name.
  - `email`: Email address (unique).
  - `membership_type`: Regular or Premium membership.
  - `registered_date`: Date of registration.

### **3. JWT-based Authentication (Bonus)**
- Secure login with JWT tokens.
- Protect sensitive endpoints such as delete operations.
- Token expiry implemented for added security.

---

## API Endpoints

### **Books Endpoints**
| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| `POST` | `/books`         | Add a new book.             |
| `GET`  | `/books`         | Retrieve all books.         |
| `GET`  | `/books/:id`     | Retrieve a book by ID.      |
| `PUT`  | `/books/:id`     | Update book details.        |
| `DELETE`| `/books/:id`    | Delete a book by ID.        |

### **Users Endpoints**
| Method | Endpoint          | Description                     |
|--------|-------------------|---------------------------------|
| `POST` | `/users/register` | Register a new user.           |
| `POST` | `/users/login`    | Login and get a JWT token.     |

---

## Prerequisites

- Node.js installed on your system.
- MongoDB running locally or accessible remotely.

---

## Getting Started

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd <repository-directory>
```
### **2. Install Dependencies**
Run the following command to install all required packages:

```bash
npm install
```
### **3. Run the Application**
Start the server using the command:

```bash
node server.js
```
### **4. Test the Endpoints**
Use a tool like to test the API endpoints and verify functionality
