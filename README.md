# User, Product, and Invoice Management Application

## Overview

This project is a web application designed for managing users, products, and invoices. It follows best coding practices, including SOLID principles, design patterns, and Clean Code methodologies.

## Technologies Used

- **Backend:** Node.js (RESTful API)
- **Frontend:** React
- **Database:** MongoDB
- **Deployment:** Cloud service Vercel

## Features

### Entity Management (CRUD Operations)

#### Users

- Fields: `id`, `name`, `email`, `password`, `role (admin/user)`
- **Admin:** Can create, update, and delete users.
- **User:** Can update their own profile.

#### Products

- Fields: `id`, `name`, `description`, `price`, `stock`, `status (active/inactive)`
- **Admin:** Can create and update products, including stock.
- **Users:** Can only view product details.
- **Validation:** Purchases cannot proceed if stock is insufficient.

#### Invoices

- Fields: `id`, `user_id`, `products (list of purchased products and quantities)`, `total`, `date`
- **Users:** Can generate invoices when making purchases.
- **Admin:** Can retrieve invoice details by ID.

### Endpoints and Business Logic

- **Users:** Registration and authentication (JWT) with role-based access.
- **Products:**
  - Only admins can add new products.
  - Stock updates must not result in negative values.
- **Invoices:**
  - Only users can generate invoices.
  - Stock availability must be verified before processing a purchase.
- **Analytics:** Endpoint to check the number of purchases a user made in the last month.

### Security and Access Control

- **Authentication:** JSON Web Token (JWT) for user validation.
- **Authorization:** Role-based access control.
- **Restrictions:** Only users can make purchases, while admins manage users and products.

## Setup and Installation

### Prerequisites

- Node.js & npm installed
- MongoDB database setup
- React - vite
