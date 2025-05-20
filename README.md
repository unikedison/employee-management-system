# 👥 Employee Management System

A full-stack employee management application built with **ASP.NET Core Web API** (backend) and **Angular v18** (frontend). It allows users to view, add, edit, and delete employees — all using in-memory data for simplicity.

---

## 🧰 Technologies Used

### 🔧 Backend
- ASP.NET Core Web API (.NET 7)
- C#
- In-memory data (no database)
- CORS enabled for frontend access

### 🌐 Frontend
- Angular v18 (Standalone App)
- Angular Material (UI)
- RxJS
- Reactive Forms
- BehaviorSubject (shared state)
- Fully responsive layout

---

## 🚀 Setup Instructions

### ✅ 1. Clone or Download

```bash
git clone https://github.com/unikedison/employee-management-system.git
cd employee-management-system
```

---

### ✅ 2. Backend Setup (`EmployeeManagementAPI`)

#### ▶️ Prerequisites
- [.NET 7 SDK](https://dotnet.microsoft.com/download/dotnet/7.0)

#### ▶️ Run the API

```bash
cd EmployeeManagementAPI
dotnet run
```

- Runs on `http://localhost:5000` by default
- In-memory data with 5 hardcoded employees
- API Endpoints:
  - `GET    /api/employees`
  - `GET    /api/employees/{id}`
  - `POST   /api/employees`
  - `PUT    /api/employees/{id}`
  - `DELETE /api/employees/{id}`

---

### ✅ 3. Frontend Setup (`employee-management-angular`)

#### ▶️ Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- Angular CLI v18
  ```bash
  npm install -g @angular/cli
  ```

#### ▶️ Install & Run

```bash
cd employee-management-angular
npm install
ng serve
```

- App runs on: `http://localhost:4200`
- Automatically connects to backend at `http://localhost:7011`

---

## 📁 Project Structure

### 📦 Backend – `EmployeeManagementAPI`
```
EmployeeManagementAPI/
├── Controllers/
│   └── EmployeesController.cs
├── Models/
│   └── Employee.cs
├── Program.cs
└── EmployeeManagementAPI.csproj
```

---

### 📦 Frontend – `employee-management-angular`
```
employee-management-angular/
├── src/
│   └── app/
│       ├── models/
│       │   └── employee.ts
│       ├── services/
│       │   └── employee.service.ts
│       ├── components/
│       │   ├── employee-list/
│       │   ├── employee-form/
│       ├── app.config.ts
│       └── app.component.ts
├── angular.json
├── package.json
└── tsconfig.json
```

---

## ✅ Features

- View all employees in a Material table
- Add a new employee using Reactive Form
- Edit existing employee details
- Delete an employee with confirmation
- Real-time list updates using `BehaviorSubject`
- Form validation and error display
- Responsive UI with Angular Material

---

## 📌 Notes

- No database is used — all data is reset on server restart
- CORS is enabled for Angular to access the API

---

## 📬 Contact

- Mail: nik.kumar.rohit@gmail.com