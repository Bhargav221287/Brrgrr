
# 🍔 Brrgrr – Premium Burgers & Community Journal

A full-stack web ecosystem that combines a responsive, client-side custom burger builder with a database-driven community micro-blogging engine.

---

## 🌟 Core Features

### 🍔 1. Pre-Customized Menu & Assembly Station
* **Handcrafted Menu Catalogue:** Quick-access layout featuring 11 signature burgers, sides, and beverages rendered dynamically using ES6 array mappings.
* **Ingredient Customizer:** Step-by-step interactive workspace providing ingredient stacking (patties, onions, toppings) with a limit constraint capping single builds to a maximum of 3 patties.
* **Real-Time Billing Engine:** Instant checkout updates calculating individual item groupings, extra-cheese customization add-ons, CGST (9%), SGST (9%), and downloadable plain-text tax invoices.
* **Live Order Queue Polling:** Background background-polling loops that fetch order history lists every 4 seconds to push live tracking states (`Pending` → `Preparing` → `Finished`) to the interface layout.

### 📜 2. Community Journal Engine
* **Full CRUD Lifecycle Operations:** Allows authenticated users to compose articles, run keyword-targeted indexing query filters across titles or content, and view updates on a clean community timeline.
* **Clearance Isolation Guards:** Robust security layer ensuring that blog entry purge choices appear exclusively to the original post creator or to verified kitchen staff nodes.
* **Data Portability Extractions:** Administrative feature letting authenticated operators download entire text entry records into compiled, offline `.xlsx` spreadsheets seamlessly using SheetJS.

---

## 📐 Implementation Blueprint Achievements

### 🎨 Front-End Architecture
* **Arrays & Higher-Order Functions:** Extensive utilization of native ES6 methods (`.map()`, `.reduce()`, `.filter()`, `.findIndex()`) to manage state mutations and aggregate pricing totals dynamically.
* **DOM Manipulation:** High-fidelity layout updates parsing runtime modifications, cart line item grouping, and immediate workspace dark/light color mode transformations.

### ⚙️ Back-End & Database Structure
* **Object-Oriented Programming (OOP):** Solid base class abstractions managing clean encapsulation layers across internal data schemas (`DataEntity` base inheritance mapping `User` and `Post` records).
* **Stateful Sessions:** Implements persistent session tokens mapping cross-terminal clearances natively on top of isolated customer and kitchen staff workspaces.
* **Relational Database Integrity:** Implements persistent pool connections structured with explicit SQL cascading constraints (`ON DELETE CASCADE`) preventing database reference disconnects.

---

## 📂 Project Directory Structure

```text
├── models/
│   └── BlogModels.js      # OOP Entity Model Class Formats (User, Post)
├── app.js                 # Front-End UI Logic, Cart Arrays, and Polling Loops
├── customer.html          # Customer Ordering & History Dashboard View
├── index.html             # Portal System Entry Welcome Gateway
├── login.html             # Unified Access Terminal & User Registration Gate
├── package.json           # Application Dependency Registries & Spin Scripts
├── package-lock.json      # Complete Dependency Lock Metric History
├── server.js              # Node.js Express Backend API Engine & Security Guards
└── style.css              # Core Layout Variables, Badges, and Theme Context

```

---

## 💻 Local Workspace Installation

### 1. Replicate Database Environment

Execute the following commands within your local MySQL client terminal to provision the schemas and populate default user profiles:

```sql
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('customer', 'staff') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    customer_name VARCHAR(50) NOT NULL,
    items_summary TEXT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('Pending', 'Preparing', 'Finished') DEFAULT 'Pending',
    receipt_blob TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT IGNORE INTO users (id, username, password, role) VALUES 
(1, 'Jane', '156556', 'customer'),
(2, 'Preety', '123456', 'staff');

```

### 2. Install and Spin Workspace Environment

Open your desktop workstation terminal inside the root directory and fire up the application runtime:

```bash
# Install framework dependencies
npm install

# Start the unified backend engine lifecycle
npm start

```

Once running successfully, launch your browser and connect through:
👉 **`http://localhost:3000/login.html`**

### 🔐 Pre-Seeded Default Accounts

* **Customer Profile:** Username: `Jane` | Password: `156556`
* **Official Kitchen Staff:** Username: `Preety` | Password: `123456`


```
