# 📦 Inventory Management System

### A full-stack Inventory Management System built with Next.js (v15) and TypeScript, focused on strong backend logic, scalability, and real-world functionality.

#### This project emphasizes practical development over UI polish, implementing core inventory features like tracking, alerts, and analytics.

---

## Features
#### Real-Time Inventory Tracking
- Monitor product quantities and updates instantly
#### Low Stock Alerts
- Get notified when inventory drops below a defined threshold
#### Data Visualization
- Interactive charts for insights and decision-making
#### Authentication System
- Secure user authentication and session handling
#### Type-Safe Backend
- Built with strict TypeScript practices for reliability
#### Database Integration
- Efficient data handling with PostgreSQL

---

## Tech Stack

- Next.js 15	Full-stack framework
- TypeScript	Type safety & maintainability
- Prisma	ORM for database management
- Neon (PostgreSQL)	Serverless database
- Zod	Schema validation
- Recharts	Data visualization
- StackFrame	Authentication system

---

## 📁 Project Structure
/app            → Next.js app router pages
/components     → Reusable UI components
/lib            → Utility functions & configs
/prisma         → Database schema & migrations

---

## Getting Started
#### 1. Clone the repository
- git clone https://github.com/your-username/inventory-management-system.git
- cd inventory-management-system
#### 2. Install dependencies
- npm install
#### 3. Setup environment variables

#### Create a .env file and add:

- DATABASE_URL=your_database_url
- NEXTAUTH_SECRET=your_secret

#### 4. Run database migrations
- npx prisma migrate dev
#### 5. Start the development server
- npm run dev

---

#### Contributions, issues, and feature requests are welcome!

## Contact

- Feel free to connect or reach out if you’d like to collaborate
