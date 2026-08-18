# 🛒 Zosh Bazaar

> **A full-stack multi-role e-commerce platform built with React, TypeScript, Spring Boot, MySQL, and JWT-based authentication.**

Zosh Bazaar is a modern e-commerce application designed around the workflows of large-scale platforms such as **Amazon and Flipkart**.

The platform provides dedicated experiences for **Customers, Sellers, and Administrators**, covering the complete shopping lifecycle — from product discovery and cart management to checkout, payment, order placement, and seller-side product management.

The project focuses on building a realistic full-stack application with **role-based access control, secure authentication, centralized API communication, global state management, responsive UI, and independent frontend/backend deployment**.

---

## 🌐 Live Application

### 🛍️ Frontend

[Zosh Bazaar — Live Application](https://zosh-bazaar-frontend.vercel.app?utm_source=chatgpt.com)

### ⚙️ Backend API

[Zosh Bazaar — Backend API](https://zosh-bazaar-backend.onrender.com?utm_source=chatgpt.com)

> **Note:** The backend is deployed on Render. When the service has been inactive, the first request may take a few seconds while the server starts. The frontend includes a dedicated **"Waking up Zosh Bazaar..."** loading experience to provide clear feedback instead of showing a blank screen.

---

# ✨ Features

Zosh Bazaar is divided into three primary user experiences:

```text
                         ZOSH BAZAAR
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
          CUSTOMER         SELLER           ADMIN
              │               │               │
              ▼               ▼               ▼
          Shopping        Store Mgmt      Platform Mgmt
```

---

# 👤 Customer Experience

The customer application provides the complete shopping experience.

## 🔐 Authentication

* Customer registration
* Customer login
* JWT-based authentication
* Persistent authentication
* Protected customer routes
* Authenticated API requests
* Customer profile management
* Role-based access control

### Authentication Flow

```text
Customer
   │
   ▼
Login / Registration
   │
   ▼
Spring Boot Authentication API
   │
   ▼
Credentials Validation
   │
   ▼
JWT Token
   │
   ▼
Frontend
   │
   ▼
Authenticated Requests
```

---

# 🏠 Homepage

The homepage is designed around a modern e-commerce experience inspired by platforms such as Amazon and Flipkart.

### Includes

* Responsive navigation
* Product categories
* Featured products
* Product discovery sections
* Product cards
* Responsive layouts
* Customer-focused navigation
* Mobile-friendly UI

---

# 🛍️ Product Discovery

Customers can browse and explore products through the application.

### Product Features

* Product listing
* Product categories
* Product details
* Product images
* Product pricing
* Product information
* Product availability
* Product-focused navigation

---

# 🛒 Shopping Cart

Zosh Bazaar provides a complete shopping-cart workflow.

### Cart Operations

* Add product to cart
* Remove product from cart
* Update product quantity
* View cart items
* Calculate cart totals
* Manage multiple products
* Continue shopping
* Proceed to checkout

### Cart Flow

```text
Product
   │
   ▼
Add to Cart
   │
   ▼
Shopping Cart
   │
   ├── Update Quantity
   ├── Remove Item
   └── Continue Shopping
   │
   ▼
Checkout
```

---

# 💳 Checkout & Payment

The application supports a complete checkout and payment workflow rather than ending at the cart.

```text
Cart
 │
 ▼
Checkout
 │
 ▼
Order Details
 │
 ▼
Payment
 │
 ▼
Payment Confirmation
 │
 ▼
Order Created
 │
 ▼
Order History
```

The payment workflow is integrated into the application's purchase flow so customers can proceed from cart to completed order.

---

# 📦 Orders

Customers can manage their purchases through the order workflow.

### Order Features

* Place orders
* View order information
* View order history
* Access purchased products
* Review order details
* Track order-related information

---

# 👤 Customer Profile

Customers can manage their account through authenticated profile functionality.

### Includes

* Profile information
* Authenticated access
* Account-related information
* Persistent login state

---

# 🏪 Seller Platform

Zosh Bazaar includes a dedicated seller ecosystem for merchants managing their products and store operations.

---

## 📝 Seller Registration

Sellers can initiate the seller onboarding process through the dedicated seller workflow.

### Seller Features

* Seller registration
* Seller account creation
* Seller verification
* Seller authentication
* Seller profile
* Seller dashboard

---

# 📊 Seller Dashboard

Authenticated sellers receive access to a dedicated dashboard.

```text
                 SELLER
                    │
                    ▼
             Seller Dashboard
                    │
        ┌───────────┼───────────┐
        │           │           │
        ▼           ▼           ▼
    Products     Inventory    Orders
```

### Seller Capabilities

* Access seller dashboard
* Manage seller profile
* Manage products
* Add products
* Update product information
* Manage inventory
* View seller-related order information

---

# 📦 Seller Product Management

Sellers can manage the products associated with their store.

### Product Management

* Add products
* Update products
* Product information management
* Product image management
* Product pricing
* Product inventory
* Product availability

---

# 🛡️ Admin Platform

Zosh Bazaar also provides a dedicated administrative area for platform-level management.

---

## 🔑 Admin Authentication

Administrators have a separate authentication flow.

### Admin Features

* Admin login
* Protected admin routes
* Role-based authorization
* Dedicated admin dashboard
* Platform-level access

---

# 📊 Admin Dashboard

The admin dashboard provides a separate interface from the customer and seller applications.

```text
                    ADMIN
                      │
                      ▼
               Admin Dashboard
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
      Customers     Sellers     Platform
```

The admin area is protected using authentication and role-based access control.

> Features displayed in the admin dashboard depend on the currently implemented backend and frontend modules.

---

# 🔐 Role-Based Access Control

The application separates access based on user roles.

```text
ROLE_CUSTOMER
      │
      └── Customer Application

ROLE_SELLER
      │
      └── Seller Dashboard

ROLE_ADMIN
      │
      └── Admin Dashboard
```

This ensures that application areas are not exposed equally to every authenticated user.

For example:

```text
Customer
   ✕ → Seller Dashboard
   ✕ → Admin Dashboard

Seller
   ✓ → Seller Dashboard
   ✕ → Admin Dashboard

Admin
   ✓ → Admin Dashboard
```

---

# 🏗️ System Architecture

Zosh Bazaar follows a separated frontend/backend architecture.

```text
                         USER
                           │
                           ▼
                 ┌──────────────────┐
                 │  React Frontend  │
                 │     Vercel       │
                 └────────┬─────────┘
                          │
                     HTTP / REST
                          │
                          ▼
                 ┌──────────────────┐
                 │  Spring Boot API │
                 │     Render       │
                 └────────┬─────────┘
                          │
                ┌─────────┴─────────┐
                │                   │
                ▼                   ▼
       ┌────────────────┐   ┌────────────────┐
       │ Spring Security│   │     MySQL      │
       │      + JWT     │   │    Database    │
       └────────────────┘   └────────────────┘
```

---

# 🧩 Technology Stack

## Frontend

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| React.js      | User interface          |
| TypeScript    | Type-safe development   |
| React Router  | Client-side routing     |
| Redux Toolkit | Global state management |
| Material UI   | UI components           |
| Emotion       | Styling and theming     |
| Axios         | REST API communication  |
| Vercel        | Deployment              |

---

## Backend

| Technology      | Purpose                        |
| --------------- | ------------------------------ |
| Java            | Backend development            |
| Spring Boot     | REST API                       |
| Spring Security | Authentication & authorization |
| JWT             | Stateless authentication       |
| Spring Data JPA | Database access                |
| Hibernate       | ORM                            |
| Maven           | Dependency management          |
| MySQL           | Relational database            |
| Render          | Backend deployment             |

---

# 🔄 Frontend State Management

Redux Toolkit is used to manage shared application state.

The application separates state according to business domains.

```text
Redux Toolkit
│
├── Customer
│   ├── User
│   └── Customer Data
│
├── Seller
│   └── Seller Profile
│
├── Authentication
│
└── Application Data
```

Asynchronous operations are handled through Redux-based async actions.

This keeps API operations and global application state separate from individual UI components.

---

# 🌐 API Architecture

The frontend communicates with the backend through REST APIs.

The application uses a centralized Axios configuration.

```text
React Component
      │
      ▼
Redux / Async Action
      │
      ▼
Axios API Client
      │
      ▼
Spring Boot REST API
      │
      ▼
Service / Business Logic
      │
      ▼
Repository
      │
      ▼
MySQL
```

The centralized API configuration keeps the backend base URL in one location rather than scattering URLs across components.

---

# 🔒 Authentication & Security

The application uses JWT-based authentication.

### Authentication Lifecycle

```text
                 Login
                   │
                   ▼
          Credential Validation
                   │
                   ▼
             JWT Generated
                   │
                   ▼
          Frontend Stores Token
                   │
                   ▼
       Authenticated API Request
                   │
                   ▼
        Spring Security Filter
                   │
                   ▼
             JWT Validation
                   │
                   ▼
            Authorized API
```

### Security Concepts Used

* JWT authentication
* Protected routes
* Role-based authorization
* Authenticated API requests
* Stateless authentication
* Server-side authorization
* Environment-based configuration

---

# ⚡ Render Cold-Start Experience

The backend is deployed on Render.

When an inactive backend instance receives a request, the service may require some time to start.

A normal implementation might leave users looking at an empty page or an unexplained spinner.

Zosh Bazaar handles this explicitly.

### Initial Startup Flow

```text
User Opens Website
        │
        ▼
Frontend Loads
        │
        ▼
Backend Wake-Up Request
        │
        ▼
┌──────────────────────────────┐
│  Waking up Zosh Bazaar...    │
│                              │
│  This may take a few seconds │
│  on the first visit.         │
└──────────────────────────────┘
        │
        ▼
Backend Responds
        │
        ▼
Loading Screen Removed
        │
        ▼
Application Available
```

This provides a better user experience during backend cold starts.

---

# 📱 Responsive UI

The application is designed for multiple screen sizes.

### Supported Experiences

* Desktop
* Laptop
* Tablet
* Mobile

The UI includes responsive layouts for:

* Navigation
* Product grids
* Product cards
* Shopping cart
* Checkout
* Dashboards
* Forms

---

# 📂 Project Structure

```text
src/
│
├── admin/
│   ├── pages/
│   │   ├── Auth/
│   │   └── Dashboard/
│   │
│   └── components/
│
├── customer/
│   ├── components/
│   │   ├── Navbar/
│   │   └── Footer/
│   │
│   └── pages/
│       ├── Home/
│       ├── Products/
│       └── BecomeSeller/
│
├── seller/
│   ├── pages/
│   │   ├── SellerDashboard/
│   │   ├── SellerAccountVerification/
│   │   └── SellerAccountVerified/
│   │
│   └── components/
│
├── Redux Toolkit/
│   ├── Customer/
│   │   ├── UserSlice/
│   │   └── Customer/
│   │
│   ├── Seller/
│   │
│   └── Store/
│
├── routes/
│   └── CustomerRoutes/
│
├── Config/
│   └── Api.ts
│
├── Theme/
│   └── customeTheme/
│
├── data/
│
├── App.tsx
│
└── App.css
```

---

# 🛍️ Complete Customer Journey

The application supports a complete e-commerce journey:

```text
┌─────────────┐
│    Visit    │
│   Website   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Browse    │
│  Products   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Product   │
│    Detail   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Add To Cart │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Cart     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Checkout  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Payment   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Order    │
│ Confirmation │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Order    │
│   History   │
└─────────────┘
```

---

# 🏪 Complete Seller Journey

```text
Seller
  │
  ▼
Seller Registration
  │
  ▼
Seller Verification
  │
  ▼
Seller Authentication
  │
  ▼
Seller Dashboard
  │
  ├──────────────┐
  │              │
  ▼              ▼
Products       Orders
  │
  ├── Add
  ├── Update
  └── Manage
```

---

# 🛡️ Admin Journey

```text
Admin
  │
  ▼
Admin Login
  │
  ▼
Authentication
  │
  ▼
Role Validation
  │
  ▼
Admin Dashboard
  │
  ▼
Platform Management
```

---

# 🚀 Deployment Architecture

## Frontend Deployment

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
React + TypeScript
Application
```

## Backend Deployment

```text
GitHub
   │
   ▼
Render
   │
   ▼
Spring Boot
Application
```

## Database

```text
Spring Boot
     │
     ▼
Spring Data JPA
     │
     ▼
Hibernate
     │
     ▼
MySQL
```

---

# ⚙️ Local Development

## Prerequisites

Install:

* Java 17+
* Node.js
* npm
* Maven
* MySQL
* Git

---

# 📥 Clone Repository

```bash
git clone <YOUR_REPOSITORY_URL>

cd zosh-bazaar
```

---

# 🎨 Frontend Setup

Navigate to the frontend project:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The frontend will typically run on:

```text
http://localhost:3000
```

---

# ☕ Backend Setup

Navigate to the Spring Boot project:

```bash
cd backend
```

Configure the required database and environment variables.

Run the application using Maven:

### Linux / macOS

```bash
./mvnw spring-boot:run
```

### Windows

```bash
mvnw.cmd spring-boot:run
```

---

# 🗄️ Database Configuration

Configure MySQL using environment-specific properties.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/zosh_bazaar
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

Never commit real database credentials or API secrets to GitHub.

---

# 🔑 Environment Variables

Production credentials should be managed through environment variables.

Typical configuration can include:

```text
DB_USERNAME
DB_PASSWORD
JWT_SECRET
PAYMENT_SECRET
API_URL
```

The exact variables depend on the enabled backend integrations.

---

# 🧪 Testing Checklist

## Customer

* [ ] Register
* [ ] Login
* [ ] Browse products
* [ ] Open product details
* [ ] Add product to cart
* [ ] Update quantity
* [ ] Remove product
* [ ] Checkout
* [ ] Complete payment
* [ ] Place order
* [ ] View order history
* [ ] View profile

## Seller

* [ ] Register seller account
* [ ] Verify seller account
* [ ] Login
* [ ] Open seller dashboard
* [ ] Add products
* [ ] Update products
* [ ] Manage inventory
* [ ] View seller-related orders

## Admin

* [ ] Admin login
* [ ] Access protected dashboard
* [ ] Verify role-based access
* [ ] Test unauthorized access

## Security

* [ ] Invalid JWT
* [ ] Expired JWT
* [ ] Unauthorized API request
* [ ] Customer accessing seller route
* [ ] Customer accessing admin route
* [ ] Seller accessing admin route

---

# 📈 Performance & Scalability Considerations

The current architecture provides a foundation for future performance improvements.

Potential production-level improvements include:

* Redis caching
* Database indexing
* API pagination
* Query optimization
* Connection pooling
* CDN-based image delivery
* Lazy loading
* Product search optimization
* Background processing
* Rate limiting
* Distributed caching
* Structured logging
* Monitoring and observability

---

# 🔮 Future Improvements

Planned or potential enhancements include:

### Customer

* Product search
* Advanced filters
* Sorting
* Wishlist
* Product reviews
* Ratings
* Coupons
* Personalized recommendations
* Order tracking
* Email notifications

### Seller

* Advanced inventory management
* Sales analytics
* Revenue dashboard
* Seller notifications
* Bulk product upload
* Seller performance analytics

### Admin

* Advanced platform analytics
* Seller approval management
* Customer management
* Product moderation
* Order management
* Revenue analytics
* Platform-wide reporting

### Infrastructure

* Docker
* CI/CD
* Redis
* Elasticsearch
* Automated testing
* API documentation
* Centralized logging
* Monitoring
* Cloud storage/CDN

---

# 🧠 Engineering Learnings

Building Zosh Bazaar provided practical experience across the complete full-stack development lifecycle.

### Frontend Engineering

* React architecture
* TypeScript
* Redux Toolkit
* Client-side routing
* Responsive UI
* Component-based development
* Axios API integration
* Role-based frontend routing

### Backend Engineering

* Java
* Spring Boot
* REST APIs
* Spring Security
* JWT authentication
* JPA/Hibernate
* MySQL
* Role-based authorization
* Business-layer architecture

### Full-Stack Engineering

* Frontend/backend separation
* API contract integration
* Authentication flow
* E-commerce workflows
* Cart management
* Checkout flow
* Payment integration
* Order lifecycle
* Multi-role architecture

### Deployment

* GitHub-based workflow
* Vercel deployment
* Render deployment
* Production configuration
* Environment variables
* Handling backend cold starts

---

# 📌 Engineering Highlights

## Multi-Role Architecture

The application is structured around three distinct actors:

```text
Customer
Seller
Admin
```

Each role has its own routes, UI, authentication requirements, and application responsibilities.

---

## Centralized API Configuration

Frontend API communication is centralized through Axios, making backend configuration easier to maintain and change between development and production environments.

---

## Protected Application Areas

Customer, seller, and admin areas are protected according to authentication and authorization state.

---

## Global State Management

Redux Toolkit provides centralized management for shared application state and asynchronous operations.

---

## Production-Oriented UX

The frontend explicitly handles Render backend startup latency through a dedicated loading experience.

---

# 📊 Application Modules

| Module             | Customer | Seller |   Admin  |
| ------------------ | :------: | :----: | :------: |
| Authentication     |     ✅    |    ✅   |     ✅    |
| Profile            |     ✅    |    ✅   |     —    |
| Product Browsing   |     ✅    |    —   |     —    |
| Product Management |     —    |    ✅   |     —    |
| Shopping Cart      |     ✅    |    —   |     —    |
| Checkout           |     ✅    |    —   |     —    |
| Payment            |     ✅    |    —   |     —    |
| Orders             |     ✅    |    ✅   | Platform |
| Dashboard          |     —    |    ✅   |     ✅    |
| Role-Based Access  |     ✅    |    ✅   |     ✅    |

---

# 🔗 Project Links

### Live Website

[Zosh Bazaar Frontend](https://zosh-bazaar-frontend.vercel.app?utm_source=chatgpt.com)

### Backend

[Zosh Bazaar Backend](https://zosh-bazaar-backend.onrender.com?utm_source=chatgpt.com)

### GitHub

[GitHub — Vishal Singh](https://github.com/VISHAL55UIET?utm_source=chatgpt.com)

### LinkedIn

[LinkedIn — Vishal Singh](https://www.linkedin.com/in/vishal-singh-5b052828a/?utm_source=chatgpt.com)

---

# 👨‍💻 Developer

## Vishal Singh

**B.Tech — Computer Science & Engineering**

Interested in building scalable backend systems and full-stack applications using:

* Java
* Spring Boot
* Spring Security
* REST APIs
* MySQL
* React
* Data Structures & Algorithms

---

# ⭐ If You Like This Project

If you find **Zosh Bazaar** useful or interesting, consider giving the repository a ⭐.

Feedback, suggestions, and improvements are always welcome.

---

# 📜 License

This project is intended for **educational, portfolio, and demonstration purposes**.
