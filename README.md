# 🍔 Brrgrr – Premium Burgers & Community Journal

A full-stack ecosystem of a responsive, client-side burger customization application paired with a database-backed community micro-blogging platform.

---

## 🌟 Key Features

### 🍔 1. Pre-Customized Menu & Build Station
* **Handpicked Menu Inventory:** A quick-reference catalog that contains 11 special menu items displayed via dynamic ES6 array map rendering.
* **Interactive Ingredient Builder:** An ingredient customization module for patty assembly that imposes a build restriction allowing a maximum of only 3 ingredients per burger.
* **Instant Billing System:** Real-time billing calculator that provides separate item totals, extra cheese options, applicable CGST and SGST taxes, and text invoice generation.
* **Dynamic Build Status Tracking:** Background loops that fetch order history information every 4 seconds to update the status bar from Pending, Preparing, and Finished.

### 📜 2. Community Blogging Engine
* **CRUD Functionalities:** Enables registered users to create blog entries and search through a list using keywords to index article titles and bodies on the dashboard feed.
* **Purge Guards:** An isolation module that ensures clearance of posts can be done only by the post owner or certified kitchen employees.
* **Data Portability Extractions:** Administrative tool that enables users with valid login permissions to export entire text data entries into downloadable `.xlsx` sheets through SheetJS.

---

## 📐 Blueprint Implementation Achievements

### 🎨 Front-End Implementation
* **Arrays & Functional Programing Techniques:** Widespread use of inbuilt ES6 functionalities such as `.map()`, `.reduce()`, `.filter()`, and `.findIndex()` in state management and price sum aggregations.
* **DOM Manipulations:** DOM manipulation with high fidelity updates involving parsing changes on runtime, grouping of items within a cart, and switching light/dark modes of interface.

### ⚙️ Back-End Implementation and Databases
* **Object-Oriented Programming (OOP):** Strong OOP base classes that help with encapsulation of internal data models through base inheritance of `DataEntity` (mapping User and Post objects).
* **Stateful Sessions:** Uses sessions through tokens for persistent user clearance mappings based on cross-terminal customer/kitchen worker workstations.
* **Database Integrities:** Persistant pool connections and cascading constraints (`ON DELETE CASCADE`) to prevent database references issues.

---

## 📂 Project Folder Hierarchy

```text
├── models/
│   └── BlogModels.js      # Object Oriented Programming Entity Model Classes (User, Post)
├── app.js                 # UI Front-End Code & Cart Arrays and Polling Loops 
├── customer.html          # Customer Ordering & History Dashboard Interface
├── index.html             # Welcome Page to Portal System Gateway
├── login.html             # Single Login Terminal and Registration Gate for All Users
├── package.json           # Dependencies Registry & Scripts
├── package-lock.json      # Complete Dependencies Lock Metrics
├── server.js              # Node.js Backend Server with Express API and Security Guards
└── style.css              # Core Layout Variables, Badges, and Theme Contexts

```

---

## 💻 Local Workspace Setup

### 1. Create Database Environment

Run the following queries on your MySQL console to setup schema & populate default users:
```sql
create database if not exists blog_db;
use blog_db;

create table if not exists users (
    id int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(255) not null,
    role enum('customer', 'staff') default 'customer',
    created_at timestamp default current_timestamp
);

create table if not exists posts (
    id int auto_increment primary key,
    title varchar(150) not null,
    content text not null,
    author_id int not null,
    created_at timestamp default current_timestamp,
    foreign key (author_id) references users(id) on delete cascade
);

create table if not exists orders (
    id int auto_increment primary key,
    customer_id int not null,
    customer_name varchar(50) not null,
    items_summary text not null,
    total_price decimal(10,2) not null,
    status enum('pending', 'preparing', 'finished') default 'pending',
    receipt_blob text,
    order_date timestamp default current_timestamp,
    foreign key (customer_id) references users(id) on delete cascade
);

insert ignore into users (id, username, password, role) values 
(1, 'jane', '156556', 'customer'),
(2, 'preety', '123456', 'staff');

```
### 2. Installation & Launch Workspace Environment

Navigate to your desktop workstation terminal located in the root folder and launch your application:

```bash
# Installation of framework libraries
npm install

# Launch the unified backend engine lifecycle
npm start

```

After successful initialization, open your web browser and navigate via:
👉 **`http://localhost:3000/login.html`**

### 🔐 Preset Default User Accounts
* **Customer Profile:** Username: `Jane` | Password: `156556`
* **Official Kitchen Staff:** Username: `Preety` | Password: `123456`


```
